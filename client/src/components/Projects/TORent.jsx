import React from 'react';
import { ProjectCV } from '../Project';

const mockData = {
  title: '(TO)Rent',
  date: '2024',
  description: 'Applicazione web per la gestione di annunci, utenti e immagini, sviluppata come progetto didattico per approfondire la realizzazione di piattaforme CRUD, autenticazione e gestione di contenuti multimediali.',
  tools: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Flask', 'Python', 'SQLite'],
  link: 'https://github.com/polito-aw1-2025-exams/esame1-gioco-sfortuna-Itacyma',
  extra: ''
};

const techSections = [
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

function TORent() {
  return (
    <ProjectCV mockData={mockData} techSections={techSections}/>
  );
}

export { TORent };
