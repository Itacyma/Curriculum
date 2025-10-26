import React from 'react';
import { ProjectCV } from '../Project';

function RaspberryPi(props) {
  const { language } = props;

  const mockData_it = {
    title: 'Raspberry Pi LED Controller',
    date: '2023',
    description:
      'Webserver realizzato in Flask e installato su una scheda Raspberry Pi per il controllo remoto di LED tramite interfaccia web. L’applicazione consente di accendere, spegnere e gestire più LED fisici con semplici pulsanti HTML, fornendo feedback in tempo reale sullo stato dei dispositivi.',
    tools: ['HTML5', 'CSS3', 'Flask', 'Python', 'C', 'Bootstrap', 'Raspberry Pi GPIO'],
    link: '/',
    extra: ''
  };

  const mockData_eng = {
    title: 'Raspberry Pi LED Controller',
    date: '2023',
    description:
      'Web server built with Flask and deployed on a Raspberry Pi board for remote LED control via a web interface. The application allows turning on, off, and managing multiple physical LEDs using simple HTML buttons, providing real-time feedback on device status.',
    tools: ['HTML5', 'CSS3', 'Flask', 'Python', 'C', 'Bootstrap', 'Raspberry Pi GPIO'],
    link: '/',
    extra: ''
  };

  const techSections_it = [
    {
      name: 'Client',
      items: [
        'HTML5 e CSS3 per la realizzazione dell’interfaccia utente semplice e responsiva',
        'Pulsanti interattivi per l’accensione e lo spegnimento dei LED',
        'Aggiornamento dinamico dello stato tramite richieste asincrone al server Flask'
      ]
    },
    {
      name: 'Server',
      items: [
        'Flask come framework backend per la gestione delle richieste HTTP',
        'Integrazione con le librerie GPIO di Raspberry Pi per il controllo fisico dei LED',
        'Routing server-side per collegare i pulsanti web ai pin di output',
        'Template rendering con Jinja2 per aggiornare lo stato in tempo reale'
      ]
    }
  ];

  const techSections_eng = [
    {
      name: 'Client',
      items: [
        'HTML5 and CSS3 for building a simple, responsive user interface',
        'Interactive buttons for turning LEDs on and off',
        'Dynamic state updates through asynchronous requests to the Flask server'
      ]
    },
    {
      name: 'Server',
      items: [
        'Flask as the backend framework for handling HTTP requests',
        'Integration with Raspberry Pi GPIO libraries for physical LED control',
        'Server-side routing linking web buttons to output pins',
        'Template rendering with Jinja2 to update state in real time'
      ]
    }
  ];

  return (
    <ProjectCV
      mockData={language === 'it' ? mockData_it : mockData_eng}
      techSections={language === 'it' ? techSections_it : techSections_eng}
    />
  );
}

export { RaspberryPi };
