import React from 'react';
import '../../style/Project.css';
import { ProjectCV } from '../Project';

function AppRuggine(props) {
  const { language } = props;

  const mockData_it = {
    title: 'AppRuggine',
    date: '2025',
    description: 'Sistema di messaggistica real-time con architettura client-server, che garantisce comunicazione sicura tramite crittografia end-to-end. Il server Rust gestisce connessioni WebSocket, inoltra i messaggi tra utenti e gruppi, e monitora risorse di sistema. Il client React offre un’interfaccia utente moderna per chat e gestione dei gruppi. Il progetto adotta tecnologie moderne per performance, sicurezza e scalabilità, ed è stato documentato e testato secondo le best practice di sviluppo full-stack moderne.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Cargo', 'Rust', 'WebSockets - tokio', 'Vite', 'React'],
    link: 'https://github.com/PdS2425-C2/G46',
    extra: ''
  };

  const mockData_eng = {
    title: 'AppRuggine',
    date: '2025',
    description: 'Real-time messaging system with a client-server architecture ensuring secure communication through end-to-end encryption. The Rust server handles WebSocket connections, forwards messages between users and groups, and monitors system resources. The React client provides a modern interface for chats and group management. The project adopts modern technologies for performance, security, and scalability, and was documented and tested following full-stack development best practices.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Cargo', 'Rust', 'WebSockets - tokio', 'Vite', 'React'],
    link: 'https://github.com/PdS2425-C2/G46',
    extra: ''
  };

  const techSections_it = [
    {
      name: "Client",
      items: [
        "React per la costruzione di un’interfaccia web moderna e interattiva",
        "JavaScript/TypeScript per la logica applicativa e la tipizzazione robusta",
        "WebSocket API per la comunicazione real-time con il server",
        "Crittografia dei messaggi lato client tramite Web Crypto API, garantendo la privacy end-to-end",
        "Testing dell’interfaccia e della logica con Jest e React Testing Library"
      ]
    },
    {
      name: "Server",
      items: [
        "Rust come linguaggio di programmazione di sistema per performance e sicurezza",
        "Gestione asincrona delle connessioni tramite tokio e tokio-tungstenite per WebSocket",
        "Serializzazione e deserializzazione dei dati tramite serde e serde_json (formato JSON)",
        "Logging e monitoraggio delle risorse (CPU, memoria) con tracing, log e sysinfo",
        "Crittografia end-to-end: solo i client possono leggere i messaggi, il server si occupa esclusivamente dell’inoltro",
        "Testing e automazione tramite cargo test"
      ]
    },
    {
      name: "Database",
      items: [
        "SQLite come database relazionale",
        "Integrazione con Rust tramite rusqlite per l’accesso e la gestione dei dati",
        "Gestione e persistenza di utenti, gruppi, messaggi e metadati",
        "Backup e sicurezza dei dati tramite meccanismi nativi di SQLite"
      ]
    }
  ];

  const techSections_eng = [
    {
      name: "Client",
      items: [
        "React for building a modern and interactive web interface",
        "JavaScript/TypeScript for application logic and strong typing",
        "WebSocket API for real-time communication with the server",
        "Client-side message encryption using Web Crypto API, ensuring end-to-end privacy",
        "Interface and logic testing with Jest and React Testing Library"
      ]
    },
    {
      name: "Server",
      items: [
        "Rust as the system programming language for performance and safety",
        "Asynchronous connection handling via tokio and tokio-tungstenite for WebSocket",
        "Data serialization/deserialization through serde and serde_json (JSON format)",
        "Logging and system monitoring (CPU, memory) using tracing, log, and sysinfo",
        "End-to-end encryption: only clients can read messages, the server only forwards them",
        "Testing and automation via cargo test"
      ]
    },
    {
      name: "Database",
      items: [
        "SQLite as the relational database",
        "Integration with Rust through rusqlite for data access and management",
        "Management and persistence of users, groups, messages, and metadata",
        "Data backup and security through SQLite’s native mechanisms"
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

export { AppRuggine };
