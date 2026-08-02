/**
 * Struttura dati per la modalità interattiva di ricerca.
 * Ogni item ha: type ("exam" | "project"), name (it/en), description (it/en),
 * keywords (array di stringhe ricercabili), e detailComponent (nome componente opzionale).
 *
 * Le keywords saranno usate sia per l'autocomplete sia per il filtraggio dei risultati.
 * I `tags` sono quelli mostrati a schermo; le `keywords` li includono ed estendono
 * con sinonimi, acronimi e varianti IT/EN per massimizzare il recall della ricerca.
 */

export const searchableItems = [
  // ─── ESAMI ───────────────────────────────────────────
  {
    type: "exam",
    name: { it: "Cloud Programming and Operations", en: "Cloud Programming and Operations" },
    description: {
      it: "Studio delle principali tecniche e strumenti per la programmazione e la gestione di applicazioni cloud-native. Il corso approfondisce la cultura DevOps (modello CALMS, DORA metrics), l’orchestrazione dei container con Kubernetes — dal control plane ai pattern applicativi come sidecar, ambassador e operator — e la realizzazione di pipeline CI/CD dichiarative con approccio GitOps e ArgoCD. Ampio spazio è dedicato all’osservabilità (metriche, logs e traces), all’autoscaling, alla resilienza e al disaster recovery (circuit breaker, bulkhead, CAP/PACELC) e alla gestione del ciclo di vita in produzione tramite rollout progressivi, drift detection e incident response, con approfondimenti su cloud security e DevSecOps.",
      en: "Study of the main techniques and tools for programming and managing cloud-native applications. The course covers DevOps culture (CALMS model, DORA metrics), container orchestration with Kubernetes — from the control plane to application patterns such as sidecar, ambassador, and operator — and the implementation of declarative CI/CD pipelines with a GitOps approach and ArgoCD. Significant emphasis is placed on observability (metrics, logs, and traces), autoscaling, resilience and disaster recovery (circuit breaker, bulkhead, CAP/PACELC), and production lifecycle management through progressive rollouts, drift detection, and incident response, with insights into cloud security and DevSecOps."
    },
    keywords: [
      "Azure", "AWS", "Cloud", "Cloud Native", "Kubernetes", "K8s", "Docker", "Containers", "Container Orchestration",
      "Microservices", "Microservizi", "Helm", "Operators", "Service Mesh", "Ingress", "Gateway", "Control Plane",
      "etcd", "kubelet", "Pod", "Deployment", "ConfigMap", "Secrets", "Namespace", "Probes", "Volumes",
      "CI/CD", "Continuous Integration", "Continuous Delivery", "GitOps", "ArgoCD", "Terraform",
      "Infrastructure as Code", "IaC", "DevOps", "DevSecOps", "DORA metrics", "CALMS", "Platform Engineering",
      "Observability", "Osservabilità", "Monitoring", "Prometheus", "Grafana", "OpenTelemetry",
      "Metrics", "Logs", "Traces", "Autoscaling", "HPA", "Optimization",
      "Resilience", "Resilienza", "Disaster Recovery", "High Availability", "Circuit Breaker", "Bulkhead",
      "Pod Disruption Budget", "CAP Theorem", "PACELC", "Chaos Engineering", "RTO", "RPO",
      "Canary Deployment", "Blue-Green", "Rollout", "Lifecycle Management", "Incident Response",
      "Spring Boot", "Reactive Programming", "Coroutines", "Sidecar", "Ambassador", "Zero Trust", "Vault"
    ],
    tags: ["Azure", "AWS", "Kubernetes", "Microservices", "CI/CD", "GitOps", "DevSecOps", "ArgoCD", "Prometheus", "Grafana"],
    date: "2026-06-22"
  },
  {
    type: "exam",
    name: { it: "Mobile Application Development", en: "Mobile Application Development" },
    description: {
      it: "Studio delle principali tecniche e strumenti per lo sviluppo di applicazioni mobile moderne. Il corso approfondisce lo sviluppo nativo Android in Kotlin con Jetpack Compose, dalla gestione dichiarativa dello stato e del flusso dati unidirezionale (UDF) alla programmazione asincrona con coroutine e Flow, fino ai pattern architetturali (MVVM, data layer, dependency injection con Hilt) e alla navigazione tra schermate. Vengono trattati inoltre servizi in background e WorkManager, l’integrazione con Firebase e Firestore (query reattive, transazioni, security rules), lo sviluppo cross-platform (Flutter, React Native, Compose Multiplatform), l’integrazione di funzionalità AI on-device e i principi di UI/UX design per il mobile.",
      en: "Study of the main techniques and tools for developing modern mobile applications. The course covers native Android development in Kotlin with Jetpack Compose, from declarative state management and unidirectional data flow (UDF) to asynchronous programming with coroutines and Flow, up to architectural patterns (MVVM, data layer, dependency injection with Hilt) and screen navigation. It also addresses background services and WorkManager, integration with Firebase and Firestore (reactive queries, transactions, security rules), cross-platform development (Flutter, React Native, Compose Multiplatform), on-device AI features, and mobile UI/UX design principles."
    },
    keywords: [
      "Kotlin", "Android", "Mobile", "Jetpack Compose", "Compose", "Declarative UI", "Composable",
      "State Hoisting", "Recomposition", "UDF", "Unidirectional Data Flow", "Activity", "Lifecycle", "Intent", "Context",
      "Coroutines", "Flow", "StateFlow", "Threads", "Asynchronous Programming", "Concurrency",
      "MVVM", "MVI-Lite", "MVVM & MVI-Lite", "SoC", "Separation of Concerns", "Architectural Patterns", "Repository Pattern", "Data Layer",
      "Dependency Injection", "Hilt", "Dagger", "Navigation", "Room", "DataStore", "Gradle",
      "Services", "WorkManager", "Background Tasks", "Bound Services",
      "Firebase", "Firestore", "Google Sign-in", "Authentication", "Security Rules", "Transactions", "BaaS",
      "Cross-platform", "CMP", "Compose Multiplatform", "KMP", "Kotlin Multiplatform", "Flutter", "React Native", "PWA",
      "On-device AI", "Gemini Nano", "ML Kit", "LiteRT", "Machine Learning",
      "XR", "AR", "VR", "Extended Reality", "OpenXR", "Android XR",
      "Mobile UI/UX", "Material Design", "UX Laws", "Animations", "Gestures"
    ],
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "Google Sign-in", "Coroutines", "MVVM & MVI-Lite", "UDF", "SoC", "CMP", "Mobile UI/UX"],
    date: "2026-06-16"
  },
  {
    type: "exam",
    name: { it: "Information Systems Security", en: "Information Systems Security" },
    description: {
      it: "Studio dei fondamenti della sicurezza dei sistemi informativi e della gestione del rischio, dalla classificazione delle minacce e delle vulnerabilità ai processi di vulnerability e patch management. Il corso approfondisce la crittografia simmetrica e asimmetrica (AES, RSA, Diffie-Hellman, curve ellittiche, post-quantum), l’integrità dei dati, la firma digitale e i certificati, i meccanismi di autenticazione forte (MFA, passwordless, challenge-response, SSO) e la sicurezza di rete, di canale e di messaggio tramite IPsec, TLS, SSH e 802.1x. Vengono trattate inoltre le architetture di difesa perimetrale (firewall, IDS/IPS), la gestione degli incidenti e il quadro normativo e di standard (ISO 27001, GDPR, Cybersecurity Act).",
      en: "Study of the fundamentals of information systems security and risk management, from threat and vulnerability classification to vulnerability and patch management processes. The course covers symmetric and asymmetric cryptography (AES, RSA, Diffie-Hellman, elliptic curves, post-quantum), data integrity, digital signatures and certificates, strong authentication mechanisms (MFA, passwordless, challenge-response, SSO), and network, channel, and message security through IPsec, TLS, SSH, and 802.1x. It also addresses perimeter defense architectures (firewalls, IDS/IPS), incident handling, and the regulatory and standards framework (ISO 27001, GDPR, Cybersecurity Act)."
    },
    keywords: [
      "Security", "Cybersecurity", "Sicurezza Informatica", "Information Security",
      "Cryptography", "Crittografia", "AES", "Symmetric Encryption", "Block Cipher", "Stream Cipher",
      "RSA", "Diffie-Hellman", "ECC", "Elliptic Curves", "Post-Quantum Cryptography", "Asymmetric Encryption",
      "Hash", "HMAC", "Digest", "Authenticated Encryption", "Digital Signature", "Firma Digitale",
      "PKI", "X.509", "Digital Certificates", "Certification Authority", "Time-stamping",
      "Authentication", "Autenticazione", "MFA", "Multi-factor Authentication", "Passwordless", "One-Time Password",
      "Challenge-Response", "SSO", "Single Sign-On", "Authorization", "Identity Management", "Biometrics",
      "TLS", "DTLS", "SSL", "SSH", "IPsec", "AH", "ESP", "IKE", "VPN", "OpenVPN", "802.1x", "EAP", "Eduroam",
      "Network Security", "Channel Security", "Message Security", "S/MIME", "PGP", "Email Security",
      "Firewall", "Packet Filter", "Application Gateway", "DMZ", "Screened Subnet", "IDS", "IPS", "Intrusion Detection",
      "Vulnerability management", "Vulnerability Assessment", "Patch Management", "Risk Assessment", "Risk Management",
      "Threat Modelling", "Incident Response", "Malware", "Ransomware", "DDoS", "DoS",
      "Man-in-the-Middle", "Packet Sniffing", "Spoofing", "Phishing",
      "GDPR", "ISO 27001", "Common Criteria", "Cybersecurity Act", "Compliance", "Data protection", "Privacy"
    ],
    tags: ["Cryptography", "Authentication", "Authorization", "Vulnerability management", "Firewall", "IDS", "GDPR", "Data protection"],
    date: "2026-01-26"
  },
  {
    type: "exam",
    name: { it: "Software Engineering II", en: "Software Engineering II" },
    description: {
      it: "Approfondimento delle metodologie agili e degli aspetti economici e qualitativi dello sviluppo software su progetti reali. Il corso tratta Agile e Scrum nella loro applicazione operativa, l’agile economics e i modelli di business del free e open source software, la gestione del debito tecnico e la misura della qualità del codice con SonarQube, i modelli di qualità ISO 25000 e le pratiche DevOps a supporto del rilascio continuo. Il percorso è centrato su un progetto di gruppo con gestione delle iterazioni, tracciamento delle attività e containerizzazione degli ambienti.",
      en: "Advanced study of agile methodologies and of the economic and quality dimensions of software development on real projects. The course covers Agile and Scrum in their operational application, agile economics and free/open source software business models, technical debt management and code quality measurement with SonarQube, ISO 25000 quality models, and DevOps practices supporting continuous delivery. The path is centered on a team project with iteration management, issue tracking, and containerized environments."
    },
    keywords: [
      "Agile", "Metodologia Agile", "Scrum", "Sprint", "Kanban", "Extreme Programming", "Team Management",
      "DevOps", "Docker", "Containers", "CI/CD", "Continuous Delivery", "Automation",
      "SonarQube", "Code Quality", "Qualità del Software", "Static Analysis", "Technical Debt", "Debito Tecnico",
      "ISO 25000", "Software Metrics", "Agile Economics", "Software Economics",
      "Free Software", "Open Source", "Licensing", "YouTrack", "Issue Tracking", "Testing"
    ],
    tags: ["Agile", "Scrum", "DevOps", "Docker", "SonarQube", "YouTrack"],
    date: "2026-01-22"
  },
  {
    type: "exam",
    name: { it: "Distributed System Programming", en: "Distributed System Programming" },
    description: {
      it: "Studio delle principali tecniche e tecnologie per la programmazione di sistemi distribuiti. Il corso approfondisce i modelli architetturali (client-server, peer-to-peer, publish/subscribe, message queue) e il ruolo del middleware, la progettazione di API RESTful secondo i vincoli dello stile REST, HATEOAS e il Richardson Maturity Model, la rappresentazione dei dati con JSON Schema e le chiamate remote con RPC, HTTP/2 e gRPC. Vengono trattati inoltre gli algoritmi distribuiti (clock logici di Lamport e vettoriali, mutua esclusione, elezione, consenso), i modelli di consistenza nella replicazione, la programmazione con socket TCP/UDP e WebSocket in Java, la tolleranza ai guasti e il teorema CAP, fino ai protocolli IoT come MQTT.",
      en: "Study of the main techniques and technologies for programming distributed systems. The course covers architectural models (client-server, peer-to-peer, publish/subscribe, message queues) and the role of middleware, RESTful API design following REST constraints, HATEOAS, and the Richardson Maturity Model, data representation with JSON Schema, and remote invocation with RPC, HTTP/2, and gRPC. It also addresses distributed algorithms (Lamport and vector clocks, mutual exclusion, leader election, consensus), replication consistency models, TCP/UDP socket and WebSocket programming in Java, fault tolerance and the CAP theorem, up to IoT protocols such as MQTT."
    },
    keywords: [
      "Distributed Systems", "Sistemi Distribuiti", "Middleware", "Microservices", "Scalability", "Openness",
      "Client-Server", "Peer-to-Peer", "P2P", "Publish-Subscribe", "Message Queue", "Distributed Objects",
      "REST", "RESTful", "API Design", "HATEOAS", "Richardson Maturity Model", "SOA", "Service Oriented Architecture",
      "Swagger", "OpenAPI", "URI Design", "Resource Modelling", "Stateless", "Caching",
      "JSON", "JSON Schemas", "Data Encoding", "Serialization", "Abstract Syntax",
      "RPC", "Remote Procedure Call", "gRPC", "Protocol Buffers", "protobuf", "HTTP/2", "Streaming", "Stub Generation",
      "Socket", "TCP", "UDP", "WebSocket", "MQTT", "IoT", "Real-time", "Broker", "Topic",
      "Distributed Algorithms", "Lamport Clock", "Vector Clock", "Logical Clocks", "Synchronization",
      "Mutual Exclusion", "Token Ring", "Leader Election", "Bully Algorithm", "Consensus",
      "Replication", "Consistency", "Eventual Consistency", "Causal Consistency", "Sequential Consistency",
      "CAP Theorem", "Fault Tolerance", "Crash Detection", "Java", "Kubernetes"
    ],
    tags: ["REST", "Swagger", "Socket", "WebSocket", "MQTT", "gRPC", "JSON Schemas"],
    date: "2026-01-19"
  },
  {
    type: "exam",
    name: { it: "Programmazione di Sistema", en: "Systems Programming" },
    description: {
      it: "Studio dell’architettura e dei principi di progettazione dei sistemi operativi, con approfondimento sui meccanismi interni di gestione delle risorse: gestione della memoria (allocazione, paging, page table gerarchiche e invertite, memoria virtuale, algoritmi di rimpiazzamento e thrashing), sottosistema di I/O, file system e memorie di massa. La seconda parte è dedicata alla programmazione di sistema e concorrente in Rust, con particolare attenzione al modello di ownership e borrowing, ai tratti e al polimorfismo, ai tempi di vita, agli smart pointer, alla gestione degli errori, alla modularità e ai test, fino ai modelli di concorrenza basati su stato condiviso (Arc, Mutex, RwLock, tipi atomici) e su scambio di messaggi tramite channel. Il progetto finale ha integrato un backend di sistema in Rust con un frontend React.",
      en: "Study of operating system architecture and design principles, with a focus on internal resource management mechanisms: memory management (allocation, paging, hierarchical and inverted page tables, virtual memory, replacement algorithms and thrashing), the I/O subsystem, file systems, and mass storage. The second part is dedicated to system and concurrent programming in Rust, with particular attention to the ownership and borrowing model, traits and polymorphism, lifetimes, smart pointers, error handling, modularity and testing, up to concurrency models based on shared state (Arc, Mutex, RwLock, atomics) and message passing through channels. The final project integrated a Rust system backend with a React frontend."
    },
    keywords: [
      "Rust", "Cargo", "Ownership", "Borrowing", "Lifetimes", "Traits", "Polymorphism", "Generics",
      "Smart Pointers", "Box", "Rc", "Arc", "RefCell", "Cell", "RAII", "Closures", "Iterators",
      "Error Handling", "Result", "Option", "Pattern Matching", "Modularity", "Unit Testing", "Memory Safety",
      "Concurrency", "Concorrenza", "Multithreading", "Threads", "Mutex", "RwLock", "Atomics", "Channels",
      "Semaphores", "Semafori", "Condition Variables", "Deadlock", "Race Condition", "Critical Section",
      "Peterson", "Memory Barriers", "Thread synchronization", "Message Passing", "Shared State",
      "OS internals", "Sistemi Operativi", "Operating Systems", "Memory Management", "Paging", "Page Table",
      "Virtual Memory", "Page Replacement", "LRU", "Thrashing", "Swapping", "Fragmentation",
      "File System", "Directory", "RAID", "Disk Scheduling", "I/O", "Device Drivers",
      "System Calls", "Kernel", "Unix", "Linux", "Windows", "Process Management",
      "React", "API programming", "Frontend"
    ],
    tags: ["Rust", "OS internals", "Thread synchronization", "Concurrency", "React"],
    date: "2026-01-16"
  },
  {
    type: "exam",
    name: { it: "Software Engineering I", en: "Software Engineering I" },
    description: {
      it: "Studio dei principi, metodologie e strumenti per lo sviluppo e la gestione di progetti software complessi. Il corso ha approfondito l’ingegneria dei requisiti (context diagram, glossario, scenari e use case, requisiti funzionali e non funzionali), la progettazione con UML e i pattern architetturali e di design (layered, client-server, broker, MVC, microkernel, pattern GoF), le tecniche di verifica e validazione (inspection, testing black-box e white-box, coverage, mutation testing, analisi statica) e la gestione della configurazione con Git e GitFlow. Sono stati trattati inoltre la gestione di progetto (Gantt, function point, COCOMO, risk management) e i modelli di processo, dal waterfall e V-model agli approcci iterativi e alle metodologie agili.",
      en: "Study of principles, methodologies, and tools for developing and managing complex software projects. The course covered requirements engineering (context diagrams, glossary, scenarios and use cases, functional and non-functional requirements), UML design and architectural and design patterns (layered, client-server, broker, MVC, microkernel, GoF patterns), verification and validation techniques (inspections, black-box and white-box testing, coverage, mutation testing, static analysis), and configuration management with Git and GitFlow. It also addressed project management (Gantt, function points, COCOMO, risk management) and process models, from waterfall and the V-model to iterative approaches and agile methodologies."
    },
    keywords: [
      "Software Engineering", "Ingegneria del Software", "Requirements Engineering", "Requisiti",
      "Context Diagram", "Glossary", "Use Case", "Scenarios", "Functional Requirements", "Non-Functional Requirements",
      "UML", "Class Diagram", "Use Case Diagram", "Sequence Diagram", "Deployment Diagram", "Object-Oriented Design",
      "Software Architecture", "Architectural Patterns", "Layered Architecture", "Pipe and Filter", "Repository Pattern",
      "Client-Server", "Broker", "MVC", "Microkernel", "Design Patterns", "GoF", "Creational Patterns",
      "Structural Patterns", "Behavioural Patterns", "Observer", "Strategy", "Template Method",
      "Testing", "V&V", "Verification", "Validation", "Black-box Testing", "White-box Testing",
      "Unit Test", "Integration Test", "System Test", "Regression Test", "Code Coverage", "Mutation Testing",
      "Static Analysis", "Inspection", "Fagan Inspection", "Test Automation", "Traceability Matrix",
      "Configuration Management", "Git", "GitFlow", "Branching", "Versioning", "Software Build",
      "Project Management", "Gantt", "COCOMO", "Function Points", "Estimation", "Risk Management", "Scheduling",
      "Process Models", "Waterfall", "V-Model", "Incremental", "Iterative", "RUP", "Prototyping",
      "Agile", "Scrum", "Extreme Programming", "GUI Design", "Personas", "User Centered Design",
      "JavaScript", "TypeORM", "SwaggerAPI", "REST"
    ],
    tags: ["Testing", "JavaScript", "TypeORM", "SwaggerAPI", "REST"],
    date: "2025-09-05"
  },
  {
    type: "exam",
    name: { it: "Formal Languages and Compilers", en: "Formal Languages and Compilers" },
    description: {
      it: "Studio della teoria dei linguaggi formali e della struttura dei compilatori. Il corso approfondisce la classificazione dei linguaggi secondo la gerarchia di Chomsky, le espressioni regolari e gli automi a stati finiti (DFA, NFA, minimizzazione), le grammatiche context-free con parse tree, automi a pila e macchine di Turing. La seconda parte è dedicata alle fasi del compilatore: analisi lessicale con scanner, analisi sintattica bottom-up (shift-reduce, LR(0), LR(1), gestione dei conflitti ed error recovery) e top-down (recursive descent, parsing predittivo, grammatiche LL(1)), traduzione guidata dalla sintassi con definizioni S- e L-attribuite, analisi semantica e type checking, fino alla generazione di codice intermedio a tre indirizzi e al back-patching. Le esercitazioni includono la realizzazione di scanner e parser con JFlex e CUP.",
      en: "Study of formal language theory and compiler structure. The course covers language classification according to the Chomsky hierarchy, regular expressions and finite automata (DFA, NFA, minimization), context-free grammars with parse trees, pushdown automata, and Turing machines. The second part is dedicated to compiler phases: lexical analysis with scanners, bottom-up syntax analysis (shift-reduce, LR(0), LR(1), conflict handling and error recovery) and top-down analysis (recursive descent, predictive parsing, LL(1) grammars), syntax-directed translation with S- and L-attributed definitions, semantic analysis and type checking, up to three-address intermediate code generation and back-patching. Lab work includes building scanners and parsers with JFlex and CUP."
    },
    keywords: [
      "Compilers", "Compilatori", "Formal Languages", "Linguaggi Formali", "Language Theory",
      "Chomsky Hierarchy", "Regular Expressions", "Espressioni Regolari", "Regular Languages", "Regular Grammar",
      "Automata", "Finite Automata", "Automi", "DFA", "NFA", "Epsilon Transitions", "State Minimization",
      "Context-Free Grammar", "CFG", "Grammatiche", "Parse Tree", "Ambiguous Grammars",
      "Pushdown Automata", "PDA", "Turing Machine", "Recursive Sets", "Decidability",
      "Lexical Analysis", "Scanner", "Tokenization", "Syntax Analysis", "Parser", "Parsing",
      "Bottom-up Parsing", "Shift-Reduce", "LR(0)", "LR(1)", "SLR", "LALR", "Parsing Table", "Parsing Conflicts",
      "Top-down Parsing", "Recursive Descent", "Predictive Parsing", "LL(1)", "Left Recursion", "Error Recovery",
      "Syntax-Directed Translation", "SDT", "SDD", "S-Attributed", "L-Attributed", "Attribute Grammar",
      "Semantic Analysis", "Type Checking", "Symbol Table", "Scope",
      "Intermediate Code", "Three-Address Code", "Syntax Tree", "Back-patching", "Code Generation",
      "JFlex", "CUP", "Java", "Lexer", "Parser Generator"
    ],
    tags: ["Java", "JFlex", "CUP", "Parsing", "Automata", "Compilers"],
    date: "2025-07-15"
  },
  {
    type: "exam",
    name: { it: "Applicazioni Web I", en: "Web Applications I" },
    description: {
      it: "Studio delle principali tecniche per la realizzazione di applicazioni web distribuite, con particolare attenzione alla programmazione front-end tramite JavaScript (ES6) e il framework React. Il corso ha approfondito la composizione a componenti, la gestione dello stato con gli hook e la Context API, il routing lato client con React Router e la gestione dei form, nel contesto dello sviluppo di Single Page Applications (SPA) che interagiscono con API REST. Sono stati trattati inoltre aspetti di sicurezza, robustezza, interoperabilità e prestazioni, fornendo competenze pratiche per la realizzazione completa di applicazioni web moderne.",
      en: "Study of techniques for building distributed web applications, with emphasis on front-end development using JavaScript (ES6) and the React framework. The course covered component composition, state management with hooks and the Context API, client-side routing with React Router, and form handling, in the context of Single Page Applications (SPA) interacting with REST APIs. It also addressed security, robustness, interoperability, and performance, providing practical skills for developing complete modern web applications."
    },
    keywords: [
      "React", "JSX", "Components", "Hooks", "useState", "useEffect", "Context API", "Props", "State Management",
      "React Router", "Routing", "Forms", "SPA", "Single Page Application", "Frontend",
      "JavaScript", "ES6", "Node.js", "Express", "SQLite", "REST", "API", "Fetch",
      "HTML", "CSS", "Bootstrap", "Responsive Design", "Web Development", "Client-Server", "Browser", "DOM"
    ],
    tags: ["React", "SQLite", "Express", "JavaScript", "CSS", "HTML"],
    date: "2025-06-20"
  },
  {
    type: "exam",
    name: { it: "Information Systems", en: "Information Systems" },
    description: {
      it: "Studio delle metodologie e tecnologie per la progettazione, gestione e valutazione di sistemi informativi a supporto dei processi aziendali. Il corso ha trattato i modelli di rappresentazione dell’impresa ad alto e basso livello, l’analisi della struttura organizzativa e l’allineamento tra strategia di business e strategia IT, la misura delle performance tramite KPI, Critical Success Factors e Balanced Scorecard, e le principali classi di sistemi informativi aziendali (ERP, CRM). Sono stati approfonditi inoltre gli aspetti economici dell’IT, le scelte di make-or-buy e outsourcing e la gestione del cambiamento organizzativo, fornendo competenze per analizzare e ottimizzare processi aziendali e i relativi sistemi di supporto.",
      en: "Study of methodologies and technologies for designing, managing, and evaluating information systems supporting business processes. The course covered high- and low-level enterprise representation models, organizational structure analysis and the alignment between business and IT strategy, performance measurement through KPIs, Critical Success Factors, and the Balanced Scorecard, and the main classes of enterprise information systems (ERP, CRM). It also explored IT economics, make-or-buy and outsourcing decisions, and organizational change management, providing skills to analyze and optimize business processes and their supporting systems."
    },
    keywords: [
      "Information Systems", "Sistemi Informativi", "Enterprise Systems", "ERP", "CRM", "SCM",
      "Business models", "Business Process", "Process Modelling", "BPMN", "Organization", "Organizational Models",
      "IT Strategy", "IT Governance", "Business-IT Alignment", "COBIT", "ITIL",
      "KPI", "CSF", "Critical Success Factors", "Balanced Scorecard", "BSC", "Performance Management", "CSM",
      "IT Economics", "TCO", "ROI", "Cost-Benefit Analysis", "Outsourcing", "Make or Buy", "Change Management"
    ],
    tags: ["KPI", "CSM", "Business models"],
    date: "2025-02-20"
  },
  {
    type: "exam",
    name: { it: "Architetture dei Sistemi di Elaborazione", en: "Computer System Architectures" },
    description: {
      it: "Corso incentrato sull’architettura dei sistemi basati su microprocessore, dalle classi di parallelismo e dalla valutazione di prestazioni e affidabilità alla progettazione dell’instruction set. Approfondisce l’architettura MIPS64 e il pipelining, con l’analisi dei rischi strutturali, di dato e di controllo, delle tecniche di forwarding, delle operazioni multiciclo in virgola mobile e della predizione dei salti (BHT, BTB, predittori correlati), oltre alla gerarchia di memoria e alle politiche di mapping e rimpiazzamento delle cache. Tratta inoltre lo scheduling dinamico con l’algoritmo di Tomasulo, la speculazione hardware e i processori multi-issue, con esercitazioni pratiche su architettura ARM, cross-compilazione su board LPC1768 e protocollo CAN bus.",
      en: "Course focused on microprocessor-based system architectures, from parallelism classes and performance and reliability evaluation to instruction set design. It covers the MIPS64 architecture and pipelining, with the analysis of structural, data, and control hazards, forwarding techniques, multicycle floating-point operations, and branch prediction (BHT, BTB, correlated predictors), along with the memory hierarchy and cache mapping and replacement policies. It also addresses dynamic scheduling with Tomasulo's algorithm, hardware speculation, and multi-issue processors, with hands-on work on ARM architecture, cross-compilation on LPC1768 boards, and the CAN bus protocol."
    },
    keywords: [
      "C", "Assembler", "Assembly", "ARM", "LPC1768 programming", "Embedded", "Firmware", "Cross-compilation",
      "Microprocessor", "Computer Architecture", "Instruction Set", "ISA", "CISC", "RISC", "MIPS", "MIPS64",
      "Pipeline", "Pipelining", "Hazards", "Structural Hazards", "Data Hazards", "Control Hazards", "Forwarding", "Stall",
      "Branch Prediction", "BHT", "BTB", "Correlated Predictor", "Speculation",
      "Tomasulo", "Dynamic Scheduling", "Reservation Station", "Out-of-Order Execution", "Superscalar", "Multi-issue",
      "Cache", "Memory Hierarchy", "Direct Mapping", "Set Associative", "Fully Associative", "Cache Replacement",
      "Write-Back", "Write-Through", "Floating Point", "Multicycle Operations", "Exceptions",
      "Performance", "Reliability", "Parallelism", "CAN bus", "GPIO", "UART", "Timer", "Peripherals", "Bare Metal"
    ],
    tags: ["C", "Assembler", "ARM", "LPC1768 programming"],
    date: "2025-01-28"
  },
  {
    type: "exam",
    name: { it: "Tecnologie e Servizi di Rete", en: "Networking Technologies and Services" },
    description: {
      it: "Studio avanzato delle tecnologie e architetture delle reti di calcolatori, con approfondimenti sull’indirizzamento e il routing IPv4, sul protocollo IPv6 (neighbor discovery, duplicate address detection, autoconfigurazione stateless) e sulle strategie di transizione tra i due (tunneling, DS-Lite, NAT64/DNS64). Analizza le reti LAN e i relativi dispositivi (bridge, switch trasparenti, backward learning, loop detection, VLAN), gli algoritmi di routing distance vector e link state e l’instradamento inter-dominio con BGP, le VPN e i protocolli di tunneling (GRE, L2TP, IPsec) e il protocollo MPLS con le relative tecniche di label distribution e fault recovery. Il corso copre inoltre le reti wireless e cellulari (dal GSM a LTE ed EPC), le reti ottiche, la network softwarization con SDN e NFV, la qualità del servizio e le Content Delivery Network.",
      en: "Advanced study of computer network technologies and architectures, covering IPv4 addressing and routing, the IPv6 protocol (neighbor discovery, duplicate address detection, stateless autoconfiguration), and transition strategies between the two (tunneling, DS-Lite, NAT64/DNS64). It analyzes LANs and their devices (bridges, transparent switches, backward learning, loop detection, VLANs), distance vector and link state routing algorithms and inter-domain routing with BGP, VPNs and tunneling protocols (GRE, L2TP, IPsec), and the MPLS protocol with its label distribution and fault recovery techniques. The course also covers wireless and cellular networks (from GSM to LTE and EPC), optical networks, network softwarization with SDN and NFV, quality of service, and Content Delivery Networks."
    },
    keywords: [
      "Networking", "Reti", "Computer Networks", "IPv4", "IPv6", "IP Addressing", "Subnetting", "Multicast", "Anycast",
      "Neighbor Discovery", "DAD", "Stateless Autoconfiguration", "ICMPv6", "NAT", "NAT64", "DNS64", "DS-Lite", "6to4",
      "LAN", "Ethernet", "VLAN", "Switch", "Bridge", "Hub", "Repeater", "Backward Learning", "Spanning Tree", "Loop Detection",
      "Routing", "Forwarding", "Distance Vector", "Link State", "OSPF", "BGP", "Autonomous System", "Inter-AS", "Intra-AS",
      "VPN", "Tunneling", "GRE", "L2TP", "PPTP", "IPsec", "Extranet", "Site-to-Site",
      "MPLS", "Label Switching", "LSP", "Label Distribution", "Penultimate Hop Popping", "Fault Recovery", "Traffic Engineering",
      "Wireless", "WiFi", "Cellular Networks", "GSM", "LTE", "4G", "5G", "EPC", "E-UTRAN", "Handover",
      "SDN", "NFV", "Network Softwarization", "Service Function Chaining", "Data Plane", "Control Plane",
      "Optical Networks", "Reti Ottiche", "WDM", "QoS", "Quality of Service", "Traffic Shaping",
      "CDN", "Content Delivery Network", "Content Replication"
    ],
    tags: ["IPv4", "IPv6", "MPLS", "VPN", "LAN"],
    date: "2025-01-24"
  },
  {
    type: "exam",
    name: { it: "Data Science e Tecnologie per le Basi di Dati", en: "Data Science and Database Technologies" },
    description: {
      it: "Studio del processo di estrazione della conoscenza dai dati e delle tecnologie a supporto. Il corso approfondisce la progettazione concettuale e logica di data warehouse e data mart (schema a stella, aggregazioni, viste materializzate, tecniche di ETL) e l’analisi multidimensionale con OLAP ed estensioni SQL. Tratta le tecniche di preparazione dei dati e i principali algoritmi di data mining e machine learning, supervisionati (alberi decisionali, random forest, KNN, classificazione bayesiana, reti neurali, curva ROC) e non supervisionati (regole di associazione con Apriori, K-means, clustering gerarchico, DBSCAN). Completano il percorso l’architettura interna dei DBMS (buffer manager, strutture ad albero, ottimizzatore, algoritmi di join, DBMS distribuiti) e i database non relazionali con MapReduce e MongoDB.",
      en: "Study of the knowledge discovery process and of the technologies supporting it. The course covers the conceptual and logical design of data warehouses and data marts (star schema, aggregations, materialized views, ETL techniques) and multidimensional analysis with OLAP and SQL extensions. It addresses data preparation techniques and the main data mining and machine learning algorithms, both supervised (decision trees, random forest, KNN, Bayesian classification, neural networks, ROC curve) and unsupervised (association rules with Apriori, K-means, hierarchical clustering, DBSCAN). The path is completed by DBMS internals (buffer manager, tree structures, query optimizer, join algorithms, distributed DBMS) and non-relational databases with MapReduce and MongoDB."
    },
    keywords: [
      "Data Science", "Big Data", "KDD", "Knowledge Discovery", "Data Mining", "Machine Learning",
      "Data Preparation", "Data Cleaning", "Data Reduction", "Data Transformation", "Feature Engineering", "Similarity Measures",
      "Classification", "Decision Trees", "Hunt Algorithm", "Gini", "Entropy", "Random Forest", "KNN",
      "Naive Bayes", "Bayesian Classification", "Linear Classifiers", "SVM", "Neural Networks", "FFNN",
      "ROC Curve", "Precision", "Recall", "Model Evaluation",
      "Clustering", "K-means", "Hierarchical Clustering", "DBSCAN", "Cluster Validation",
      "Association Rules", "Apriori", "Frequent Itemsets", "Support", "Confidence",
      "Data Warehouse", "Data Mart", "Star Schema", "Snowflake Schema", "Fact Table", "Dimensions",
      "OLAP", "OLTP", "Roll-up", "Drill-down", "ETL", "Materialized Views", "Ranking Functions", "SQL", "Window Functions",
      "DBMS", "Buffer Manager", "B+ Tree", "Indexing", "Query Optimizer", "Query Tree", "Algebraic Optimization",
      "Join Algorithms", "Physical Design", "Distributed DBMS", "Data Fragmentation", "Transactions",
      "NoSQL", "MongoDB", "MapReduce", "Aggregation Pipeline", "Document Database", "Data Replication"
    ],
    tags: ["DBMS", "Data Warehouse", "NoSQL", "OLAP"],
    date: "2025-01-20"
  },
  {
    type: "exam",
    name: { it: "Programmazione a Oggetti", en: "Object-Oriented Programming" },
    description: {
      it: "Studio delle tecniche di sviluppo software basate sul paradigma a oggetti attraverso l’uso del linguaggio Java. Il corso affronta i concetti fondamentali della progettazione orientata agli oggetti (classi, ereditarietà, interfacce, polimorfismo) e l’utilizzo delle librerie standard Java (collezioni, stream, gestione I/O, thread). Sono inoltre introdotti i principi di Ingegneria del Software, tra cui ciclo di vita del software, UML, design pattern, testing (JUnit) e gestione della configurazione, con attività pratiche di sviluppo in IDE e uso di sistemi di versionamento.",
      en: "Study of software development techniques based on the object-oriented paradigm using Java. Covers fundamental OOP concepts (classes, inheritance, interfaces, polymorphism) and standard Java libraries (collections, streams, I/O management, threads). Introduces Software Engineering principles including software lifecycle, UML, design patterns, testing (JUnit), and configuration management, with practical development exercises in IDEs and version control systems."
    },
    keywords: [
      "Java", "JUnit", "UML", "OOP", "Object-Oriented Programming", "Classes", "Inheritance", "Interfaces",
      "Polymorphism", "Encapsulation", "Design Patterns", "Collections", "Streams", "Threads", "Exception Handling",
      "Unit Testing", "Version Control", "IDE"
    ],
    tags: ["Java", "JUnit", "UML"],
    date: "2024-07-24"
  },
  {
    type: "exam",
    name: { it: "Sistemi Operativi", en: "Operating Systems" },
    description: {
      it: "Studio dei principi fondamentali dell’architettura dei sistemi operativi e delle tecniche di programmazione di sistema e concorrente. Il corso approfondisce i sistemi UNIX/Linux, includendo l’uso di comandi utente e di amministrazione, shell scripting e system call per la gestione di processi e thread. Vengono trattati temi quali sincronizzazione, comunicazione tra processi, gestione delle risorse e scheduling, con attività di laboratorio pratiche in ambiente Linux per consolidare le competenze apprese.",
      en: "Study of fundamental operating system principles and concurrent programming techniques. Covers UNIX/Linux systems, including user/admin commands, shell scripting, and system calls for process and thread management. Topics include synchronization, inter-process communication, resource management, and scheduling, with practical lab exercises in Linux to consolidate learning."
    },
    keywords: [
      "OS", "Operating Systems", "Sistemi Operativi", "Bash", "Shell", "Shell Scripting", "Linux", "Unix",
      "Processes", "Threads", "System Calls", "Concurrency", "Synchronization", "IPC", "Scheduling",
      "Resource Management", "Command Line", "System Administration"
    ],
    tags: ["OS", "Bash", "Linux"],
    date: "2024-02-27"
  },
  {
    type: "exam",
    name: { it: "Introduzione alle Applicazioni Web", en: "Introduction to Web Applications" },
    description: {
      it: "Studio dei principi fondamentali delle architetture web e dei protocolli di comunicazione alla base del funzionamento delle applicazioni online. Il corso approfondisce l’uso delle tecnologie web principali – HTML5, CSS3 e JavaScript – per la realizzazione di interfacce moderne, accessibili e responsive. Viene inoltre introdotto il framework Flask (Python) per lo sviluppo del backend, comprendendo la gestione di database, sessioni e autenticazione. Attraverso attività pratiche, gli studenti imparano a progettare e sviluppare un’applicazione web completa di media complessità, curando sia l’aspetto tecnico che visivo secondo i principi del web design moderno.",
      en: "Study of web architecture principles and communication protocols underlying online applications. Covers main web technologies – HTML5, CSS3, and JavaScript – for building modern, accessible, and responsive interfaces. Introduces Flask (Python) for backend development, including database, session, and authentication management. Practical activities teach students to design and develop a complete medium-complexity web application, addressing both technical and visual aspects according to modern web design principles."
    },
    keywords: [
      "HTML", "HTML5", "CSS", "CSS3", "Flask", "JavaScript", "Bootstrap", "Python", "Web Development",
      "Responsive Design", "Accessibility", "Web Design", "Backend", "Sessions", "Authentication", "HTTP"
    ],
    tags: ["HTML", "CSS", "Flask", "JavaScript", "Bootstrap"],
    date: "2024-02-09"
  },
  {
    type: "exam",
    name: { it: "Basi di Dati", en: "Databases" },
    description: {
      it: "Studio dei sistemi di gestione di basi di dati (DBMS). Il corso approfondisce la progettazione concettuale e logica tramite il modello Entità-Relazione, il modello relazionale, l’algebra relazionale e il linguaggio SQL per la definizione, interrogazione e gestione dei dati. Sono trattati inoltre viste, transazioni, trigger e accesso ai dati da applicazioni client-server. Le attività di laboratorio consentono di acquisire esperienza pratica con strumenti commerciali e open-source per la progettazione e lo sviluppo di applicazioni basate su database.",
      en: "Study of database management systems (DBMS). Covers conceptual and logical design using Entity-Relationship and relational models, relational algebra, and SQL for defining, querying, and managing data. Also addresses views, transactions, triggers, and client-server database access. Laboratory activities provide hands-on experience with commercial and open-source tools for database application design and development."
    },
    keywords: [
      "DBMS", "SQLite", "UML", "E-R Models", "Entity-Relationship", "SQL", "Database",
      "Relational Model", "Relational Algebra", "Normalization", "Views", "Transactions", "Triggers", "Queries"
    ],
    tags: ["DBMS", "SQLite", "UML", "E-R Models"],
    date: "2023-06-26"
  },
  {
    type: "exam",
    name: { it: "Calcolatori Elettronici", en: "Computer Architecture" },
    description: {
      it: "Studio dei concetti fondamentali relativi ai sistemi di elaborazione dell’informazione, con particolare attenzione all’architettura, al funzionamento e alla progettazione dei componenti hardware e software. Il corso approfondisce i sistemi a microprocessore, l’interazione tra processore, memoria e periferiche, e introduce la programmazione in linguaggio Assembly per comprendere il funzionamento a basso livello dei sistemi di calcolo. Sono trattati inoltre i principi dei processori CISC, RISC e superscalari, fornendo una base solida per corsi avanzati come Sistemi Operativi.",
      en: "Study of fundamental concepts of information processing systems, focusing on architecture, operation, and design of hardware and software components. Covers microprocessor-based systems, processor-memory-peripheral interaction, and introduces assembly programming to understand low-level system operation. Discusses CISC, RISC and superscalar processor principles, providing a solid foundation for advanced courses like Operating Systems."
    },
    keywords: [
      "Assembler", "Assembly", "OS", "CISC", "RISC", "Superscalar", "Microprocessor", "Computer Architecture",
      "Memory", "Peripherals", "Buses", "Low-level Programming", "Instruction Set"
    ],
    tags: ["Assembler", "OS"],
    date: "2023-06-23"
  },
  // ─── PROGETTI ────────────────────────────────────────
  {
    type: "project",
    name: { it: "EuroTransit", en: "EuroTransit" },
    description: {
      it: "Applicazione di prenotazione di viaggi in treno, realizzata sopra un'infrastruttura Kubernetes e con un backend in Kotlin. Il progetto applica gli standard moderni per i sistemi distribuiti, con un'architettura a microservizi, bilanciamento del carico, scalabilità e ricovero automatico. L'applicazione è stata testata sotto scenari di carico elevato, con un focus sulla resilienza e la tolleranza ai guasti.",
      en: "Train travel booking application, built on a Kubernetes infrastructure with a Kotlin backend. The project applies modern standards for distributed systems, with a microservices architecture, load balancing, scalability, and automatic recovery. The application has been tested under high load scenarios, focusing on resilience and fault tolerance."
    },
    keywords: [
      "Kotlin", "Gradle", "Spring Boot", "Kubernetes", "K8s", "Docker", "Docker Compose", "Containers",
      "Microservices", "Microservizi", "Distributed Systems", "Cloud Native",
      "GitOps", "CI/CD", "ArgoCD", "Continuous Delivery", "Infrastructure as Code",
      "Prometheus", "Grafana", "Observability", "Monitoring", "Logging",
      "Kafka", "Debezium", "Change Data Capture", "Event-Driven", "PostgreSQL", "Data Replication",
      "Load Balancing", "Autoscaling", "Scalability", "Self-healing",
      "Resilience", "Resilience4j", "Circuit Breaker", "Bulkhead", "Retry", "Timeout", "Fault Tolerance",
      "Coroutines", "React", "Frontend Security", "XSS", "CSRF", "Load Testing"
    ],
    tags: ["Kotlin", "Spring Boot", "Kubernetes", "ArgoCD", "Kafka", "React"],
    date: "2026"
  },
  {
    type: "project",
    name: { it: "FRIDGE", en: "FRIDGE" },
    description: {
      it: "Applicazione Android realizzata con i moderni standard dello sviluppo mobile, che consente agli utenti di interagire all'interno di un social network dedicato al mondo della cucina. Gli utenti possono condividere ricette, commentare e interagire con altri appassionati di cucina, personalizzando la propria esperienza e il proprio profilo. L'applicazione è sviluppata in Kotlin, utilizzando il framework Jetpack Compose per un'interfaccia utente moderna e reattiva.",
      en: "Android application developed with modern mobile development standards, allowing users to interact within a social network dedicated to the world of cooking. Users can share recipes, comment, and interact with other cooking enthusiasts, personalizing their experience and profile. The application is developed in Kotlin, using the Jetpack Compose framework for a modern and responsive user interface."
    },
    keywords: [
      "Kotlin", "Android", "Mobile", "Gradle", "Jetpack Compose", "Compose", "Declarative UI",
      "MVVM", "MVI-Lite", "ViewModel", "State Management", "Navigation Component", "Coroutines",
      "Firebase", "Firestore", "Google Sign-in", "Authentication", "Cloud Storage",
      "Push Notifications", "Real-time", "Spring Boot", "Social Network", "Mobile UI/UX"
    ],
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "MVVM"],
    date: "2026"
  },
  {
    type: "project",
    name: { it: "AppRuggine", en: "AppRuggine" },
    description: {
      it: "Sistema di messaggistica real-time con architettura client-server, che garantisce comunicazione sicura tramite crittografia end-to-end. Il server Rust gestisce connessioni WebSocket, inoltra i messaggi tra utenti e gruppi, e monitora risorse di sistema. Il client React offre un'interfaccia utente moderna per chat e gestione dei gruppi.",
      en: "Real-time messaging system with a client-server architecture ensuring secure communication through end-to-end encryption. The Rust server handles WebSocket connections, forwards messages between users and groups, and monitors system resources. The React client provides a modern interface for chats and group management."
    },
    keywords: [
      "Rust", "Cargo", "Systems Programming", "Concurrency", "Async", "tokio", "tokio-tungstenite",
      "WebSockets - tokio", "WebSocket", "Real-time", "Client-Server", "Messaging",
      "serde", "serde_json", "JSON", "Serialization", "tracing", "sysinfo", "Logging", "System Monitoring",
      "End-to-End Encryption", "Encryption", "Crittografia", "Web Crypto API", "Security", "Privacy",
      "SQLite", "rusqlite", "Database", "Persistence",
      "React", "Vite", "JavaScript", "TypeScript", "HTML5", "CSS3",
      "Jest", "React Testing Library", "cargo test", "Testing", "Full-stack"
    ],
    tags: ["Rust", "React", "WebSockets - tokio", "SQLite", "Vite"],
    date: "2025"
  },
  {
    type: "project",
    name: { it: "GeoControl", en: "GeoControl" },
    description: {
      it: "Piattaforma web per la gestione, il monitoraggio e la configurazione di reti di sensori e gateway IoT. Il sistema espone API RESTful documentate tramite OpenAPI/Swagger, con architettura modulare e containerizzazione completa per ambienti di sviluppo e produzione.",
      en: "Web platform for managing, monitoring, and configuring IoT sensor and gateway networks. The system exposes RESTful APIs documented via OpenAPI/Swagger, featuring a modular architecture and full containerization for both development and production environments."
    },
    keywords: [
      "Node.js", "Express", "TypeScript", "JavaScript", "TypeORM", "ORM",
      "Swagger/OpenAPI", "Swagger UI", "OpenAPI", "SwaggerAPI", "REST", "RESTful", "API Design", "API Documentation",
      "express-openapi-validator", "Validation", "Middleware", "Controller", "Service", "Repository Pattern",
      "Modular Architecture", "Software Architecture",
      "Jest", "Testing", "Unit Test", "Integration Test", "End-to-End Testing",
      "Docker", "Docker Compose", "Containers", "Containerization", "Deployment",
      "MySQL", "SQLite", "Database", "IoT", "Sensors", "Gateways", "Monitoring", "Full-stack"
    ],
    tags: ["Node.js", "Express", "TypeScript", "TypeORM", "Swagger/OpenAPI", "Docker"],
    date: "2025"
  },
  {
    type: "project",
    name: { it: "Gioco della Sfortuna", en: "Stuff Happens" },
    description: {
      it: "Applicazione web sviluppata per riprodurre in versione single player il gioco da tavolo \"Stuff Happens\", in cui l'utente deve ordinare situazioni \"orribili\" in base al loro indice di sfortuna. Il progetto è strutturato come una Single Page Application (SPA) e realizzato con React, Node.js, Express e SQLite, seguendo le best practice di sviluppo full-stack moderne.",
      en: "Web application developed to recreate the single-player version of the board game \"Stuff Happens\", where the user must rank \"horrible\" situations according to their misfortune index. The project is structured as a Single Page Application (SPA) and built using React, Node.js, Express, and SQLite, following modern full-stack development best practices."
    },
    keywords: [
      "React", "React Router", "React-Bootstrap", "Bootstrap", "Vite", "SPA", "Single Page Application",
      "JavaScript", "HTML5", "CSS3", "Responsive Design", "Frontend",
      "Node.js", "Express", "REST", "RESTful", "API", "Passport", "Authentication", "Sessions", "CORS",
      "SQLite", "SQLite3", "Database", "Transactions", "Query Optimization",
      "Game", "Full-stack", "Web Development"
    ],
    tags: ["React", "Express", "Node.js", "SQLite", "Vite"],
    date: "2025"
  },
  {
    type: "project",
    name: { it: "(TO)Rent", en: "(TO)Rent" },
    description: {
      it: "Applicazione web per la gestione di annunci, utenti e immagini, sviluppata come progetto didattico per approfondire la realizzazione di piattaforme CRUD, autenticazione e gestione di contenuti multimediali.",
      en: "Web application for managing listings, users, and images. Developed as an educational project to explore CRUD platforms, user authentication, and multimedia content management."
    },
    keywords: [
      "Flask", "Python", "Jinja2", "Template Rendering", "Backend", "Routing",
      "HTML5", "CSS3", "Bootstrap", "JavaScript", "Vanilla JavaScript", "Responsive Design", "Frontend",
      "SQLite", "Database", "CRUD", "Authentication", "Sessions", "User Management",
      "Image Management", "Media Upload", "Web Development", "Full-stack"
    ],
    tags: ["Flask", "Python", "SQLite", "Bootstrap", "JavaScript"],
    date: "2024"
  },
  {
    type: "project",
    name: { it: "Raspberry Pi LED Controller", en: "Raspberry Pi LED Controller" },
    description: {
      it: "Webserver realizzato in Flask e installato su una scheda Raspberry Pi per il controllo remoto di LED tramite interfaccia web. L'applicazione consente di accendere, spegnere e gestire più LED fisici con semplici pulsanti HTML, fornendo feedback in tempo reale sullo stato dei dispositivi.",
      en: "Web server built with Flask and deployed on a Raspberry Pi board for remote LED control via a web interface. The application allows turning on, off, and managing multiple physical LEDs using simple HTML buttons, providing real-time feedback on device status."
    },
    keywords: [
      "Raspberry Pi", "Raspberry Pi GPIO", "GPIO", "IoT", "Embedded", "Hardware", "Electronics",
      "Flask", "Python", "C", "Jinja2", "Template Rendering", "Web Server", "HTTP", "Routing",
      "HTML5", "CSS3", "Bootstrap", "Responsive Design", "Asynchronous Requests", "Real-time",
      "Linux", "Device Control", "Physical Computing"
    ],
    tags: ["Flask", "Python", "C", "Raspberry Pi GPIO", "Bootstrap"],
    date: "2023"
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
 * Verifica se una keyword matcha la query: match su inizio di parola,
 * non su sottostringa qualsiasi (così "rust" non matcha "Zero Trust"
 * e "react" non matcha "Reactive Programming").
 * @param {string} keyword
 * @param {string} q - query già normalizzata in minuscolo
 * @returns {boolean}
 */
function keywordMatches(keyword, q) {
  const kw = keyword.toLowerCase();
  if (kw.startsWith(q)) return true;
  return kw.split(/[\s\-/&(),.]+/).some(word => word.startsWith(q));
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
    item.keywords.some(kw => keywordMatches(kw, q))
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
  // Prima le keyword che iniziano con il testo, poi quelle con una parola interna che inizia con il testo
  const startsWith = all.filter(kw => kw.toLowerCase().startsWith(q));
  const contains = all.filter(kw => !kw.toLowerCase().startsWith(q) && keywordMatches(kw, q));
  return [...startsWith, ...contains];
}