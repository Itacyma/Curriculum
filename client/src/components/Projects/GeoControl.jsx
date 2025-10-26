import React from 'react';
import { ProjectCV } from '../Project';

const mockData = {
  title: 'GeoControl',
  date: '2025',
  description: 'Piattaforma web per la gestione, il monitoraggio e la configurazione di reti di sensori e gateway IoT. Il sistema espone API RESTful documentate tramite OpenAPI/Swagger, con architettura modulare e containerizzazione completa per ambienti di sviluppo e produzione.',
  tools: [
    'Node.js', 'Express', 'TypeScript', 'TypeORM', 'Swagger/OpenAPI', 'Jest', 'Docker', 'Docker Compose', 'MySQL', 'SQLite'
  ],
  link: '',
  extra: ''
};

const techSections = [
  {
    name: 'Client',
    items: [
      'Frontend containerizzato, con immagine Docker dedicata e configurabile',
      'Comunicazione tramite API RESTful documentate con Swagger/OpenAPI',
      'Configurazione centralizzata tramite file JSON montato nel container'
    ]
  },
  {
    name: 'Server',
    items: [
      'Node.js + Express.js per la realizzazione delle API REST',
      'TypeScript e architettura modulare (controller, service, repository, middleware)',
      'TypeORM per l’accesso ai dati e la gestione delle entità',
      'Validazione automatica delle API tramite express-openapi-validator',
      'Testing completo con Jest (unit, integration, e2e)',
      'Documentazione API interattiva con Swagger UI'
    ]
  },
  {
    name: 'Database',
    items: [
      'Supporto a MySQL (in produzione, tramite Docker) e SQLite (in sviluppo/test)',
      'Script di bootstrap per la creazione e inizializzazione del database',
      'Gestione utenti, reti, gateway, sensori e misurazioni tramite entità ORM',
    ]
  }
];

function GeoControl() {
  return (
    <ProjectCV mockData={mockData} techSections={techSections}/>
  );
}

export { GeoControl };
