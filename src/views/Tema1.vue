<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inteligencia artificial: concepto y características
    .row.align-items-center.justify-content-center.bg01.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t1/img1.png" alt="")
      .col-lg-7
        p.mb-0 La inteligencia artificial es una rama de las ciencias de la computación que estudia el diseño de sistemas capaces de realizar tareas que, hasta hace pocas décadas, requerían exclusivamente de la inteligencia humana: comprender el lenguaje, reconocer imágenes, tomar decisiones, aprender de la experiencia o jugar al ajedrez, entre muchas otras. El término fue acuñado en 1956 por John McCarthy durante la Conferencia de Dartmouth, considerada el punto de partida formal de la disciplina. Desde entonces, la inteligencia artificial ha experimentado distintos ciclos de auge y desencanto, hasta consolidarse en el siglo XXI como una de las tecnologías más transformadoras de la sociedad.
    p.mb-4 Russell y Norvig (2021), autores de uno de los textos de referencia mundial en el área, definen un sistema inteligente como aquel que percibe su entorno mediante sensores y actúa sobre dicho entorno a través de actuadores, con el fin de maximizar el logro de un objetivo. Esta definición es lo suficientemente amplia para incluir desde un termostato programable hasta un automóvil autónomo o un asistente conversacional avanzado. Los sistemas de inteligencia artificial se distinguen por las siguientes acciones, siempre dentro de los límites definidos por sus diseñadores:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4(v-for="item in caracteristicas" :key="item.titulo")
        .tarjeta-avatar.h-100
          img(:src="item.imagen" alt="")
          .tarjeta.bg02.w-100.h-100.mt-3
            .p-4
              h5.text-center {{ item.titulo }}
              p.mb-0.text-center {{ item.texto }}
    p.mb-4 Para comprender el funcionamiento de un #[em chatbot] resulta indispensable familiarizarse con algunos conceptos fundamentales:
    SlyderB.mb-4.p-5.tarjeta.bg03(:datos="datosSlyder")
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema1-icono(src="@/assets/curso/temas/t1/img11.svg" alt="")
      .col-lg-9
        p En el ámbito de los #[em chatbots], estos conceptos se integran para procesar las solicitudes de los usuarios, identificar patrones en el lenguaje y generar respuestas adecuadas.
        .tema1-destacado.p-3
          p.mb-0 La inteligencia artificial constituye el cimiento sobre el cual se construyen los #[em chatbots] modernos.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Aplicaciones de la inteligencia artificial
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img12.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La inteligencia artificial está presente en múltiples sectores y actividades cotidianas. Su adopción ha permitido optimizar procesos, automatizar tareas repetitivas y analizar grandes volúmenes de datos para identificar patrones y apoyar la toma de decisiones. La integración de esta tecnología en las organizaciones se ha acelerado gracias a la disponibilidad de datos, al incremento de la capacidad de cómputo y al desarrollo de plataformas que facilitan su utilización en diferentes contextos.
    p.mb-4 A continuación, se presentan algunas de las aplicaciones más relevantes de la inteligencia artificial, organizadas por sector productivo. Esta clasificación permite reconocer la amplitud del campo y ubicar los #[em chatbots] como una de las diferentes aplicaciones posibles de esta tecnología:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Salud") Diagnóstico médico asistido. <br><br>Ejemplo: detección temprana de cáncer en imágenes radiológicas y análisis de patrones genéticos.
          p.mb-0(numero="2" titulo="Banca") Detección de fraude. <br><br>Ejemplo: análisis de transacciones para identificar comportamientos sospechosos en tiempo real.
          p.mb-0(numero="3" titulo="Comercio") Sistemas de recomendación. <br><br>Ejemplo: sugerencias de productos personalizadas en plataformas de comercio electrónico.
          p.mb-0(numero="4" titulo="Transporte") Vehículos autónomos. <br><br>Ejemplo: automóviles con conducción asistida y optimización de rutas logísticas.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t1/img13.png" alt="")
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t1/img14.png" alt="")
      .col-lg-7
        LineaTiempoD.color-primario
          p.mb-0(numero="5" titulo="Servicio al cliente") #[em Chatbots] y asistentes virtuales. <br><br>Ejemplo: #[em bots] para atención automatizada en redes sociales y aplicaciones de mensajería.
          p.mb-0(numero="6" titulo="Educación") Plataformas adaptativas. <br><br>Ejemplo: sistemas que ajustan el contenido y el ritmo al perfil de cada estudiante.
          p.mb-0(numero="7" titulo="Industria") Mantenimiento predictivo. <br><br>Ejemplo: detección anticipada de fallas en maquinaria mediante análisis de sensores.
          p.mb-0(numero="8" titulo="Agricultura") Agricultura de precisión. <br><br>Ejemplo: monitoreo de cultivos con drones e imágenes satelitales para optimizar la productividad.
    .cajon.color-primario.p-4.mb-4
      p.mb-0 La inteligencia artificial puede aplicarse a necesidades muy diferentes. Esto se debe a que no constituye una única tecnología, sino un conjunto de técnicas y métodos que pueden combinarse según el problema que se desea resolver. Algunas aplicaciones se apoyan principalmente en el reconocimiento de patrones, otras en el procesamiento del lenguaje, la visión computacional, la predicción o la optimización.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p En Colombia, la adopción de inteligencia artificial se ha extendido en sectores como el financiero, el comercio, la salud y los servicios públicos. Las organizaciones utilizan estas tecnologías para analizar información, automatizar procesos, detectar comportamientos inusuales y mejorar la atención a los usuarios. En este contexto, las entidades también deben considerar aspectos relacionados con el uso responsable de los datos, la transparencia, la equidad y la protección de la información personal.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 A pesar de las posibilidades que ofrece esta tecnología, la inteligencia artificial no resuelve por sí misma todos los problemas. Su funcionamiento depende de la calidad de los datos, la infraestructura disponible, la selección adecuada de los modelos y la capacidad de los equipos responsables de implementarla. Además, los sistemas pueden reproducir sesgos presentes en los datos utilizados para su entrenamiento o presentar resultados inadecuados cuando enfrentan situaciones diferentes de aquellas con las que fueron desarrollados. Por esta razón, las aplicaciones de mayor impacto requieren procesos de validación, seguimiento y supervisión humana.
        p.mb-0 En el caso de los #[em chatbots], estas consideraciones adquieren especial importancia porque la inteligencia artificial interactúa directamente con las personas. Una respuesta incorrecta, desactualizada o poco clara puede afectar la experiencia del usuario y, dependiendo del contexto, generar consecuencias más relevantes. Por ello, el diseño de estas soluciones debe combinar capacidades tecnológicas con criterios de calidad, accesibilidad, seguridad y responsabilidad.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t1/img15.png" alt="")
    p.mb-4 La inteligencia artificial ha evolucionado mediante diferentes etapas y avances que han ampliado progresivamente sus capacidades. El siguiente recorrido presenta algunos de los principales hitos de esta evolución y permite comprender cómo se pasó de los primeros experimentos de conversación entre personas y máquinas a los sistemas actuales capaces de procesar diferentes tipos de información:
    LineaTiempoE.color-acento-contenido.mb-0
      .row.align-items-center(v-for="hito in hitos" :key="hito.anio" :titulo="hito.anio")
        .col-md-2.mb-4.mb-md-0
          img(:src="hito.imagen" alt="")
        .col-md-10
          h5 {{ hito.titulo }}
          p.mb-0(v-html="hito.texto")
    </template>

