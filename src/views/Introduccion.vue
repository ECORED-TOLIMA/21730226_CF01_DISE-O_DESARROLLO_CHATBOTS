<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 La era de la digitalización ha transformado profundamente la forma en que las personas y las organizaciones se comunican. En el pasado, las vías de comunicación eran limitadas y predominantemente unidireccionales; en la actualidad, los teléfonos móviles inteligentes, las redes sociales y las aplicaciones de mensajería han democratizado la interacción y han elevado las expectativas de los usuarios, quienes demandan respuestas inmediatas, personalizadas y disponibles las 24 horas del día. Las organizaciones, conscientes de este cambio, se han visto obligadas a repensar la forma en que se relacionan con sus clientes y a buscar tecnologías que permitan responder con agilidad y consistencia.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/intro/img1.png" alt="")
      .col-lg-5
        p.mb-0 En este contexto, las empresas y entidades de todos los sectores enfrentan el reto de gestionar un volumen creciente de consultas, solicitudes y reclamos. Atender manualmente esta demanda resulta costoso e ineficiente, lo que ha impulsado la adopción de soluciones tecnológicas basadas en inteligencia artificial que automatizan la atención sin sacrificar la calidad del servicio. Entre estas soluciones se destacan los #[em chatbots], programas informáticos capaces de mantener conversaciones con seres humanos a través de texto o voz, ofreciendo respuestas en tiempo real y operando de forma simultánea con miles de usuarios.

    p.mb-4 Los #[em chatbots] se han posicionado como una herramienta clave para la transformación digital, debido a su capacidad para automatizar la atención, facilitar la interacción con los usuarios y optimizar diferentes procesos. Su uso se ha extendido a diversos sectores, entre los que se destacan:

    .row.mb-4
      .col-md-6.col-lg-4.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/intro/img2.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center Banca
      .col-md-6.col-lg-4.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/intro/img3.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center Salud
      .col-md-6.col-lg-4.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/intro/img4.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center Comercio electrónico
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/intro/img5.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center Educación
      .col-md-6.col-lg-4.mb-4.mb-md-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/intro/img6.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center Gobierno digital
      .col-md-6.col-lg-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/intro/img7.svg" alt="")
          .tarjeta.tarjeta--colsecundario.h-100
            .p-4
              h5.mb-0.text-center Telecomunicaciones

    p.mb-4 Las pequeñas y medianas empresas también se han sumado a esta tendencia, aprovechando plataformas de bajo costo y sin necesidad de programación que les permiten implementar soluciones conversacionales en pocas horas.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Este componente formativo desarrolla los fundamentos teóricos y prácticos necesarios para que el aprendiz comprenda qué es un #[em chatbot], cómo funciona, cuáles son sus ventajas y aplicaciones, y qué herramientas existen para construirlo. Asimismo, aborda las técnicas para diseñar flujos de conversación, configurar parámetros conversacionales y alistar los datos requeridos, sentando las bases para implementar un #[em chatbot] simple aplicable a un problema real del sector productivo.

    p.mb-4 Por lo anterior, para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure
          .video
            iframe(width="1331" height="749" src="https://www.youtube.com/embed/j-I5NB9DhdY" title="Chatbot Fundamentals and Conversational Flow Design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
