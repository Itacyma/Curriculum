import React from 'react';
import { ProjectCV } from '../Project';

function GeoControl(props) {
  const { language } = props;

  const mockData_it = {
    title: 'GeoControl',
    date: '2025',
    description:
      'Piattaforma web per la gestione, il monitoraggio e la configurazione di reti di sensori e gateway IoT. Il sistema espone API RESTful documentate tramite OpenAPI/Swagger, con architettura modulare e containerizzazione completa per ambienti di sviluppo e produzione.',
    tools: [
      'Node.js', 'Express', 'TypeScript', 'TypeORM', 'Swagger/OpenAPI',
      'Jest', 'Docker', 'Docker Compose', 'MySQL', 'SQLite'
    ],
    link: '',
    extra: '',
    subtitle: 'Full-stack application',
    iconClass: 'bi bi-pc-display-horizontal'
  };

  const mockData_eng = {
    title: 'GeoControl',
    date: '2025',
    description:
      'Web platform for managing, monitoring, and configuring IoT sensor and gateway networks. The system exposes RESTful APIs documented via OpenAPI/Swagger, featuring a modular architecture and full containerization for both development and production environments.',
    tools: [
      'Node.js', 'Express', 'TypeScript', 'TypeORM', 'Swagger/OpenAPI',
      'Jest', 'Docker', 'MySQL', 'SQLite'
    ],
    link: '',
    extra: '',
    subtitle: 'Full-stack application',
    iconClass: 'bi bi-pc-display-horizontal'
  };

  const techSections_it = [
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
        'Gestione utenti, reti, gateway, sensori e misurazioni tramite entità ORM'
      ]
    }
  ];

  const techSections_eng = [
    {
      name: 'Client',
      items: [
        'Containerized frontend with a dedicated and configurable Docker image',
        'Communication via RESTful APIs documented with Swagger/OpenAPI',
        'Centralized configuration using a JSON file mounted inside the container'
      ]
    },
    {
      name: 'Server',
      items: [
        'Node.js + Express.js for REST API implementation',
        'TypeScript and modular architecture (controller, service, repository, middleware)',
        'TypeORM for data access and entity management',
        'Automatic API validation via express-openapi-validator',
        'Comprehensive testing with Jest (unit, integration, e2e)',
        'Interactive API documentation using Swagger UI'
      ]
    },
    {
      name: 'Database',
      items: [
        'Support for MySQL (production, via Docker) and SQLite (development/testing)',
        'Bootstrap scripts for database creation and initialization',
        'Management of users, networks, gateways, sensors, and measurements through ORM entities'
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

export { GeoControl };
