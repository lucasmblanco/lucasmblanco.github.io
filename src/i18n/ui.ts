import { p1 as bioEn } from '../content/en/bio-paragraphs'; 
import { p1 as techEn } from '../content/en/tech'; 
import { p1 as bioEs } from '../content/es/bio-paragraphs'; 
import { p1 as techEs } from '../content/es/tech'; 


export const languages = {
    es: 'Español',
    en: 'English',
  };
  
  export const defaultLang = 'es';
  
export const ui = {
  es: {
    'nav.projects': 'proyectos',
    'nav.cv': 'curriculum',
    'nav.contact': 'hablemos',
    'nav.me': 'sobre mi',
    'header.light-toggle': 'oscuro',
    'header.dark-toggle': 'claro',
    'bio.gretting': 'Me llamo Lucas,', 
    'bio.p1': bioEs, 
    'tech.p1': techEs,
    'projects.title': 'Proyectos', 
    'projects.subtitle': 'y cosas copadas.',
    'email.message': 'tocá para copiar',
    'exp.current': 'actualmente estoy en', 
    'exp.date_current': '2024 - Presente'
},
    en: {
      'nav.projects': 'projects',
      'nav.contact': "let's talk",
      'nav.me': 'about me',
      'header.light-toggle': 'dark',
      'header.dark-toggle': 'light', 
      'bio.gretting': "Hi, I'm Lucas!", 
      'bio.p1': bioEn, 
      'tech.p1': techEn,
      'projects.title': 'Projects', 
      'projects.subtitle': 'and other stuffs.',
      'email.message': 'touch to copy',
      'exp.current': 'currently working at', 
      'exp.date_current': '2024 - Present'
    },
  } as const;

export const showDefaultLang = false;
  
