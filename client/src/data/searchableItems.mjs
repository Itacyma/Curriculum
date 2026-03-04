/**
 * Struttura dati per la modalità interattiva di ricerca.
 * Ogni item ha: type ("exam" | "project"), name (it/en), description (it/en),
 * keywords (array di stringhe ricercabili), e detailComponent (nome componente opzionale).
 *
 * Le keywords saranno usate sia per l'autocomplete sia per il filtraggio dei risultati.
 * TODO: popolare con dati reali in un secondo momento.
 */

export const searchableItems = [
  // ─── ESAMI ───────────────────────────────────────────
  {
    type: "exam",
    name: { it: "Distributed System Programming", en: "Distributed System Programming" },
    description: {
      it: "Tecniche e tecnologie per la programmazione di sistemi distribuiti: REST, WebSocket, MQTT, gRPC, microservizi.",
      en: "Techniques and technologies for distributed systems programming: REST, WebSocket, MQTT, gRPC, microservices."
    },
    keywords: ["REST", "Swagger", "Socket", "WebSocket", "MQTT", "gRPC", "JSON Schemas", "Distributed Systems", "Microservices"],
    tags: ["REST", "Swagger", "Socket", "WebSocket", "MQTT", "gRPC", "JSON Schemas"],
    date: "2026-01-16"
  },
  {
    type: "exam",
    name: { it: "Software Engineering II", en: "Software Engineering II" },
    description: {
      it: "Principi e strumenti per lo sviluppo di progetti software complessi: Scrum, DevOps, Docker, SonarQube.",
      en: "Principles and tools for complex software project development: Scrum, DevOps, Docker, SonarQube."
    },
    keywords: ["Scrum", "DevOps", "Docker", "SonarQube", "Agile", "CI/CD", "Testing"],
    tags: ["Scrum", "DevOps", "Docker", "SonarQube"],
    date: "2026-01-22"
  },
  {
    type: "exam",
    name: { it: "Programmazione di Sistema", en: "Systems Programming" },
    description: {
      it: "Architettura dei sistemi operativi, programmazione concorrente in Rust, system call Unix/Linux.",
      en: "OS architecture, concurrent programming in Rust, Unix/Linux system calls."
    },
    keywords: ["Rust", "OS internals", "Thread synchronization", "React", "API programming", "Concurrency", "Unix", "Linux"],
    tags: ["Rust", "OS internals", "Thread synchronization", "React", "API programming"],
    date: "2025-07-01"
  },
  {
    type: "exam",
    name: { it: "Architetture dei Sistemi di Elaborazione", en: "Computer System Architectures" },
    description: {
      it: "Architetture a microprocessore, firmware in C e assembler, programmazione embedded su board ARM.",
      en: "Microprocessor architectures, firmware in C and assembly, embedded programming on ARM boards."
    },
    keywords: ["C", "Assembler", "ARM", "LPC1768 programming", "Embedded", "RISC", "CISC", "Firmware"],
    tags: ["C", "Assembler", "ARM", "LPC1768 programming"],
    date: "2025-01-23"
  },
  {
    type: "exam",
    name: { it: "Tecnologie e Servizi di Rete", en: "Networking Technologies and Services" },
    description: {
      it: "Reti IPv4/IPv6, protocolli di routing, VPN, MPLS, QoS, reti cellulari.",
      en: "IPv4/IPv6 networks, routing protocols, VPN, MPLS, QoS, cellular networks."
    },
    keywords: ["IPv4", "IPv6", "MPLS", "VPN", "LAN", "Networking", "QoS", "5G"],
    tags: ["IPv4", "IPv6", "MPLS", "VPN", "LAN"],
    date: "2025-01-23"
  },
  {
    type: "exam",
    name: { it: "Software Engineering I", en: "Software Engineering I" },
    description: {
      it: "Analisi dei requisiti, UML, testing (white-box, black-box), metodologie agili.",
      en: "Requirements analysis, UML, testing (white-box, black-box), agile methodologies."
    },
    keywords: ["Testing", "JavaScript", "TypeORM", "SwaggerAPI", "REST", "UML", "Agile"],
    tags: ["Testing", "JavaScript", "TypeORM", "SwaggerAPI", "REST"],
    date: "2025-09-10"
  },
  {
    type: "exam",
    name: { it: "Applicazioni Web I", en: "Web Applications I" },
    description: {
      it: "Sviluppo di SPA con React, interazione con API REST, architettura client-server.",
      en: "SPA development with React, REST API interaction, client-server architecture."
    },
    keywords: ["React", "SQLite", "Express", "JavaScript", "CSS", "HTML", "Web Development", "SPA", "Node.js"],
    tags: ["React", "SQLite", "Express"],
    date: "2025-07-26"
  },
  {
    type: "exam",
    name: { it: "Data Science e Tecnologie per le Basi di Dati", en: "Data Science and Database Technologies" },
    description: {
      it: "DBMS relazionali e NoSQL, data warehouse, OLAP, data mining e machine learning.",
      en: "Relational and NoSQL DBMS, data warehouse, OLAP, data mining and machine learning."
    },
    keywords: ["DBMS", "Data Warehouse", "NoSQL", "OLAP", "Data Mining", "Machine Learning", "SQL"],
    tags: ["DBMS", "Data Warehouse", "NoSQL", "OLAP"],
    date: "2025-01-20"
  },
  {
    type: "exam",
    name: { it: "Information Systems", en: "Information Systems" },
    description: {
      it: "Sistemi informativi aziendali: ERP, CRM, SCM, BPMN, KPI, COBIT, ITIL.",
      en: "Enterprise information systems: ERP, CRM, SCM, BPMN, KPI, COBIT, ITIL."
    },
    keywords: ["KPI", "CSM", "Business models", "ERP", "CRM", "BPMN", "ITIL"],
    tags: ["KPI", "CSM", "Business models"],
    date: "2025-02-20"
  },
  {
    type: "exam",
    name: { it: "Basi di Dati", en: "Databases" },
    description: {
      it: "Progettazione concettuale e logica, modello E-R, SQL, transazioni e trigger.",
      en: "Conceptual and logical design, E-R model, SQL, transactions and triggers."
    },
    keywords: ["DBMS", "SQLite", "UML", "E-R Models", "SQL", "Database"],
    tags: ["DBMS", "SQLite", "UML", "E-R Models"],
    date: "2023-06-26"
  },
  {
    type: "exam",
    name: { it: "Sistemi Operativi", en: "Operating Systems" },
    description: {
      it: "Principi dei sistemi operativi, programmazione concorrente, shell scripting, system call Unix/Linux.",
      en: "OS fundamentals, concurrent programming, shell scripting, Unix/Linux system calls."
    },
    keywords: ["OS", "Bash", "Linux", "Shell", "Unix", "Concurrency"],
    tags: ["OS", "Bash", "Linux"],
    date: "2024-02-27"
  },
  {
    type: "exam",
    name: { it: "Programmazione a Oggetti", en: "Object-Oriented Programming" },
    description: {
      it: "Paradigma a oggetti con Java: classi, ereditarietà, design pattern, JUnit.",
      en: "OOP paradigm with Java: classes, inheritance, design patterns, JUnit."
    },
    keywords: ["Java", "JUnit", "UML", "OOP", "Design Patterns"],
    tags: ["Java", "JUnit", "UML"],
    date: "2024-07-24"
  },
  {
    type: "exam",
    name: { it: "Introduzione alle Applicazioni Web", en: "Introduction to Web Applications" },
    description: {
      it: "HTML5, CSS3, JavaScript, Flask per lo sviluppo di applicazioni web complete.",
      en: "HTML5, CSS3, JavaScript, Flask for complete web application development."
    },
    keywords: ["HTML", "CSS", "Flask", "JavaScript", "Bootstrap", "Python", "Web Development"],
    tags: ["HTML", "CSS", "Flask", "JavaScript", "Bootstrap"],
    date: "2024-02-09"
  },
  {
    type: "exam",
    name: { it: "Calcolatori Elettronici", en: "Computer Architecture" },
    description: {
      it: "Architettura dei sistemi di elaborazione, Assembly, processori CISC/RISC.",
      en: "Computer architecture, Assembly, CISC/RISC processors."
    },
    keywords: ["Assembler", "OS", "CISC", "RISC", "Assembly"],
    tags: ["Assembler", "OS"],
    date: "2023-06-23"
  },

  // ─── PROGETTI ────────────────────────────────────────
  {
    type: "project",
    name: { it: "AppRuggine", en: "AppRuggine" },
    description: {
      it: "Sistema di messaggistica real-time con crittografia end-to-end. Server Rust + client React.",
      en: "Real-time messaging system with end-to-end encryption. Rust server + React client."
    },
    keywords: ["Rust", "React", "WebSocket", "SQLite", "Encryption", "Real-time", "Tokio", "JavaScript", "HTML", "CSS"],
    tags: ["Rust", "React", "WebSocket", "SQLite"],
    date: "2025"
  },
  {
    type: "project",
    name: { it: "GeoControl", en: "GeoControl" },
    description: {
      it: "Applicazione web per il monitoraggio e la gestione di dati geospaziali.",
      en: "Web application for monitoring and managing geospatial data."
    },
    keywords: ["React", "Node.js", "Express", "MongoDB", "Geospatial", "Web Development", "JavaScript"],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    date: "2025"
  },
  {
    type: "project",
    name: { it: "Gioco della Sfortuna", en: "Game of Misfortune" },
    description: {
      it: "Gioco web multiplayer con gestione turni e connessioni real-time.",
      en: "Multiplayer web game with turn management and real-time connections."
    },
    keywords: ["React", "Express", "SQLite", "JavaScript", "Web Development", "REST", "HTML", "CSS"],
    tags: ["React", "Express", "SQLite"],
    date: "2025"
  },
  {
    type: "project",
    name: { it: "TORent", en: "TORent" },
    description: {
      it: "Piattaforma web per la gestione e ricerca di affitti.",
      en: "Web platform for managing and searching rentals."
    },
    keywords: ["HTML", "CSS", "Flask", "Python", "JavaScript", "Bootstrap", "Web Development", "SQLite"],
    tags: ["HTML", "CSS", "Flask", "Python", "SQLite"],
    date: "2024"
  },
  {
    type: "project",
    name: { it: "Raspberry Pi Server", en: "Raspberry Pi Server" },
    description: {
      it: "Server domestico basato su Raspberry Pi per hosting e automazione.",
      en: "Home server based on Raspberry Pi for hosting and automation."
    },
    keywords: ["Linux", "Raspberry Pi", "Networking", "Bash", "Server", "IoT"],
    tags: ["Linux", "Raspberry Pi", "Bash"],
    date: "2024"
  },
];

