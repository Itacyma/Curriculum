import React from 'react';
import '../../style/Project.css';
import { ProjectCV } from '../Project';

function Fridge(props) {
  const { language } = props;

  const mockData_it = {
    title: 'FRIDGE',
    date: '2026',
    description: 'Applicazione Android realizzata con i moderni standard dello sviluppo mobile, che consente agli utenti di interagire all\'interno di un social network dedicato al mondo della cucina. Gli utenti possono condividere ricette, commentare e interagire con altri appassionati di cucina, personalizzando la propria esperienza e il proprio profilo. L\'applicazione è sviluppata in Kotlin, utilizzando il framework Jetpack Compose per un\'interfaccia utente moderna e reattiva.',
    tools: ['Kotlin', 'Gradle', 'Spring Boot', 'Jetpack Compose', 'Firebase', 'Firestore', 'Google Sign-in', 'Coroutines', 'MVVM'],
    link: 'https://github.com/polito-mad-2026/project-assignment-final-even-g08',
    extra: '',
    subtitle: 'Applicazione Android',
    iconClass: 'bi bi-phone',
    images: ['/projects/fridge/1.jpg', '/projects/fridge/2.jpg', '/projects/fridge/3.jpg', '/projects/fridge/4.jpg', '/projects/fridge/5.jpg']
  };

  const mockData_eng = {
    title: 'FRIDGE',
    date: '2026',
    description: 'Android application developed with modern mobile development standards, allowing users to interact within a social network dedicated to the world of cooking. Users can share recipes, comment, and interact with other cooking enthusiasts, personalizing their experience and profile. The application is developed in Kotlin, using the Jetpack Compose framework for a modern and responsive user interface.',
    tools: ['Kotlin', 'Gradle', 'Spring Boot', 'Jetpack Compose', 'Firebase', 'Firestore', 'Google Sign-in', 'Coroutines', 'MVVM'],
    link: 'https://github.com/polito-mad-2026/project-assignment-final-even-g08',
    extra: '',
    subtitle: 'Android application',
    iconClass: 'bi bi-phone',
    images: ['/projects/fridge/1.jpg', '/projects/fridge/2.jpg', '/projects/fridge/3.jpg', '/projects/fridge/4.jpg', '/projects/fridge/5.jpg']
  };

  const techSections_it = [
    {
      name: "Frontend",
      items: [
        "Applicazione Android sviluppata in Kotlin",
        "Utilizzo di Jetpack Compose per un’interfaccia utente moderna e reattiva",
        "Gestione dello stato con ViewModel, secondo i pattern MVVM e MVI-Lite",
        "Navigazione tra schermate con Navigation Component",
      ]
    },
    {
      name: "Backend",
      items: [
        "Integrazione con Firebase per autenticazione, database e storage",
        "Utilizzo di Firestore per la gestione dei dati in tempo reale e per le notifiche push",
        "Implementazione di Google Sign-in per un’autenticazione sicura e semplice",
      ]
    }
  ];

  const techSections_eng = [
    {
        name: "Frontend",   
        items: [
            "Android application developed in Kotlin",  
            "Use of Jetpack Compose for a modern and responsive user interface",
            "State management with ViewModel, following MVVM and MVI-Lite patterns",
            "Navigation between screens with Navigation Component",
        ]
    },
    {
        name: "Backend",
        items: [   
        "Integration with Firebase for authentication, database, and storage",
        "Use of Firestore for real-time data management and push notifications",
        "Implementation of Google Sign-in for secure and easy authentication",
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

export { Fridge };
