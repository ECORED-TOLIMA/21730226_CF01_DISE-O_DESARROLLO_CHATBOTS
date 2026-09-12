<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procesamiento del lenguaje natural
    figure.mb-4
      img(src="@/assets/curso/temas/t2/img1.png" alt="")
    p.mb-0 El procesamiento del lenguaje natural es la tecnología que permite a los #[em chatbots] comprender y generar lenguaje humano. Sin esta disciplina, los #[em chatbots] se limitarían a responder con base en menús predefinidos o palabras clave exactas. A continuación, se aborda, en primer lugar, el concepto y los principios que sustentan esta tecnología; en segundo lugar, las aplicaciones más relevantes en distintos productos y servicios digitales.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Concepto y principios
    p.mb-4 El procesamiento del lenguaje natural en inglés, #[em natural language processing], es la rama de la inteligencia artificial que estudia la interacción entre las computadoras y el lenguaje humano. Su objetivo es lograr que las máquinas comprendan, interpreten y generen lenguaje en forma escrita u oral, de manera similar a como lo haría una persona. Combina aportes de la lingüística, que proporciona las reglas y estructuras del lenguaje; la informática, que provee los algoritmos para procesar texto; y la estadística, que permite identificar patrones en grandes volúmenes de datos lingüísticos.
    .row.aling-items-center.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img2.png" alt="")
      .col-lg-7.bg01.p-4
        p.mb-0 En las últimas décadas, los avances del aprendizaje automático y, particularmente, del aprendizaje profundo, han impulsado el desarrollo de modelos de lenguaje cada vez más sofisticados. Estos modelos sustentan la operación de los #[em chatbots] conversacionales modernos, que ya no dependen exclusivamente de guiones rígidos y son capaces de comprender variaciones del lenguaje natural del usuario. La aparición de los grandes modelos de lenguaje, entrenados con miles de millones de palabras, ha llevado las capacidades de comprensión y generación a niveles cercanos a los humanos en muchas tareas específicas.
    .row.align-items-center.mb-4
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema1-icono(src="@/assets/curso/temas/t2/img3.svg" alt="")
      .col
        p.mb-0 El procesamiento del lenguaje natural se apoya en varios principios que permiten transformar el lenguaje humano en información procesable por las máquinas. Cada principio cumple una función específica en el ciclo de análisis del texto y, en conjunto, proporcionan a la máquina la capacidad de entender lo que un usuario expresa en lenguaje cotidiano. Los principios más importantes se presentan en la siguiente imagen:
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 1.
      span Principios del procesamiento del lenguaje natural
    .row.justify-content-center.align-items-center.mb-4
      .col-12.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t2/img4.svg" alt="Figura 1 que relaciona los principales principios del procesamiento del lenguaje natural, entre ellos la tokenización, lematización, análisis morfológico, sintáctico y semántico, reconocimiento de entidades, análisis de intención y análisis de sentimiento; presentando ejemplos de aplicación en cada uno.")
      .col-12.d-block.d-lg-none
        figure
          img(src="@/assets/curso/temas/t2/img4_1.svg" alt="Figura 1 que relaciona los principales principios del procesamiento del lenguaje natural, entre ellos la tokenización, lematización, análisis morfológico, sintáctico y semántico, reconocimiento de entidades, análisis de intención y análisis de sentimiento; presentando ejemplos de aplicación en cada uno.")
    p.mb-0 Cada uno de estos principios representa un eslabón en la cadena de comprensión del lenguaje. Por ejemplo, cuando un usuario escribe a un #[em chatbot] bancario el mensaje «quiero saber el saldo de mi cuenta de ahorros», el sistema primero tokeniza el texto en palabras individuales; luego identifica las categorías gramaticales y la estructura de la oración; reconoce «cuenta de ahorros» como una entidad de tipo producto financiero; e infiere que la intención del usuario corresponde a una consulta de saldo. Solo entonces el #[em chatbot] puede ejecutar la acción correspondiente y entregar la respuesta adecuada.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Aplicaciones del procesamiento del lenguaje natural
    .row.align-items-center.mb-4
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema1-icono(src="@/assets/curso/temas/t2/img5.svg" alt="")
      .col.bg04.p-2
        p.mb-0 El procesamiento del lenguaje natural se aplica en múltiples productos y servicios que las personas utilizan a diario, muchas veces sin ser conscientes de la sofisticación tecnológica que hay detrás. La presencia masiva de esta tecnología en el día a día evidencia su madurez y su relevancia para la atención al cliente.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p Entre las aplicaciones más conocidas se encuentran los asistentes virtuales como Siri, Alexa o Google Assistant, que comprenden órdenes verbales en lenguaje natural. Los traductores automáticos como Google Translate o DeepL utilizan modelos avanzados para convertir texto entre idiomas con calidad cada vez más cercana a la traducción humana. Los correctores ortográficos y gramaticales analizan el texto a medida que el usuario escribe y proponen correcciones contextuales. El análisis de sentimientos en redes sociales y reseñas permite a las empresas conocer la percepción del público sobre sus productos y servicios.
        .cajon.color-secundario.p-4
          p.mb-0 Otras aplicaciones relevantes incluyen el resumen automático de textos largos, los motores de búsqueda que interpretan consultas en lenguaje natural, los sistemas de transcripción de voz a texto, los lectores de pantalla para personas con discapacidad visual y los #[em chatbots] conversacionales en sitios #[em web] y aplicaciones de mensajería. Esta variedad de aplicaciones demuestra la importancia del procesamiento del lenguaje natural como motor de la inteligencia conversacional moderna y como tecnología transversal a múltiples industrias.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t2/img6.png" alt="")
    p.mb-4 Un aspecto particularmente relevante para los #[em chatbots] es el manejo de la ambigüedad del lenguaje. Las personas usan modismos, sarcasmo, abreviaturas y errores ortográficos; cambian de tema sin avisar; expresan emociones; y dan por sentado contextos que la máquina no necesariamente conoce. El procesamiento del lenguaje natural moderno aborda estos desafíos mediante modelos entrenados en corpus masivos de texto que incluyen ejemplos reales de cómo se comunican las personas en diferentes contextos.
    p.mb-4 En el caso del español, el procesamiento del lenguaje natural enfrenta retos adicionales por la riqueza morfológica del idioma: conjugaciones verbales, géneros y números, la diversidad de variantes regionales y la presencia de modismos propios de cada país hispanohablante. Por esta razón, los #[em chatbots] dirigidos al público colombiano deben entrenarse con datos que reflejen el habla local, que pueden aparecer en conversaciones reales con clientes, incluyendo expresiones coloquiales como:
    .row.mb-4
      .col-md-6.col-lg-3.mb-4.mb-lg-0(v-for="expresion in expresiones" :key="expresion.texto")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(:src="expresion.imagen" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center {{ expresion.texto }}
    .cajon.color-primario.p-4.mb-4
      p.mb-0 La calidad del procesamiento del lenguaje natural en un #[em chatbot] se mide mediante varios indicadores. La tasa de comprensión refleja el porcentaje de mensajes de los usuarios que el #[em chatbot] interpreta correctamente. La precisión indica qué porcentaje de las intenciones detectadas corresponden efectivamente a lo que el usuario quería expresar. La cobertura mide qué porcentaje de los temas relevantes están contemplados en el #[em chatbot]. Monitorear estos indicadores permite identificar áreas de mejora y orientar el reentrenamiento del modelo.
    p.mb-4 En la siguiente tabla se presentan ejemplos prácticos del uso del procesamiento del lenguaje natural en aplicaciones cotidianas. Estos casos ilustran cómo la tecnología se aplica en escenarios reales y ayuda al aprendiz a identificar oportunidades análogas en su propio entorno productivo:
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 1.
      span Ejemplos prácticos del procesamiento del lenguaje natural
    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th Caso
            th Descripción
            th Tecnologías involucradas
        tbody
          tr(v-for="fila in tabla" :key="fila.caso")
            td {{ fila.caso }}
            td {{ fila.descripcion }}
            td {{ fila.tecnologias }}
    p.mb-4 En los #[em chatbots], el procesamiento del lenguaje natural permite interpretar diferentes formas de expresar una misma necesidad, identificar información relevante, reconocer intenciones y mantener el contexto de la conversación. Estas capacidades facilitan interacciones más naturales y reducen la necesidad de que el usuario siga comandos rígidos o utilice palabras específicas.
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-5.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img11.png" alt="")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Vale la pena destacar que el procesamiento del lenguaje natural también plantea consideraciones éticas importantes. Los modelos pueden reproducir sesgos presentes en los datos de entrenamiento, generar respuestas culturalmente inapropiadas o usarse para fines deshonestos como la suplantación de identidad. Las organizaciones responsables establecen lineamientos claros sobre el uso ético de esta tecnología y monitorean continuamente sus #[em chatbots] para detectar y corregir comportamientos no deseados. Esta vigilancia ética es tan importante como la calidad técnica del sistema.
        p.mb-0 El procesamiento del lenguaje natural puede combinarse con otras tecnologías para ampliar las capacidades de los #[em chatbots]. Su integración con reconocimiento de voz permite desarrollar asistentes conversacionales orales; con visión por computadora, interpretar imágenes; y con inteligencia artificial generativa, producir respuestas y contenidos de manera dinámica. Esta convergencia amplía las posibilidades de interacción y automatización en diferentes contextos.
</template>

<script>
import img7 from '@/assets/curso/temas/t2/img7.svg'
import img8 from '@/assets/curso/temas/t2/img8.svg'
import img9 from '@/assets/curso/temas/t2/img9.svg'
import img10 from '@/assets/curso/temas/t2/img10.svg'

export default {
  name: 'Tema2',
  data: () => ({
    expresiones: [
      { texto: 'De una', imagen: img7 },
      { texto: 'Chévere', imagen: img8 },
      { texto: 'Parce', imagen: img9 },
      { texto: 'Paila', imagen: img10 },
    ],
    tabla: [
      {
        caso: 'Búsqueda inteligente.',
        descripcion:
          'Un usuario escribe «hoteles con piscina cerca de Cartagena» y el sistema entiende la intención completa, no solo las palabras.',
        tecnologias:
          'Reconocimiento de entidades, análisis de intenciones, búsqueda semántica.',
      },
      {
        caso: 'Análisis de reseñas.',
        descripcion:
          'Una empresa procesa miles de comentarios de clientes para identificar tendencias y problemas recurrentes.',
        tecnologias:
          'Análisis de sentimiento, extracción de temas, clasificación automática.',
      },
      {
        caso: 'Asistente de redacción.',
        descripcion:
          'Un editor de texto sugiere correcciones gramaticales, mejora la claridad y propone sinónimos contextuales.',
        tecnologias:
          'Análisis sintáctico, modelos de lenguaje, comprensión contextual.',
      },
      {
        caso: 'Traducción simultánea.',
        descripcion:
          'Una plataforma traduce conversaciones en tiempo real entre dos personas que hablan idiomas distintos.',
        tecnologias:
          'Modelos de traducción neuronal, reconocimiento de voz, síntesis de voz.',
      },
      {
        caso: 'Resumen de documentos.',
        descripcion:
          'Un sistema condensa un informe extenso en un párrafo manteniendo las ideas principales.',
        tecnologias:
          'Modelos generativos, extracción de información clave, comprensión semántica.',
      },
    ],
  }),
}
</script>
