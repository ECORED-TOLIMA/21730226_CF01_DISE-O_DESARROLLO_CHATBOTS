<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Técnicas para el desarrollo de flujos de conversación
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t8/img1.svg" alt="")
      .col-lg-9
        .cajon.bg04.p-4
          p.mb-0 Diseñar un flujo conversacional eficaz requiere mucho más que listar preguntas y respuestas. Implica definir una identidad para el #[em chatbot], escoger un estilo de comunicación coherente y prever cómo manejar la diversidad del lenguaje humano. Esta temática presenta, en primer lugar, los conceptos de voz, tono y personalidad como atributos que humanizan al #[em chatbot]; en segundo lugar, el papel de las palabras clave y las intenciones en el reconocimiento del lenguaje del usuario.

    Separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.1 Voz, tono y personalidad
    p.mb-4 La voz, el tono y la personalidad son atributos que humanizan al #[em chatbot] y contribuyen a construir una experiencia coherente con la identidad de la organización. Definirlos antes de escribir los mensajes resulta fundamental, ya que orientan decisiones relacionadas con la redacción, el vocabulario, el manejo de errores y el cierre de las conversaciones. Un #[em chatbot] sin una voz definida puede presentar respuestas inconsistentes y afectar la percepción que los usuarios tienen de la organización.
    p.mb-4 A continuación, la explicación de cada uno de estos atributos:
    .BGF03.px-5.p-5.mb-4
      .tarjeta.bgwhite.p-4
        PasosB.color-primario
          .row.align-items-center.justify-content-center(titulo="Voz")
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              h5 Voz
              p.mb-0 La voz constituye el conjunto de características estables que determinan cómo se expresa el #[em chatbot] y se mantiene relativamente constante entre las diferentes conversaciones. Una empresa de seguros puede optar por una voz formal, profesional y cuidadosa, mientras que una marca de moda juvenil puede elegir una voz cercana, divertida y desenfadada. La voz debe reflejar los valores de la organización y mantener coherencia con su identidad en los demás canales de comunicación.
            .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src="@/assets/curso/temas/t8/img2.png" alt="")
          .row.align-items-center.justify-content-center(titulo="Tono")
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              h5 Tono
              p.mb-0 El tono corresponde a la manera en que la voz se adapta a las circunstancias específicas de la conversación. Puede variar según el contexto, la intención del usuario o la situación que se presenta. Por ejemplo, un #[em chatbot] con una voz cercana puede utilizar un tono empático cuando el usuario reporta una falla, uno entusiasta cuando confirma una compra y uno tranquilizador cuando manifiesta preocupación.
            .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src="@/assets/curso/temas/t8/img3.png" alt="")
          .row.align-items-center.justify-content-center(titulo="Personalidad")
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              h5 Personalidad
              p.mb-0 La personalidad reúne los rasgos que permiten que el #[em chatbot] tenga una identidad reconocible y genere una interacción más natural. Puede expresarse mediante un nombre, un avatar, determinadas formas de saludo y características particulares de comunicación. Estos elementos deben utilizarse de manera coherente y estar alineados con la identidad de la organización, evitando que la personificación del #[em chatbot] genere expectativas que el sistema no pueda cumplir.
            .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src="@/assets/curso/temas/t8/img4.png" alt="")
    .titulo-pastilla1.mt-5(data-aos="fade-down")
      img(src="@/assets/curso/icon.svg" alt="")
      span Matriz de valores
    .row.justify-content-center.align-items-center.bg01.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0.p-4.p-lg-0
        img(src="@/assets/curso/temas/t8/img5.png" alt="")
      .col-lg-8.p-4.p-lg-0
        .p-4
          p.mb-0 Una herramienta útil para definir la voz y la personalidad del #[em chatbot] es la matriz de valores. Esta permite ubicar la identidad conversacional entre diferentes características opuestas; por ejemplo, formal frente a cercano o técnico frente a simple. La posición seleccionada orienta las decisiones de redacción y ayuda a mantener consistencia en los diferentes mensajes. Una marca puede utilizar una comunicación cercana y sencilla en situaciones cotidianas, pero adoptar un tono más formal cuando necesita explicar información legal, financiera o normativa.
    p.mb-4 Basado en lo anterior, se sintetizan los principales atributos conversacionales del #[em chatbot], junto con su definición y un ejemplo de aplicación. Esta información permite diferenciar la voz, el tono y la personalidad que intervienen en la construcción de una experiencia conversacional coherente:
    
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg03.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/t8/img6.svg', alt='')
          h5.text-center Voz
          p Conjunto de características estables de cómo se expresa el #[em chatbot]. No cambia entre conversaciones.
          p.mb-0 #[strong Ejemplo:] cercano, profesional, claro y respetuoso.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg03.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/t8/img7.svg', alt='')
          h5.text-center Tono
          p Variación de la voz según el contexto o la emoción del usuario.
          p.mb-0 #[strong Ejemplo:] empático cuando el usuario reporta una falla; entusiasta al confirmar una compra.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg03.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/t8/img8.svg', alt='')
          h5.text-center Personalidad
          p Conjunto de rasgos que humanizan al #[em chatbot].
          p.mb-0 #[strong Ejemplo:] «Soy Sofía, tu asistente virtual. Estoy para ayudarte con tus citas».

    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.2 Palabras clave e intenciones
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t8/img9.png', alt='')
      .col-lg-7
        p Las palabras clave son los términos que activan una respuesta o flujo en el #[em chatbot]. En los #[em chatbots] basados en reglas, las palabras clave son fijas: horario, saldo, cita. El #[em chatbot] busca estas palabras exactas en el mensaje del usuario y, al encontrarlas, ejecuta la respuesta asociada. Este enfoque es simple pero rígido: si el usuario escribe una variación distinta, el #[em chatbot] puede no entenderlo.
        p.mb-0 En los #[em chatbots] con procesamiento del lenguaje natural, las palabras clave alimentan los modelos de detección de intenciones, que reconocen variaciones del lenguaje natural sin obligar al usuario a usar palabras específicas. Por ejemplo, las siguientes frases pueden activar la misma intención relacionada con la consulta de horarios, aunque no todas tengan la palabra horario:
    
    .row.mb-4
      .col-lg-3.mb-4
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t8/img10.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center ¿A qué hora abren?
      .col-lg-3.mb-4
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t8/img11.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center ¿Hasta qué hora atienden?
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t8/img12.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center ¿Cuál es el horario?
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t8/img13.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center Horarios de atención
    p.mb-4 Por su parte, la intención representa aquello que el usuario desea lograr mediante su mensaje. En un #[em chatbot] bancario, por ejemplo, pueden definirse intenciones como consultar el saldo, realizar una transferencia, bloquear una tarjeta o revisar los movimientos de una cuenta. Cada intención puede asociarse con respuestas, preguntas adicionales o acciones específicas que permitan atender la solicitud.
    .row.align-items-center.justify-content-center.bg01.mb-4
      .col-lg-7.mb-4.mb-lg-0.p-4.p-lg-0.order-2.order-lg-1
        .p-4
          p.mb-0 Las frases de entrenamiento son ejemplos de las diferentes maneras en que un usuario puede expresar una misma intención. Como referencia inicial, puede construirse un conjunto de 10 a 15 frases por intención, procurando que exista variedad en vocabulario, estructura, extensión y nivel de formalidad. Esta cantidad puede ajustarse según la complejidad de cada intención y los resultados obtenidos durante las pruebas.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t8/img14.png" alt="")
    p.mb-4 También conviene incorporar variaciones habituales del lenguaje, como errores ortográficos frecuentes, abreviaturas, expresiones coloquiales y modismos regionales. Los usuarios no siempre escriben de manera formal o siguen una estructura predefinida; por ello, contemplar estas variaciones ayuda a reducir errores de comprensión y favorece una interacción más natural.
    .row.align-items-center.mb-4
      .col-auto.mb-4.mb-md-0
        img.tema1-icono(src="@/assets/curso/temas/t8/img15.svg" alt="")
      .col.bg04.p-2
        p.mb-0 A medida que el #[em chatbot] recibe consultas reales, las frases de entrenamiento pueden enriquecerse con nuevas expresiones utilizadas por los usuarios. El análisis de las conversaciones permite identificar mensajes que no fueron comprendidos correctamente, reconocer nuevas formas de expresar una intención y determinar si es necesario ajustar las existentes o crear otras.
      

    .titulo-pastilla1.mt-5(data-aos="fade-down")
      img(src="@/assets/curso/icon.svg" alt="")
      span Accesibilidad e inclusión conversacional

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-6.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t8/img16.png" alt="")
      .col-lg-6
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La accesibilidad debe considerarse desde las primeras etapas del diseño del #[em chatbot], con el propósito de facilitar la interacción a diferentes perfiles de usuarios. Las personas con discapacidad visual pueden utilizar lectores de pantalla que requieren que las opciones y mensajes se presenten de manera clara, mientras que los usuarios con baja alfabetización digital pueden beneficiarse de instrucciones sencillas, mensajes directos y un número limitado de opciones.
        p.mb-0 El diseño inclusivo también implica considerar diferencias de edad, nivel educativo, contexto cultural y procedencia geográfica. Por esta razón, el lenguaje utilizado por el #[em chatbot] debe evitar tecnicismos innecesarios, ambigüedades y expresiones que puedan dificultar la comprensión.
    p.mb-0 Una buena práctica consiste en realizar pruebas con usuarios diversos. Incluir personas con diferentes características y experiencias permite identificar problemas que podrían pasar desapercibidos en grupos homogéneos. Los resultados de estas pruebas pueden utilizarse para ajustar el vocabulario, la estructura de los mensajes, las opciones disponibles y las formas de navegación dentro de la conversación.

    .titulo-pastilla1.mt-5(data-aos="fade-down")
      img(src="@/assets/curso/icon.svg" alt="")
      span Manejo de errores y situaciones imprevistas
    .row.align-items-center.mb-4
      .col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/temas/t8/img17.svg" alt="")
      .col-lg-10
        .cajon.color-secundario.p-3.mb-3
          p.mb-0 Comprender los tipos de errores que puede cometer un #[em chatbot] es fundamental para diseñar respuestas adecuadas y evitar que una dificultad interrumpa innecesariamente la conversación. Los errores pueden originarse en una interpretación incorrecta del mensaje, en información incompleta, en problemas de formato o en fallas de los sistemas externos conectados.
        p.mb-0 Para identificar y gestionar adecuadamente las situaciones que pueden afectar la interacción, es importante reconocer los errores más frecuentes que puede presentar un #[em chatbot]. La siguiente tabla reúne estos errores, describe sus características y propone estrategias para responder de manera adecuada en cada caso:
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 7.
      span Tipos de errores frecuentes en #[em chatbots] y estrategias de manejo
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Tipo de error
            th Descripción
            th Estrategia recomendada
        tbody
          tr
            td No comprensión.
            td El #[em chatbot] no logra identificar la intención del mensaje.
            td Pedir reformulación, ofrecer opciones de menú o derivar a un agente humano.
          tr
            td Comprensión incorrecta.
            td El #[em chatbot] interpreta una intención distinta a la real.
            td Confirmar antes de ejecutar acciones críticas; permitir corregir interpretaciones.
          tr
            td Datos faltantes.
            td El usuario no provee toda la información requerida.
            td Solicitar amablemente los datos faltantes uno a uno.
          tr
            td Datos inválidos.
            td El usuario provee información en formato incorrecto.
            td Validar el formato e indicar el correcto con un ejemplo concreto.
          tr
            td Falla en el sistema.
            td Un sistema externo conectado al #[em chatbot] no responde.
            td Informar al usuario, ofrecer reintentar o agendar la consulta.
          tr
            td Salida del flujo.
            td El usuario aborda un tema fuera del alcance del #[em chatbot].
            td Reconocer la limitación y derivar a la fuente adecuada.
    p.mb-0 El manejo de errores debe evitar respuestas genéricas que no aporten orientación. Cuando sea posible, el #[em chatbot] debe explicar de manera sencilla qué ocurrió y ofrecer una alternativa concreta. En acciones sensibles, como pagos, transferencias, cancelaciones o modificaciones de información, resulta especialmente importante confirmar los datos antes de ejecutar la operación.

    .titulo-pastilla1.mt-5(data-aos="fade-down")
      img(src="@/assets/curso/icon.svg" alt="")
      span Recursos para enriquecer la experiencia conversacional
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-3
          p.mb-0 El #[em chatbot] puede incorporar elementos de gamificación, como puntuaciones, retos o logros, para hacer la experiencia más atractiva en determinados contextos, especialmente en entornos educativos, comerciales o de #[em marketing]. Sin embargo, estos recursos deben utilizarse con moderación y responder a un propósito definido.
        p.mb-0 Cualquier elemento adicional debe aportar valor a la interacción. Si un recurso es únicamente decorativo, genera distracción o dificulta que el usuario complete su tarea, es preferible eliminarlo. El objetivo principal debe mantenerse en la facilidad de uso, la comprensión de los mensajes y el cumplimiento de las necesidades del usuario.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t8/img18.svg" alt="")

    .titulo-pastilla1.mt-5(data-aos="fade-down")
      img(src="@/assets/curso/icon.svg" alt="")
      span Actualización y mejora continua
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t8/img19.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La inteligencia artificial conversacional es un campo que evoluciona con rapidez. Las plataformas, técnicas y formas de interacción se actualizan constantemente, por lo que los profesionales deben mantenerse informados sobre nuevas herramientas, metodologías y casos de uso. Las comunidades de práctica, publicaciones especializadas, congresos y cursos de actualización constituyen recursos útiles para fortalecer estos conocimientos.
    .row.align-items-center.mb-4
      .col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/temas/t8/img20.svg" alt="")
      .col-lg-11
        p.mb-0 La mejora de un #[em chatbot] también depende del seguimiento de su funcionamiento en condiciones reales. El análisis de las conversaciones permite identificar dificultades, ajustar las intenciones, ampliar las frases de entrenamiento y actualizar los contenidos. De esta manera, la solución puede adaptarse progresivamente a las necesidades de los usuarios.
    .cajon.color-primario.p-4.mb-4
      p.mb-0 La tecnología es solo una parte de una solución conversacional exitosa. También se requiere comprender el negocio, reconocer las necesidades de los usuarios y aplicar criterios de calidad durante todo el proceso. Las habilidades de comunicación, trabajo en equipo y capacidad de escucha complementan las competencias técnicas y favorecen el desarrollo de soluciones conversacionales útiles, accesibles y coherentes con el contexto en el que serán implementadas.
    p.mb-0 La combinación de las competencias técnicas y las habilidades necesarias para comprender a los usuarios permite afrontar de manera integral el diseño y desarrollo de soluciones conversacionales aplicables a diferentes necesidades del sector productivo.
</template>

<script>
export default {
  name: 'Tema8',
}
</script>
