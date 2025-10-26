import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

import { ExamCV } from "../components/Exam.jsx";
import { Exam } from "../models/models.mjs";
import { getAllExams } from "../API/API.mjs";

import '../style/ExamSection.css';

const mockExams_it = [
  {
    name: 'Data Science e Tecnologie per le Basi di Dati',
    date: '2025-01-20',
    description: 'Studio delle tecnologie per la gestione di basi di dati relazionali e non relazionali (NoSQL), incluse le architetture distribuite e le tecniche di replica. Progettazione fisica di database, modellazione e sviluppo di data warehouse per l’analisi dei dati mediante SQL e OLAP. Introduzione alle tecniche di data mining e machine learning (classificazione, clustering, regole di associazione) applicate al processo di data science.',
    tags: ['DBMS', 'Data Warehouse', 'NoSQL', 'OLAP']
  },
  {
    name: 'Architetture dei Sistemi di Elaborazione',
    date: '2025-01-23',
    description: 'Corso incentrato sull’architettura dei sistemi basati su microprocessore. Approfondisce le architetture CISC, RISC, superscalari, pipelined e ARM, la gerarchia della memoria (cache L1/L2), e i bus di sistema. Include lo sviluppo di firmware in C e assembler, con esercitazioni pratiche su board ARM per la gestione di periferiche (GPIO, timer, UART, ecc.). Fornisce competenze avanzate nella programmazione di sistemi embedded e nel debug a basso livello.',
    tags: ['C', 'Assembler', 'ARM', 'LPC1768 programming']
  },
  {
    name: 'Tecnologie e Servizi di Rete',
    date: '2025-01-23',
    description: 'Studio avanzato delle tecnologie e architetture delle reti di calcolatori, con approfondimenti su progettazione di reti IPv4/IPv6, Ethernet e protocolli di routing Internet. Analisi delle VPN (customer e provider-provisioned), del protocollo MPLS, e delle tecniche per la qualità del servizio (QoS) nelle reti IP. Introduzione alle reti ottiche, alle reti cellulari (dal GSM al 5G) e all’analisi e predizione del traffico di rete. Il corso fornisce competenze teoriche per analizzare e ottimizzare reti moderne e servizi Internet avanzati.',
    tags: ['IPv4', 'IPv6', 'MPLS', 'VPN', 'LAN']
  },
  {
    name: 'Software Engineering I',
    date: '2025-09-10',
    description: 'Studio dei principi, metodologie e strumenti per lo sviluppo e la gestione di progetti software complessi. Il corso ha approfondito l’analisi e la formalizzazione dei requisiti, la progettazione con UML, la gestione di progetto (WBS, Gantt, PERT) e le tecniche di testing (white-box, black-box, unit, integration, system). Particolare attenzione è stata dedicata al lavoro di squadra e alle metodologie agili per lo sviluppo collaborativo di sistemi software di grandi dimensioni.',
    tags: ['Testing', 'JavaScript', 'TypeORM', 'SwaggerAPI', 'REST']
  },
  {
    name: 'Applicazioni Web I',
    date: '2025-07-26',
    description: 'Studio delle principali tecniche per la realizzazione di applicazioni web distribuite, con particolare attenzione alla programmazione front-end tramite JavaScript e il framework React. Il corso ha approfondito i paradigmi di programmazione moderni per lo sviluppo di Single Page Applications (SPA), l’interazione con API REST e la progettazione di architetture client-server. Sono stati trattati inoltre aspetti di sicurezza, robustezza, interoperabilità e prestazioni, fornendo competenze pratiche per la realizzazione completa di applicazioni web moderne.',
    tags: ['React', 'SQLite', 'Express']
  },
  {
    name: 'Programmazione di Sistema',
    date: '2025-07-01',
    description: 'Studio dell’architettura e dei principi di progettazione dei sistemi operativi, con approfondimento sui meccanismi interni di gestione delle risorse (processi, memoria, dispositivi, file system) e sull’implementazione di moduli di sistema. La seconda parte ha riguardato la programmazione di sistema e concorrente in ambienti Unix/Linux e Windows, includendo l’uso di system call, la gestione avanzata della memoria, dei file e dei thread, e l’introduzione al linguaggio Rust per lo sviluppo sicuro e concorrente.',
    tags: ['Rust', 'OS internals', 'React', 'API programming']
  },
  {
    name: 'Information Systems',
    date: '2025-02-20',
    description: 'Studio delle metodologie e tecnologie per la progettazione, gestione e valutazione di sistemi informativi a supporto dei processi aziendali. Il corso ha trattato la modellazione dei processi con UML e BPMN, l’analisi organizzativa, la valutazione di costi, benefici e performance (KPI, CSF, BSC), e le principali classi di sistemi informativi (ERP, CRM, SCM). Sono stati inoltre approfonditi i modelli di riferimento COBIT e ITIL e le tecnologie per la gestione dei workflow, fornendo competenze per analizzare, progettare e ottimizzare processi aziendali e i relativi sistemi di supporto.',
    tags: ['KPI', 'CSM', 'Business models']
  },
  {
    name: 'Basi di Dati',
    date: '2023-06-26',
    description: 'Studio dei sistemi di gestione di basi di dati (DBMS). Il corso approfondisce la progettazione concettuale e logica tramite il modello Entità-Relazione, il modello relazionale, l’algebra relazionale e il linguaggio SQL per la definizione, interrogazione e gestione dei dati. Sono trattati inoltre viste, transazioni, trigger e accesso ai dati da applicazioni client-server. Le attività di laboratorio consentono di acquisire esperienza pratica con strumenti commerciali e open-source per la progettazione e lo sviluppo di applicazioni basate su database.',
    tags: ['DBMS', 'SQLite', 'UML', 'E-R Models']
  },
  {
    name: 'Calcolatori Elettronici',
    date: '2023-06-23',
    description: 'Studio dei concetti fondamentali relativi ai sistemi di elaborazione dell’informazione, con particolare attenzione all’architettura, al funzionamento e alla progettazione dei componenti hardware e software. Il corso approfondisce i sistemi a microprocessore, l’interazione tra processore, memoria e periferiche, e introduce la programmazione in linguaggio Assembly per comprendere il funzionamento a basso livello dei sistemi di calcolo. Sono trattati inoltre i principi dei processori CISC, RISC e superscalari, fornendo una base solida per corsi avanzati come Sistemi Operativi.',
    tags: ['Assembler', 'OS']
  },
  {
    name: 'Sistemi Operativi',
    date: '2024-02-27',
    description: 'Studio dei principi fondamentali dell’architettura dei sistemi operativi e delle tecniche di programmazione di sistema e concorrente. Il corso approfondisce i sistemi UNIX/Linux, includendo l’uso di comandi utente e di amministrazione, shell scripting e system call per la gestione di processi e thread. Vengono trattati temi quali sincronizzazione, comunicazione tra processi, gestione delle risorse e scheduling, con attività di laboratorio pratiche in ambiente Linux per consolidare le competenze apprese.',
    tags: ['OS', 'Bash', 'Linux']
  },
  {
    name: 'Programmazione a Oggetti',
    date: '2024-07-24',
    description: 'Studio delle tecniche di sviluppo software basate sul paradigma a oggetti attraverso l’uso del linguaggio Java. Il corso affronta i concetti fondamentali della progettazione orientata agli oggetti (classi, ereditarietà, interfacce, polimorfismo) e l’utilizzo delle librerie standard Java (collezioni, stream, gestione I/O, thread). Sono inoltre introdotti i principi di Ingegneria del Software, tra cui ciclo di vita del software, UML, design pattern, testing (JUnit) e gestione della configurazione, con attività pratiche di sviluppo in IDE e uso di sistemi di versionamento.',
    tags: ['Java', 'JUnit', 'UML']
  },
  {
    name: 'Introduzione alle Applicazioni Web',
    date: '2024-02-09',
    description: 'Studio dei principi fondamentali delle architetture web e dei protocolli di comunicazione alla base del funzionamento delle applicazioni online. Il corso approfondisce l’uso delle tecnologie web principali – HTML5, CSS3 e JavaScript – per la realizzazione di interfacce moderne, accessibili e responsive. Viene inoltre introdotto il framework Flask (Python) per lo sviluppo del backend, comprendendo la gestione di database, sessioni e autenticazione. Attraverso attività pratiche, gli studenti imparano a progettare e sviluppare un’applicazione web completa di media complessità, curando sia l’aspetto tecnico che visivo secondo i principi del web design moderno.',
    tags: ['HTML', 'CSS', 'Flask', 'JavaScript', 'Bootstrap']
  }

];

