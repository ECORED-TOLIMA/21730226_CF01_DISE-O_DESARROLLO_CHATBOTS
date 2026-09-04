export default {
  global: {
    Name: 'Fundamentos de chatbots y diseño de flujos conversacionales',
    Description:
      'Este componente aborda los fundamentos de la inteligencia artificial y el procesamiento del lenguaje natural como base de los chatbots; presenta sus tipos, ventajas y aplicaciones en la atención al cliente; orienta la selección de plataformas y la creación de flujos de conversación con voz, tono, personalidad y palabras clave para resolver problemas reales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inteligencia artificial: concepto y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Aplicaciones de la inteligencia artificial',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesamiento del lenguaje natural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y principios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Aplicaciones del procesamiento del lenguaje natural',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Chatbots',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y principios de funcionamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de chatbots',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ventajas y aplicaciones de los chatbots',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ventajas para las organizaciones y los usuarios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicaciones por sector',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de software para el desarrollo de chatbots',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto y tipos de plataformas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Criterios de selección de la plataforma',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Frameworks de diseño conversacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y metodologías',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Diseño centrado en el usuario',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Alistamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Identificación de fuentes de información',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Estructura de los datos conversacionales',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Técnicas para el desarrollo de flujos de conversación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Voz, tono y personalidad',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Palabras clave e intenciones',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Entidad',
      significado:
        'Dato concreto que el usuario menciona y que el chatbot debe extraer del mensaje, como ciudad, fecha o número de documento.',
    },
    {
      termino: 'Escalamiento',
      significado:
        'Transferencia de la conversación de un chatbot a un agente humano.',
    },
    {
      termino: 'Flujo de conversación',
      significado:
        'Secuencia de mensajes y respuestas que sigue el chatbot durante una sesión con el usuario.',
    },
    {
      termino: 'Framework de diseño conversacional',
      significado:
        'Conjunto de principios, metodologías y componentes técnicos que orientan la creación de la experiencia conversacional.',
    },
    {
      termino: 'Large Language Model',
      significado:
        'Modelo de lenguaje de gran escala, como GPT, Claude o Gemini, capaz de generar texto en lenguaje natural.',
    },
    {
      termino: 'Mensaje de respaldo',
      significado:
        'Respuesta que entrega el chatbot cuando no logra comprender la intención del usuario.',
    },
    {
      termino: 'Plataforma low-code',
      significado:
        'Herramienta que combina interfaces visuales con pequeños fragmentos de código para construir chatbots.',
    },
    {
      termino: 'Plataforma no-code',
      significado:
        'Herramienta que permite construir chatbots mediante interfaces gráficas, sin necesidad de programar.',
    },
    {
      termino: 'Software as a service',
      significado:
        'Modelo de distribución de software en el que las aplicaciones se alojan en la nube y se acceden por internet.',
    },
    {
      termino: 'Token',
      significado:
        'Unidad mínima de análisis en procesamiento del lenguaje natural: una palabra, parte de palabra o carácter.',
    },
  ],
  referencias: [
    {
      referencia:
        'Jurafsky, D. y Martin, J. (2023). Speech and Language Processing (3.ª ed., borrador). Stanford University.',
      link: '',
    },
    {
      referencia: 'Landbot. (2024). Documentación oficial de Landbot.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2024). Documentación de Azure AI Bot Service.',
      link: '',
    },
    {
      referencia:
        'MinTIC. (2023). Lineamientos para la implementación de asistentes virtuales en entidades públicas. Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia.',
      link: '',
    },
    {
      referencia:
        'Pérez, M. (2021). Diseño de chatbots: una guía práctica para crear conversaciones efectivas. Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Rasa Technologies. (2024). Rasa Open Source Documentation.',
      link: '',
    },
    {
      referencia:
        'Russell, S. y Norvig, P. (2021). Inteligencia Artificial: un enfoque moderno (4.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Weizenbaum, J. (1966). ELIZA — a computer program for the study of natural language communication between man and machine. Communications of the ACM, 9(1), 36-45.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
