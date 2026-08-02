export const mockExamsIt = [
  // secondo anno magistrale:
  {
    name: "Cloud Programming and Operations",
    date: "2026-06",
    description:
      "Studio delle principali tecniche e strumenti per la programmazione e la gestione di applicazioni cloud-native. Il corso approfondisce i concetti basilari dello sviluppo di applicazioni distribuite, l’architettura a microservizi, l’orchestrazione dei container con Kubernetes, l'osservabilità (metriche, logs e traces) e l’implementazione di pipeline CI/CD con GitOps e ArgoCD. Vengono trattati inoltre i concetti di resilienza, scalabilità e tolleranza ai guasti, fornendo competenze pratiche per lo sviluppo di applicazioni cloud moderne e affidabili.",
    tags: ["Azure", "AWS", "Kubernetes", "Microservices", "CI/CD", "GitOps", "DevSecOps", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    name: "Mobile Application Development",
    date: "2026-06",
    description:
      "Studio delle principali tecniche e strumenti per lo sviluppo di applicazioni mobile moderne. Il corso approfondisce lo sviluppo di applicazioni native per Android utilizzando il linguaggio Kotlin e il framework Jetpack Compose, con particolare attenzione alla gestione dello stato, alla navigazione tra schermate e all’integrazione con servizi cloud come Firebase. Vengono trattati inoltre i concetti di sicurezza, performance e user experience, fornendo competenze pratiche per la realizzazione di applicazioni multipiattaforma complete e performanti.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "Google Sign-in", "Coroutines", "MVVM & MVI-Lite", "UDF", "SoC", "CMP", "Mobile UI/UX"],
  },
  {
    name: "Information Systems Security",
    date: "2026-01",
    description:
      "Studio dei fondamenti della sicurezza dei sistemi informativi, con approfondimenti su crittografia, autenticazione, autorizzazione e gestione delle vulnerabilità. Il corso tratta le principali minacce alla sicurezza informatica, le tecniche di difesa e le best practice per la protezione dei dati e delle infrastrutture IT.",
    tags: ["Cryptography", "Authentication", "Authorization", "Vulnerability management", "Firewall", "IDS", "GDPR", "Data protection"],
  },
  {
    name: "Software Engineering II",
    date: "2026-01",
    description:
      "Studio dei principi, delle metodologie e degli strumenti per lo sviluppo e la gestione di progetti software complessi. Il corso si concentra sull’analisi e la formalizzazione dei requisiti, la progettazione tramite UML, la gestione di progetto (WBS, Gantt, PERT) e le tecniche di testing (white-box, black-box, unit, integration, system). Particolare attenzione è dedicata al lavoro di squadra e alle metodologie agili per lo sviluppo collaborativo di sistemi software di grandi dimensioni.",
    tags: ["Scrum", "DevOps", "Docker", "SonarQube"],
  },
  {
    name: "Distributed System Programming",
    date: "2026-01",
    description:
      "Studio delle principali tecniche e tecnologie per la programmazione di sistemi distribuiti. Il corso approfondisce i modelli di comunicazione (client-server, peer-to-peer), i protocolli di comunicazione (HTTP, WebSocket, gRPC), e le architetture basate su microservizi. Vengono trattati inoltre i concetti di scalabilità, tolleranza ai guasti, coerenza dei dati e sicurezza nei sistemi distribuiti. Le attività pratiche includono lo sviluppo di applicazioni distribuite utilizzando tecnologie come RESTful APIs, WebSocket, MQTT e gRPC.",
    tags: ["REST", "Swagger", "Socket", "WebSocket", "MQTT", "gRPC", "JSON Schemas"],
  },
  {
    name: "Programmazione di Sistema",
    date: "2026-01",
    description:
      "Studio dell’architettura e dei principi di progettazione dei sistemi operativi, con approfondimento sui meccanismi interni di gestione delle risorse (processi, memoria, dispositivi, file system) e sull’implementazione di moduli di sistema. La seconda parte ha riguardato la programmazione di sistema e concorrente in ambienti Unix/Linux e Windows, includendo l’uso di system call, la gestione avanzata della memoria, dei file e dei thread, e l’introduzione al linguaggio Rust per lo sviluppo sicuro e concorrente.",
    tags: ["Rust", "OS internals", "Thread synchronization", "React", "API programming"],
  },

  // primo anno magistrale:
  {
    name: "Software Engineering I",
    date: "2025-09",
    description:
      "Studio dei principi, metodologie e strumenti per lo sviluppo e la gestione di progetti software complessi. Il corso ha approfondito l’analisi e la formalizzazione dei requisiti, la progettazione con UML, la gestione di progetto (WBS, Gantt, PERT) e le tecniche di testing (white-box, black-box, unit, integration, system). Particolare attenzione è stata dedicata al lavoro di squadra e alle metodologie agili per lo sviluppo collaborativo di sistemi software di grandi dimensioni.",
    tags: ["Testing", "JavaScript", "TypeORM", "SwaggerAPI", "REST"],
  },
  {
    name: "Applicazioni Web I",
    date: "2025-06",
    description:
      "Studio delle principali tecniche per la realizzazione di applicazioni web distribuite, con particolare attenzione alla programmazione front-end tramite JavaScript e il framework React. Il corso ha approfondito i paradigmi di programmazione moderni per lo sviluppo di Single Page Applications (SPA), l’interazione con API REST e la progettazione di architetture client-server. Sono stati trattati inoltre aspetti di sicurezza, robustezza, interoperabilità e prestazioni, fornendo competenze pratiche per la realizzazione completa di applicazioni web moderne.",
    tags: ["React", "SQLite", "Express", "JavaScript", "CSS", "HTML"],
  },
  {
    name: "Information Systems",
    date: "2025-02",
    description:
      "Studio delle metodologie e tecnologie per la progettazione, gestione e valutazione di sistemi informativi a supporto dei processi aziendali. Il corso ha trattato la modellazione dei processi con UML e BPMN, l’analisi organizzativa, la valutazione di costi, benefici e performance (KPI, CSF, BSC), e le principali classi di sistemi informativi (ERP, CRM, SCM). Sono stati inoltre approfonditi i modelli di riferimento COBIT e ITIL e le tecnologie per la gestione dei workflow, fornendo competenze per analizzare, progettare e ottimizzare processi aziendali e i relativi sistemi di supporto.",
    tags: ["KPI", "CSM", "Business models"],
  },
  {
    name: "Architetture dei Sistemi di Elaborazione",
    date: "2025-01",
    description:
      "Corso incentrato sull’architettura dei sistemi basati su microprocessore. Approfondisce le architetture CISC, RISC, superscalari, pipelined e ARM, la gerarchia della memoria (cache L1/L2), e i bus di sistema. Include lo sviluppo di firmware in C e assembler, con esercitazioni pratiche su board ARM per la gestione di periferiche (GPIO, timer, UART, ecc.). Fornisce competenze avanzate nella programmazione di sistemi embedded e nel debug a basso livello.",
    tags: ["C", "Assembler", "ARM", "LPC1768 programming"],
  },
  {
    name: "Tecnologie e Servizi di Rete",
    date: "2025-01",
    description:
      "Studio avanzato delle tecnologie e architetture delle reti di calcolatori, con approfondimenti su progettazione di reti IPv4/IPv6, Ethernet e protocolli di routing Internet. Analisi delle VPN (customer e provider-provisioned), del protocollo MPLS, e delle tecniche per la qualità del servizio (QoS) nelle reti IP. Introduzione alle reti ottiche, alle reti cellulari (dal GSM al 5G) e all’analisi e predizione del traffico di rete. Il corso fornisce competenze teoriche per analizzare e ottimizzare reti moderne e servizi Internet avanzati.",
    tags: ["IPv4", "IPv6", "MPLS", "VPN", "LAN"],
  },
  {
    name: "Data Science e Tecnologie per le Basi di Dati",
    date: "2025-01",
    description:
      "Studio delle tecnologie per la gestione di basi di dati relazionali e non relazionali (NoSQL), incluse le architetture distribuite e le tecniche di replica. Progettazione fisica di database, modellazione e sviluppo di data warehouse per l’analisi dei dati mediante SQL e OLAP. Introduzione alle tecniche di data mining e machine learning (classificazione, clustering, regole di associazione) applicate al processo di data science.",
    tags: ["DBMS", "Data Warehouse", "NoSQL", "OLAP"],
  },

  // triennale:
  {
    name: "Programmazione a Oggetti",
    date: "2024-07",
    description:
      "Studio delle tecniche di sviluppo software basate sul paradigma a oggetti attraverso l’uso del linguaggio Java. Il corso affronta i concetti fondamentali della progettazione orientata agli oggetti (classi, ereditarietà, interfacce, polimorfismo) e l’utilizzo delle librerie standard Java (collezioni, stream, gestione I/O, thread). Sono inoltre introdotti i principi di Ingegneria del Software, tra cui ciclo di vita del software, UML, design pattern, testing (JUnit) e gestione della configurazione, con attività pratiche di sviluppo in IDE e uso di sistemi di versionamento.",
    tags: ["Java", "JUnit", "UML"],
  },
  {
    name: "Sistemi Operativi",
    date: "2024-02",
    description:
      "Studio dei principi fondamentali dell’architettura dei sistemi operativi e delle tecniche di programmazione di sistema e concorrente. Il corso approfondisce i sistemi UNIX/Linux, includendo l’uso di comandi utente e di amministrazione, shell scripting e system call per la gestione di processi e thread. Vengono trattati temi quali sincronizzazione, comunicazione tra processi, gestione delle risorse e scheduling, con attività di laboratorio pratiche in ambiente Linux per consolidare le competenze apprese.",
    tags: ["OS", "Bash", "Linux"],
  },
  {
    name: "Introduzione alle Applicazioni Web",
    date: "2024-02",
    description:
      "Studio dei principi fondamentali delle architetture web e dei protocolli di comunicazione alla base del funzionamento delle applicazioni online. Il corso approfondisce l’uso delle tecnologie web principali – HTML5, CSS3 e JavaScript – per la realizzazione di interfacce moderne, accessibili e responsive. Viene inoltre introdotto il framework Flask (Python) per lo sviluppo del backend, comprendendo la gestione di database, sessioni e autenticazione. Attraverso attività pratiche, gli studenti imparano a progettare e sviluppare un’applicazione web completa di media complessità, curando sia l’aspetto tecnico che visivo secondo i principi del web design moderno.",
    tags: ["HTML", "CSS", "Flask", "JavaScript", "Bootstrap"],
  },
  {
    name: "Basi di Dati",
    date: "2023-06",
    description:
      "Studio dei sistemi di gestione di basi di dati (DBMS). Il corso approfondisce la progettazione concettuale e logica tramite il modello Entità-Relazione, il modello relazionale, l’algebra relazionale e il linguaggio SQL per la definizione, interrogazione e gestione dei dati. Sono trattati inoltre viste, transazioni, trigger e accesso ai dati da applicazioni client-server. Le attività di laboratorio consentono di acquisire esperienza pratica con strumenti commerciali e open-source per la progettazione e lo sviluppo di applicazioni basate su database.",
    tags: ["DBMS", "SQLite", "UML", "E-R Models"],
  },
  {
    name: "Calcolatori Elettronici",
    date: "2023-06",
    description:
      "Studio dei concetti fondamentali relativi ai sistemi di elaborazione dell’informazione, con particolare attenzione all’architettura, al funzionamento e alla progettazione dei componenti hardware e software. Il corso approfondisce i sistemi a microprocessore, l’interazione tra processore, memoria e periferiche, e introduce la programmazione in linguaggio Assembly per comprendere il funzionamento a basso livello dei sistemi di calcolo. Sono trattati inoltre i principi dei processori CISC, RISC e superscalari, fornendo una base solida per corsi avanzati come Sistemi Operativi.",
    tags: ["Assembler", "OS"],
  },
];

export const mockExamsEn = [
  // second year, master's degree:
  {
    name: "Cloud Programming and Operations",
    date: "2026-06",
    description:
      "Study of the main techniques and tools for programming and managing cloud-native applications. The course covers the basic concepts of distributed application development, microservices architecture, container orchestration with Kubernetes, observability (metrics, logs, and traces), and the implementation of CI/CD pipelines with GitOps and ArgoCD. It also addresses concepts of resilience, scalability, and fault tolerance, providing practical skills for developing modern and reliable cloud applications.",
    tags: ["Azure", "AWS", "Kubernetes", "Microservices", "CI/CD", "GitOps", "DevSecOps", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    name: "Mobile Application Development",
    date: "2026-06",
    description:
      "Study of the main techniques and tools for developing modern mobile applications. The course covers native application development for Android using the Kotlin language and the Jetpack Compose framework, with a focus on state management, screen navigation, and integration with cloud services such as Firebase. It also addresses concepts of security, performance, and user experience, providing practical skills for building complete and high-performance cross-platform applications.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "Google Sign-in", "Coroutines", "MVVM & MVI-Lite", "UDF", "SoC", "CMP", "Mobile UI/UX"],
  },
  {
    name: "Information Systems Security",
    date: "2026-01",
    description:
      "Study of the fundamentals of information systems security, with insights into cryptography, authentication, authorization, and vulnerability management. The course covers the main threats to cybersecurity, defense techniques, and best practices for protecting data and IT infrastructures.",
    tags: ["Cryptography", "Authentication", "Authorization", "Vulnerability management", "Firewall", "IDS", "GDPR", "Data protection"],
  },
  {
    name: "Software Engineering II",
    date: "2026-01",
    description:
      "Study of principles, methodologies, and tools for developing and managing complex software projects. Focuses on requirements analysis and formalization, UML design, project management (WBS, Gantt, PERT), and testing techniques (white-box, black-box, unit, integration, system). Emphasizes teamwork and agile methodologies for collaborative development of large software systems.",
    tags: ["Scrum", "DevOps", "Docker", "SonarQube"],
  },
  {
    name: "Distributed System Programming",
    date: "2026-01",
    description:
      "Study of the main techniques and technologies for programming distributed systems. The course covers communication models (client-server, peer-to-peer), communication protocols (HTTP, WebSocket, gRPC), and microservices-based architectures. It also addresses concepts of scalability, fault tolerance, data consistency, and security in distributed systems. Practical activities include developing distributed applications using technologies such as RESTful APIs, WebSocket, MQTT, and gRPC.",
    tags: ["REST", "Swagger", "Socket", "WebSocket", "MQTT", "gRPC", "JSON Schemas"],
  },
  {
    name: "Systems Programming",
    date: "2026-01",
    description:
      "Study of operating system architecture and design principles, including resource management mechanisms (processes, memory, devices, file systems) and system module implementation. Covers system and concurrent programming in Unix/Linux and Windows environments, using system calls, advanced memory, file and thread management, and introduces Rust for safe concurrent development.",
    tags: ["Rust", "OS internals", "Thread synchronization", "React", "API programming"],
  },

  // first year, master's degree:
  {
    name: "Software Engineering I",
    date: "2025-09",
    description:
      "Study of principles, methodologies, and tools for developing and managing complex software projects. Focuses on requirements analysis and formalization, UML design, project management (WBS, Gantt, PERT), and testing techniques (white-box, black-box, unit, integration, system). Emphasizes teamwork and agile methodologies for collaborative development of large software systems.",
    tags: ["Testing", "JavaScript", "TypeORM", "SwaggerAPI", "REST"],
  },
  {
    name: "Web Applications I",
    date: "2025-06",
    description:
      "Study of techniques for building distributed web applications, with emphasis on front-end development using JavaScript and the React framework. Covers modern programming paradigms for building Single Page Applications (SPA), interaction with REST APIs, and client-server architecture design. Also addresses security, robustness, interoperability, and performance, providing practical skills for developing complete modern web applications.",
    tags: ["React", "SQLite", "Express", "JavaScript", "CSS", "HTML"],
  },
  {
    name: "Information Systems",
    date: "2025-02",
    description:
      "Study of methodologies and technologies for designing, managing, and evaluating information systems supporting business processes. Covers process modeling with UML and BPMN, organizational analysis, cost/benefit/performance evaluation (KPI, CSF, BSC), and major information system types (ERP, CRM, SCM). Also includes COBIT and ITIL reference models and workflow management technologies, providing skills to analyze, design, and optimize business processes and supporting systems.",
    tags: ["KPI", "CSM", "Business models"],
  },
  {
    name: "Computer System Architectures",
    date: "2025-01",
    description:
      "Course focused on microprocessor-based system architectures. Covers CISC, RISC, superscalar, pipelined, and ARM architectures, memory hierarchy (L1/L2 caches), and system buses. Includes development of firmware in C and assembly, with practical exercises on ARM boards for peripheral management (GPIO, timers, UART, etc.). Provides advanced skills in embedded systems programming and low-level debugging.",
    tags: ["C", "Assembler", "ARM", "LPC1768 programming"],
  },
  {
    name: "Networking Technologies and Services",
    date: "2025-01",
    description:
      "Advanced study of computer network technologies and architectures, including IPv4/IPv6 network design, Ethernet, and Internet routing protocols. Analysis of VPNs (customer and provider-provisioned), MPLS protocol, and QoS techniques in IP networks. Introduction to optical networks, cellular networks (from GSM to 5G) and network traffic analysis and prediction. Provides theoretical skills to analyze and optimize modern networks and advanced Internet services.",
    tags: ["IPv4", "IPv6", "MPLS", "VPN", "LAN"],
  },
  {
    name: "Data Science and Database Technologies",
    date: "2025-01",
    description:
      "Study of technologies for managing relational and non-relational (NoSQL) databases, including distributed architectures and replication techniques. Physical database design, modeling, and development of data warehouses for data analysis using SQL and OLAP. Introduction to data mining and machine learning techniques (classification, clustering, association rules) applied in the data science process.",
    tags: ["DBMS", "Data Warehouse", "NoSQL", "OLAP"],
  },

  // bachelor's degree:
  {
    name: "Object-Oriented Programming",
    date: "2024-07",
    description:
      "Study of software development techniques based on the object-oriented paradigm using Java. Covers fundamental OOP concepts (classes, inheritance, interfaces, polymorphism) and standard Java libraries (collections, streams, I/O management, threads). Introduces Software Engineering principles including software lifecycle, UML, design patterns, testing (JUnit), and configuration management, with practical development exercises in IDEs and version control systems.",
    tags: ["Java", "JUnit", "UML"],
  },
  {
    name: "Operating Systems",
    date: "2024-02",
    description:
      "Study of fundamental operating system principles and concurrent programming techniques. Covers UNIX/Linux systems, including user/admin commands, shell scripting, and system calls for process and thread management. Topics include synchronization, inter-process communication, resource management, and scheduling, with practical lab exercises in Linux to consolidate learning.",
    tags: ["OS", "Bash", "Linux"],
  },
  {
    name: "Introduction to Web Applications",
    date: "2024-02",
    description:
      "Study of web architecture principles and communication protocols underlying online applications. Covers main web technologies – HTML5, CSS3, and JavaScript – for building modern, accessible, and responsive interfaces. Introduces Flask (Python) for backend development, including database, session, and authentication management. Practical activities teach students to design and develop a complete medium-complexity web application, addressing both technical and visual aspects according to modern web design principles.",
    tags: ["HTML", "CSS", "Flask", "JavaScript", "Bootstrap"],
  },
  {
    name: "Databases",
    date: "2023-06",
    description:
      "Study of database management systems (DBMS). Covers conceptual and logical design using Entity-Relationship and relational models, relational algebra, and SQL for defining, querying, and managing data. Also addresses views, transactions, triggers, and client-server database access. Laboratory activities provide hands-on experience with commercial and open-source tools for database application design and development.",
    tags: ["DBMS", "SQLite", "UML", "E-R Models"],
  },
  {
    name: "Computer Architecture",
    date: "2023-06",
    description:
      "Study of fundamental concepts of information processing systems, focusing on architecture, operation, and design of hardware and software components. Covers microprocessor-based systems, processor-memory-peripheral interaction, and introduces assembly programming to understand low-level system operation. Discusses CISC, RISC and superscalar processor principles, providing a solid foundation for advanced courses like Operating Systems.",
    tags: ["Assembler", "OS"],
  },
];

export const mainExamsIt = [
  "Cloud Programming and Operations",
  "Mobile Application Development",
  "Information Systems Security",
  "Software Engineering II",
  "Distributed System Programming",
  "Programmazione di Sistema",
  "Software Engineering I",
];

export const mainExamsEn = [
  "Cloud Programming and Operations",
  "Mobile Application Development",
  "Information Systems Security",
  "Software Engineering II",
  "Distributed System Programming",
  "Systems Programming",
  "Software Engineering I",
];
