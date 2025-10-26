BEGIN TRANSACTION;

-- Tabella Esami in Italiano
CREATE TABLE IF NOT EXISTS "Exams" (
    "id" INTEGER NOT NULL UNIQUE,
    "name" TEXT NOT NULL UNIQUE,
    "grade" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "Features" (
    "id" INTEGER NOT NULL UNIQUE,
    "id_exam" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("id_exam") REFERENCES "Exams"("id")
);

-- Tabella Esami in Inglese
CREATE TABLE IF NOT EXISTS "Exams_en" (
    "id" INTEGER NOT NULL UNIQUE,
    "name" TEXT NOT NULL UNIQUE,
    "grade" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "Features_en" (
    "id" INTEGER NOT NULL UNIQUE,
    "id_exam" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("id_exam") REFERENCES "Exams_en"("id")
);

-- Inserimento dati Esami italiani
INSERT INTO "Exams" ("id","name","grade","date","description") VALUES
(4,'Data Science e Tecnologie per le Basi di Dati',31,'2025-01-20','Studio delle tecnologie per la gestione di basi di dati relazionali e non relazionali (NoSQL), incluse le architetture distribuite e le tecniche di replica. Progettazione fisica di database, modellazione e sviluppo di data warehouse per l’analisi dei dati mediante SQL e OLAP. Introduzione alle tecniche di data mining e machine learning (classificazione, clustering, regole di associazione) applicate al processo di data science.'),
(5,'Architetture dei Sistemi di Elaborazione',30,'2025-01-23','Corso incentrato sull’architettura dei sistemi basati su microprocessore. Approfondisce le architetture CISC, RISC, superscalari, pipelined e ARM, la gerarchia della memoria (cache L1/L2), e i bus di sistema. Include lo sviluppo di firmware in C e assembler, con esercitazioni pratiche su board ARM per la gestione di periferiche (GPIO, timer, UART, ecc.). Fornisce competenze avanzate nella programmazione di sistemi embedded e nel debug a basso livello.'),
(6,'Tecnologie e Servizi di Rete',27,'2025-01-23','Studio avanzato delle tecnologie e architetture delle reti di calcolatori, con approfondimenti su progettazione di reti IPv4/IPv6, Ethernet e protocolli di routing Internet. Analisi delle VPN (customer e provider-provisioned), del protocollo MPLS, e delle tecniche per la qualità del servizio (QoS) nelle reti IP. Introduzione alle reti ottiche, alle reti cellulari (dal GSM al 5G) e all’analisi e predizione del traffico di rete. Il corso fornisce competenze teoriche per analizzare e ottimizzare reti moderne e servizi Internet avanzati.'),
(7,'Software Engineering I',30,'2025-09-10','Studio dei principi, metodologie e strumenti per lo sviluppo e la gestione di progetti software complessi. Il corso ha approfondito l’analisi e la formalizzazione dei requisiti, la progettazione con UML, la gestione di progetto (WBS, Gantt, PERT) e le tecniche di testing (white-box, black-box, unit, integration, system). Particolare attenzione è stata dedicata al lavoro di squadra e alle metodologie agili per lo sviluppo collaborativo di sistemi software di grandi dimensioni.'),
(8,'Applicazioni Web I',28,'2025-07-26','Studio delle principali tecniche per la realizzazione di applicazioni web distribuite, con particolare attenzione alla programmazione front-end tramite JavaScript e il framework React. Il corso ha approfondito i paradigmi di programmazione moderni per lo sviluppo di Single Page Applications (SPA), l’interazione con API REST e la progettazione di architetture client-server. Sono stati trattati inoltre aspetti di sicurezza, robustezza, interoperabilità e prestazioni, fornendo competenze pratiche per la realizzazione completa di applicazioni web moderne.'),
(9,'Programmazione di Sistema',30,'2025-07-01','Studio dell’architettura e dei principi di progettazione dei sistemi operativi, con approfondimento sui meccanismi interni di gestione delle risorse (processi, memoria, dispositivi, file system) e sull’implementazione di moduli di sistema. La seconda parte ha riguardato la programmazione di sistema e concorrente in ambienti Unix/Linux e Windows, includendo l’uso di system call, la gestione avanzata della memoria, dei file e dei thread, e l’introduzione al linguaggio Rust per lo sviluppo sicuro e concorrente.'),
(10,'Information Systems',28,'2025-02-20','Studio delle metodologie e tecnologie per la progettazione, gestione e valutazione di sistemi informativi a supporto dei processi aziendali. Il corso ha trattato la modellazione dei processi con UML e BPMN, l’analisi organizzativa, la valutazione di costi, benefici e performance (KPI, CSF, BSC), e le principali classi di sistemi informativi (ERP, CRM, SCM). Sono stati inoltre approfonditi i modelli di riferimento COBIT e ITIL e le tecnologie per la gestione dei workflow, fornendo competenze per analizzare, progettare e ottimizzare processi aziendali e i relativi sistemi di supporto.');

-- Inserimento Features italiane
INSERT INTO "Features" ("id","id_exam","name") VALUES
(5,4,'DBMS'),
(6,4,'Data Warehouse'),
(7,4,'NoSQL'),
(8,4,'OLAP'),
(9,5,'C'),
(10,5,'Assembler'),
(11,5,'ARM'),
(12,5,'LPC1768 programming'),
(13,6,'IPv4'),
(14,6,'IPv6'),
(15,6,'MPLS'),
(16,6,'VPN'),
(17,6,'LAN'),
(18,7,'Testing'),
(19,7,'JavaScript'),
(20,7,'TypeORM'),
(21,7,'SwaggerAPI'),
(22,8,'React'),
(23,8,'SQLite'),
(24,8,'Express'),
(25,7,'REST'),
(26,9,'Rust'),
(27,9,'OS internals'),
(28,9,'React'),
(29,9,'API programming'),
(30,10,'KPI'),
(31,10,'CSM'),
(32,10,'Business models');

-- Inserimento dati Esami inglesi (traduzione)
INSERT INTO "Exams_en" ("id","name","grade","date","description") VALUES
(4,'Data Science and Database Technologies',31,'2025-01-20','Study of technologies for managing relational and non-relational (NoSQL) databases, including distributed architectures and replication techniques. Physical database design, modeling, and data warehouse development for data analysis using SQL and OLAP. Introduction to data mining and machine learning techniques (classification, clustering, association rules) applied to the data science process.'),
(5,'Computer System Architectures',30,'2025-01-23','Course focused on microprocessor-based system architecture. Covers CISC, RISC, superscalar, pipelined, and ARM architectures, memory hierarchy (L1/L2 cache), and system buses. Includes firmware development in C and assembler with practical exercises on ARM boards for peripheral control (GPIO, timers, UART, etc.). Provides advanced skills in embedded system programming and low-level debugging.'),
(6,'Network Technologies and Services',27,'2025-01-23','Advanced study of computer network technologies and architectures, with insights on IPv4/IPv6 network design, Ethernet, and Internet routing protocols. Analysis of customer- and provider-provisioned VPNs, MPLS protocol, and Quality of Service (QoS) techniques in IP networks. Introduction to optical networks, cellular networks (GSM to 5G), and traffic analysis and prediction. Provides theoretical skills to analyze and optimize modern networks and advanced Internet services.'),
(7,'Software Engineering I',30,'2025-09-10','Study of principles, methodologies, and tools for development and management of complex software projects. Covers requirements analysis and formalization, UML-based design, project management (WBS, Gantt, PERT), and testing techniques (white-box, black-box, unit, integration, system). Emphasis on teamwork and agile methodologies for collaborative development of large-scale software systems.'),
(8,'Web Applications I',28,'2025-07-26','Study of main techniques for building distributed web applications, focusing on front-end programming with JavaScript and React framework. Covers modern programming paradigms for SPA development, API interaction, and client-server architecture design. Security, robustness, interoperability, and performance aspects are addressed, providing practical skills for building modern web applications.'),
(9,'System Programming',30,'2025-07-01','Study of operating system architecture and design principles, with focus on resource management (processes, memory, devices, file system) and system module implementation. The second part covers concurrent and system programming in Unix/Linux and Windows environments, including system calls, advanced memory, file and thread management, and
