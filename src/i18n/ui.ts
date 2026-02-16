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
    siteDescription: 'Lista de proyectos realizados',
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
    aboutParagraph1: 'Más de 7 años de experiencia en aplicaciones web dinámicas y receptivas 🧑🏽‍💻 codificando y creando elementos web para personas increíbles de todo el mundo. Apasionado por aprender nuevas tecnologías y mejorar continuamente mis habilidades de programación.',
    aboutParagraph2: 'Especialista en estrategia tecnológica, transformación digital y plataformas B2B, con amplia experiencia liderando infraestructura en la nube, desarrollo de productos digitales y optimización de costos mediante soluciones in-house. Enfoque en alinear la tecnología con objetivos de negocio, escalabilidad, seguridad y eficiencia operativa.',
    aboutParagraph3: 'Mi objetivo es contribuir al éxito de los proyectos mediante soluciones innovadoras y eficientes, siempre manteniendo un enfoque centrado en el usuario y las mejores prácticas de desarrollo.',
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
    siteDescription: 'List of completed projects',
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
    aboutParagraph1: 'Over 7 years of experience in dynamic and responsive web applications 🧑🏽‍💻 coding and creating web elements for amazing people around the world. Passionate about learning new technologies and continuously improving my programming skills.',
    aboutParagraph2: 'Specialist in technology strategy, digital transformation, and B2B platforms, with extensive experience leading cloud infrastructure, digital product development, and cost optimization through in-house solutions. Focus on aligning technology with business objectives, scalability, security, and operational efficiency.',
    aboutParagraph3: 'My goal is to contribute to the success of projects through innovative and efficient solutions, always maintaining a user-centered approach and best development practices.',
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
