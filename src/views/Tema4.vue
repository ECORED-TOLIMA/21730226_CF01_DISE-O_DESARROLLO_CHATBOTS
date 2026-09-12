<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ventajas y aplicaciones de los #[em chatbots]
    figure.mb-4
      img(src="@/assets/curso/temas/t4/img1.png" alt="")
    p.mb-0 Después de comprender qué es un #[em chatbot] y cómo se clasifica, es importante analizar por qué las organizaciones invierten en esta tecnología y dónde se aplica con mayor éxito. A continuación, se examinan, primero, las ventajas que aportan los #[em chatbots] tanto a las organizaciones como a los usuarios; segundo, las aplicaciones más representativas por sector productivo, con especial énfasis en el sector servicios.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Ventajas para las organizaciones y los usuarios
    p.mb-4 La adopción de #[em chatbots] aporta beneficios significativos, tanto para las organizaciones como para los usuarios finales. Estas ventajas explican el crecimiento exponencial del mercado de #[em chatbots] en los últimos años y la masificación de la tecnología en empresas de todos los tamaños. Entre las principales ventajas se destacan las siguientes:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Disponibilidad permanente")
            p.mb-0 Los #[em chatbots] atienden consultas en cualquier momento, los siete días de la semana, sin depender de horarios laborales. Esto resulta especialmente valioso para clientes que requieren atención fuera del horario de oficina o en zonas horarias distintas.
          .row(titulo="Reducción de costos operativos")
            p.mb-0 Al automatizar tareas repetitivas que antes requerían personal humano dedicado, lo que libera presupuesto para invertir en tareas de mayor valor agregado y permite optimizar los recursos destinados a la atención.
          .row(titulo="Entrega de respuestas inmediatas")
            p.mb-0 Evita filas de espera y permite que los usuarios reciban información de manera rápida, mejorando significativamente la experiencia y facilitando la atención de consultas frecuentes.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t4/img2.png" alt="")
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t4/img3.svg" alt="")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Atención simultánea de usuarios")
            p.mb-0 Permite atender a miles de usuarios de manera simultánea, capacidad imposible para un equipo humano, especialmente durante períodos de alta demanda o cuando aumenta considerablemente el volumen de consultas.
          .row(titulo="Consistencia en las respuestas")
            p.mb-0 Los #[em chatbots] entregan información estandarizada y libre de errores humanos derivados de la fatiga o la falta de información, garantizando mayor uniformidad en las diferentes interacciones con los usuarios.
          .row(titulo="Generación de datos sobre el comportamiento del cliente")
            p.mb-0 Cada interacción queda registrada y permite analizar patrones, identificar oportunidades de mejora y descubrir necesidades no atendidas. Estos datos también facilitan la comprensión de las preferencias y comportamientos de los usuarios.
          .row(titulo="Escalabilidad y liberación del talento humano")
            p.mb-0 Permite ampliar la capacidad de atención sin necesidad de contratar más personal, lo cual es crítico para empresas en crecimiento. Además, libera al talento humano para concentrarse en casos complejos que requieren empatía, creatividad o criterio profesional.
    p.mb-4 Las ventajas para el usuario también son significativas. Los clientes valoran la posibilidad de obtener información a cualquier hora, sin esperas, sin necesidad de identificarse para cada consulta básica y sin tener que repetir su problema a varios agentes. Adicionalmente, muchos usuarios prefieren los canales digitales sobre las llamadas telefónicas, especialmente las generaciones más jóvenes que han crecido con la mensajería instantánea. Un #[em chatbot] bien diseñado se alinea con estas preferencias y mejora la percepción que el usuario tiene de la marca.
    .row.justify-content-center.mb-0
      .col-lg-10
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t4/img4.svg" alt="")
          .tarjeta.bg02
            .p-4
              p.mb-0 Es importante reconocer también los riesgos y desafíos asociados con los #[em chatbots]. Un #[em chatbot] mal diseñado puede frustrar al usuario, dañar la reputación de la marca y generar pérdidas económicas. Los riesgos más comunes incluyen respuestas incorrectas, incapacidad para manejar consultas complejas, falta de empatía en situaciones sensibles y problemas de seguridad si el #[em chatbot] maneja información personal o financiera. Por estas razones, la implementación de un #[em chatbot] debe acompañarse de procesos de calidad, monitoreo continuo y mecanismos efectivos de escalamiento a agentes humanos cuando sea necesario.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Aplicaciones por sector
    p.mb-4 Los #[em chatbots] se aplican en una amplia variedad de contextos productivos. La siguiente tabla muestra las aplicaciones más comunes en el sector servicios, donde se concentra la mayor adopción de esta tecnología en Colombia y el mundo. Cada sector ha desarrollado casos de uso específicos que aprovechan las ventajas de los #[em chatbots] para resolver problemas concretos de la operación diaria:
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 4.
      span Aplicaciones de los #[em chatbots] en el sector servicios
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Sector
            th Aplicación
            th Beneficio principal
        tbody
          tr(v-for="fila in sectores" :key="fila.sector")
            td {{ fila.sector }}
            td(v-html="fila.aplicacion")
            td {{ fila.beneficio }}
    p.mb-4 Como se evidencia en la tabla, los #[em chatbots] se han integrado en sectores que tradicionalmente requerían atención telefónica o presencial intensiva. Su implementación permite optimizar procesos internos y facilitar diferentes servicios de atención, orientación y soporte. Cada aplicación debe responder a las necesidades específicas de la organización y a las características de sus usuarios.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img.h-100.tema2-imagen-ajustada(src="@/assets/curso/temas/t4/img5.png" alt="")
      .col-lg-7.bg-color-1.p-4
        p.mb-0 En Colombia, sectores como la banca, las telecomunicaciones, las aseguradoras y los servicios públicos han sido pioneros en la adopción de #[em chatbots]. Bancos como Bancolombia, Davivienda y BBVA cuentan con asistentes virtuales en sus canales digitales que atienden millones de consultas al mes. En el sector público, entidades como la DIAN, la Secretaría de Movilidad de Bogotá y diversas alcaldías han incorporado #[em chatbots] para facilitar trámites ciudadanos. Las pequeñas y medianas empresas también se han sumado a esta tendencia gracias a la reducción de costos de las plataformas #[em no-code].
    .row.align-items-center.mb-4
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema1-icono(src="@/assets/curso/temas/t4/img6.svg" alt="")
      .col
        p.mb-0 El retorno de inversión de un #[em chatbot] bien implementado se materializa en varios frentes: reducción de costos operativos por menor demanda de personal de atención, aumento de la satisfacción del cliente, incremento de las conversiones en comercio electrónico, captura de datos para análisis de comportamiento y posicionamiento de la marca como innovadora.
    p.mb-4 Para medir el éxito de un #[em chatbot] resulta indispensable definir indicadores clave de desempeño desde el inicio del proyecto. Estos indicadores permiten a la organización validar el retorno de la inversión y orientar las mejoras continuas. A continuación, se presentan los indicadores más utilizados en la industria.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        TabsA.color-acento-botones.tema4-tabs
          .tarjeta.tema1-destacado.p-4(v-for="item in indicadores.slice(0, 3)" :key="item.titulo" :titulo="item.titulo")
            h5 {{ item.titulo }}
            p(v-html="item.descripcion")
            p.mb-0
              strong Valor de referencia:
              |  
              span(v-html="item.referencia")
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t4/img7.svg" alt="")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t4/img8.svg" alt="")
      .col-lg-9
        TabsA.color-acento-botones.tema4-tabs
          .tarjeta.tema1-destacado.p-4(v-for="item in indicadores.slice(3)" :key="item.titulo" :titulo="item.titulo")
            h5 {{ item.titulo }}
            p(v-html="item.descripcion")
            p.mb-0
              strong Valor de referencia:
              |  
              span(v-html="item.referencia")
    p.mb-4 Más allá del retorno económico directo, la implementación de un #[em chatbot] puede generar beneficios intangibles igualmente importantes. Entre ellos se destacan el posicionamiento de la organización como innovadora y orientada al cliente, la diferenciación frente a competidores que aún no han adoptado la tecnología, la mejora del clima laboral del equipo de atención al cliente al liberarlos de tareas repetitivas, y la generación de aprendizaje organizacional sobre las preferencias y comportamientos de los usuarios.
    .row.justify-content-center.mb-0
      .col-lg-10
        .titulo-pastilla(data-aos="fade-down")
          img(src="@/assets/curso/temas/t4/img9.svg" alt="")
          p.mb-0 Estos beneficios consolidan la posición de los #[em chatbots] como una inversión estratégica más que como un gasto operativo.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    sectores: [
      {
        sector: 'Banca y finanzas.',
        aplicacion:
          'Consulta de saldo, transferencias, bloqueo de tarjetas, asesoría sobre productos.',
        beneficio: 'Disponibilidad permanente y mayor seguridad transaccional.',
      },
      {
        sector: 'Comercio electrónico.',
        aplicacion:
          'Recomendación de productos, seguimiento de pedidos, gestión de devoluciones.',
        beneficio:
          'Aumento de la conversión y reducción de carritos abandonados.',
      },
      {
        sector: 'Salud.',
        aplicacion:
          'Agendamiento de citas, recordatorios, primer <em>triaje</em> de síntomas, información sobre medicamentos.',
        beneficio: 'Descongestión de líneas y mejor experiencia del paciente.',
      },
      {
        sector: 'Educación.',
        aplicacion:
          'Resolución de dudas frecuentes, soporte a estudiantes, evaluaciones automatizadas.',
        beneficio: 'Acompañamiento personalizado a gran escala.',
      },
      {
        sector: 'Gobierno digital.',
        aplicacion:
          'Trámites en línea, información ciudadana, peticiones, quejas y reclamos.',
        beneficio:
          'Acercamiento del Estado a la ciudadanía con menores tiempos.',
      },
      {
        sector: 'Recursos humanos.',
        aplicacion:
          'Información a candidatos, inducción de nuevos empleados, consultas de nómina.',
        beneficio:
          'Eficiencia en procesos internos y mejor experiencia del colaborador.',
      },
      {
        sector: 'Turismo.',
        aplicacion:
          'Reservas, recomendaciones de destinos, atención multilingüe.',
        beneficio: 'Atención global y personalización del servicio.',
      },
      {
        sector: 'Telecomunicaciones.',
        aplicacion:
          'Soporte técnico, consulta de planes, recarga de saldo, reporte de fallas.',
        beneficio: 'Reducción de tiempos de espera y mayor autoservicio.',
      },
    ],
    indicadores: [
      {
        titulo: 'Tasa de comprensión',
        descripcion:
          'Porcentaje de mensajes del usuario que el <em>chatbot</em> interpreta correctamente.',
        referencia: 'idealmente superior al 80 %.',
      },
      {
        titulo: 'Tasa de finalización exitosa',
        descripcion:
          'Porcentaje de conversaciones que terminan resolviendo la consulta.',
        referencia: 'idealmente superior al 70 %.',
      },
      {
        titulo: 'Tasa de escalamiento',
        descripcion:
          'Porcentaje de conversaciones transferidas a agentes humanos.',
        referencia: 'entre 10 % y 25 % según el sector.',
      },
      {
        titulo: 'Tiempo promedio de conversación',
        descripcion: 'Duración media desde el saludo hasta el cierre.',
        referencia: 'entre 1 y 3 minutos para <em>chatbots</em> simples.',
      },
      {
        titulo: 'Satisfacción del usuario',
        descripcion:
          'Calificación promedio que los usuarios dan al <em>chatbot</em>.',
        referencia: 'idealmente superior a 4 sobre 5.',
      },
      {
        titulo: 'Cobertura de intenciones',
        descripcion:
          'Porcentaje de los temas relevantes que el <em>chatbot</em> atiende.',
        referencia: 'crece progresivamente con cada versión.',
      },
    ],
  }),
}
</script>
