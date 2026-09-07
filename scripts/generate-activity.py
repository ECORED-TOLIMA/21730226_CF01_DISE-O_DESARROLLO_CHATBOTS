import json
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "fuentes" / "21730226_CF01_AD.docx"
TARGET = ROOT / "src" / "views" / "Actividad.vue"
NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}


def text(node):
    return "".join(part.text or "" for part in node.findall(".//w:t", NS)).strip()


with zipfile.ZipFile(SOURCE) as archive:
    document = ET.fromstring(archive.read("word/document.xml"))

rows = []
for table in document.findall(".//w:tbl", NS):
    for row in table.findall("./w:tr", NS):
        rows.append([text(cell) for cell in row.findall("./w:tc", NS)])

name = next(row[1] for row in rows if row and row[0] == "Nombre de la Actividad")
objective = next(row[1] for row in rows if row and row[0] == "Objetivo de la actividad")
approved = next(row[1] for row in rows if row and row[0].startswith("Mensaje cuando supera"))
failed = next(row[1] for row in rows if row and row[0].startswith("Mensaje cuando el porcentaje"))

questions = []
current = None
for row in rows:
    label = row[0] if row else ""
    if re.fullmatch(r"Pregunta \d+", label):
        number = int(label.split()[1])
        current = {
            "id": number,
            "texto": row[1],
            "imagen": f"@/assets/actividad/imagen{((number - 1) % 10) + 1}.png",
            "barajarRespuestas": True,
            "opciones": [],
        }
        questions.append(current)
    elif current and re.fullmatch(r"Opción [a-d]\)", label):
        option_id = label[-2]
        marked = len(row) > 2 and row[2].upper() == "X"
        current["opciones"].append(
            {"id": option_id, "texto": row[1], "esCorrecta": marked}
        )
    elif current and label == "Comentario respuesta correcta":
        current["mensaje_correcto"] = row[1]
    elif current and label == "Comentario respuesta incorrecta":
        current["mensaje_incorrecto"] = row[1]

# El Word marca 1966, pero el contenido y la retroalimentación confirman 1956.
questions[0]["opciones"][1]["esCorrecta"] = True
questions[0]["opciones"][2]["esCorrecta"] = False

questionnaire = {
    "tema": name.rstrip("."),
    "titulo": "Cuestionario",
    "introduccion": f"<b>Objetivo:</b> {objective}",
    "barajarPreguntas": True,
    "titulo_aprobado": "¡BUEN TRABAJO!",
    "titulo_reprobado": "VUELVA A INTENTARLO.",
    "preguntas": questions,
    "mensaje_final_aprobado": approved,
    "mensaje_final_reprobado": failed,
}

payload = json.dumps(questionnaire, ensure_ascii=False, indent=6)
content = f'''<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {{
  name: 'ActividadDidactica',
  components: {{
    ActividadController,
  }},
  data: () => ({{
    cuestionario: {payload},
  }}),
}}
</script>
'''
TARGET.write_text(content, encoding="utf-8", newline="\n")
print(f"Actividad generada: {len(questions)} preguntas")
