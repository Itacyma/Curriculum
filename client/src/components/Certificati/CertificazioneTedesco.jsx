import React from 'react';
import '../../style/CertificazioneLinguistica.css';

function CertificazioneTedesco({ language }) {
  const labels = {
    title: {
      it: 'Progetto Prisma - Speak German with Bosch',
      en: 'Project Prisma - Speak German with Bosch'
    },
    description: {
      it: 'Partecipante selezionato al programma Project Prisma di Bosch. Attualmente frequento il corso di lingua tedesca di 40 ore organizzato da Bosch e tenuto da Abbey School Torino, finalizzato al raggiungimento della competenza A1.1.',
      en: 'Selected participant in Bosch’s Project Prisma program. Currently attending a 40-hour German language course organized by Bosch and taught by Abbey School Torino, achieving A1.1 level proficiency.'
    },
    date: {
      it: 'In corso...',
      en: 'Ongoing...'
    }
  };

  const lang = language || 'it';

  return (
    <div className="cert-card-wrapper">
      <div className="cert-card">
        <i className="bi bi-translate cert-card-icon"></i>
        <h3 className="cert-card-title">{labels.title[lang]}</h3>
        <p className="cert-card-description">{labels.description[lang]}</p>
        <div className="cert-card-date">
          <i className="bi bi-hourglass-split"></i>
          <span>{labels.date[lang]}</span>
        </div>
      </div>
    </div>
  );
}

export { CertificazioneTedesco };