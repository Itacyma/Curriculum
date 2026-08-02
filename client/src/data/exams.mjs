export const mockExamsIt = [
  // secondo anno magistrale:
  {
    name: "Cloud Programming and Operations",
    date: "2026-06",
    description:
      "Studio delle principali tecniche e strumenti per la programmazione e la gestione di applicazioni cloud-native. Il corso approfondisce la cultura DevOps (modello CALMS, DORA metrics), l’orchestrazione dei container con Kubernetes — dal control plane ai pattern applicativi come sidecar, ambassador e operator — e la realizzazione di pipeline CI/CD dichiarative con approccio GitOps e ArgoCD. Ampio spazio è dedicato all’osservabilità (metriche, logs e traces), all’autoscaling, alla resilienza e al disaster recovery (circuit breaker, bulkhead, CAP/PACELC) e alla gestione del ciclo di vita in produzione tramite rollout progressivi, drift detection e incident response, con approfondimenti su cloud security e DevSecOps.",
    tags: ["Azure", "AWS", "Kubernetes", "Microservices", "CI/CD", "GitOps", "DevSecOps", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    name: "Mobile Application Development",
    date: "2026-06",
    description:
      "Studio delle principali tecniche e strumenti per lo sviluppo di applicazioni mobile moderne. Il corso approfondisce lo sviluppo nativo Android in Kotlin con Jetpack Compose, dalla gestione dichiarativa dello stato e del flusso dati unidirezionale (UDF) alla programmazione asincrona con coroutine e Flow, fino ai pattern architetturali (MVVM, data layer, dependency injection con Hilt) e alla navigazione tra schermate. Vengono trattati inoltre servizi in background e WorkManager, l’integrazione con Firebase e Firestore (query reattive, transazioni, security rules), lo sviluppo cross-platform (Flutter, React Native, Compose Multiplatform), l’integrazione di funzionalità AI on-device e i principi di UI/UX design per il mobile.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "Coroutines", "MVVM & MVI-Lite", "UDF", "SoC", "CMP", "Mobile UI/UX"],
  },
  {
    name: "Information Systems Security",
    date: "2026-01",
    description:
      "Studio dei fondamenti della sicurezza dei sistemi informativi e della gestione del rischio, dalla classificazione delle minacce e delle vulnerabilità ai processi di vulnerability e patch management. Il corso approfondisce la crittografia simmetrica e asimmetrica (AES, RSA, Diffie-Hellman, curve ellittiche, post-quantum), l’integrità dei dati, la firma digitale e i certificati, i meccanismi di autenticazione forte (MFA, passwordless, challenge-response, SSO) e la sicurezza di rete, di canale e di messaggio tramite IPsec, TLS, SSH e 802.1x. Vengono trattate inoltre le architetture di difesa perimetrale (firewall, IDS/IPS), la gestione degli incidenti e il quadro normativo e di standard (ISO 27001, GDPR, Cybersecurity Act).",
    tags: ["Cryptography", "Authentication", "Authorization", "Vulnerability management", "Firewall", "IDS", "GDPR", "Data protection"],
  },
  {
    name: "Software Engineering II",
    date: "2026-01",
    description:
      "Approfondimento delle metodologie agili e degli aspetti economici e qualitativi dello sviluppo software su progetti reali. Il corso tratta Agile e Scrum nella loro applicazione operativa, l’agile economics e i modelli di business del free e open source software, la gestione del debito tecnico e la misura della qualità del codice con SonarQube, i modelli di qualità ISO 25000 e le pratiche DevOps a supporto del rilascio continuo. Il percorso è centrato su un progetto di gruppo con gestione delle iterazioni, tracciamento delle attività e containerizzazione degli ambienti.",
    tags: ["Metodologia Agile", "Scrum", "DevOps", "Docker", "SonarQube", "YouTrack"],
  },
  {
    name: "Distributed System Programming",
    date: "2026-01",
    description:
      "Studio delle principali tecniche e tecnologie per la programmazione di sistemi distribuiti. Il corso approfondisce i modelli architetturali (client-server, peer-to-peer, publish/subscribe, message queue) e il ruolo del middleware, la progettazione di API RESTful secondo i vincoli dello stile REST, HATEOAS e il Richardson Maturity Model, la rappresentazione dei dati con JSON Schema e le chiamate remote con RPC, HTTP/2 e gRPC. Vengono trattati inoltre gli algoritmi distribuiti (clock logici di Lamport e vettoriali, mutua esclusione, elezione, consenso), i modelli di consistenza nella replicazione, la programmazione con socket TCP/UDP e WebSocket in Java, la tolleranza ai guasti e il teorema CAP, fino ai protocolli IoT come MQTT.",
    tags: ["REST", "Swagger", "Socket", "WebSocket", "MQTT", "gRPC", "JSON Schemas"],
  },
  {
    name: "Programmazione di Sistema",
    date: "2026-01",
    description:
      "Studio dell’architettura e dei principi di progettazione dei sistemi operativi, con approfondimento sui meccanismi interni di gestione delle risorse: gestione della memoria (allocazione, paging, page table gerarchiche e invertite, memoria virtuale, algoritmi di rimpiazzamento e thrashing), sottosistema di I/O, file system e memorie di massa. La seconda parte è dedicata alla programmazione di sistema e concorrente in Rust, con particolare attenzione al modello di ownership e borrowing, ai tratti e al polimorfismo, ai tempi di vita, agli smart pointer, alla gestione degli errori, alla modularità e ai test, fino ai modelli di concorrenza basati su stato condiviso (Arc, Mutex, RwLock, tipi atomici) e su scambio di messaggi tramite channel. Il progetto finale ha integrato un backend di sistema in Rust con un frontend React.",
    tags: ["Rust", "OS internals", "Thread synchronization", "Concurrency", "React"],
  },

  // primo anno magistrale:
  {
    name: "Software Engineering I",
    date: "2025-09",
    description:
      "Studio dei principi, metodologie e strumenti per lo sviluppo e la gestione di progetti software complessi. Il corso ha approfondito l’ingegneria dei requisiti (context diagram, glossario, scenari e use case, requisiti funzionali e non funzionali), la progettazione con UML e i pattern architetturali e di design (layered, client-server, broker, MVC, microkernel, pattern GoF), le tecniche di verifica e validazione (inspection, testing black-box e white-box, coverage, mutation testing, analisi statica) e la gestione della configurazione con Git e GitFlow. Sono stati trattati inoltre la gestione di progetto (Gantt, function point, COCOMO, risk management) e i modelli di processo, dal waterfall e V-model agli approcci iterativi e alle metodologie agili.",
    tags: ["Testing", "JavaScript", "TypeORM", "SwaggerAPI", "REST"],
  },
  {
    name: "Formal Languages and Compilers",
    date: "2025-07",
    description:
      "Studio della teoria dei linguaggi formali e della struttura dei compilatori. Il corso approfondisce la classificazione dei linguaggi secondo la gerarchia di Chomsky, le espressioni regolari e gli automi a stati finiti (DFA, NFA, minimizzazione), le grammatiche context-free con parse tree, automi a pila e macchine di Turing. La seconda parte è dedicata alle fasi del compilatore: analisi lessicale con scanner, analisi sintattica bottom-up (shift-reduce, LR(0), LR(1), gestione dei conflitti ed error recovery) e top-down (recursive descent, parsing predittivo, grammatiche LL(1)), traduzione guidata dalla sintassi con definizioni S- e L-attribuite, analisi semantica e type checking, fino alla generazione di codice intermedio a tre indirizzi e al back-patching. Le esercitazioni includono la realizzazione di scanner e parser con JFlex e CUP.",
    tags: ["Java", "JFlex", "CUP", "Parsing", "Automata", "Compilers"],
  },
  {
    name: "Applicazioni Web I",
    date: "2025-06",
    description:
      "Studio delle principali tecniche per la realizzazione di applicazioni web distribuite, con particolare attenzione alla programmazione front-end tramite JavaScript (ES6) e il framework React. Il corso ha approfondito la composizione a componenti, la gestione dello stato con gli hook e la Context API, il routing lato client con React Router e la gestione dei form, nel contesto dello sviluppo di Single Page Applications (SPA) che interagiscono con API REST. Sono stati trattati inoltre aspetti di sicurezza, robustezza, interoperabilità e prestazioni, fornendo competenze pratiche per la realizzazione completa di applicazioni web moderne.",
    tags: ["React", "SQLite", "Express", "JavaScript", "CSS", "HTML"],
  },
  {
    name: "Information Systems",
    date: "2025-02",
    description:
      "Studio delle metodologie e tecnologie per la progettazione, gestione e valutazione di sistemi informativi a supporto dei processi aziendali. Il corso ha trattato i modelli di rappresentazione dell’impresa ad alto e basso livello, l’analisi della struttura organizzativa e l’allineamento tra strategia di business e strategia IT, la misura delle performance tramite KPI, Critical Success Factors e Balanced Scorecard, e le principali classi di sistemi informativi aziendali (ERP, CRM). Sono stati approfonditi inoltre gli aspetti economici dell’IT, le scelte di make-or-buy e outsourcing e la gestione del cambiamento organizzativo, fornendo competenze per analizzare e ottimizzare processi aziendali e i relativi sistemi di supporto.",
    tags: ["KPI", "CSM", "Business models"],
  },
  {
    name: "Architetture dei Sistemi di Elaborazione",
    date: "2025-01",
    description:
      "Corso incentrato sull’architettura dei sistemi basati su microprocessore, dalle classi di parallelismo e dalla valutazione di prestazioni e affidabilità alla progettazione dell’instruction set. Approfondisce l’architettura MIPS64 e il pipelining, con l’analisi dei rischi strutturali, di dato e di controllo, delle tecniche di forwarding, delle operazioni multiciclo in virgola mobile e della predizione dei salti (BHT, BTB, predittori correlati), oltre alla gerarchia di memoria e alle politiche di mapping e rimpiazzamento delle cache. Tratta inoltre lo scheduling dinamico con l’algoritmo di Tomasulo, la speculazione hardware e i processori multi-issue, con esercitazioni pratiche su architettura ARM, cross-compilazione su board LPC1768 e protocollo CAN bus.",
    tags: ["C", "Assembler", "ARM", "LPC1768 programming"],
  },
  {
    name: "Tecnologie e Servizi di Rete",
    date: "2025-01",
    description:
      "Studio avanzato delle tecnologie e architetture delle reti di calcolatori, con approfondimenti sull’indirizzamento e il routing IPv4, sul protocollo IPv6 (neighbor discovery, duplicate address detection, autoconfigurazione stateless) e sulle strategie di transizione tra i due (tunneling, DS-Lite, NAT64/DNS64). Analizza le reti LAN e i relativi dispositivi (bridge, switch trasparenti, backward learning, loop detection, VLAN), gli algoritmi di routing distance vector e link state e l’instradamento inter-dominio con BGP, le VPN e i protocolli di tunneling (GRE, L2TP, IPsec) e il protocollo MPLS con le relative tecniche di label distribution e fault recovery. Il corso copre inoltre le reti wireless e cellulari (dal GSM a LTE ed EPC), le reti ottiche, la network softwarization con SDN e NFV, la qualità del servizio e le Content Delivery Network.",
    tags: ["IPv4", "IPv6", "MPLS", "VPN", "LAN"],
  },
  {
    name: "Data Science e Tecnologie per le Basi di Dati",
    date: "2025-01",
    description:
      "Studio del processo di estrazione della conoscenza dai dati e delle tecnologie a supporto. Il corso approfondisce la progettazione concettuale e logica di data warehouse e data mart (schema a stella, aggregazioni, viste materializzate, tecniche di ETL) e l’analisi multidimensionale con OLAP ed estensioni SQL. Tratta le tecniche di preparazione dei dati e i principali algoritmi di data mining e machine learning, supervisionati (alberi decisionali, random forest, KNN, classificazione bayesiana, reti neurali, curva ROC) e non supervisionati (regole di associazione con Apriori, K-means, clustering gerarchico, DBSCAN). Completano il percorso l’architettura interna dei DBMS (buffer manager, strutture ad albero, ottimizzatore, algoritmi di join, DBMS distribuiti) e i database non relazionali con MapReduce e MongoDB.",
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
      "Study of the main techniques and tools for programming and managing cloud-native applications. The course covers DevOps culture (CALMS model, DORA metrics), container orchestration with Kubernetes — from the control plane to application patterns such as sidecar, ambassador, and operator — and the implementation of declarative CI/CD pipelines with a GitOps approach and ArgoCD. Significant emphasis is placed on observability (metrics, logs, and traces), autoscaling, resilience and disaster recovery (circuit breaker, bulkhead, CAP/PACELC), and production lifecycle management through progressive rollouts, drift detection, and incident response, with insights into cloud security and DevSecOps.",
    tags: ["Azure", "AWS", "Kubernetes", "Microservices", "CI/CD", "GitOps", "DevSecOps", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    name: "Mobile Application Development",
    date: "2026-06",
    description:
      "Study of the main techniques and tools for developing modern mobile applications. The course covers native Android development in Kotlin with Jetpack Compose, from declarative state management and unidirectional data flow (UDF) to asynchronous programming with coroutines and Flow, up to architectural patterns (MVVM, data layer, dependency injection with Hilt) and screen navigation. It also addresses background services and WorkManager, integration with Firebase and Firestore (reactive queries, transactions, security rules), cross-platform development (Flutter, React Native, Compose Multiplatform), on-device AI features, and mobile UI/UX design principles.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "Coroutines", "MVVM & MVI-Lite", "UDF", "SoC", "CMP", "Mobile UI/UX"],
  },
  {
    name: "Information Systems Security",
    date: "2026-01",
    description:
      "Study of the fundamentals of information systems security and risk management, from threat and vulnerability classification to vulnerability and patch management processes. The course covers symmetric and asymmetric cryptography (AES, RSA, Diffie-Hellman, elliptic curves, post-quantum), data integrity, digital signatures and certificates, strong authentication mechanisms (MFA, passwordless, challenge-response, SSO), and network, channel, and message security through IPsec, TLS, SSH, and 802.1x. It also addresses perimeter defense architectures (firewalls, IDS/IPS), incident handling, and the regulatory and standards framework (ISO 27001, GDPR, Cybersecurity Act).",
    tags: ["Cryptography", "Authentication", "Authorization", "Vulnerability management", "Firewall", "IDS", "GDPR", "Data protection"],
  },
  {
    name: "Software Engineering II",
    date: "2026-01",
    description:
      "Advanced study of agile methodologies and of the economic and quality dimensions of software development on real projects. The course covers Agile and Scrum in their operational application, agile economics and free/open source software business models, technical debt management and code quality measurement with SonarQube, ISO 25000 quality models, and DevOps practices supporting continuous delivery. The path is centered on a team project with iteration management, issue tracking, and containerized environments.",
    tags: ["Agile methodology", "Scrum", "DevOps", "Docker", "SonarQube", "YouTrack"],
  },
  {
    name: "Distributed System Programming",
    date: "2026-01",
    description:
      "Study of the main techniques and technologies for programming distributed systems. The course covers architectural models (client-server, peer-to-peer, publish/subscribe, message queues) and the role of middleware, RESTful API design following REST constraints, HATEOAS, and the Richardson Maturity Model, data representation with JSON Schema, and remote invocation with RPC, HTTP/2, and gRPC. It also addresses distributed algorithms (Lamport and vector clocks, mutual exclusion, leader election, consensus), replication consistency models, TCP/UDP socket and WebSocket programming in Java, fault tolerance and the CAP theorem, up to IoT protocols such as MQTT.",
    tags: ["REST", "Swagger", "Socket", "WebSocket", "MQTT", "gRPC", "JSON Schemas"],
  },
  {
    name: "Systems Programming",
    date: "2026-01",
    description:
      "Study of operating system architecture and design principles, with a focus on internal resource management mechanisms: memory management (allocation, paging, hierarchical and inverted page tables, virtual memory, replacement algorithms and thrashing), the I/O subsystem, file systems, and mass storage. The second part is dedicated to system and concurrent programming in Rust, with particular attention to the ownership and borrowing model, traits and polymorphism, lifetimes, smart pointers, error handling, modularity and testing, up to concurrency models based on shared state (Arc, Mutex, RwLock, atomics) and message passing through channels. The final project integrated a Rust system backend with a React frontend.",
    tags: ["Rust", "OS internals", "Thread synchronization", "Concurrency", "React"],
  },

  // first year, master's degree:
  {
    name: "Software Engineering I",
    date: "2025-09",
    description:
      "Study of principles, methodologies, and tools for developing and managing complex software projects. The course covered requirements engineering (context diagrams, glossary, scenarios and use cases, functional and non-functional requirements), UML design and architectural and design patterns (layered, client-server, broker, MVC, microkernel, GoF patterns), verification and validation techniques (inspections, black-box and white-box testing, coverage, mutation testing, static analysis), and configuration management with Git and GitFlow. It also addressed project management (Gantt, function points, COCOMO, risk management) and process models, from waterfall and the V-model to iterative approaches and agile methodologies.",
    tags: ["Testing", "JavaScript", "TypeORM", "SwaggerAPI", "REST"],
  },
  {
    name: "Formal Languages and Compilers",
    date: "2025-07",
    description:
      "Study of formal language theory and compiler structure. The course covers language classification according to the Chomsky hierarchy, regular expressions and finite automata (DFA, NFA, minimization), context-free grammars with parse trees, pushdown automata, and Turing machines. The second part is dedicated to compiler phases: lexical analysis with scanners, bottom-up syntax analysis (shift-reduce, LR(0), LR(1), conflict handling and error recovery) and top-down analysis (recursive descent, predictive parsing, LL(1) grammars), syntax-directed translation with S- and L-attributed definitions, semantic analysis and type checking, up to three-address intermediate code generation and back-patching. Lab work includes building scanners and parsers with JFlex and CUP.",
    tags: ["Java", "JFlex", "CUP", "Parsing", "Automata", "Compilers"],
  },
  {
    name: "Web Applications I",
    date: "2025-06",
    description:
      "Study of techniques for building distributed web applications, with emphasis on front-end development using JavaScript (ES6) and the React framework. The course covered component composition, state management with hooks and the Context API, client-side routing with React Router, and form handling, in the context of Single Page Applications (SPA) interacting with REST APIs. It also addressed security, robustness, interoperability, and performance, providing practical skills for developing complete modern web applications.",
    tags: ["React", "SQLite", "Express", "JavaScript", "CSS", "HTML"],
  },
  {
    name: "Information Systems",
    date: "2025-02",
    description:
      "Study of methodologies and technologies for designing, managing, and evaluating information systems supporting business processes. The course covered high- and low-level enterprise representation models, organizational structure analysis and the alignment between business and IT strategy, performance measurement through KPIs, Critical Success Factors, and the Balanced Scorecard, and the main classes of enterprise information systems (ERP, CRM). It also explored IT economics, make-or-buy and outsourcing decisions, and organizational change management, providing skills to analyze and optimize business processes and their supporting systems.",
    tags: ["KPI", "CSM", "Business models"],
  },
  {
    name: "Computer System Architectures",
    date: "2025-01",
    description:
      "Course focused on microprocessor-based system architectures, from parallelism classes and performance and reliability evaluation to instruction set design. It covers the MIPS64 architecture and pipelining, with the analysis of structural, data, and control hazards, forwarding techniques, multicycle floating-point operations, and branch prediction (BHT, BTB, correlated predictors), along with the memory hierarchy and cache mapping and replacement policies. It also addresses dynamic scheduling with Tomasulo's algorithm, hardware speculation, and multi-issue processors, with hands-on work on ARM architecture, cross-compilation on LPC1768 boards, and the CAN bus protocol.",
    tags: ["C", "Assembler", "ARM", "LPC1768 programming"],
  },
  {
    name: "Networking Technologies and Services",
    date: "2025-01",
    description:
      "Advanced study of computer network technologies and architectures, covering IPv4 addressing and routing, the IPv6 protocol (neighbor discovery, duplicate address detection, stateless autoconfiguration), and transition strategies between the two (tunneling, DS-Lite, NAT64/DNS64). It analyzes LANs and their devices (bridges, transparent switches, backward learning, loop detection, VLANs), distance vector and link state routing algorithms and inter-domain routing with BGP, VPNs and tunneling protocols (GRE, L2TP, IPsec), and the MPLS protocol with its label distribution and fault recovery techniques. The course also covers wireless and cellular networks (from GSM to LTE and EPC), optical networks, network softwarization with SDN and NFV, quality of service, and Content Delivery Networks.",
    tags: ["IPv4", "IPv6", "MPLS", "VPN", "LAN"],
  },
  {
    name: "Data Science and Database Technologies",
    date: "2025-01",
    description:
      "Study of the knowledge discovery process and of the technologies supporting it. The course covers the conceptual and logical design of data warehouses and data marts (star schema, aggregations, materialized views, ETL techniques) and multidimensional analysis with OLAP and SQL extensions. It addresses data preparation techniques and the main data mining and machine learning algorithms, both supervised (decision trees, random forest, KNN, Bayesian classification, neural networks, ROC curve) and unsupervised (association rules with Apriori, K-means, hierarchical clustering, DBSCAN). The path is completed by DBMS internals (buffer manager, tree structures, query optimizer, join algorithms, distributed DBMS) and non-relational databases with MapReduce and MongoDB.",
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
  "Applicazioni Web I",
  "Architetture dei Sistemi di Elaborazione",
];

export const mainExamsEn = [
  "Cloud Programming and Operations",
  "Mobile Application Development",
  "Information Systems Security",
  "Software Engineering II",
  "Distributed System Programming",
  "Systems Programming",
  "Software Engineering I",
  "Web Applications I",
  "Computer System Architectures",
];