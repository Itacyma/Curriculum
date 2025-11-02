import { PresentationCV } from "../components/Presentation";
import { CircuitBackground } from "../components/CircuitBackground";
import { Diploma } from "../components/Lauree/Diploma";
import { Triennale } from "../components/Lauree/Triennale";
import { Magistrale } from "../components/Lauree/Magistrale";
import { CertificazioneLinguistica } from "../components/Certificati/CertificazioneLinguistica";
import { Contatti } from "../components/Contatti";
import { ExamSection } from "./ExamSection";
import { ProjectSection } from "./ProjectSection";
import { ProjectCV } from "../components/Project";
import { LanguageSwitcher } from '../components/LanguageSwitcher';

import '../style/Home.css';
import '../style/EducationSection.css';

function HomePageCV(props) {
  const { language, setLanguage } = props;

  const labels = {
    scrollText: {
      it: "Scorri per scoprire il curriculum",
      en: "Scroll to explore the curriculum"
    },
    educationTitle: {
      it: "Percorso Formativo",
      en: "Educational Path"
    },
    currentCourseTitle: {
      it: "Corso Attuale",
      en: "Current Course"
    }
  };

  return (
    <div className="home-container">
      {/* Dynamic Circuit Background */}
      <CircuitBackground />
      
      {/* Main Content */}
      <div className="content-wrapper">
        <PresentationCV language={language} setLanguage={setLanguage} />
        
        {/* Sezione Formazione - Diploma e Triennale */}
        <div className="education-section">
          <div className="scroll-arrow">
            <div className="scroll-text">{language==='it'?labels.scrollText.it:labels.scrollText.en}</div>
            <div className="arrow-down">↓</div>
          </div>
        </div>
        <h2 id="percorso-formativo" className="section-main-title">
          <span className="separator-icon">
            <i className="bi bi-diamond-fill"></i>
          </span>
          {language==='it'?labels.educationTitle.it:labels.educationTitle.en}
        </h2>
        <div className="education-grid">
          <Diploma language={language} />
          <Triennale language={language} />
        </div>
        
        {/* Sezione Corso Attuale */}
        <div className="current-course-section">
        </div>
        <h2 className="section-main-title">
          <span className="separator-icon">
            <i className="bi bi-diamond-fill"></i>
          </span>
          {language==='it'?labels.currentCourseTitle.it:labels.currentCourseTitle.en}
        </h2>
        <Magistrale language={language}/>
        
        {/* Sezione Certificazione Linguistica */}
        {language==='it' ? <h2 className="section-main-title">
          <span className="separator-icon">
            <i className="bi bi-diamond-fill"></i>
          </span>
          Certificazione Linguistica
        </h2> : <></>}
        {language==='it' ? <CertificazioneLinguistica language={language}/> : <></>}
              
        {/* Sezione Esami */}
        <h2 className="section-main-title">
          <span className="separator-icon">
            <i className="bi bi-diamond-fill"></i>
          </span>
          {language === "it" ? "Esami di indirizzo" : "Major Exams"}
        </h2>
        <ExamSection language={language} />

        {/* Sezione Progetti */}
        <h2 id="progetti-web" className="section-main-title">
          <span className="separator-icon">
            <i className="bi bi-diamond-fill"></i>
          </span>
          {language === 'it' ? 'I miei progetti' : 'My Projects'}
        </h2>
        <ProjectSection language={language} /> 

        {/* Sezione Contatti */}
        <Contatti language={language} />

      </div>
    </div>
  );
}

export { HomePageCV };
