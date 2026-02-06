import type { AppLocale } from './ui'

export const routes: Record<AppLocale, Record<string, string>> = {
  es: {
    home: '/',
    about: '/sobre-mi',
    projects: '/proyectos',
    experience: '/experiencia',
    contact: '/contacto',
  },
  en: {
    home: '/en/',
    about: '/en/about-me',
    projects: '/en/projects',
    experience: '/en/experience',
    contact: '/en/contact',
  }  
}

export function getRoute(locale: AppLocale, key: string): string {
  return routes[locale]?.[key] ?? routes['es'][key] ?? '/'
}