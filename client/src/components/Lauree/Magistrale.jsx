import React from 'react';
import { Card } from 'react-bootstrap';
import '../../style/Magistrale.css';

function Magistrale() {
  const laurea = {
    titolo: "Laurea Magistrale in",
    sottotitolo: "Software Engineering",
    anniRange: "2024 -",
    valutazione: "29.16/30",
    cfu: "60/120 CFU",
    universita: "Politecnico di Torino",
  };

  return (
    <div className="magistrale-container">
      <Card className="magistrale-card">
        <Card.Header className="magistrale-header">
          <h2 className="magistrale-title">
            <span className="magistrale-title-line">{laurea.titolo}</span>
            <span className="magistrale-subtitle-line">{laurea.sottotitolo}</span>
          </h2>
          <div className="magistrale-period">{laurea.anniRange}</div>
        </Card.Header>
        
        <Card.Body className="magistrale-body">
          <div className="university-info">
            <h4 className="university-name">{laurea.universita}</h4>
          </div>
          
          <div className="grade-container">
            <span className="grade-label">Valutazione attuale:</span>
            <span className="grade-value">{laurea.valutazione}</span>
            <span className="cfu-value">({laurea.cfu})</span>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export { Magistrale };