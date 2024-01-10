import { p1 as p1English}  from '../content/en/bio-paragraphs'; 
import { p1 as p1Spanish}  from '../content/es/bio-paragraphs'; 

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
    'header.light-toggle': 'oscuro',
    'header.dark-toggle': 'claro',
    'bio.gretting': 'Me llamo Lucas,', 
    'bio.p1': p1Spanish, 
 
    'projects.title': 'Proyectos', 
    'projects.subtitle': 'y cosas copadas.'
    
},
    en: {
      'nav.projects': 'projects',
      'nav.contact': "let's talk",
      'header.light-toggle': 'dark',
      'header.dark-toggle': 'light', 
      'bio.gretting': "Hi, I'm Lucas!", 
      'bio.p1': p1English, 
    
      'projects.title': 'Projects', 
      'projects.subtitle': 'and other stuffs.'  
    },
  } as const;

export const showDefaultLang = false;
  
