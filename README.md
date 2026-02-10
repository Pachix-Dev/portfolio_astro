# Portfolio Astro

ES: Portfolio personal bilingue (es/en) construido con Astro y Tailwind CSS. Incluye secciones de presentacion, proyectos, experiencia y contacto con contenido desde colecciones de Astro.

EN: Bilingual personal portfolio (es/en) built with Astro and Tailwind CSS. It includes presentation, projects, experience, and contact sections, with content sourced from Astro collections.

## Features / Caracteristicas

- ES: Sitio bilingue con rutas / y /en.
- EN: Bilingual site with / and /en routes.
- ES: Colecciones de contenido para proyectos y experiencia.
- EN: Content collections for projects and experience.
- ES: Estilos con Tailwind CSS y animaciones.
- EN: Tailwind CSS styling with animations.
- ES: Adapter Node en modo standalone para despliegue en server.
- EN: Node adapter in standalone mode for server deployment.

## Stack

- Astro 5
- Tailwind CSS 4
- @astrojs/node

## Project Structure / Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── experience/
│   │   │   ├── en/
│   │   │   └── es/
│   │   └── proyects/
│   │       ├── en/
│   │       └── es/
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   │   ├── en/
│   │   └── proyecto/
│   └── styles/
└── package.json
```

## Content / Contenido

ES: Las colecciones se definen en [src/content/config.ts](src/content/config.ts). Los contenidos viven en:

- [src/content/proyects](src/content/proyects)
- [src/content/experience](src/content/experience)

EN: Collections are defined in [src/content/config.ts](src/content/config.ts). Content lives in the same folders above.

### Add a project / Agregar un proyecto

ES: Crea un archivo en [src/content/proyects/es](src/content/proyects/es) o [src/content/proyects/en](src/content/proyects/en) con frontmatter como este.
EN: Create a file in the same folders with frontmatter like this.

```md
---
locale: 'es'
title: 'Coffee Time'
description: 'Landing page para cafeteria.'
link: 'https://tu-proyecto.example'
repo: 'https://github.com/tuusuario/tu-repo'
image: '/images/coffee-time.jpg'
tags: ['landing', 'marketing']
featured: true
date: 2024-01-15
role: 'Frontend'
technologies: ['Astro', 'Tailwind']
highlights: ['100/100 Lighthouse', 'SSR con Astro']
color: '#1f2937'
---
```

### Add experience / Agregar experiencia

ES: Crea un archivo en [src/content/experience/es](src/content/experience/es) o [src/content/experience/en](src/content/experience/en).
EN: Create a file in the same folders with frontmatter like this.

```md
---
title: 'Frontend Developer'
company: 'Acme'
location: 'Remote'
type: 'Full-time'
startDate: '2022-03'
endDate: '2024-01'
description: 'Responsable de construir UI y optimizar rendimiento.'
responsabilities: ['UI components', 'Design system']
achievements: ['-30% TTI', '+15% conversion']
technologies: ['React', 'TypeScript', 'Astro']
---
```

## Commands / Comandos

| Command / Comando | Action / Accion                             |
| :---------------- | :------------------------------------------ |
| `npm install`     | Instala dependencias / Install dependencies |
| `npm run dev`     | Dev server en `localhost:4321`              |
| `npm run build`   | Build de produccion / Production build      |
| `npm run preview` | Previsualiza el build localmente / Preview  |

## Environment Variables / Variables de entorno

ES: Se usa la variable publica `SCORE_API_ENDPOINT`.
EN: Public env var `SCORE_API_ENDPOINT` is used.

```sh
SCORE_API_ENDPOINT="https://tu-endpoint.example"
```

## Deployment Notes / Notas de despliegue

ES: El proyecto usa `@astrojs/node` en modo standalone. El build genera un server Node listo para desplegar.
EN: Uses `@astrojs/node` in standalone mode. Build output is a ready-to-deploy Node server.

## License / Licencia

MIT
