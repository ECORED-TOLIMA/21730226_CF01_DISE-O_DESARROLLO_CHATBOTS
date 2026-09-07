<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comprendiendo el desarrollo de <em>chatbots</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los fundamentos necesarios para el desarrollo de <em>chatbots</em>, mediante la identificación y aplicación de elementos clave para su diseño y funcionamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿En qué año se acuñó formalmente el término inteligencia artificial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1950.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1956.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '1966.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1997.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El término inteligencia artificial fue acuñado en 1956 por John McCarthy durante la Conferencia de Dartmouth, considerada el punto de partida formal de la disciplina.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Según Russell y Norvig, ¿cómo se define un sistema inteligente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un programa informático que ejecuta instrucciones previamente establecidas para realizar tareas específicas de manera automática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un sistema que percibe su entorno mediante sensores y actúa sobre él mediante actuadores para alcanzar un objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un sistema que requiere supervisión humana permanente para tomar decisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un computador con alta capacidad de procesamiento que utiliza grandes cantidades de datos para realizar operaciones numéricas y ejecutar programas especializados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Un sistema inteligente percibe su entorno mediante sensores y actúa sobre él mediante actuadores para alcanzar un objetivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes es una característica que distingue a los sistemas de inteligencia artificial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Capacidad de aprendizaje a partir de datos y experiencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Funcionamiento exclusivo en computadoras de gran escala.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Necesidad de instrucciones explícitas para cada caso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imposibilidad de adaptarse a situaciones nuevas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Los sistemas de inteligencia artificial se distinguen por la capacidad de aprendizaje, la adaptabilidad, el razonamiento, la percepción y la autonomía, siempre dentro de los límites definidos por sus diseñadores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué es el procesamiento del lenguaje natural?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una técnica de programación que solo aplica al idioma inglés.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La rama de la inteligencia artificial que estudia la interacción entre las computadoras y el lenguaje humano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un método para acelerar la velocidad de los procesadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un protocolo de comunicación entre servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El procesamiento del lenguaje natural es la rama de la inteligencia artificial que estudia la interacción entre las computadoras y el lenguaje humano, con el objetivo de lograr que las máquinas comprendan, interpreten y generen lenguaje en forma escrita u oral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes principios del procesamiento del lenguaje natural consiste en dividir el texto en unidades mínimas de análisis?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lematización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tokenización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Análisis sintáctico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocimiento de entidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La tokenización es el principio que consiste en la división del texto en unidades mínimas de análisis (palabras, frases o caracteres).',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué disciplinas combina el procesamiento del lenguaje natural?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Matemáticas, química y biología.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lingüística, informática y estadística.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sociología, psicología y antropología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Física, electrónica e ingeniería mecánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El procesamiento del lenguaje natural combina aportes de la lingüística, que proporciona las reglas y estructuras del lenguaje; la informática, que provee los algoritmos para procesar texto; y la estadística, que permite identificar patrones en grandes volúmenes de datos lingüísticos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál fue el primer <em>chatbot</em> reconocido y en qué año se desarrolló?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ALICE, en 1995.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'ELIZA, desarrollado en 1966 por Joseph Weizenbaum en el MIT.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'PARRY, en 1972.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'SmarterChild, en 2001.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El primer <em>chatbot</em> reconocido fue ELIZA, desarrollado en 1966 por Joseph Weizenbaum en el MIT. ELIZA simulaba un terapeuta y demostró por primera vez la viabilidad de una conversación entre humano y máquina.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuántas etapas componen el ciclo general de funcionamiento de un <em>chatbot</em>?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos etapas: entrada y salida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tres etapas: entrada, procesamiento y salida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuatro etapas: recepción del mensaje, comprensión, procesamiento y respuesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cinco etapas: recepción del mensaje, comprensión, procesamiento y respuesta, entrenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El funcionamiento de un <em>chatbot</em> sigue un ciclo de cuatro etapas en las que el sistema recibe la consulta, identifica la intención, consulta la base de conocimiento y entrega la respuesta correspondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de <em>chatbot</em> sigue un guion predefinido con árboles de decisión y palabras clave que activan respuestas específicas?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Chatbot</em> generativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Chatbot</em> conversacional con inteligencia artificial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Chatbot</em> basado en reglas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Chatbot</em> híbrido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El <em>chatbot</em> basado en reglas sigue un guion predefinido con árboles de decisión, donde el usuario elige opciones de un menú o palabras clave activan respuestas específicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes es una ventaja principal de los <em>chatbots</em> para las organizaciones?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazo total del talento humano de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disponibilidad permanente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación de la necesidad de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantía de cero errores en cualquier escenario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Una de las ventajas principales de los <em>chatbots</em> es la disponibilidad permanente, ya que atienden consultas en cualquier momento sin depender de horarios laborales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'En el sector banca y finanzas, ¿cuál es una aplicación común de los <em>chatbots</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazo de los gerentes bancarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Consulta de saldo, transferencias, bloqueo de tarjetas y asesoría sobre productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustitución del sistema central bancario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cálculo automático de impuestos del país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! En el sector banca y finanzas, los <em>chatbots</em> se aplican para consulta de saldo, transferencias, bloqueo de tarjetas y asesoría sobre productos, brindando disponibilidad permanente y mayor seguridad transaccional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de plataforma de <em>chatbots</em> permite construir soluciones mediante interfaces gráficas de arrastrar y soltar, sin escribir código?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plataforma de código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Plataforma <em>low-code</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plataforma <em>no-code</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Plataforma híbrida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Las plataformas <em>no-code</em> permiten construir <em>chatbots</em> mediante interfaces gráficas de arrastrar y soltar, sin escribir una sola línea de código. Son ideales para usuarios sin formación técnica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de las siguientes plataformas es de código abierto y está basada en Python para construir <em>chatbots</em> conversacionales con control total del modelo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Landbot.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ManyChat.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rasa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tidio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Rasa es una plataforma de código y de código abierto, desarrollada como marco de trabajo en Python para <em>chatbots</em> conversacionales que ofrece control total del modelo conversacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Para una pequeña empresa que desea construir un <em>chatbot</em> simple de preguntas frecuentes en su sitio <em>web</em>, ¿qué tipo de plataforma resulta más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una plataforma basada en código que requiera programación avanzada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una plataforma <em>no-code</em> como Tidio o Landbot.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un sistema empresarial costoso con integraciones complejas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un servidor propio con infraestructura dedicada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Para una pequeña empresa con preguntas frecuentes en su sitio <em>web</em>, las plataformas <em>no-code</em> como Tidio o Landbot resultan más adecuadas por su modalidad sin código, sus planes gratuitos disponibles y su instalación rápida.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué es un <em>framework</em> de diseño conversacional?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un programa para compilar el código del <em>chatbot</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de principios, metodologías y componentes técnicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un sistema operativo especializado para ejecutar <em>chatbots</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un lenguaje de programación específico para <em>chatbots</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Un <em>framework</em> de diseño conversacional es un conjunto de principios, metodologías y componentes técnicos que orientan la creación de la experiencia conversacional de un <em>chatbot</em>, definiendo cómo debe ser la conversación desde el punto de vista del usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los siguientes es un método utilizado en el diseño centrado en el usuario para <em>chatbots</em>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagrama de Gantt.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mapas de conversación, diálogos de muestra, persona del bot y casos de uso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pruebas unitarias de software.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Análisis financiero del retorno de inversión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El diseño centrado en el usuario emplea métodos como mapas de conversación, diálogos de muestra, persona del bot, casos de uso y flujos felices y de excepción, los cuales orientan la creación de la experiencia conversacional desde la perspectiva del usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuáles son los tres elementos fundamentales en los que se estructuran los datos conversacionales de un <em>chatbot</em>?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Variables, funciones y operadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tablas, gráficos e informes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Intención, entidad y frase de entrenamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Saludo, despedida y respuesta de error.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Los datos conversacionales se estructuran en tres elementos fundamentales: la intención (lo que el usuario quiere lograr), la entidad (dato concreto que el <em>chatbot</em> debe extraer) y la frase de entrenamiento (ejemplo de cómo el usuario podría expresar la intención).',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica deben tener las frases de entrenamiento de una intención?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser idénticas entre sí.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contener únicamente palabras clave.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Representar diferentes formas de expresar una misma necesidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Corresponder siempre a una sola estructura de oración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Una buena práctica es que debe ser variada y representar diferentes formas de expresar una misma necesidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'En el diseño conversacional de un <em>chatbot</em>, ¿qué se entiende por "voz" del <em>chatbot</em>?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sonido grabado que reproduce el <em>chatbot</em> al usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto estable de características de cómo se expresa el <em>chatbot</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La velocidad con que el <em>chatbot</em> envía mensajes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El idioma en que el <em>chatbot</em> está programado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La voz del <em>chatbot</em> constituye el conjunto estable de características de cómo se expresa el <em>chatbot</em> y no cambia entre conversaciones. Refleja los valores de la organización y debe ser coherente con la identidad de marca.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué diferencia existe entre la voz y el tono de un <em>chatbot</em>?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existe diferencia, son sinónimos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La voz es escrita y el tono es hablado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La voz es estable y el tono varía según el contexto del usuario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La voz aplica solo a <em>chatbots</em> de texto y el tono solo a <em>chatbots</em> de voz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La voz constituye el conjunto estable de características de cómo se expresa el <em>chatbot</em> y no cambia entre conversaciones; el tono, en cambio, es la variación de la voz según el contexto o la emoción del usuario, como ser empático ante una falla o entusiasta al confirmar una compra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
