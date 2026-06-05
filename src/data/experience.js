const techColors = {
  Vue: '4FC08D',
  React: '61DAFB',
  MySQL: '4479A1',
  AdonisJS: '5A45FF',
  JavaScript: 'F7DF1E',
  TypeScript: '3178C6',
  'Node.js': '339933',
  Tailwind: '06B6D4',
  PHP: '777BB4',
  HTML: 'E34F26',
  CSS: '1572B6',
}

export function techColorHex(tag) {
  return techColors[tag] ?? '64748B'
}

export const experienceItems = [
  {
    id: 'leren',
    company: 'Leren',
    links: [{ href: 'https://leren.com.ar/' }],
    role: {
      es: 'Desarrollador Full Stack · Producto',
      en: 'Full Stack · Product Developer',
    },
    period: {
      es: 'Julio 2025 – Actualidad',
      en: 'July 2025 – Present',
      datetime: '2025-07',
    },
    summary: {
      es: 'Desarrollo de productos SaaS para e-commerce en el ecosistema Tiendanube: sistema interno LerenTools, aplicaciones embebidas y herramientas utilizadas por merchants reales.',
      en: 'Development of SaaS products for e-commerce in the Tiendanube ecosystem: LerenTools internal system, embedded applications and tools used by real merchants.',
    },
    highlights: {
      es: [
        'Desarrollo y evolución de funcionalidades en LerenTools (panel y API) con datos sincronizados de tiendas Tiendanube.',
        'Construcción de aplicaciones web completas para storefront y checkout utilizando React SDK y herramientas propias de la plataforma.',
        'Desarrollo de productos personalizables orientados a fidelización, experiencia de compra y conversión.',
        'Diseño e implementación de widgets conectados a APIs para interacción directa con usuarios finales.',
        'Trabajo en equipos multidisciplinarios junto a diseño, producto y operaciones utilizando metodologías ágiles.',
        'Participación en decisiones de arquitectura, escalabilidad y modelado de datos sobre una plataforma en constante crecimiento.',
        'Introducción a sistemas de suscripciones, procesamiento de pagos (Mercado Pago) y AWS.',
        'Desarrollo de flujos de importación y exportación de datos según distintas necesidades operativas del negocio.',
      ],
      en: [
        'Development and evolution of features in LerenTools (panel and API) with synchronized Tiendanube store data.',
        'Building complete web applications for storefront and checkout using the React SDK and proprietary platform tools.',
        'Development of customizable products focused on loyalty, shopping experience and conversion.',
        'Design and implementation of API-connected widgets for direct interaction with end users.',
        'Working in multidisciplinary teams with design, product and operations using agile methodologies.',
        'Participation in architecture, scalability and data modeling decisions on a constantly growing platform.',
        'Introduction to subscription systems, payment processing (Mercado Pago) and AWS.',
        'Development of data import and export flows tailored to different operational business needs.',
      ],
    },
    tags: ['Vue', 'React', 'TypeScript', 'Node.js', 'MySQL', 'AdonisJS', 'JavaScript', 'Tailwind'],
  },
  {
    id: 'ro-medical',
    company: 'RO Medical',
    links: [{ href: 'https://romedicalart.com/' }],
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
    period: {
      es: 'Noviembre 2024 – Abril 2025',
      en: 'November 2024 – April 2025',
      datetime: '2024-11',
    },
    summary: {
      es: 'Mantenimiento y evolución del back office para optimizar procesos y escalar el sistema.',
      en: 'Maintenance and evolution of the back-office system to optimize processes and scale the platform.',
    },
    highlights: {
      es: [
        'Refactorización y optimización de código en JavaScript y PHP, mejorando tiempos de respuesta.',
        'Desarrollo de nuevas secciones del sistema, mejorando usabilidad y experiencia de usuario.',
        'Resolución de errores en tiempo real para mantener disponibilidad y reducir downtime.',
        'Colaboración con equipos multidisciplinarios adaptando el sistema a necesidades del negocio.',
        'Integración de herramientas de comunicación, automatización y gestión de procesos internos.',
        'Mantenimiento y evolución de un sistema utilizado diariamente en entornos productivos.',
        'Integración de modelos GPT de OpenAI para lectura y procesamiento automatizado de archivos.',
      ],
      en: [
        'Refactoring and optimization of JavaScript and PHP code, improving response times.',
        'Development of new system sections, enhancing usability and user experience.',
        'Real-time bug fixing to maintain availability and reduce downtime.',
        'Collaboration with multidisciplinary teams adapting the system to business needs.',
        'Integration of communication, automation and internal process management tools.',
        'Maintenance and evolution of a system used daily in production environments.',
        'OpenAI GPT integration for automated file reading and processing.',
      ],
    },
    tags: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    id: 'wapifirma',
    company: 'WapiFirma',
    links: [{ href: 'https://wapifirma.com/' }],
    role: {
      es: 'Desarrollador Front-end',
      en: 'Front-end Developer',
    },
    period: {
      es: 'Marzo 2024 – Mayo 2024',
      en: 'March 2024 – May 2024',
      datetime: '2024-03',
    },
    summary: {
      es: 'Desarrollo front-end de una plataforma de firma de documentos vía WhatsApp.',
      en: 'Front-end development of a document signing platform via WhatsApp.',
    },
    highlights: {
      es: [
        'Implementación de interfaces responsivas utilizando Vue.js.',
        'Integración con APIs para gestión de documentos y solicitudes de firma.',
        'Optimización de experiencia de usuario y rendimiento de la aplicación.',
        'Mantenimiento evolutivo, corrección de errores y despliegue de nuevas funcionalidades.',
        'Colaboración continua con equipos de backend para el desarrollo de soluciones integradas.',
      ],
      en: [
        'Implementation of responsive interfaces using Vue.js.',
        'API integration for document management and signature requests.',
        'User experience and application performance optimization.',
        'Evolutionary maintenance, bug fixes and deployment of new features.',
        'Ongoing collaboration with back-end teams for integrated solution development.',
      ],
    },
    tags: ['Vue', 'Tailwind', 'HTML', 'JavaScript', 'Node.js'],
  },
]

export const educationItem = {
  school: { es: 'Escuela Da Vinci', en: 'Escuela Da Vinci' },
  href: 'https://davinci.edu.ar/',
  degree: {
    es: 'Tecnicatura Superior en Diseño y Programación Web',
    en: 'Higher Technician in Web Design and Development',
  },
  period: {
    es: 'Agosto 2021 – Agosto 2024',
    en: 'August 2021 – August 2024',
    datetime: '2021-08',
  },
  details: {
    es: 'Desarrollo web, PWA, marketing digital, APIs, ecosistema web e IoT.',
    en: 'Web development, PWA, digital marketing, APIs, web ecosystem and IoT.',
  },
}
