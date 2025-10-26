import React from 'react';
import { Card } from 'react-bootstrap';
import '../../style/Magistrale.css';

function Magistrale(props) {
  const { language } = props;

  const laurea = {
    titolo: "Laurea Magistrale in",
    sottotitolo: "Software Engineering",
    anniRange: "2024 -",
    valutazione: "29.16/30",
    cfu: "60/120 CFU",
    universita: "Politecnico di Torino",
  };

  const laurea_eng = {
    titolo: "Master’s Degree in",
    sottotitolo: "Software Engineering",
    anniRange: "2024 -",
    valutazione: "29.16/30",
    cfu: "60/120 ECTS",
    universita: "Polytechnic University of Turin",
  };

  return (
    <div className="magistrale-container">
      <Card className="magistrale-card">
        <Card.Header className="magistrale-header">
          <h2 className="magistrale-title">
            <span className="magistrale-title-line">
              {language === 'it' ? laurea.titolo : laurea_eng.titolo}
            </span>
            <span className="magistrale-subtitle-line">
              {language === 'it' ? laurea.sottotitolo : laurea_eng.sottotitolo}
            </span>
          </h2>
          <div className="magistrale-period">
            {language === 'it' ? laurea.anniRange : laurea_eng.anniRange}
          </div>
        </Card.Header>
        
        <Card.Body className="magistrale-body">
          <div className="university-info">
            <h4 className="university-name">
              {language === 'it' ? laurea.universita : laurea_eng.universita}
            </h4>
          </div>
          
          <div className="grade-container">
            <span className="grade-label">
              {language === 'it' ? 'Valutazione attuale:' : 'Current GPA:'}
            </span>
            <span className="grade-value">
              {language === 'it' ? laurea.valutazione : laurea_eng.valutazione}
            </span>
            <span className="cfu-value">
              ({language === 'it' ? laurea.cfu : laurea_eng.cfu})
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export { Magistrale };
