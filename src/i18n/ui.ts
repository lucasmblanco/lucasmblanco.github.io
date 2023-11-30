import { p1 as p1English, p2 as p2SEnglish }  from '../content/en/bio-paragraphs'; 
import { p1 as p1Spanish, p2 as p2Spanish }  from '../content/es/bio-paragraphs'; 

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
    'bio.gretting': '¡Hola, soy Lucas!', 
    'bio.p1': p1Spanish, 
    'bio.p2': p2Spanish,
    'projects.title': 'Proyectos', 
    'projects.subtitle': 'y otras cosas.'
    
},
    en: {
      'nav.projects': 'projects',
      'nav.contact': "let's talk",
      'header.light-toggle': 'dark',
      'header.dark-toggle': 'light', 
      'bio.gretting': "Hi, I'm Lucas!", 
      'bio.p1': p1English, 
      'bio.p2': p2SEnglish, 
      'projects.title': 'Projects', 
      'projects.subtitle': 'and other stuffs.'  
    },
  } as const;

export const showDefaultLang = false;
  
