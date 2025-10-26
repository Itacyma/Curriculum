import React from 'react';
import { Card } from 'react-bootstrap';
import '../../style/Triennale.css';

function Triennale() {
  const laurea = {
    titolo: "Laurea in Ingegneria Informatica",
    anniRange: "2021 - 2024",
    valutazione: "102/110",
    universita: "Politecnico di Torino",
  };

  return (
    <div className="triennale-container">
      <Card className="triennale-card">
        <Card.Header className="triennale-header">
          <h2 className="triennale-title">{laurea.titolo}</h2>
          <div className="triennale-period">{laurea.anniRange}</div>
        </Card.Header>
        
        <Card.Body className="triennale-body">
          <div className="university-info">
            <h4 className="university-name">{laurea.universita}</h4>
          </div>
          
          <div className="grade-container">
            <span className="grade-label">Valutazione finale:</span>
            <span className="grade-value">{laurea.valutazione}</span>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export { Triennale };