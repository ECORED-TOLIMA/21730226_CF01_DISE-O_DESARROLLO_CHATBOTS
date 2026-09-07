<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Alistamiento de datos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t7/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los #[em chatbots] se alimentan de datos: información sobre productos, servicios, procedimientos, preguntas frecuentes y conversaciones previas. Sin un correcto alistamiento de estos datos, incluso la mejor plataforma producirá un #[em chatbot] deficiente. Esta temática aborda, en primer lugar, cómo identificar las fuentes de información relevantes para el #[em chatbot]; en segundo lugar, cómo estructurar los datos conversacionales para que la plataforma los aproveche.

    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Identificación de fuentes de información
    p.mb-4 Antes de construir un #[em chatbot] es necesario identificar la información que requerirá para responder a los usuarios. Las fuentes típicas incluyen las bases de datos de productos, los catálogos de servicios, los manuales de procedimientos, las preguntas frecuentes ya documentadas, las transcripciones de #[em chats] con agentes humanos, los correos electrónicos del área de servicio al cliente y los guiones telefónicos del centro de llamadas.
    p.mb-4 Cada fuente aporta información valiosa, pero también presenta limitaciones. Por ejemplo:
    TabsC.color-acento-botones.bg02.mb-4
      .py-3.py-md-4(titulo="Bases de datos")
        .p-3
          .row.align-items-center.justify-content-center
            .col-lg-6.col-8.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/t7/img2.png" alt="")
            .col-lg-6
              h5 Bases de datos
              p.mb-0 Suelen contener información estructurada y actualizada sobre productos, servicios, clientes o procesos. Su principal ventaja es que permiten consultar datos precisos; sin embargo, requieren integración técnica para que el #[em chatbot] pueda acceder a ellos en tiempo real y ofrecer información vigente.
      .py-3.py-md-4(titulo="Manuales de procedimientos")
        .p-3
          .row.align-items-center.justify-content-center
            .col-lg-6.col-8.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/t7/img3.png" alt="")
            .col-lg-6
              h5 Manuales de procedimientos
              p.mb-0 Proporcionan información detallada sobre procesos, políticas, instrucciones y formas de atención. Aunque constituyen una fuente importante de conocimiento institucional, pueden estar redactados con lenguaje técnico o especializado que debe adaptarse para facilitar su comprensión por parte de los usuarios.
      .py-3.py-md-4(titulo="Transcripciones de conversaciones")
        .p-3
          .row.align-items-center.justify-content-center
            .col-lg-6.col-8.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/t7/img4.png" alt="")
            .col-lg-6
              h5 Transcripciones de conversaciones
              p.mb-0 Permiten analizar interacciones reales entre usuarios y agentes humanos, identificar preguntas frecuentes y reconocer diferentes formas de expresar una misma necesidad. Antes de incorporarlas al entrenamiento, deben revisarse y anonimizarse para proteger los datos personales y la privacidad de los usuarios.
      .py-3.py-md-4(titulo="Correos electrónicos y guiones telefónicos")
        .p-3
          .row.align-items-center.justify-content-center
            .col-lg-6.col-8.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/t7/img5.png" alt="")
            .col-lg-6
              h5 Correos electrónicos y guiones telefónicos
              p.mb-0 Aportan ejemplos concretos de situaciones de atención, solicitudes, consultas y respuestas utilizadas por la organización. Estas fuentes ayudan a identificar necesidades recurrentes y formas habituales de comunicación, aunque deben revisarse para eliminar información desactualizada, redundante o que no resulte pertinente para el #[em chatbot].
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p El proceso de alistamiento de datos consiste en recopilar, depurar, organizar y transformar esta información en un formato que pueda ser utilizado por la plataforma seleccionada. Una buena práctica consiste en priorizar inicialmente los temas que concentran la mayor cantidad de consultas de los usuarios, de manera que el #[em chatbot] pueda resolver desde sus primeras versiones las necesidades más frecuentes. Los temas menos recurrentes pueden incorporarse progresivamente.
        p.mb-0 En proyectos profesionales, el alistamiento de datos puede representar una parte importante del tiempo total de desarrollo. Esta inversión resulta necesaria porque la calidad de la información influye directamente en el desempeño del #[em chatbot]. Por ello, además de recopilarla, es necesario establecer criterios para determinar qué datos son confiables, cuáles deben actualizarse y cuáles pueden descartarse por estar obsoletos. De esta manera, el alistamiento permite construir una base de información coherente, pertinente y útil para las etapas posteriores.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t7/img6.svg" alt="")

    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.2 Estructura de los datos conversacionales
    p.mb-4 Una vez identificadas, depuradas y organizadas las fuentes de información, los datos deben estructurarse de manera que el #[em chatbot] pueda interpretar las solicitudes de los usuarios y responder de forma adecuada. En los sistemas conversacionales basados en comprensión del lenguaje natural, una estructura habitual contempla tres elementos fundamentales:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Intención")
            .col-12
              p Representa aquello que el usuario quiere lograr con su mensaje. Por ejemplo, en un #[em chatbot] bancario podrían existir intenciones como consultar el saldo, realizar una transferencia, bloquear una tarjeta o conocer los movimientos de una cuenta. Cada intención se asocia con un conjunto de respuestas o acciones que el #[em chatbot] ejecutará cuando la detecte.
              p.mb-0 Consultar horario; agendar cita; reportar falla.
          .row(titulo="Entidad")
            .col-12
              p Corresponde al dato concreto que el usuario menciona y que el #[em chatbot] necesita identificar para comprender o ejecutar la solicitud. En el mensaje «quiero transferir 500.000 pesos a la cuenta 12345 de Bancolombia», las entidades pueden ser el monto, el número de cuenta y el banco de destino. La extracción de estas entidades permite recopilar la información necesaria para completar determinadas acciones.
              p.mb-0 Ciudad: Bogotá; fecha: 5 de mayo; producto: SKU-1234.
          .row(titulo="Frase de entrenamiento")
            .col-12
              p Es un ejemplo de cómo un usuario podría expresar una intención. La calidad y diversidad de estas frases influyen directamente en la capacidad del #[em chatbot] para reconocer diferentes formas de comunicación. Una misma intención puede expresarse mediante palabras, estructuras y niveles de formalidad distintos, por lo que es conveniente incluir ejemplos variados.
              p.mb-0 «¿A qué hora abren?», «cuál es el horario», «hasta qué hora atienden».
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t7/img7.png" alt="")
    .row.align-items-center.mb-4
      .col-auto.d-none.d-lg-block
        img(style="width: 84px" src="@/assets/curso/temas/t7/img8.svg" alt="")
      .col
        .cajon.bg04.p-3
          p.mb-0 En proyectos reales, se recomienda comenzar con un conjunto suficiente y variado de frases de entrenamiento para cada intención. Conforme el #[em chatbot] recibe estas consultas, estos ejemplos pueden enriquecerse con nuevas formas de expresión. Las herramientas de análisis permiten identificar mensajes que fueron interpretados incorrectamente y utilizarlos para mejorar progresivamente el entrenamiento.
    p.mb-4 Además de estos elementos, los datos conversacionales pueden incluir respuestas, contextos y acciones. Las respuestas corresponden a los mensajes que el #[em chatbot] entrega al usuario y deben redactarse de acuerdo con los principios de voz y tono definidos para la solución. Los contextos contienen información que puede mantenerse durante la conversación, como el nombre del usuario, el producto consultado o el trámite que está realizando. Las acciones corresponden a operaciones que el sistema puede ejecutar, como consultar una base de datos, agendar una cita o generar una solicitud.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Las respuestas deben ser claras, breves, útiles y coherentes con la voz y el tono definidos para el #[em chatbot]. Su revisión permite verificar que la información entregada sea comprensible y facilite al usuario avanzar hacia el siguiente paso cuando la tarea lo requiera.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t7/img9.svg" alt="")
      .col-lg-6.mb-4.mb-lg-0
        p Los datos conversacionales deben mantenerse actualizados porque la información de una organización cambia con el tiempo. Los productos pueden modificarse, los horarios variar y las políticas actualizarse. Por ello, es conveniente establecer responsables y procedimientos para revisar periódicamente los contenidos e integrar, cuando sea posible, las fuentes oficiales de información con el #[em chatbot].
        .cajon.color-primario.p-3
          p.mb-0 Cuando se dispone de grandes volúmenes de transcripciones reales, pueden aplicarse técnicas de análisis para identificar consultas frecuentes y agrupar mensajes con características similares. Este proceso, conocido como #[em clustering] o agrupamiento, puede revelar nuevas intenciones que no habían sido previstas durante el diseño inicial. Asimismo, los mensajes que el #[em chatbot] no logra comprender pueden convertirse en insumos para ampliar las frases de entrenamiento y mejorar su cobertura.
      
    p.mb-4 La gestión de estos datos debe considerar también aspectos relacionados con la privacidad y la seguridad. Las conversaciones pueden contener información personal de los usuarios, por lo que las organizaciones deben establecer criterios para su almacenamiento, procesamiento, anonimización, acceso y eliminación, de acuerdo con la normativa aplicable, incluida la Ley 1581 de 2012 de Colombia sobre protección de datos personales. Esta gestión contribuye tanto al cumplimiento de las obligaciones legales como a la confianza de los usuarios.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-1
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En consecuencia, el manejo de los datos debe entenderse como un proceso continuo que comprende la recolección, validación, incorporación, monitoreo, actualización y depuración de la información. La revisión periódica permite conservar la utilidad del #[em chatbot] y adaptarlo a los cambios en las necesidades de los usuarios y en los servicios de la organización.
        p.mb-0 También es importante considerar la diversidad lingüística. Aunque los hablantes de español comparten una base común, existen diferencias regionales, generacionales y socioculturales. Un #[em chatbot] dirigido al público colombiano puede incorporar expresiones habituales de este contexto, mientras que una solución destinada a varios países hispanohablantes debe contemplar las principales variantes del idioma. Esta consideración favorece interacciones más naturales y reduce posibles problemas de interpretación.
      .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t7/img10.png" alt="")
    
</template>

<script>
export default {
  name: 'Tema7',
}
</script>
