import React from 'react';
import { ProjectCV } from '../Project';

const mockData = {
  title: 'Gioco della Sfortuna',
  date: '2025',
  description: 'Applicazione web sviluppata per riprodurre in versione single player il gioco da tavolo “Stuff Happens”, in cui l’utente deve ordinare situazioni “orribili” in base al loro indice di sfortuna. Il progetto è strutturato come una Single Page Application (SPA) e realizzato con React, Node.js, Express e SQLite, seguendo le best practice di sviluppo full-stack moderne.',
  tools: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Express', 'Node.js', 'Vite', 'SQLite'],
  link: 'https://github.com/polito-aw1-2025-exams/esame1-gioco-sfortuna-Itacyma',
  extra: 'Progetto didattico per approfondire architetture full-stack e comunicazione real-time.'
};

const techSections = [
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

function GiocoDellaSfortuna() {
  return (
    <ProjectCV mockData={mockData} techSections={techSections}/>
  );
}

export { GiocoDellaSfortuna };
