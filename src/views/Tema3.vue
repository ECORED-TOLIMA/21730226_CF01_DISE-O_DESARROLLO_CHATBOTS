<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Chatbots]
    figure.mb-4
      img(src="@/assets/curso/temas/t3/img1.png" alt="")
    p.mb-0 Una vez comprendidos los fundamentos de la inteligencia artificial y del procesamiento del lenguaje natural, es momento de centrar la atención en los #[em chatbots]. A continuación, se abordan dos aspectos esenciales: el concepto junto con los principios que rigen su funcionamiento, y la clasificación de los distintos tipos de #[em chatbots] según su grado de complejidad y autonomía.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Concepto y principios de funcionamiento
    p.mb-4 Un #[em chatbot], del inglés #[em chat] (conversación) y #[em bot] (robot), es un programa informático diseñado para mantener una conversación con un usuario humano a través de texto o voz, simulando el comportamiento de una persona. Su objetivo principal es responder preguntas, resolver problemas, brindar información o ejecutar acciones de forma automática y, en lo posible, indistinguible de la atención humana. La interacción se realiza típicamente a través de interfaces de mensajería, sitios #[em web] o asistentes de voz.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img2.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El primer #[em chatbot] reconocido fue ELIZA, desarrollado en 1966 por Joseph Weizenbaum en el MIT. ELIZA simulaba un terapeuta y, aunque su funcionamiento se basaba en sustitución de patrones simples, demostró por primera vez la viabilidad de una conversación entre humano y máquina. Décadas más tarde, con la masificación de internet, el auge de la mensajería instantánea y los avances en inteligencia artificial, los #[em chatbots] evolucionaron hasta convertirse en herramientas clave para la atención al cliente y la automatización de procesos empresariales.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t3/img3.svg" alt="")
          .tarjeta.bg02
            .p-4
              p.mb-0 En la actualidad, los #[em chatbots] están presentes en prácticamente cualquier sitio #[em web] corporativo, en aplicaciones de mensajería como WhatsApp y Messenger, en plataformas de comercio electrónico, en sistemas de banca digital y hasta en electrodomésticos inteligentes. Su capacidad de operar de manera continua, atender múltiples usuarios simultáneamente y ofrecer respuestas inmediatas los ha convertido en aliados estratégicos para mejorar la experiencia del cliente y reducir los costos operativos de las organizaciones.
    p.mb-4 El funcionamiento de un #[em chatbot], en términos generales, sigue un ciclo de cuatro etapas:
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Recepción del mensaje") Recibe el mensaje del usuario a través del canal de comunicación correspondiente, como un sitio #[em web], una aplicación de mensajería o una plataforma digital y lo prepara para su procesamiento.
          p.mb-0(numero="2" titulo="Comprensión del mensaje") Analiza su contenido, identifica la intención del usuario y extrae las entidades relevantes, con el propósito de interpretar correctamente la solicitud y determinar qué necesita.
          p.mb-0(numero="3" titulo="Procesamiento de la solicitud") Consulta la base de conocimiento o aplica reglas y modelos disponibles para analizar la información recibida, relacionarla con los datos disponibles y determinar la respuesta más adecuada.
          p.mb-0(numero="4" titulo="Generación de la respuesta") Envía al usuario una respuesta mediante texto, voz o imagen, o ejecuta una acción concreta según la solicitud, como consultar un saldo, proporcionar información o agendar una cita.
      .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t3/img4.png" alt="")

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Tipos de #[em chatbots]
    p.mb-4 Los #[em chatbots] se clasifican principalmente según el grado de inteligencia que incorporan y la complejidad de las conversaciones que pueden sostener. Esta clasificación es importante porque cada tipo de #[em chatbot] responde a necesidades distintas, requiere niveles diferentes de inversión y exige conocimientos técnicos específicos para su construcción y mantenimiento.
    p.mb-4 Al respecto, se tienen los siguientes extremos:
    .tarjeta--container.row.mb-4
      .col-lg.tarjeta.bg01.p-5
        .row.justify-content-center.mb-4
          .col-4
            img(src="@/assets/curso/temas/t3/img5.svg" alt="")
        h5.text-center Más simple
        p.mb-0 Se encuentran los #[em chatbots] basados en reglas, que siguen guiones predefinidos y responden según las instrucciones y opciones establecidas previamente.
      .col-lg.tarjeta.bg05.p-5
        .row.justify-content-center.mb-4
          .col-4
            img(src="@/assets/curso/temas/t3/img6.svg" alt="")
        h5.text-center Más sofisticado
        p.mb-0 Se ubican los #[em chatbots] generativos, que utilizan grandes modelos de lenguaje para producir respuestas en lenguaje natural sin necesidad de un guion previo.
    p.mb-4 Entre ambos extremos existen alternativas híbridas que combinan reglas con capacidades de comprensión del lenguaje natural. La siguiente tabla resume los principales tipos:
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 2.
      span Tipos de #[em chatbots] según su funcionamiento
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Tipo
            th Funcionamiento
            th Casos de uso
        tbody
          tr
            td #[em chatbot] basado en reglas.
            td Sigue un guion predefinido con árboles de decisión. El usuario elige opciones de un menú o palabras clave activan respuestas específicas.
            td Preguntas frecuentes, encuestas, agendamiento, menús de servicio.
          tr
            td #[em chatbot] conversacional con inteligencia artificial.
            td Utiliza procesamiento del lenguaje natural para comprender el lenguaje del usuario, identificar intenciones y mantener un diálogo fluido.
            td Atención al cliente, soporte técnico, asistentes personales.
          tr
            td #[em chatbot] híbrido.
            td Combina reglas predefinidas con capacidades de procesamiento del lenguaje natural. Escala a un agente humano cuando no resuelve el caso.
            td Banca, salud, gobierno digital, comercio minorista.
          tr
            td #[em chatbot] generativo.
            td Basado en grandes modelos de lenguaje, genera respuestas en lenguaje natural sin necesidad de un guion previo.
            td Asesoría general, generación de contenido, productividad y educación.
    p.mb-4 La elección del tipo de #[em chatbot] depende del problema que se desea resolver, del presupuesto disponible y del nivel de personalización requerido. Para una empresa pequeña que solo necesita atender preguntas frecuentes, un #[em chatbot] basado en reglas es suficiente y puede implementarse en pocas horas. Para una empresa grande que recibe miles de consultas diarias en lenguaje natural, un #[em chatbot] conversacional o híbrido resulta más adecuado. Los #[em chatbots] generativos, por su parte, requieren mayor inversión, supervisión cuidadosa y consideraciones éticas adicionales debido a su capacidad de generar contenido nuevo.
    p.mb-4 Cabe mencionar la diferencia entre #[em chatbots] y asistentes virtuales, términos que a menudo se usan como sinónimos pero que tienen matices:
    TabsC.color-acento-botones.bg02.mb-4
      .py-3.py-md-4(titulo="<em>Chatbot</em>")
        .p-3
          .row.align-items-center
            .col-lg-6.mb-4.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/t3/img7.png" alt="")
            .col-lg-6
              h5 #[i Chatbot]
              p.mb-0 Suele estar especializado en un dominio o conjunto de necesidades específicas, como la atención al cliente de una empresa, el agendamiento de citas médicas o el soporte técnico de un producto. Su funcionamiento se orienta a resolver consultas concretas, proporcionar información y ejecutar tareas relacionadas con un servicio determinado.
      .py-3.py-md-4(titulo="Asistente virtual")
        .p-4.bg02
          .row.align-items-center
            .col-lg-6.mb-4.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/t3/img8.png" alt="")
            .col-lg-6
              h5 Asistente virtual
              p.mb-0 Aspira a ofrecer una interacción de propósito más general, capaz de ayudar al usuario con tareas heterogéneas y adaptarse a diferentes necesidades. Puede programar alarmas, buscar información en internet, controlar dispositivos del hogar inteligente, redactar correos, gestionar recordatorios y realizar muchas otras actividades.
    .cajon.color-secundario.p-4.mb-4
      p.mb-0 Siri, Alexa y Google Assistant son ejemplos de asistentes virtuales; los #[em bots] de servicio al cliente de empresas particulares son ejemplos de #[em chatbots].
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .tarjeta.bg06.p-2
          p.text-center.mb-0 Otra clasificación útil distingue entre #[em chatbots] de texto y #[em chatbots] de voz:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        img.mb-0(src="@/assets/curso/temas/t3/img9.png" alt="")
        .bg02.p-4
          h5 Los #[em chatbots] de texto
          p.mb-0 Interactúan a través de mensajería escrita en sitios #[em web], WhatsApp, Messenger y mensajes de texto. Son los más comunes en aplicaciones empresariales y permiten atender consultas, proporcionar información y orientar a los usuarios mediante conversaciones escritas.

      .col-lg-6
        img.mb-0(src="@/assets/curso/temas/t3/img10.png" alt="")
        .bg02.p-4
          h5 Los #[em chatbots] de voz
          p.mb-0 También llamados asistentes de voz o sistemas de respuesta automática hablada, interactúan mediante reconocimiento y síntesis de voz; se utilizan en líneas telefónicas de atención al cliente, dispositivos inteligentes y aplicaciones de manos libres.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-pastilla(data-aos="fade-down")
          img(src="@/assets/curso/temas/t3/img11.svg" alt="")
          p.mb-0 Algunos #[em chatbots] modernos son multimodales: combinan texto, voz, imágenes e incluso video en una misma interacción.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Los #[em chatbots] generativos ofrecen mayor flexibilidad para producir respuestas y abordar una amplia variedad de solicitudes. Sin embargo, su utilización requiere controles adicionales, debido a la posibilidad de generar información incorrecta, los costos asociados a su operación y la necesidad de establecer criterios claros para su uso en contextos profesionales.
    p.mb-4 Para complementar esta clasificación, la siguiente tabla compara los principales tipos de #[em chatbots] según criterios que pueden orientar su selección e implementación, como costo, tiempo de puesta en marcha, mantenimiento, personalización, escalabilidad y riesgo de respuestas erróneas:
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 3.
      span Comparación práctica entre tipos de #[em chatbots]
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Aspecto
            th Reglas
            th Conversacional
            th Híbrido
            th Generativo
        tbody
          tr
            td Costo de implementación.
            td Bajo.
            td Medio.
            td Medio-alto.
            td Alto.
          tr
            td Tiempo de puesta en marcha.
            td Días.
            td Semanas.
            td Semanas a meses.
            td Días a semanas.
          tr
            td Mantenimiento requerido.
            td Bajo.
            td Medio.
            td Alto.
            td Medio-alto.
          tr
            td Personalización.
            td Limitada.
            td Alta.
            td Muy alta.
            td Muy alta.
          tr
            td Escalabilidad.
            td Alta.
            td Alta.
            td Alta.
            td Media-alta.
          tr
            td Riesgo de respuestas erróneas.
            td Bajo.
            td Medio.
            td Medio.
            td Medio-alto.
          tr
            td Capacidad de aprendizaje.
            td Ninguna.
            td Media.
            td Alta.
            td Muy alta.
    p.mb-0 Como se aprecia, no existe un tipo de #[em chatbot] universalmente superior: cada uno responde a necesidades particulares y a restricciones de presupuesto, tiempo y conocimiento técnico. La decisión de qué tipo implementar debe tomarse luego de un análisis cuidadoso del problema a resolver, los recursos disponibles y los objetivos de negocio. En muchos casos, la mejor estrategia es comenzar con un #[em chatbot] simple y evolucionar progresivamente hacia versiones más sofisticadas a medida que se acumula experiencia.
</template>

<script>
export default {
  name: 'Tema3',
}
</script>