<script>
import img2 from '@/assets/curso/temas/t1/img2.svg'
import img3 from '@/assets/curso/temas/t1/img3.svg'
import img4 from '@/assets/curso/temas/t1/img4.svg'
import img5 from '@/assets/curso/temas/t1/img5.svg'
import img6 from '@/assets/curso/temas/t1/img6.svg'
import img7 from '@/assets/curso/temas/t1/img7.png'
import img8 from '@/assets/curso/temas/t1/img8.png'
import img9 from '@/assets/curso/temas/t1/img9.png'
import img10 from '@/assets/curso/temas/t1/img10.png'
import img16 from '@/assets/curso/temas/t1/img16.svg'
import img17 from '@/assets/curso/temas/t1/img17.svg'
import img18 from '@/assets/curso/temas/t1/img18.svg'
import img19 from '@/assets/curso/temas/t1/img19.svg'
import img20 from '@/assets/curso/temas/t1/img20.svg'
import img21 from '@/assets/curso/temas/t1/img21.svg'
import img22 from '@/assets/curso/temas/t1/img22.svg'
import img23 from '@/assets/curso/temas/t1/img23.svg'

export default {
  name: 'Tema1',
  data: () => ({
    caracteristicas: [
      {
        titulo: 'Capacidad de aprendizaje',
        texto:
          'Permite que un sistema mejore su desempeño con la experiencia y los datos disponibles.',
        imagen: img2,
      },
      {
        titulo: 'Adaptabilidad',
        texto:
          'Permite ajustar su comportamiento ante situaciones nuevas o cambios en el entorno.',
        imagen: img3,
      },
      {
        titulo: 'Razonamiento',
        texto:
          'Posibilita aplicar lógica para inferir conclusiones a partir de información parcial.',
        imagen: img4,
      },
      {
        titulo: 'Percepción',
        texto:
          'Se refiere a la habilidad de interpretar datos provenientes de sensores, texto, voz o imágenes.',
        imagen: img5,
      },
      {
        titulo: 'Autonomía',
        texto:
          'Es la posibilidad de ejecutar tareas sin intervención humana directa, dentro de límites éticos y técnicos previamente definidos por los diseñadores del sistema.',
        imagen: img6,
      },
    ],
    datosSlyder: [
      {
        titulo: 'Algoritmo',
        texto:
          'Es una secuencia ordenada y finita de instrucciones que permite resolver un problema, ejecutar un proceso o realizar una tarea específica de manera estructurada, lógica y eficiente. Cada instrucción sigue un orden determinado para alcanzar un resultado esperado.',
        imagen: '@/assets/curso/temas/t1/img7.png',
      },
      {
        titulo: '<em>Machine learning</em> o aprendizaje automático',
        texto:
          'Es una subdisciplina de la inteligencia artificial que permite a las máquinas aprender patrones a partir de datos, identificar relaciones y generar resultados sin ser programadas explícitamente para cada caso.',
        imagen: '@/assets/curso/temas/t1/img8.png',
      },
      {
        titulo: '<em>Deep learning</em> o aprendizaje profundo',
        texto:
          'Es una técnica de aprendizaje automático basada en redes neuronales artificiales con múltiples capas, especialmente útil para el reconocimiento de voz, imágenes y procesamiento de texto en diferentes aplicaciones tecnológicas.',
        imagen: '@/assets/curso/temas/t1/img9.png',
      },
      {
        titulo: 'Datos de entrenamiento',
        texto:
          'Constituyen el conjunto de ejemplos a partir de los cuales el sistema aprende a identificar patrones, establecer relaciones y generalizar sus resultados, de manera que pueda responder adecuadamente ante nuevos datos o situaciones.',
        imagen: '@/assets/curso/temas/t1/img10.png',
      },
    ],
    hitos: [
      {
        anio: '1950',
        titulo: 'Test de Turing',
        texto:
          'Alan Turing propone una prueba para determinar si una máquina puede exhibir comportamiento inteligente indistinguible del humano.',
        imagen: img16,
      },
      {
        anio: '1956',
        titulo: 'Conferencia de Dartmouth',
        texto:
          'Se acuña formalmente el término inteligencia artificial; nace la disciplina como campo de estudio.',
        imagen: img17,
      },
      {
        anio: '1966',
        titulo: 'ELIZA',
        texto:
          'Primer <em>chatbot</em>: demuestra que una máquina puede sostener una conversación simulada con un humano.',
        imagen: img18,
      },
      {
        anio: '1997',
        titulo: 'Deep Blue derrota a Kasparov',
        texto:
          'Una máquina vence al campeón mundial de ajedrez, hito en juegos estratégicos.',
        imagen: img19,
      },
      {
        anio: '2011',
        titulo: 'IBM Watson en Jeopardy!',
        texto:
          'Sistema de inteligencia artificial vence a campeones del concurso, demostrando comprensión de lenguaje complejo.',
        imagen: img20,
      },
      {
        anio: '2016',
        titulo: 'AlphaGo',
        texto:
          'Vence al campeón mundial de Go, juego considerado intratable computacionalmente.',
        imagen: img21,
      },
      {
        anio: '2022',
        titulo: 'ChatGPT',
        texto:
          'Popularización de los grandes modelos de lenguaje y la inteligencia artificial generativa.',
        imagen: img22,
      },
      {
        anio: '2024-2026',
        titulo: 'Inteligencia artificial multimodal',
        texto:
          'Modelos que combinan texto, voz, imágenes y video en una misma conversación.',
        imagen: img23,
      },
    ],
  }),
}
</script>
