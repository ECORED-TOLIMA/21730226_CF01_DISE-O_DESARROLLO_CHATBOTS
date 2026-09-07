<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo aborda los fundamentos teóricos y prácticos del desarrollo de #[em chatbots], partiendo de la inteligencia artificial y el procesamiento del lenguaje natural como tecnologías que sustentan su funcionamiento. Presenta los principios, tipos, ventajas y aplicaciones de los #[em chatbots], así como las herramientas de #[em software] y los #[em frameworks] disponibles para su construcción y diseño. Asimismo, aborda la identificación y el alistamiento de fuentes de información, la estructuración de datos conversacionales y los principales elementos del diseño conversacional, como la voz, el tono, la personalidad y el manejo de situaciones imprevistas.

    p.mb-4 De esta manera, el aprendiz podrá comprender qué es un #[em chatbot], cómo funciona, dónde puede aplicarse, qué aspectos debe considerar para seleccionar una plataforma y cómo preparar la información necesaria para su desarrollo. Estos conocimientos sientan las bases para abordar el siguiente componente formativo, orientado a la configuración de parámetros, creación, verificación, ajuste y documentación técnica de los flujos conversacionales.

    .row.justify-content-center
      .col-lg-12.mb-4.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza los principales temas relacionados con el desarrollo de chatbots. Inicia con la inteligencia artificial y el lenguaje natural, integrando el aprendizaje automático, el aprendizaje profundo, la percepción, el razonamiento y sus aplicaciones; continúa con los chatbots, abordando su funcionamiento, tipos, ventajas y aplicaciones. Posteriormente, incorpora las herramientas de software y desarrollo de chatbots, considerando las alternativas no-code, low-code, código, integraciones y seguridad. Luego, presenta los frameworks de diseño conversacional, relacionados con las metodologías, el usuario, los diálogos, el manejo de errores y la validación. Finalmente, integra el alistamiento de datos y las técnicas para el desarrollo de flujos de conversación, considerando las fuentes de información, los datos conversacionales, la voz, el tono, la personalidad, las palabras clave y las intenciones.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

