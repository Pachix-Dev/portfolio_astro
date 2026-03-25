export const locales = ['es', 'en'] as const
export type AppLocale = (typeof locales)[number]

export const defaultLocale: AppLocale = 'es' 

export const messages = {
  es: {
    menu:{
      home: 'Inicio',
      about: 'Sobre mi',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    text_1: 'Hola, soy Fabian',  
    letscreate: '¡Vamos a crear algo increíble juntos!',
    hireme: 'Contrátame',  
    siteTitle: 'Fabian Yapura Claros',
    siteDescription: 'Portafolio de Fabian Yapura Claros, desarrollador web con más de 10 años de experiencia en aplicaciones dinámicas, transformación digital y soluciones tecnológicas innovadoras.',
    featuredListLabel: 'Proyectos destacados',
    backToHome: 'Volver al inicio',
    featuredProject: 'Proyecto destacado',
    scoreLabel: 'Puntuación',
    scoreLoading: 'Cargando...',
    viewProject: 'Ver proyecto',
    viewCode: 'Ver codigo',
    screenshotOf: 'Captura del proyecto',
    technologies: 'Tecnologias',
    tags: 'Etiquetas',
    highlights: 'Logros destacados',
    languageName: 'Espanol',
    languageSwitchLabel: 'Idioma',
    pageSuffix: 'Proyectos Dev',
    experience: 'Experiencia',
    aboutme: 'Sobre mi',
    iam: 'Hola! soy Fabian Yapura Claros',    
    aboutParagraph1: 'Ingeniero en Sistemas con más de 10 años de experiencia en desarrollo de software, arquitectura web y soluciones digitales end-to-end. Especializado en el desarrollo Full Stack con React, Next.js, Astro, Node.js y NestJS, así como en el diseño de APIs REST escalables, arquitecturas SPA y SSR orientadas al rendimiento, la seguridad y la experiencia de usuario.',
    aboutParagraph2: 'He participado en el desarrollo de plataformas SaaS, soluciones B2B, e-commerce y sistemas de alto tráfico, integrando tecnologías de Inteligencia Artificial Generativa (LLMs) para automatización de procesos y generación inteligente de contenido. Adicionalmente, tengo experiencia en la implementación y optimización de Salesforce Marketing Cloud, así como en la administración de entornos empresariales en Microsoft 365, contribuyendo a la transformación digital, la eficiencia operativa y la mejora de estrategias de marketing y productividad organizacional.',
    cloudarchitecture: 'Arquitectura en la nube',
    webdevelopment: 'Desarrollo de aplicaciones web',
    problemsolving: 'Resolución de problemas',
    cloud_description: 'Diseño e implementación de infraestructuras escalables, seguras y de alta disponibilidad en la nube.',
    webdev_description: 'Desarrollo de aplicaciones web dinámicas y receptivas utilizando tecnologías modernas para garantizar rendimiento, seguridad y experiencia de usuario.',
    problem_solving_description: 'Capacidad para analizar problemas complejos, identificar la causa raíz y crear soluciones prácticas y eficientes.',
    responsabilities: 'Responsabilidades',
    achievements: 'Logros',
    footer_text: 'Hagamos algo increíble juntos!',
    start: "Comienza por",
    sayhi: 'decirme hola!',
    skillsTitle: 'Habilidades Técnicas',
    skillsDescription: 'Mi principal área de especialización es el desarrollo full-stack. Experiencia en tecnologías modernas para crear aplicaciones web escalables y de alto rendimiento.'
  },
  en: {
    menu:{
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    text_1: "Hello, I'm Fabian",
    letscreate: "Let's create something amazing together!",
    hireme: 'Hire me',
    siteTitle: 'Fabian Yapura Claros',
    siteDescription: 'Portfolio of Fabian Yapura Claros, web developer with over 10 years of experience in dynamic applications, digital transformation, and innovative technological solutions.',
    featuredListLabel: 'Featured projects',
    backToHome: 'Back to home',
    featuredProject: 'Featured project',
    scoreLabel: 'Score',
    scoreLoading: 'Loading...',
    viewProject: 'View project',
    viewCode: 'View code',
    screenshotOf: 'Project screenshot',
    technologies: 'Technologies',
    tags: 'Tags',
    highlights: 'Highlights',
    languageName: 'English',
    languageSwitchLabel: 'Language',
    pageSuffix: 'Dev Projects',
    experience: 'Experience',
    aboutme: 'About me',
    iam: "Hello! I'm Fabian Yapura Claros",
    aboutParagraph1: 'end-to-end digital solutions. Specialized in Full Stack development with React, Next.js, Astro, Node.js, and NestJS, as well as the design of scalable REST APIs, SPA and SSR architectures focused on performance, security, and user experience. Experience includes developing SaaS platforms, B2B solutions, e-commerce platforms, and high-traffic systems, integrating Generative',
    aboutParagraph2: 'I have participated in the development of SaaS platforms, B2B solutions, e-commerce platforms, and high-traffic systems, integrating Generative Artificial Intelligence (LLM) technologies for process automation and intelligent content generation. Additionally, I have experience in the implementation and optimization of Salesforce Marketing Cloud, as well as in the administration of enterprise environments in Microsoft 365, contributing to digital transformation, operational efficiency, and the improvement of marketing strategies and organizational productivity.',

    cloudarchitecture: 'Cloud Architecture',
    webdevelopment: 'Web Application Development',
    problemsolving: 'Problem Solving',
    cloud_description: 'Design and implementation of scalable, secure, and highly available infrastructures in the cloud.',
    webdev_description: 'Development of dynamic and responsive web applications using modern technologies to ensure performance, security, and user experience.',
    problem_solving_description: 'Ability to analyze complex problems, identify root causes, and create practical and efficient solutions.',
    responsabilities: 'Responsibilities',
    achievements: 'Achievements',
    footer_text: "Let's create something amazing together!",
    start: "Start by",
    sayhi: 'saying hi!',
    skillsTitle: 'Technical Skills',
    skillsDescription: 'My main area of expertise is full-stack development. Experience in modern technologies to create scalable and high-performance web applications.',
  }
} as const

export function normalizeLocale(locale: string | undefined): AppLocale {
  if (!locale) return defaultLocale
  return locale.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function getMessages(locale: string | undefined) {
  const lang = locales.includes((locale as AppLocale)) ? (locale as AppLocale) : defaultLocale
  return messages[lang]
}
