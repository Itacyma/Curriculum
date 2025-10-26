import React from 'react';
import { ProjectCV } from '../Project';

const mockData = {
  title: 'Raspberry Pi LED Controller',
  date: '2023',
  description:
    'Webserver realizzato in Flask e installato su una scheda Raspberry Pi per il controllo remoto di LED tramite interfaccia web. L’applicazione consente di accendere, spegnere e gestire più LED fisici con semplici pulsanti HTML, fornendo feedback in tempo reale sullo stato dei dispositivi.',
  tools: ['HTML5', 'CSS3', 'Flask', 'Python', 'C', 'Bootstrap', 'Raspberry Pi GPIO'],
  link: '/',
  extra: ''
};

const techSections = [
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
  },

];

function RaspberryPi() {
  return (
    <ProjectCV mockData={mockData} techSections={techSections}/>
  );
}

export { RaspberryPi };
