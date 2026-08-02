import React from 'react';
import '../../style/Project.css';
import { ProjectCV } from '../Project';

function EuroTransit(props) {
  const { language } = props;

  const mockData_it = {
    title: 'EuroTransit',
    date: '2026',
    description: 'Applicazione di prenotazione di viaggi in treno, realizzata sopra un\'infrastruttura Kubernetes e con un backend in Kotlin. Il progetto applica gli standard moderni per i sistemi distribuiti, con un\'architettura a microservizi, bilanciamento del carico, scalabilità e ricovero automatico. L\'applicazione è stata testata sotto scenari di carico elevato, con un focus sulla resilienza e la tolleranza ai guasti.',
    tools: ['Kotlin', 'Gradle', 'Spring Boot', 'Kubernetes', 'GitOps', 'CI/CD', 'ArgoCD', 'Prometheus', 'Grafana', 'Kafka', 'PostgreSQL', 'Debezium', 'Coroutines', 'React'],
    link: 'https://github.com/polito-mad-2026/project-assignment-final-even-g08',
    extra: '',
    subtitle: 'Kubernetes Web Application',
    iconClass: 'bi bi-pc-display-horizontal',
    images: ['/projects/eurotransit/1.jpg', '/projects/eurotransit/2.jpg', '/projects/eurotransit/3.jpg', '/projects/eurotransit/4.jpg', '/projects/eurotransit/5.jpg']
  };

  const mockData_eng = {
    title: 'EuroTransit',
    date: '2026',
    description: 'Train travel booking application, built on a Kubernetes infrastructure with a Kotlin backend. The project applies modern standards for distributed systems, with a microservices architecture, load balancing, scalability, and automatic recovery. The application has been tested under high load scenarios, focusing on resilience and fault tolerance.',
    tools: ['Kotlin', 'Gradle', 'Spring Boot', 'Kubernetes', 'Docker Compose', 'GitOps', 'CI/CD', 'ArgoCD', 'Prometheus', 'Grafana', 'Kafka', 'PostgreSQL', 'Debezium', 'Coroutines', 'React'],
    link: 'https://github.com/polito-mad-2026/project-assignment-final-even-g08',
    extra: '',
    subtitle: 'Kubernetes Web Application',
    iconClass: 'bi bi-pc-display-horizontal',
    images: ['/projects/eurotransit/1.jpg', '/projects/eurotransit/2.jpg', '/projects/eurotransit/3.jpg', '/projects/eurotransit/4.jpg', '/projects/eurotransit/5.jpg']
  };

  const techSections_it = [
    {
      name: "Backend",
      items: [
        "Backend sviluppato in Kotlin e Spring Boot",
        "Architettura a microservizi, containerizzati con Docker Compose e orchestrati con Kubernetes",
        "Integrazione con Kafka e Debezium per la gestione di eventi in tempo reale e la replicazione dei dati",
        "Struttura a due repository GitHub (applicazione e configurazione dell'infrastruttura)",
        "Implementazione di CI/CD con GitOps e ArgoCD",
      ]
    },
    {
        name: "Infrastruttura",
        items: [
            "Infrastruttura Kubernetes per la gestione dei microservizi",
            "Monitoraggio e logging con Prometheus e Grafana",
            "Bilanciamento del carico e scalabilità automatica delle repliche per i servizi",
            "Utilizzo di strumenti di resilienza di Resilience4j, quali Circuit Breaker, Retries, Bulkhead e Timeout",
        ]
    },
    {
        name: "Frontend",
        items: [
            "Applicazione web sviluppata in React",
            "Interfaccia utente responsive e moderna",
            "Applicazione delle best practice per la frontend security, come la protezione contro attacchi XSS e CSRF",
        ]
    }
  ];

  const techSections_eng = [
    {
        name: "Backend",
        items: [
            "Backend developed in Kotlin and Spring Boot",
            "Microservices architecture, containerized with Docker Compose and orchestrated with Kubernetes",
            "Integration with Kafka and Debezium for real-time event handling and data replication",
            "Two GitHub repositories structure (application and infrastructure configuration)",
            "CI/CD implementation with GitOps and ArgoCD"
        ]
    },
    {   
        name: "Infrastructure",
        items: [
            "Kubernetes infrastructure for managing microservices",
            "Monitoring and logging with Prometheus and Grafana",
            "Load balancing and automatic scaling of service replicas",
            "Use of resilience tools from Resilience4j, such as Circuit Breaker, Retries, Bulkhead, and Timeout"
        ]       
    },
    {
        name: "Frontend",
        items: [
            "Web application developed in React",
            "Responsive and modern user interface",
            "Application of frontend security best practices, such as protection against XSS and CSRF attacks"
        ]
    }
  ];

  return (
    <ProjectCV
      mockData={language === 'it' ? mockData_it : mockData_eng}
      techSections={language === 'it' ? techSections_it : techSections_eng}
      language = {language}
    />
  );
}

export { EuroTransit };