const mockExams_en = [
  {
    name: 'Data Science and Database Technologies',
    date: '2025-01-20',
    description: 'Study of technologies for managing relational and non-relational (NoSQL) databases, including distributed architectures and replication techniques. Physical database design, modeling, and development of data warehouses for data analysis using SQL and OLAP. Introduction to data mining and machine learning techniques (classification, clustering, association rules) applied in the data science process.',
    tags: ['DBMS', 'Data Warehouse', 'NoSQL', 'OLAP']
  },
  {
    name: 'Computer System Architectures',
    date: '2025-01-23',
    description: 'Course focused on microprocessor-based system architectures. Covers CISC, RISC, superscalar, pipelined, and ARM architectures, memory hierarchy (L1/L2 caches), and system buses. Includes development of firmware in C and assembly, with practical exercises on ARM boards for peripheral management (GPIO, timers, UART, etc.). Provides advanced skills in embedded systems programming and low-level debugging.',
    tags: ['C', 'Assembler', 'ARM', 'LPC1768 programming']
  },
  {
    name: 'Networking Technologies and Services',
    date: '2025-01-23',
    description: 'Advanced study of computer network technologies and architectures, including IPv4/IPv6 network design, Ethernet, and Internet routing protocols. Analysis of VPNs (customer and provider-provisioned), MPLS protocol, and QoS techniques in IP networks. Introduction to optical networks, cellular networks (from GSM to 5G), and network traffic analysis and prediction. Provides theoretical skills to analyze and optimize modern networks and advanced Internet services.',
    tags: ['IPv4', 'IPv6', 'MPLS', 'VPN', 'LAN']
  },
  {
    name: 'Software Engineering I',
    date: '2025-09-10',
    description: 'Study of principles, methodologies, and tools for developing and managing complex software projects. Focuses on requirements analysis and formalization, UML design, project management (WBS, Gantt, PERT), and testing techniques (white-box, black-box, unit, integration, system). Emphasizes teamwork and agile methodologies for collaborative development of large software systems.',
    tags: ['Testing', 'JavaScript', 'TypeORM', 'SwaggerAPI', 'REST']
  },
  {
    name: 'Web Applications I',
    date: '2025-07-26',
    description: 'Study of techniques for building distributed web applications, with emphasis on front-end development using JavaScript and the React framework. Covers modern programming paradigms for building Single Page Applications (SPA), interaction with REST APIs, and client-server architecture design. Also addresses security, robustness, interoperability, and performance, providing practical skills for developing complete modern web applications.',
    tags: ['React', 'SQLite', 'Express']
  },
  {
    name: 'Systems Programming',
    date: '2025-07-01',
    description: 'Study of operating system architecture and design principles, including resource management mechanisms (processes, memory, devices, file systems) and system module implementation. Covers system and concurrent programming in Unix/Linux and Windows environments, using system calls, advanced memory, file and thread management, and introduces Rust for safe concurrent development.',
    tags: ['Rust', 'OS internals', 'React', 'API programming']
  },
  {
    name: 'Information Systems',
    date: '2025-02-20',
    description: 'Study of methodologies and technologies for designing, managing, and evaluating information systems supporting business processes. Covers process modeling with UML and BPMN, organizational analysis, cost/benefit/performance evaluation (KPI, CSF, BSC), and major information system types (ERP, CRM, SCM). Also includes COBIT and ITIL reference models and workflow management technologies, providing skills to analyze, design, and optimize business processes and supporting systems.',
    tags: ['KPI', 'CSM', 'Business models']
  },
  {
    name: 'Databases',
    date: '2023-06-26',
    description: 'Study of database management systems (DBMS). Covers conceptual and logical design using Entity-Relationship and relational models, relational algebra, and SQL for defining, querying, and managing data. Also addresses views, transactions, triggers, and client-server database access. Laboratory activities provide hands-on experience with commercial and open-source tools for database application design and development.',
    tags: ['DBMS', 'SQLite', 'UML', 'E-R Models']
  },
  {
    name: 'Computer Architecture',
    date: '2023-06-23',
    description: 'Study of fundamental concepts of information processing systems, focusing on architecture, operation, and design of hardware and software components. Covers microprocessor-based systems, processor-memory-peripheral interaction, and introduces assembly programming to understand low-level system operation. Discusses CISC, RISC, and superscalar processor principles, providing a solid foundation for advanced courses like Operating Systems.',
    tags: ['Assembler', 'OS']
  },
  {
    name: 'Operating Systems',
    date: '2024-02-27',
    description: 'Study of fundamental operating system principles and concurrent programming techniques. Covers UNIX/Linux systems, including user/admin commands, shell scripting, and system calls for process and thread management. Topics include synchronization, inter-process communication, resource management, and scheduling, with practical lab exercises in Linux to consolidate learning.',
    tags: ['OS', 'Bash', 'Linux']
  },
  {
    name: 'Object-Oriented Programming',
    date: '2024-07-24',
    description: 'Study of software development techniques based on the object-oriented paradigm using Java. Covers fundamental OOP concepts (classes, inheritance, interfaces, polymorphism) and standard Java libraries (collections, streams, I/O management, threads). Introduces Software Engineering principles including software lifecycle, UML, design patterns, testing (JUnit), and configuration management, with practical development exercises in IDEs and version control systems.',
    tags: ['Java', 'JUnit', 'UML']
  },
  {
    name: 'Introduction to Web Applications',
    date: '2024-02-09',
    description: 'Study of web architecture principles and communication protocols underlying online applications. Covers main web technologies – HTML5, CSS3, and JavaScript – for building modern, accessible, and responsive interfaces. Introduces Flask (Python) for backend development, including database, session, and authentication management. Practical activities teach students to design and develop a complete medium-complexity web application, addressing both technical and visual aspects according to modern web design principles.',
    tags: ['HTML', 'CSS', 'Flask', 'JavaScript', 'Bootstrap']
  }
];


