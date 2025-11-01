import React from 'react';
import { Card } from 'react-bootstrap';
import '../../style/CertificazioneLinguistica.css';

function CertificazioneLinguistica() {
  const certificazione = {
    lingua: "Inglese",
    livello: "B2",
    dataConseguimento: "Ottobre 2020",
    competenze: {
      ascolto: "B2",
      lettura: "B2",
      interazioneOrale: "B2",
      produzioneOrale: "B2",
      scrittura: "B2"
    }
  };

  return (
    <div className="certificazione-container">
      <Card className="certificazione-card">
        <Card.Body className="certificazione-body">
          <table className="competenze-table">
            <thead>
              <tr className="main-header">
                <th></th>
                <th colSpan="2">COMPRENSIONE</th>
                <th colSpan="2">ESPRESSIONE</th>
                <th>SCRITTURA</th>
              </tr>
              <tr className="sub-header">
                <th></th>
                <th>Ascolto</th>
                <th>Lettura</th>
                <th>Interaz.</th>
                <th>Produz.</th>
                <th>Scrittura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="lingua-cell">{certificazione.lingua}</td>
                <td className="livello-cell">{certificazione.competenze.ascolto}</td>
                <td className="livello-cell">{certificazione.competenze.lettura}</td>
                <td className="livello-cell">{certificazione.competenze.interazioneOrale}</td>
                <td className="livello-cell">{certificazione.competenze.produzioneOrale}</td>
                <td className="livello-cell">{certificazione.competenze.scrittura}</td>
              </tr>
            </tbody>
          </table>
          
          <div className="data-conseguimento">
            <h4>Data di conseguimento:</h4>
            <div className="data-badge">
              <i className="bi bi-calendar-check"></i>
              <span>{certificazione.dataConseguimento}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export { CertificazioneLinguistica };