import React from 'react';
import { ProjectCV } from '../Project';

function GiocoDellaSfortuna(props) {
  const { language } = props;

  const mockData_it = {
    title: 'Gioco della Sfortuna',
    date: '2025',
    description:
      'Applicazione web sviluppata per riprodurre in versione single player il gioco da tavolo “Stuff Happens”, in cui l’utente deve ordinare situazioni “orribili” in base al loro indice di sfortuna. Il progetto è strutturato come una Single Page Application (SPA) e realizzato con React, Node.js, Express e SQLite, seguendo le best practice di sviluppo full-stack moderne.',
    tools: [
      'HTML5', 'CSS3', 'JavaScript', 'React', 'Express', 'Node.js', 'Vite', 'SQLite'
    ],
    link: 'https://github.com/polito-aw1-2025-exams/esame1-gioco-sfortuna-Itacyma',
    extra: '',
    subtitle: 'Full-stack application',
    iconClass: 'bi bi-pc-display-horizontal'
  };

  const mockData_eng = {
    title: 'Stuff Happens',
    date: '2025',
    description:
      'Web application developed to recreate the single-player version of the board game “Stuff Happens”, where the user must rank “horrible” situations according to their misfortune index. The project is structured as a Single Page Application (SPA) and built using React, Node.js, Express, and SQLite, following modern full-stack development best practices.',
    tools: [
      'HTML5', 'CSS3', 'JavaScript', 'React', 'Express', 'Node.js', 'Vite', 'SQLite'
    ],
    link: 'https://github.com/polito-aw1-2025-exams/esame1-gioco-sfortuna-Itacyma',
    extra: '',
    subtitle: 'Full-stack application',
    iconClass: 'bi bi-pc-display-horizontal'
  };

  const techSections_it = [
    {
      name: 'Client',
      items: [
        'React per la Single Page Application',
        'Vite come tool di build e sviluppo rapido',
        'Bootstrap e React-Bootstrap per la grafica responsive',
        'React Router per la navigazione tra le pagine'
      ]
    },
    {
      name: 'Server',
      items: [
        'Node.js e Express.js per la creazione delle API RESTful',
        'Passport per l’autenticazione degli utenti e la gestione delle sessioni',
        'Middleware CORS per la sicurezza delle richieste cross-origin'
      ]
    },
    {
      name: 'Database',
      items: [
        'SQLite3 come database relazionale',
        'Gestione di utenti, partite e cronologia di gioco',
        'Utilizzo di query ottimizzate e transazioni per garantire integrità e rapidità di accesso ai dati'
      ]
    }
  ];

  const techSections_eng = [
    {
      name: 'Client',
      items: [
        'React for the Single Page Application',
        'Vite as a fast build and development tool',
        'Bootstrap and React-Bootstrap for responsive design',
        'React Router for page navigation'
      ]
    },
    {
      name: 'Server',
      items: [
        'Node.js and Express.js for creating RESTful APIs',
        'Passport for user authentication and session management',
        'CORS middleware for cross-origin request security'
      ]
    },
    {
      name: 'Database',
      items: [
        'SQLite3 as a relational database',
        'Management of users, matches, and game history',
        'Use of optimized queries and transactions to ensure data integrity and fast access'
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

export { GiocoDellaSfortuna };
