// ─── Quiz: Competenze (Skills) ──────────────────────────────────

const skillsQuiz = {
  id: 'skills',
  title: { it: 'Quiz sulle Competenze', en: 'Skills Quiz' },
  description: {
    it: 'Scopri le mie competenze in modo dinamico e interattivo!',
    en: 'Discover my skills in a dynamic and interactive way!'
  },
  icon: 'bi-code-slash',
  questions: [
    {
      question: {
        it: 'Qual è il linguaggio di programmazione con cui lavoro da più tempo?',
        en: 'Which programming language have I been working with the longest?'
      },
      options: {
        it: ['JavaScript', 'Python', 'C', 'Java'],
        en: ['JavaScript', 'Python', 'C', 'Java']
      },
      correctIndex: 2,
      explanation: {
        it: 'C è il linguaggio che mi ha accompagnato maggiormente nel mio percorso accademico. Ho avuto modo di utilizzarlo a 360°, dallo sviluppo di programmi semplici e complessi con i corsi di \'Tecniche di Programmazione\' e \'Algoritmi e Strutture Dati\', alla realizzazione di progetti più articolati con i corsi di \'Sistemi Operativi\' e \'Architettura dei Sistemi di Elaborazione\'.',
        en: 'C is the programming language that has accompanied me the most throughout my academic journey. I had the opportunity to use it extensively, from developing programs (simple and complex) during the courses \'Programming Techniques\' and \'Algorithms and Data Structures\', to creating more complex projects in the courses \'Operating Systems\' and \'Computer Architecture\'.'
      }
    },
    {
      question: {
        it: 'Oltre allo sviluppo SW, quale ambito ho approfondito maggiormente durante la Triennale?',
        en: 'Besides SW development, which area did I focus on the most during my Bachelor\'s degree?'
      },
      options: {
        it: ['Fisica', 'Elettronica', 'Matematica', 'Economia'],
        en: ['Physics', 'Electronics', 'Mathematics', 'Economics']
      },
      correctIndex: 1,
      explanation: {
        it: 'Durante il corso di Ingegneria Informatica al Politecnico di Torino ho sostenuto svariati esami di elettronica, quali \'Teoria dei circuiti\', \'Elettronica applicata\' e \'Sistemi Elettronici\', approfondendo tematiche come l\'analisi dei circuiti, i componenti elettronici e i sistemi digitali.',
        en: 'During the Computer Engineering course at the Polytechnic University of Turin, I took several electronics exams, such as \'Circuit Theory\', \'Applied Electronics\', and \'Electronic Systems\', delving into topics like circuit analysis, electronic components, and digital systems.'
      }
    },
    {
      question: {
        it: 'Qual è stato il mio primo progetto Agile?',
        en: 'What was my first Agile project?'
      },
      options: {
        it: ['Participium', 'TO Rent', 'AppRuggine', 'GeoControl'],
        en: ['Participium', 'TO Rent', 'AppRuggine', 'GeoControl']
      },
      correctIndex: 0,
      explanation: {
        it: 'Sebbene tutte le opzioni rappresentino progetti significativi per il mio percorso, \'Participium\' è stato il mio primo progetto sviluppato seguendo metodologie Agile - in particolare Scrum - con un focus sulla collaborazione e l\'iterazione continua nel corso di un intero semestre. Per maggiori informazioni, ti invito a visitare la sezione \'Progetti\' nella pagina principale!',
        en: 'Although all the options represent significant projects in my journey, \'Participium\' was my first project developed following Agile methodologies - particularly Scrum - with a focus on collaboration and continuous iteration throughout an entire semester. For more information, I invite you to visit the \'Projects\' section on the main page!'
      }
    },
    {
      question: {
        it: 'Qual è stato il mio primo progetto indipendente?',
        en: 'What was my first independent project?'
      },
      options: {
        it: ['Gioco di carte online', 'Raspberry Pi WebServer', 'Sito web per annunci immobiliari', 'Applicazione per la Domotica'],
        en: ['Online Card Game', 'Raspberry Pi WebServer', 'Real Estate Listing Website', 'Home Automation App']
      },
      correctIndex: 1,
      explanation: {
        it: 'Il mio primo progetto indipendente risale al 2023, quando ho realizzato un web server con Flask e lo ho installato su una scheda Raspberry Pi per il controllo remoto di LED tramite interfaccia web. Questo progetto mi ha permesso di esplorare l\'interazione tra software e hardware, sperimentando in modo pratico e divertente.',
        en: 'My first independent project dates back to 2023, when I created a web server with Flask and installed it on a Raspberry Pi board for remote control of LEDs via a web interface. This project allowed me to explore the interaction between software and hardware, experimenting in a practical and fun way.'
      }
    },
    {
      question: {
        it: 'Quale tecnologia ho imparato completamente da solo?',
        en: 'Which technology did I learn completely on my own?'
      },
      options: {
        it: ['Rust', 'TypeScript', 'MQTT', 'Kubernetes'],
        en: ['Rust', 'TypeScript', 'MQTT', 'Kubernetes']
      },
      correctIndex: 3,
      explanation: {
        it: 'Ho imparato Kubernetes completamente da solo, esplorando la gestione dei container e l\'orchestrazione dei servizi in ambienti cloud. L\'idea mi è venuta al termine del corso di \'Distributed System Programming\', che ha suscitato il mio interesse per lo sviluppo di sistemi distribuiti e mi ha spinto ad approfondire le tecnologie emergenti in questo ambito.',
        en: 'I learned Kubernetes completely on my own, exploring container management and service orchestration in cloud environments. The idea came to me at the end of the \'Distributed System Programming\' course, which sparked my interest in distributed systems development and pushed me to delve into emerging technologies in this field.'
      }
    }
  ]
};