/**
 * Restituisce tutte le keyword uniche disponibili, ordinate alfabeticamente.
 */
export function getAllKeywords() {
  const keywordSet = new Set();
  for (const item of searchableItems) {
    for (const kw of item.keywords) {
      keywordSet.add(kw);
    }
  }
  return [...keywordSet].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

/**
 * Cerca gli item che matchano la query (case-insensitive) tra le keywords.
 * @param {string} query - la stringa di ricerca
 * @returns {Array} items che contengono la keyword
 */
export function searchItems(query) {
  if (!query || !query.trim()) return [];
  const q = query.trim().toLowerCase();
  return searchableItems.filter(item =>
    item.keywords.some(kw => kw.toLowerCase().includes(q))
  );
}

/**
 * Suggerisce keyword che iniziano con o contengono il testo digitato.
 * @param {string} input - testo parziale digitato dall'utente
 * @returns {string[]} keyword suggerite
 */
export function suggestKeywords(input) {
  if (!input || !input.trim()) return [];
  const q = input.trim().toLowerCase();
  const all = getAllKeywords();
  // Prima le keyword che iniziano con il testo, poi quelle che lo contengono
  const startsWith = all.filter(kw => kw.toLowerCase().startsWith(q));
  const contains = all.filter(kw => !kw.toLowerCase().startsWith(q) && kw.toLowerCase().includes(q));
  return [...startsWith, ...contains];
}
