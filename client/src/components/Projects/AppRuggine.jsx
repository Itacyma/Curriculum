import React from 'react';
import '../../style/Project.css';
import { ProjectCV } from '../Project';

const mockData = {
  title: 'AppRuggine',
  date: '2025',
  description: 'Sistema di messaggistica real-time con architettura client-server, che garantisce comunicazione sicura tramite crittografia end-to-end. Il server Rust gestisce connessioni WebSocket, inoltra i messaggi tra utenti e gruppi, e monitora risorse di sistema. Il client React offre un’interfaccia utente moderna per chat e gestione dei gruppi. Il progetto adotta tecnologie moderne per performance, sicurezza e scalabilità, ed è stato documentato e testato secondo le best practice di sviluppo full-stack moderne.',
  tools: ['HTML5', 'CSS3', 'JavaScript', 'Cargo', 'Rust', 'WebSockets - tokio', 'Vite', 'React'],
  link: 'https://github.com/PdS2425-C2/G46',
  extra: ''
};

const techSections = [
  {
    "name": "Client",
    "items": [
      "React per la costruzione di un’interfaccia web moderna e interattiva",
      "JavaScript/TypeScript per la logica applicativa e la tipizzazione robusta",
      "WebSocket API per la comunicazione real-time con il server",
      "Crittografia dei messaggi lato client tramite Web Crypto API, garantendo la privacy end-to-end",
      "Testing dell’interfaccia e della logica con Jest e React Testing Library"
    ]
  },
  {
    "name": "Server",
    "items": [
      "Rust come linguaggio di programmazione di sistema per performance e sicurezza",
      "Gestione asincrona delle connessioni tramite tokio e tokio-tungstenite per WebSocket",
      "Serializzazione e deserializzazione dei dati tramite serde e serde_json (formato JSON)",
      "Logging e monitoraggio delle risorse (CPU, memoria) con tracing, log e sysinfo",
      "Crittografia end-to-end: solo i client possono leggere i messaggi, il server si occupa esclusivamente dell’inoltro",
      "Testing e automazione tramite cargo test"
    ]
  },
  {
    "name": "Database",
    "items": [
      "SQLite come database relazionale",
      "Integrazione con Rust tramite rusqlite per l’accesso e la gestione dei dati",
      "Gestione e persistenza di utenti, gruppi, messaggi e metadati",
      "Backup e sicurezza dei dati tramite meccanismi nativi di SQLite"
    ]
  }
];

function AppRuggine() {
  return (
    <ProjectCV mockData={mockData} techSections={techSections}/>
  );
}

export { AppRuggine };
