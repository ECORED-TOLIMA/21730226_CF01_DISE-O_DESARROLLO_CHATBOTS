<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 #[em Frameworks] de diseño conversacional
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t6/img0.svg" alt="")
      .col-lg-10
        .cajon.bg04.p-4
          p.mb-0 Más allá de las plataformas técnicas, el diseño de la conversación en sí mismo requiere una metodología propia. Construir un #[em chatbot] exitoso no se limita a programar un flujo: implica diseñar cuidadosamente cada interacción, anticipar las necesidades del usuario y crear una experiencia conversacional coherente.

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Concepto y metodologías
    
    .row.align-items-center.justify-content-center.bg01.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t6/img1.png" alt="")
      .col-lg-7.mb-4.mb-lg-0
        p Un #[em framework] de diseño conversacional es un conjunto de principios, metodologías y componentes técnicos que orientan la creación de la experiencia conversacional de un #[em chatbot]. A diferencia de las plataformas, que constituyen la infraestructura técnica, los marcos de trabajo definen cómo debe ser la conversación desde el punto de vista del usuario: qué tono usar, cómo recuperarse ante errores, cómo guiar al usuario hacia su objetivo y cómo manejar las despedidas.
        p.mb-0 Marcos reconocidos como el Conversation Design #[em Framework] de Google o las guías de diseño conversacional de Microsoft, proponen una estructura de trabajo que parte del entendimiento del usuario, define los casos de uso prioritarios, escribe los diálogos y, finalmente, los implementa en la plataforma técnica seleccionada. Estos marcos comparten principios fundamentales: comenzar por el usuario, escribir antes de programar, iterar a partir de pruebas reales y considerar la conversación como un producto en sí misma.
      
    p.mb-4 La metodología típica de un marco de diseño conversacional contempla 5 fases:
    SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-5
        .row.justify-content-center.mb-3
          .col-lg-8.col-4
            img(src="@/assets/curso/temas/t6/img2.svg" alt="")
        h5.text-center Descubrimiento
        p.mb-0 Identifica al usuario, sus necesidades, el problema que se busca resolver y el contexto en el que utilizará el #[em chatbot]. Esta primera fase permite comprender las expectativas y condiciones que orientarán su desarrollo.
      .tarjeta.BGTARG.p-5
        .row.justify-content-center.mb-3
          .col-lg-8.col-4
            img(src="@/assets/curso/temas/t6/img3.svg" alt="")
        h5.text-center Definición
        p.mb-0 Delimita el alcance del #[em chatbot], las intenciones que atenderá y aquellas que quedarán por fuera. También establece con claridad los objetivos y límites de la solución conversacional.
      .tarjeta.BGTARG.p-5
        .row.justify-content-center.mb-3
          .col-lg-8.col-4
            img(src="@/assets/curso/temas/t6/img4.svg" alt="")
        h5.text-center Diseño
        p.mb-0 Desarrolla los diálogos, define la voz y el tono, y crea los flujos de conversación. En esta fase se estructura la experiencia que tendrá el usuario durante la interacción con el #[em chatbot].
      .tarjeta.BGTARG.p-5
        .row.justify-content-center.mb-3
          .col-lg-8.col-4
            img(src="@/assets/curso/temas/t6/img5.svg" alt="")
        h5.text-center Construcción
        p.mb-0 Implementa el diseño definido en la plataforma técnica seleccionada, configurando los componentes, las respuestas y las funcionalidades necesarias para que el #[em chatbot] pueda operar.
      .tarjeta.BGTARG.p-5
        .row.justify-content-center.mb-3
          .col-lg-8.col-4
            img(src="@/assets/curso/temas/t6/img6.svg" alt="")
        h5.text-center Validación
        p.mb-0 Prueba el #[em chatbot] con usuarios reales para identificar dificultades, errores o aspectos que puedan mejorarse. A partir de los resultados obtenidos en esta última fase, se realizan ajustes iterativos hasta lograr un funcionamiento adecuado.

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Diseño centrado en el usuario
    p.mb-4 El diseño conversacional emplea métodos derivados del diseño centrado en el usuario, una disciplina que pone al usuario final en el centro de todas las decisiones de diseño. La premisa fundamental es que un #[em chatbot] exitoso no es necesariamente el más sofisticado tecnológicamente, sino el que resuelve mejor las necesidades reales del usuario en su contexto cotidiano.
    p.mb-4 Los métodos más utilizados son:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Mapas de conversación") Representan visualmente los caminos posibles que puede tomar una conversación y permiten anticipar las diferentes rutas de interacción que podría seguir el usuario según sus necesidades.
          p.mb-0(numero="2" titulo="Diálogos de muestra") Son ejemplos escritos de cómo podría desarrollarse una conversación ideal entre el usuario y el #[em chatbot], facilitando la definición de respuestas, preguntas y transiciones entre los diferentes momentos del diálogo.
          p.mb-0(numero="3" titulo="Persona del <em>bot</em>") Es un documento que define la personalidad, el estilo y los valores que el #[em chatbot] transmitirá durante sus interacciones, ayudando a mantener una comunicación coherente con los usuarios.
          p.mb-0(numero="4" titulo="Casos de uso") Describen de manera detallada los problemas, necesidades o situaciones que el #[em chatbot] debe resolver mediante la interacción conversacional, estableciendo los objetivos principales de cada escenario.
          p.mb-0(numero="5" titulo="Flujos felices y flujos de excepción") Representan, respectivamente, las trayectorias donde todo ocurre según lo esperado y aquellas en las que el usuario se confunde, abandona el proceso, encuentra dificultades o solicita ayuda humana.
      .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t6/img7.png" alt="")
    p.mb-4 La aplicación rigurosa de estas técnicas reduce significativamente los errores en la fase de implementación, evita reprocesos costosos y contribuye a desarrollar #[em chatbots] que los usuarios encuentran útiles y agradables de utilizar. Además, los métodos del diseño centrado en el usuario fomentan la colaboración entre perfiles diversos, como diseñadores, programadores, especialistas en #[em marketing] y representantes del área de atención al cliente, lo que enriquece el resultado final con múltiples perspectivas.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/img8.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un principio orientador del diseño conversacional es el de la conversación cooperativa, formulado por el filósofo H. P. Grice en la década de 1970. Grice sostuvo que las conversaciones humanas se rigen por máximas implícitas: ser claro, ser veraz, ser relevante y proporcionar la cantidad adecuada de información. Aplicar estas máximas al diseño de #[em chatbots] produce conversaciones más naturales y satisfactorias para el usuario. Por ejemplo, un #[em chatbot] que responde con largos párrafos cuando solo se le pidió un dato específico incumple la máxima de cantidad y puede generar frustración.
    p.mb-4 El diseño conversacional también debe considerar el manejo de errores y situaciones imprevistas, como se muestra en la siguiente imagen:
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2.
      span Manejo de errores y situaciones imprevistas en el diseño conversacional
    figure.mb-4
      img.d-none.d-md-block(src="@/assets/curso/temas/t6/img9.svg" alt="Diagrama sobre el manejo de errores y situaciones imprevistas en el diseño conversacional")
      img.d-block.d-md-none(src="@/assets/curso/temas/t6/img9_1.svg" alt="Diagrama sobre el manejo de errores y situaciones imprevistas en el diseño conversacional")
    p.mb-4 Resumiendo la imagen anterior, se pueden presentar los siguientes tres escenarios y sus métodos de respuesta:
    .tarjeta--container.row.mb-4
      .col-lg.tarjeta.bg01.p-5
        .row.justify-content-center.mb-4
          .col-5
            img(src="@/assets/curso/temas/t6/img10.svg" alt="")
        h5.text-center No entiende
        p.mb-0 El #[em chatbot] responde con una pregunta para aclarar o indica que no entiende.
      .col-lg.tarjeta.bg05.p-5
        .row.justify-content-center.mb-4
          .col-5
            img(src="@/assets/curso/temas/t6/img11.svg" alt="")
        h5.text-center Cambia de tema
        p.mb-0 El #[em chatbot] intenta volver al tema anterior o pide al usuario que aclare.
      .col-lg.tarjeta.bg06.p-5
        .row.justify-content-center.mb-4
          .col-5
            img(src="@/assets/curso/temas/t6/img12.svg" alt="")
        h5.text-center Expresa enojo
        p.mb-0 El #[em chatbot] responde con empatía y ofrece ayuda para resolver el problema.
    .cajon.bg04.p-4.mb-4
      p.mb-0 Anticipar situaciones inesperadas es una de las características que diferencia un #[em chatbot] básico de uno profesional. Cuando el sistema no comprende una consulta, puede solicitar aclaraciones, ofrecer opciones relacionadas o permitir la reformulación del mensaje. Asimismo, debe ser capaz de manejar cambios de tema, retomar conversaciones interrumpidas y responder con empatía ante expresiones de frustración. Estas estrategias contribuyen a mantener la continuidad de la interacción y fortalecen la confianza del usuario.
    p.mb-4 Las organizaciones más avanzadas han incorporado roles especializados como el de diseñador conversacional, profesional dedicado a estructurar la experiencia del usuario en #[em chatbots] y asistentes de voz. Aunque este perfil aún es escaso en Colombia, su demanda crece rápidamente y representa una oportunidad profesional para quienes combinen habilidades de comunicación con conocimientos tecnológicos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La aplicación adecuada de estas metodologías permite construir experiencias conversacionales más naturales, comprensibles y útiles. Por ello, el diseño conversacional no se limita a definir preguntas y respuestas, sino que implica anticipar diferentes comportamientos del usuario, gestionar situaciones inesperadas y garantizar que la interacción mantenga coherencia y continuidad.      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        p.mb-0 Para finalizar y ejemplificar lo visto de manera práctica, se presenta un pódcast en el que se desarrolla una situación de interacción entre un usuario y un #[em chatbot]. A través de este caso, se podrán reconocer elementos del diseño conversacional, como la interpretación de solicitudes, la aclaración de mensajes, el manejo de cambios de tema y la atención de situaciones inesperadas, relacionando estos aspectos con la construcción de conversaciones claras, coherentes y orientadas a las necesidades del usuario:
      .col-lg-6        
        .tarjeta.bg05.p-3
          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src="@/assets/curso/temas/t6/img13.svg" alt="")
            .col-lg-8
              p.mb-0.p-4 Pódcast
              .tarjeta.clr--pink.p-4.rounded-0.h-100
                .tarjeta.bg-white.p-4
                  TarjetaAudio.color-acento-botones.mb-3(
                  texto="Conversaciones que responden: diseñando interacciones con <em>chatbots</em> "
                  :audio="require_src('@/assets/actividad/audio/success.mp3')"
              )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
</template>

<script>
export default {
  name: 'Tema6',
}
</script>
