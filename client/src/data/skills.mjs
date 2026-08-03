export const skillGroups = {
  it: [
    {
      key: "cloud-devops",
      title: "Cloud & DevOps Engineering",
      iconClass: "bi bi-cloud-arrow-up",
      skills: [
        {
          name: "Kubernetes & Container Orchestration",
          score: 9.4,
          detail: "Control plane, Helm, Operators, Service Mesh, Ingress",
        },
        {
          name: "CI/CD, GitOps & Infrastructure as Code",
          score: 9.1,
          detail: "Pipeline dichiarative, Argo CD, Terraform, DORA metrics",
        },
        {
          name: "Observability & Monitoring",
          score: 9.4,
          detail: "Metriche, log, tracce, autoscaling e ottimizzazione",
        },
        {
          name: "Resilience & Disaster Recovery",
          score: 8.7,
          detail: "Circuit breaker, bulkhead, PDB, CAP/PACELC, RTO/RPO",
        },
        {
          name: "Cloud-native Application Design",
          score: 8.9,
          detail: "Spring Boot, reactive streams, coroutine, rollout canary",
        },
      ],
    },
    {
      key: "mobile-frontend",
      title: "Mobile & Frontend Development",
      iconClass: "bi bi-phone",
      skills: [
        {
          name: "Android & Jetpack Compose",
          score: 9.3,
          detail: "Lifecycle, composable, state hoisting, UDF",
        },
        {
          name: "Kotlin & Programmazione Asincrona",
          score: 9.1,
          detail: "Coroutine, Flow, sealed class, generics e varianza",
        },
        {
          name: "Mobile Architecture & DI",
          score: 9.3,
          detail: "MVVM, data layer, Hilt, Navigation, Firestore",
        },
        {
          name: "Cross-platform & On-device AI",
          score: 7.4,
          detail: "Flutter, React Native, KMP/CMP, Gemini Nano, ML Kit",
        },
        {
          name: "Web Frontend (React, JavaScript)",
          score: 9.0,
          detail: "Componenti, hooks, Context API, React Router",
        },
      ],
    },
    {
      key: "system-performance",
      title: "System & Low-level Programming",
      iconClass: "bi bi-cpu",
      skills: [
        {
          name: "C & Assembly Programming",
          score: 8.9,
          detail: "Sviluppo a basso livello, puntatori, gestione manuale della memoria",
        },
        {
          name: "Rust Programming",
          score: 7.8,
          detail: "Ownership, borrowing, tratti, lifetime, smart pointer",
        },
        {
          name: "Concorrenza & Multithreading",
          score: 8.5,
          detail: "Mutex, RwLock, tipi atomici, channel, sincronizzazione",
        },
        {
          name: "Operating Systems Internals",
          score: 8.2,
          detail: "Paging, memoria virtuale, file system, I/O, RAID",
        },
        {
          name: "Compilers & Formal Languages",
          score: 8.5,
          detail: "Automi, parsing LR/LL, traduzione sintattica, type checking",
        },
      ],
    },
    {
      key: "distributed-networking",
      title: "Distributed Systems & Networking",
      iconClass: "bi bi-diagram-3",
      skills: [
        {
          name: "API Design (REST, SOA)",
          score: 9.2,
          detail: "Vincoli REST, HATEOAS, Richardson Maturity Model",
        },
        {
          name: "Distributed Algorithms & Consistency",
          score: 8.2,
          detail: "Lamport e vector clock, elezione, consenso, replicazione",
        },
        {
          name: "RPC, gRPC & HTTP/2",
          score: 8.1,
          detail: "Protocol Buffers, stub generation, streaming bidirezionale",
        },
        {
          name: "Socket & IoT Protocols (MQTT, WebSocket)",
          score: 8.4,
          detail: "TCP/UDP, comunicazione asincrona e real-time, pub/sub",
        },
        {
          name: "Network Architecture & Protocols",
          score: 8.3,
          detail: "IPv4/IPv6, routing, BGP, MPLS, VPN, SDN/NFV, QoS",
        },
      ],
    },
    {
      key: "cybersecurity",
      title: "Cybersecurity",
      iconClass: "bi bi-shield-lock",
      skills: [
        {
          name: "Crittografia & PKI",
          score: 9.2,
          detail: "AES, RSA, Diffie-Hellman, ECC, post-quantum, firma digitale",
        },
        {
          name: "Sicurezza di Rete, Canale e Messaggio",
          score: 8.6,
          detail: "TLS/DTLS, IPsec, SSH, 802.1x, sicurezza della posta",
        },
        {
          name: "Autenticazione & Identity Management",
          score: 8.8,
          detail: "MFA, passwordless, challenge-response, SSO",
        },
        {
          name: "Threat Management & Difesa Perimetrale",
          score: 8.5,
          detail: "Firewall, IDS/IPS, risk assessment, incident response, GDPR",
        },
        {
          name: "Application Security & DevSecOps",
          score: 8.0,
          detail: "Zero-trust, supply chain, secrets, XSS, CSRF, CSP",
        },
      ],
    },
    {
      key: "architecture-methodologies",
      title: "Software Architecture & Methodologies",
      iconClass: "bi bi-layers",
      skills: [
        {
          name: "Software Design & Patterns",
          score: 9.3,
          detail: "UML, pattern architetturali e design pattern",
        },
        {
          name: "Verification, Validation & Testing",
          score: 9.4,
          detail: "Black/white box, coverage, mutation testing, inspection",
        },
        {
          name: "Requirements Engineering",
          score: 9.1,
          detail: "Context diagram, use case, requisiti non funzionali",
        },
        {
          name: "Agile & Scrum",
          score: 9.5,
          detail: "Scrum, Extreme Programming, modelli di processo iterativi",
        },
        {
          name: "Project & Configuration Management",
          score: 8.2,
          detail: "Gantt, function point, COCOMO, risk, Git e GitFlow",
        },
      ],
    },
    {
      key: "data-management",
      title: "Data Engineering & Databases",
      iconClass: "bi bi-database",
      skills: [
        {
          name: "Data Mining & Machine Learning",
          score: 8.3,
          detail: "Alberi decisionali, random forest, KNN, Bayes, reti neurali",
        },
        {
          name: "Data Warehousing & OLAP",
          score: 8.1,
          detail: "Schema a stella, data mart, ETL, viste materializzate",
        },
        {
          name: "DBMS Internals & Query Optimization",
          score: 8.2,
          detail: "Buffer manager, B+ tree, ottimizzatore, join, DBMS distribuiti",
        },
        {
          name: "Clustering & Regole di Associazione",
          score: 7.5,
          detail: "K-means, clustering gerarchico, DBSCAN, Apriori",
        },
      ],
    },
    {
      key: "it-management",
      title: "IT Management & Information Systems",
      iconClass: "bi bi-briefcase",
      skills: [
        {
          name: "Enterprise Systems (ERP, CRM)",
          score: 7.4,
          detail: "Sistemi informativi aziendali e processi di business",
        },
        {
          name: "IT Strategy & Governance",
          score: 7.1,
          detail: "Allineamento business-IT, modelli organizzativi",
        },
        {
          name: "Performance Management (KPI, BSC)",
          score: 7.3,
          detail: "KPI, Critical Success Factors, Balanced Scorecard",
        },
        {
          name: "IT Economics & Outsourcing",
          score: 7.2,
          detail: "TCO/ROI, outsourcing, change management, agile economics",
        },
      ],
    },
  ],
  en: [
    {
      key: "cloud-devops",
      title: "Cloud & DevOps Engineering",
      iconClass: "bi bi-cloud-arrow-up",
      skills: [
        {
          name: "Kubernetes & Container Orchestration",
          score: 9.4,
          detail: "Control plane, Helm, Operators, Service Mesh, Ingress",
        },
        {
          name: "CI/CD, GitOps & Infrastructure as Code",
          score: 9.1,
          detail: "Declarative pipelines, Argo CD, Terraform, DORA metrics",
        },
        {
          name: "Observability & Monitoring",
          score: 9.4,
          detail: "Metrics, logs, traces, autoscaling and optimization",
        },
        {
          name: "Resilience & Disaster Recovery",
          score: 8.7,
          detail: "Circuit breaker, bulkhead, PDB, CAP/PACELC, RTO/RPO",
        },
        {
          name: "Cloud-native Application Design",
          score: 8.9,
          detail: "Spring Boot, reactive streams, coroutines, canary rollout",
        },
      ],
    },
    {
      key: "mobile-frontend",
      title: "Mobile & Frontend Development",
      iconClass: "bi bi-phone",
      skills: [
        {
          name: "Android & Jetpack Compose",
          score: 9.3,
          detail: "Lifecycle, composables, state hoisting, UDF",
        },
        {
          name: "Kotlin & Asynchronous Programming",
          score: 9.1,
          detail: "Coroutines, Flow, sealed classes, generics and variance",
        },
        {
          name: "Mobile Architecture & DI",
          score: 9.3,
          detail: "MVVM, data layer, Hilt, Navigation, Firestore",
        },
        {
          name: "Cross-platform & On-device AI",
          score: 7.4,
          detail: "Flutter, React Native, KMP/CMP, Gemini Nano, ML Kit",
        },
        {
          name: "Web Frontend (React, JavaScript)",
          score: 9.0,
          detail: "Components, hooks, Context API, React Router",
        },
      ],
    },
    {
      key: "system-performance",
      title: "System & Low-level Programming",
      iconClass: "bi bi-cpu",
      skills: [
        {
          name: "C & Assembly Programming",
          score: 8.9,
          detail: "Low-level development, pointers, manual memory management",
        },
        {
          name: "Rust Programming",
          score: 7.8,
          detail: "Ownership, borrowing, traits, lifetimes, smart pointers",
        },
        {
          name: "Concurrency & Multithreading",
          score: 8.5,
          detail: "Mutex, RwLock, atomics, channels, synchronization",
        },
        {
          name: "Operating Systems Internals",
          score: 8.2,
          detail: "Paging, virtual memory, file systems, I/O, RAID",
        },
        {
          name: "Compilers & Formal Languages",
          score: 8.5,
          detail: "Automata, LR/LL parsing, syntax-directed translation",
        },
      ],
    },
    {
      key: "distributed-networking",
      title: "Distributed Systems & Networking",
      iconClass: "bi bi-diagram-3",
      skills: [
        {
          name: "API Design (REST, SOA)",
          score: 9.2,
          detail: "REST constraints, HATEOAS, Richardson Maturity Model",
        },
        {
          name: "Distributed Algorithms & Consistency",
          score: 8.2,
          detail: "Lamport and vector clocks, election, consensus, replication",
        },
        {
          name: "RPC, gRPC & HTTP/2",
          score: 8.1,
          detail: "Protocol Buffers, stub generation, bidirectional streaming",
        },
        {
          name: "Sockets & IoT Protocols (MQTT, WebSockets)",
          score: 8.4,
          detail: "TCP/UDP, async and real-time communication, pub/sub",
        },
        {
          name: "Network Architecture & Protocols",
          score: 8.3,
          detail: "IPv4/IPv6, routing, BGP, MPLS, VPN, SDN/NFV, QoS",
        },
      ],
    },
    {
      key: "cybersecurity",
      title: "Cybersecurity",
      iconClass: "bi bi-shield-lock",
      skills: [
        {
          name: "Cryptography & PKI",
          score: 9.2,
          detail: "AES, RSA, Diffie-Hellman, ECC, post-quantum, digital signature",
        },
        {
          name: "Network, Channel & Message Security",
          score: 8.6,
          detail: "TLS/DTLS, IPsec, SSH, 802.1x, email security",
        },
        {
          name: "Authentication & Identity Management",
          score: 8.8,
          detail: "MFA, passwordless, challenge-response, SSO",
        },
        {
          name: "Threat Management & Perimeter Defense",
          score: 8.5,
          detail: "Firewalls, IDS/IPS, risk assessment, incident response, GDPR",
        },
        {
          name: "Application Security & DevSecOps",
          score: 8.0,
          detail: "Zero-trust, supply chain, secrets, XSS, CSRF, CSP",
        },
      ],
    },
    {
      key: "architecture-methodologies",
      title: "Software Architecture & Methodologies",
      iconClass: "bi bi-layers",
      skills: [
        {
          name: "Software Design & Patterns",
          score: 9.3,
          detail: "UML, architectural patterns and design patterns",
        },
        {
          name: "Verification, Validation & Testing",
          score: 9.4,
          detail: "Black/white box, coverage, mutation testing, inspections",
        },
        {
          name: "Requirements Engineering",
          score: 9.1,
          detail: "Context diagrams, use cases, non-functional requirements",
        },
        {
          name: "Agile & Scrum",
          score: 9.5,
          detail: "Scrum, Extreme Programming, iterative process models",
        },
        {
          name: "Project & Configuration Management",
          score: 8.2,
          detail: "Gantt, function points, COCOMO, risk, Git and GitFlow",
        },
      ],
    },
    {
      key: "data-management",
      title: "Data Engineering & Databases",
      iconClass: "bi bi-database",
      skills: [
        {
          name: "Data Mining & Machine Learning",
          score: 8.3,
          detail: "Decision trees, random forest, KNN, Bayes, neural networks",
        },
        {
          name: "Data Warehousing & OLAP",
          score: 8.1,
          detail: "Star schema, data marts, ETL, materialized views",
        },
        {
          name: "DBMS Internals & Query Optimization",
          score: 8.2,
          detail: "Buffer manager, B+ trees, optimizer, joins, distributed DBMS",
        },
        {
          name: "Clustering & Association Rules",
          score: 7.5,
          detail: "K-means, hierarchical clustering, DBSCAN, Apriori",
        },
      ],
    },
    {
      key: "it-management",
      title: "IT Management & Information Systems",
      iconClass: "bi bi-briefcase",
      skills: [
        {
          name: "Enterprise Systems (ERP, CRM)",
          score: 7.4,
          detail: "Enterprise information systems and business processes",
        },
        {
          name: "IT Strategy & Governance",
          score: 7.1,
          detail: "Business-IT alignment, organizational models",
        },
        {
          name: "Performance Management (KPI, BSC)",
          score: 7.3,
          detail: "KPIs, Critical Success Factors, Balanced Scorecard",
        },
        {
          name: "IT Economics & Outsourcing",
          score: 7.2,
          detail: "TCO/ROI, outsourcing, change management, agile economics",
        },
      ],
    },
  ],
};