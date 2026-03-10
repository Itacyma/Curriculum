import React from 'react';
import '../../style/CertificazioneLinguistica.css';

function CertificazioneInglese({ language }) {
  const labels = {
    title: {
      it: 'Cambridge First Certificate (FCE)',
      en: 'Cambridge First Certificate (FCE)'
    },
    description: {
      it: 'Certificazione di lingua inglese livello B2 del Quadro Comune Europeo di Riferimento, rilasciata da Cambridge Assessment English.',
      en: 'English language certification at B2 level of the Common European Framework of Reference, issued by Cambridge Assessment English.'
    },
    date: {
      it: 'Ottobre 2020',
      en: 'October 2020'
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
          <i className="bi bi-calendar-check"></i>
          <span>{labels.date[lang]}</span>
        </div>
      </div>
    </div>
  );
}

export { CertificazioneInglese };