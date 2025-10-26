import React from 'react';
import { Card } from 'react-bootstrap';
import '../../style/Diploma.css';

function Diploma(props) {
  const { language } = props;

  const diploma = {
    titolo: "Diploma di Liceo Scientifico",
    anniRange: "2016 - 2021",
    valutazione: "100/100",
    istituto: "L.S.S \"Carlo Cattaneo\" di Torino",
  };
  
  const diploma_eng = {
    titolo: "High School Diploma in Scientific Studies",
    anniRange: "2016 - 2021",
    valutazione: "100/100",
    istituto: "L.S.S. \"Carlo Cattaneo\" of Turin",
  };


  return (
    <div className="diploma-container">
      <Card className="diploma-card">
        <Card.Header className="diploma-header">
          <h2 className="diploma-title">{language==='it' ? diploma.titolo : diploma_eng.titolo} </h2>
          <div className="diploma-period">{diploma.anniRange}</div>
        </Card.Header>
        
        <Card.Body className="diploma-body">
          <div className="institute-info">
            <h4 className="institute-name">{diploma.istituto}</h4>
          </div>
          
          <div className="grade-container">
            <span className="grade-label">{language==='it' ? 'Voto di diploma:' : 'Final grade:'}</span>
            <span className="grade-value">{diploma.valutazione}</span>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export { Diploma };