// ─── Quiz: Interessi (Interests) ────────────────────────────────

const interestsQuiz = {
  id: 'interests',
  title: { it: 'Quiz sugli Interessi', en: 'Interests Quiz' },
  description: {
    it: 'Scopri i miei interessi e passioni in modo dinamico e interattivo!',
    en: 'Discover my interests and passions in a dynamic and interactive way!'
  },
  icon: 'bi-lightbulb',
  questions: [
    {
      question: {
        it: 'Com\'è nato il mio interesse per l\'informatica, ai tempi del liceo?',
        en: 'How did my interest in computer science begin, back in high school?'
      },
      options: {
        it: ['Osservando siti web reali', 'Sperimentando con PowerPoint', 'Parlando con adulti informatici', 'Frequentando un corso di programmazione'],
        en: ['Observing real websites', 'Experimenting with PowerPoint', 'Talking to computer-savvy adults', 'Attending a programming course']
      },
      correctIndex: 1,
      explanation: {
        it: 'Per quanto possa sembrare insolito, il mio interesse per l\'informatica è nato proprio sperimentando con PowerPoint per i progetti scolastici. Ho da sempre amato realizzare presentazioni interattive che simulassero il funzionamento di un sito web, ponendo grande attenzione al design e alla dinamicità.',
        en: 'For as unusual as it may seem, my interest in computer science began precisely by experimenting with PowerPoint for school projects. I have always loved creating interactive presentations that simulated the functioning of a website, paying great attention to design and dynamism.'
      }
    },
    {
      question: {
        it: 'Quale ambito dello sviluppo software ho scoperto e amato negli ultimi anni di università?',
        en: 'Which area of software development did I discover and love in the last years of university?'
      },
      options: {
        it: ['Progettazione di sistemi embedded', 'Progettazione full-stack', 'Progettazione di sistemi distribuiti', 'Design 3D e Grafica'],
        en: ['Embedded systems design', 'Full-stack development', 'Distributed systems design', '3D Design and Graphics']
      },
      correctIndex: 2,
      explanation: {
        it: 'La progettazione di sistemi distribuiti è un ambito dell\'Ingegneria Informatica che ho avuto modo di conoscere solo recentemente, grazie agli esami di \'Distributed System Programming\' e \'Cloud Computing and Operations\'. Le sfide legate alla comunicazione, alla scalabilità e alla gestione dei dati in ambienti distribuiti mi hanno conquistato!',
        en: 'Distributed systems design is an area of Computer Engineering that I only recently got to know, thanks to the exams of \'Distributed System Programming\' and \'Cloud Computing and Operations\'. The complexity and challenges related to communication, scalability, and data management in distributed environments fascinated me!'
      }
    },
    {
      question: {
        it: 'Quale ruolo preferisco ricoprire in un progetto di sviluppo software?',
        en: 'Which role do I prefer to take on in a software development project?'
      },
      options: {
        it: ['Sviluppatore full-stack', 'Sviluppatore front-end', 'Sviluppatore back-end', 'DevOps / Cloud Engineer'],
        en: ['Full-stack developer', 'Front-end developer', 'Back-end developer', 'DevOps / Cloud Engineer']
      },
      correctIndex: 0,
      explanation: {
        it: 'Preferisco il ruolo di sviluppatore full-stack, in quanto mi permette di lavorare su tutte le componenti di un progetto software, dall\'UI alla logica di business fino alla gestione dei dati. Amo la varietà e la sfida di dover affrontare diversi aspetti dello sviluppo, e credo che questa versatilità sia fondamentale per creare soluzioni complete e ben integrate.',
        en: 'I prefer the role of full-stack developer, as it allows me to work on all components of a software project, from the user interface to the business logic and data management. I love the variety and challenge of tackling different aspects of development, and I believe this versatility is essential for creating complete and well-integrated solutions.'
      }
    },
    {
      question: {
        it: 'Quale approccio di sviluppo software ho trovato più adatto a me?',
        en: 'Which software development approach have I found most suitable for me?'
      },
      options: {
        it: ['Waterfall', 'Agile/Scrum', 'Kanban', 'Extreme Programming (XP)'],
        en: ['Waterfall', 'Agile/Scrum', 'Kanban', 'Extreme Programming (XP)']
      },
      correctIndex: 1,
      explanation: {
        it: 'Agile/Scrum è l\'approccio di sviluppo software che ho trovato più adatto a me, grazie alla sua flessibilità, alla collaborazione continua e alla capacità di adattarsi ai cambiamenti. Ho avuto modo di sperimentare Scrum in diversi progetti universitari e personali, apprezzando la struttura iterativa e il focus sul team.',
        en: 'Agile/Scrum is the software development approach I have found most suitable for me, due to its flexibility, continuous collaboration, and ability to adapt to changes. I have had the opportunity to experiment with Scrum in various university and personal projects, appreciating the iterative structure and team focus.'
      }
    }
  ]
};

export { skillsQuiz, interestsQuiz };
