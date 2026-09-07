<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas de #[em software] para el desarrollo de #[em chatbots]

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t5/img1.png" alt="")
      .col-lg-5
        .bg04.p-4
          p.mb-0 Conocer la teoría de los #[em chatbots] es solo el primer paso. Para construir uno realmente funcional se requieren herramientas tecnológicas que provean la infraestructura, los componentes y los entornos necesarios. En esta temática se presentan, en primer lugar, el concepto general de las herramientas de #[em software] y los tipos de plataformas disponibles en el mercado; en segundo lugar, los criterios que orientan la selección de la plataforma más adecuada según las necesidades del proyecto.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Concepto y tipos de plataformas
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img2.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una herramienta de #[em software] para el desarrollo de #[em chatbots] es un sistema que provee la infraestructura necesaria para construir, desplegar y mantener un chatbot. Estas herramientas se ofrecen como plataformas en la nube, en modalidad #[em software as a service] o como bibliotecas de código abierto que se integran a un proyecto de #[em software] propio. La modalidad en la nube facilita la puesta en marcha rápida sin necesidad de gestionar servidores; la modalidad de código abierto, en cambio, ofrece mayor control y personalización a costa de mayor complejidad técnica.
    p.mb-4 Las plataformas modernas se clasifican según el nivel de programación que requieren del usuario:
    .BGF01.px-5.p-5.mb-4
      .tarjeta.bgwhite.p-4
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              h5 Plataformas #[em no-code]
              p.mb-0 Permiten construir #[em chatbots] mediante interfaces gráficas de arrastrar y soltar, sin escribir una sola línea de código. Son apropiadas para usuarios sin conocimientos de programación y facilitan la creación rápida de soluciones conversacionales.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              img(src="@/assets/curso/temas/t5/img3.png" alt="")
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              h5 Plataformas #[em low-code]
              p.mb-0 Combinan elementos visuales con pequeños fragmentos de código para casos específicos donde se requiere lógica más sofisticada. Ofrecen un equilibrio entre facilidad de uso y personalización para adaptar el funcionamiento del #[em chatbot].
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              img(src="@/assets/curso/temas/t5/img4.png" alt="")
          .row.align-items-center
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              h5 Plataformas basadas en código
              p.mb-0 Exigen conocimientos de programación, pero ofrecen máxima flexibilidad para escenarios complejos. Permiten desarrollar soluciones altamente personalizadas e integrar diferentes servicios, sistemas y funcionalidades según las necesidades del proyecto.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              img(src="@/assets/curso/temas/t5/img5.png" alt="")
    p.mb-4 A continuación, se presenta una tabla comparativa de las plataformas más utilizadas en la industria, organizadas según su tipo y características principales. Esto permite al aprendiz visualizar el panorama actual del mercado y ubicar cada herramienta según su propósito:
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 5.
      span Comparativa de plataformas para el desarrollo de #[em chatbots]
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Plataforma
            th Tipo
            th Características principales
        tbody
          tr
            td Landbot.
            td #[em No-code].
            td Editor visual de flujos. Ideal para #[em chatbots web] y de WhatsApp con árboles de decisión.
          tr
            td ManyChat.
            td #[em No-code].
            td Especializada en #[em marketing] por Messenger, Instagram y WhatsApp.
          tr
            td Tidio.
            td #[em No-code] y #[em low-code].
            td Combina #[em chat] en vivo con #[em chatbots] para sitios #[em web] y comercio electrónico.
          tr
            td Botpress.
            td Low-code y código abierto.
            td Plataforma flexible con motor de comprensión integrado, apta para #[em chatbots] conversacionales.
          tr
            td Dialogflow.
            td #[em Low-code].
            td Motor de comprensión robusto. Integración con Google Cloud y múltiples canales.
          tr
            td Microsoft Bot Framework.
            td Código.
            td Kit de desarrollo para construir #[em chatbots] avanzados con C# o Node.js.
          tr
            td Rasa.
            td Código y código abierto.
            td Marco de trabajo en Python para #[em chatbots] conversacionales con control total del modelo.
          tr
            td Zendesk Answer Bot.
            td #[em No-code].
            td Integrado al ecosistema de servicio al cliente de Zendesk.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Criterios de selección de la plataforma
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t5/img6.png" alt="")
      .col-lg-7
        p La elección de una plataforma debe responder al problema que se desea resolver, al canal donde estará disponible el #[em chatbot], al volumen de interacciones esperadas y al nivel de personalización requerido. Una decisión apresurada o basada únicamente en la popularidad de una herramienta puede llevar a inversiones costosas en plataformas que no se ajustan a las necesidades reales del proyecto.
        .cajon.color-secundario.p-4
          p.mb-0 Para un #[em chatbot] simple de atención al cliente con preguntas frecuentes, una plataforma #[em no-code] puede ser suficiente y facilitar una puesta en marcha rápida. Cuando se requieren integraciones con sistemas internos, mayor personalización o control sobre los datos, conviene considerar soluciones que ofrezcan APIs, conectores empresariales o posibilidades de desarrollo mediante código.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .tarjeta.bg06.p-2
          p.text-center.mb-0 Entre los criterios concretos de selección se encuentran los siguientes.
    .BGF02.px-5.p-5.mb-4
      LineaTiempoC.color-acento-botones
        .row.align-items-center.justify-content-center(titulo="a.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Propósito del #[em chatbot]
            p.mb-0 Puede estar orientado a brindar información, realizar transacciones, ofrecer asesoría o proporcionar entretenimiento, según las necesidades y objetivos definidos para su implementación.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img7.png" alt="")
        .row.align-items-center.justify-content-center(titulo="b.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Canales de comunicación
            p.mb-0 Es necesario determinar los canales en los que estará disponible, como sitios #[em web], WhatsApp, Messenger, Instagram, Telegram, mensajes de texto o sistemas de interacción por voz.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img8.png" alt="")
        .row.align-items-center.justify-content-center(titulo="c.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Volumen de conversaciones
            p.mb-0 Se debe estimar la cantidad de conversaciones que se gestionarán mensualmente, ya que este factor puede influir en la capacidad requerida y en los planes de precios disponibles.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img9.png" alt="")
        .row.align-items-center.justify-content-center(titulo="d.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Nivel de personalización
            p.mb-0 Debe establecerse el grado de personalización requerido, que puede variar desde un catálogo cerrado de opciones hasta sistemas capaces de procesar lenguaje natural de manera abierta.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img10.png" alt="")
        .row.align-items-center.justify-content-center(titulo="e.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Integraciones necesarias
            p.mb-0 Es importante identificar los sistemas que deberán conectarse con el #[em chatbot], como herramientas de gestión de relaciones con clientes, planificación de recursos empresariales o bases de datos propias.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img11.png" alt="")
        .row.align-items-center.justify-content-center(titulo="f.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Presupuesto disponible
            p.mb-0 Debe considerarse la inversión destinada a la plataforma, teniendo en cuenta que algunas ofrecen servicios gratuitos hasta cierto volumen de uso, mientras otras establecen costos fijos mensuales.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img12.png" alt="")
        .row.align-items-center.justify-content-center(titulo="g.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Conocimientos técnicos del equipo
            p.mb-0 Es necesario valorar las capacidades del equipo encargado de desarrollar y administrar el #[em chatbot], pues una plataforma no-code requiere conocimientos diferentes a una solución basada en código.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img13.png" alt="")
        .row.align-items-center.justify-content-center(titulo="h.")
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h5 Seguridad y privacidad
            p.mb-0 Deben revisarse los requisitos relacionados con la protección de la información y el manejo de datos, especialmente cuando el chatbot se implementa en sectores regulados como la banca o la salud.
          .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img(src="@/assets/curso/temas/t5/img14.png" alt="")
    p.mb-4 Es recomendable, antes de comprometerse con una plataforma, realizar pruebas con la versión gratuita o el plan de prueba que la mayoría de los proveedores ofrece. Estas pruebas permiten validar que la plataforma cumple con los requisitos del proyecto, identificar limitaciones que no eran evidentes en la documentación y estimar la curva de aprendizaje del equipo. Saltarse esta fase exploratoria suele llevar a sorpresas costosas en la fase de implementación.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t5/img15.svg" alt="")
          .tarjeta.bg02
            .p-4
              p.mb-0 Otro aspecto crítico es la portabilidad de los datos. Algunas plataformas permiten exportar los flujos conversacionales, las intenciones y las frases de entrenamiento en formatos estándar que facilitan la migración a otras herramientas. Otras, en cambio, mantienen estos datos en formatos propietarios que dificultan el cambio. Para proyectos de largo plazo, conviene preferir plataformas con buenas opciones de exportación y abiertas a estándares de la industria.
    p.mb-4 Para facilitar la decisión, la siguiente tabla guía la selección de la plataforma según el escenario más representativo del proyecto. Esta guía no es exhaustiva, pero proporciona un punto de partida razonable para equipos que enfrentan la decisión por primera vez:
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 6.
      span Guía de selección de plataforma según el escenario del proyecto
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Escenario del proyecto
            th Plataforma sugerida
            th Justificación
        tbody
          tr
            td Pequeña empresa con preguntas frecuentes en sitio web.
            td Tidio o Landbot.
            td Modalidad sin código, planes gratuitos disponibles, instalación rápida.
          tr
            td Negocio que vende por WhatsApp y redes sociales.
            td ManyChat o Landbot.
            td Integración nativa con WhatsApp Business, Messenger e Instagram.
          tr
            td Mediana empresa con integración a sistemas internos.
            td Dialogflow o Botpress.
            td Soporte para integraciones con APIs y motor de comprensión robusto.
          tr
            td Gran empresa con altos requisitos de seguridad.
            td Microsoft Bot Framework o Rasa.
            td Control total sobre los datos y posibilidad de despliegue en infraestructura propia.
          tr
            td Proyecto de aprendizaje o exploración técnica.
            td Rasa Open Source o Botpress.
            td Código abierto, gratuito, comunidad activa.
    p.mb-4 Esta guía debe interpretarse con flexibilidad: muchas plataformas se traslapan en sus capacidades y la mejor elección depende también de factores subjetivos como las preferencias del equipo o las relaciones comerciales preexistentes con los proveedores tecnológicos.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p Un aspecto adicional a considerar al elegir una plataforma es el ecosistema de integraciones disponibles. Las plataformas más maduras suelen contar con conectores nativos a las herramientas empresariales más usadas: sistemas de gestión de relaciones con clientes como Salesforce, HubSpot o Zoho; sistemas de gestión empresarial como SAP u Oracle; herramientas de mensajería como Slack o Microsoft Teams; plataformas de comercio electrónico como Shopify o WooCommerce.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Estas integraciones nativas reducen significativamente el tiempo y el costo de implementación al evitar desarrollos personalizados.
        p.mb-0 La calidad de la documentación de la plataforma es otro factor diferenciador. Una buena documentación incluye guías de inicio rápido, tutoriales paso a paso, ejemplos de código, referencia detallada de la interfaz de programación de aplicaciones y casos de estudio reales. Las plataformas con documentación deficiente generan curvas de aprendizaje empinadas y dependencia del soporte técnico, lo que ralentiza los proyectos y eleva los costos. Antes de adoptar una plataforma conviene revisar exhaustivamente su documentación pública y validar que cubre los casos de uso esperados.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t5/img16.png" alt="")
    
</template>

<script>
export default {
  name: 'Tema5',
}
</script>