function ExamSection(props) {
  const { language } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllExams, setShowAllExams] = useState(false);
  const [exams, setExams] = useState([]);

  // Lista degli esami principali
  const mainExams_it = [
    "Software Engineering I",
    "Applicazioni Web I",
    "Introduzione alle Applicazioni Web",
    "Data Science e Tecnologie per le Basi di Dati",
    "Basi di Dati",
    "Programmazione a Oggetti"
  ];

  const mainExams_en = [
    "Software Engineering I",
    "Web Applications I",
    "Introduction to Web Applications",
    "Data Science and Database Technologies",
    "Databases",
    "Object-Oriented Programming"
  ];

  useEffect(() => {
    try {
      setExams(language === "it" ? mockExams_it : mockExams_en);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [language]);

  const mainExams = language === "it" ? mainExams_it : mainExams_en;

  const getDisplayedExams = () => {
    if (showAllExams) {
      const mainExamsFiltered = exams.filter(exam => mainExams.includes(exam.name));
      const otherExams = exams.filter(exam => !mainExams.includes(exam.name));
      return [...mainExamsFiltered, ...otherExams];
    }
    return exams.filter(exam => mainExams.includes(exam.name));
  };

  return (
    <div className="exams-section">
      <h2 className="section-title">{language === "it" ? "Esami di indirizzo" : "Major Exams"}</h2>

      {error && (
        <Alert variant="warning" className="mx-auto" style={{ maxWidth: '800px' }}>
          <strong>{language === "it" ? "Attenzione:" : "Warning:"}</strong> {language === "it" ? "Impossibile caricare i dati dal server." : "Unable to load data from server."}
          <br />
          <small>{language === "it" ? `Errore: ${error}` : `Error: ${error}`}</small>
        </Alert>
      )}

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="success" size="lg" />
          <p className="mt-3" style={{ color: '#4CB963' }}>
            {language === "it" ? "Caricamento esami..." : "Loading exams..."}
          </p>
        </div>
      ) : (
        <>
          <div className="exams-grid">
            {getDisplayedExams().map((exam, index) => (
              <ExamCV key={index} exam={exam} />
            ))}
          </div>

          {exams.length > mainExams.length && (
            <div className="show-more-container">
              <button className="show-more-btn" onClick={() => setShowAllExams(!showAllExams)}>
                {showAllExams ? (
                  <>
                    <i className="bi bi-chevron-up"></i>
                    <span>{language === "it" ? "Mostra solo esami principali" : "Show only main exams"}</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-chevron-down"></i>
                    <span>
                      {language === "it" ? `Mostra anche altri esami (${exams.length - mainExams.length})` : `Show other exams (${exams.length - mainExams.length})`}
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export { ExamSection };
