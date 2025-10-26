import React from 'react';
import { ProjectCV } from '../Project';

function TORent(props) {
  const { language } = props;

  const mockData_it = {
    title: '(TO)Rent',
    date: '2024',
    description:
      'Applicazione web per la gestione di annunci, utenti e immagini, sviluppata come progetto didattico per approfondire la realizzazione di piattaforme CRUD, autenticazione e gestione di contenuti multimediali.',
    tools: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Flask', 'Python', 'SQLite'],
    link: 'https://github.com/polito-aw1-2025-exams/esame1-gioco-sfortuna-Itacyma',
    extra: ''
  };

  const mockData_eng = {
    title: '(TO)Rent',
    date: '2024',
    description:
      'Web application for managing listings, users, and images. Developed as an educational project to explore CRUD platforms, user authentication, and multimedia content management.',
    tools: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Flask', 'Python', 'SQLite'],
    link: 'https://github.com/polito-aw1-2025-exams/esame1-gioco-sfortuna-Itacyma',
    extra: ''
  };

  const techSections_it = [
    {
      name: 'Client',
      items: [
        'HTML5 e CSS3 per la struttura e la grafica delle pagine',
        'JavaScript vanilla per l’interattività lato client',
        'Responsive design tramite CSS personalizzato'
      ]
    },
    {
      name: 'Server',
      items: [
        'Python con Flask per la gestione delle API',
        'Gestione delle rotte, autenticazione utenti, sessioni e logica CRUD tramite moduli dedicati',
        'Template rendering con Jinja2'
      ]
    },
    {
      name: 'Database',
      items: [
        'SQLite come database relazionale',
        'Gestione di utenti, annunci e immagini',
        'Persistenza dei dati e integrazione con il backend Flask'
      ]
    }
  ];

  const techSections_eng = [
    {
      name: 'Client',
      items: [
        'HTML5 and CSS3 for page structure and styling',
        'Vanilla JavaScript for client-side interactivity',
        'Responsive design through custom CSS'
      ]
    },
    {
      name: 'Server',
      items: [
        'Python with Flask for API management',
        'Dedicated modules for routing, user authentication, sessions, and CRUD logic',
        'Template rendering with Jinja2'
      ]
    },
    {
      name: 'Database',
      items: [
        'SQLite as a relational database',
        'Management of users, listings, and images',
        'Data persistence and integration with the Flask backend'
      ]
    }
  ];

  return (
    <ProjectCV
      mockData={language === 'it' ? mockData_it : mockData_eng}
      techSections={language === 'it' ? techSections_it : techSections_eng}
    />
  );
}

export { TORent };
