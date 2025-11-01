import React from 'react';
import { Card } from 'react-bootstrap';
import '../../style/Triennale.css';

function Triennale(props) {
  const { language } = props;

  const laurea = {
    titolo: "Laurea in",
    sottotitolo: "Ingegneria Informatica",
    anniRange: "2021 - 2024",
    valutazione: "102/110",
    universita: "\"Politecnico\" di Torino",
  };

  const laurea_eng = {
    titolo: "Bachelor’s Degree in",
    sottotitolo: "Computer Engineering",
    anniRange: "2021 - 2024",
    valutazione: "102/110",
    universita: "\"Politecnico\" di Torino",
  };

  return (
    <div className="triennale-container">
      <Card className="triennale-card">
        <Card.Header className="triennale-header">
          <h2 className="triennale-title">
            <span className="triennale-title-line">
              {language === 'it' ? laurea.titolo : laurea_eng.titolo}
            </span>
            <span className="triennale-subtitle-line">
              {language === 'it' ? laurea.sottotitolo : laurea_eng.sottotitolo}
            </span>
          </h2>
          <div className="triennale-period">
            {language === 'it' ? laurea.anniRange : laurea_eng.anniRange}
          </div>
        </Card.Header>
        
        <Card.Body className="triennale-body">
          <div className="university-info">
            <h4 className="university-name">
              {language === 'it' ? laurea.universita : laurea_eng.universita}
            </h4>
          </div>
          
          <div className="grade-container">
            <span className="grade-label">
              {language === 'it' ? 'Valutazione finale:' : 'Final grade:'}
            </span>
            <span className="grade-value">
              {language === 'it' ? laurea.valutazione : laurea_eng.valutazione}
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export { Triennale };
