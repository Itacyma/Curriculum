import { PresentationCV } from "../components/Presentation";
import { CircuitBackground } from "../components/CircuitBackground";
import { Diploma } from "../components/Lauree/Diploma";
import { Triennale } from "../components/Lauree/Triennale";
import { Magistrale } from "../components/Lauree/Magistrale";
import { CertificazioneLinguistica } from "../components/Certificati/CertificazioneLinguistica";
import { Contatti } from "../components/Contatti";
import { ExamSection } from "./ExamSection";
import { ProjectSection } from "./ProjectSection"
import { ProjectCV } from "../components/Project";


import '../style/Home.css';
import '../style/EducationSection.css';


function HomePageCV() {


  return (
    <div className="home-container">
      {/* Dynamic Circuit Background */}
      <CircuitBackground />
      
      {/* Main Content */}
      <div className="content-wrapper">
        <PresentationCV />
        
        {/* Sezione Formazione - Diploma e Triennale */}
        <div id="percorso-formativo" className="education-section">
          <div className="scroll-arrow">
            <div className="scroll-text">Scorri per scoprire il curriculum</div>
            <div className="arrow-down">↓</div>
          </div>
          <h2 className="education-title">Percorso Formativo</h2>
          <div className="education-grid">
            <Diploma />
            <Triennale />
          </div>
        </div>
        
        {/* Sezione Corso Attuale */}
        <div className="current-course-section">
          <h2 className="current-course-title">Corso Attuale</h2>
          <Magistrale />
        </div>
        
        {/* Sezione Certificazione Linguistica */}
        <CertificazioneLinguistica />
        
        {/* Sezione Esami */}
        <ExamSection />

        {/* Sezione Progetti */}
        <ProjectSection /> 

        {/* Sezione Contatti */}
        <Contatti />

      </div>
    </div>
  );
}

export { HomePageCV };
