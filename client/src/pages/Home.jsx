import { useRef } from "react";
import { useNavigate } from 'react-router';
import { PresentationCV } from "../components/Presentation";
import { CircuitBackground } from "../components/CircuitBackground";
import { Diploma } from "../components/Lauree/Diploma";
import { Triennale } from "../components/Lauree/Triennale";
import { Magistrale } from "../components/Lauree/Magistrale";
import { CertificazioneInglese } from "../components/Certificati/CertificazioneInglese";
import { CertificazioneTedesco } from "../components/Certificati/CertificazioneTedesco";
import { Contatti } from "../components/Contatti";
import { ExamSection } from "./ExamSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectSection } from "./ProjectSection";
import { ProjectCV } from "../components/Project";
import { LanguageSwitcher } from '../components/LanguageSwitcher';

import '../style/Home.css';
import '../style/EducationSection.css';

function HomePageCV(props) {
  const { language, setLanguage } = props;

  const topAnchorRef = useRef(null);
  const navigate = useNavigate();

  const handleGoUp = (event) => {
    event?.preventDefault?.();

    if (topAnchorRef.current && typeof topAnchorRef.current.scrollIntoView === "function") {
      topAnchorRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const scrollingElement = document.scrollingElement || document.documentElement || document.body;

    if (scrollingElement && typeof scrollingElement.scrollTo === 'function') {
      scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.scrollTo(0, 0);
  };

  const labels = {
    scrollText: {
      it: "Scorri per scoprire il curriculum",
      en: "Scroll to explore the curriculum"
    },
    educationTitle: {
      it: "Percorso Formativo",
      en: "Educational Path"
    },
    goUpText: {
      it: "Premi per tornare all'inizio del curriculum",
      en: "Press to return to the top of the curriculum"
    },
    exploreButton: {
      it: "Passa alla ricerca interattiva",
      en: "Switch to interactive search"
    },
    quizButton: {
      it: "Passa al quiz conoscitivo",
      en: "Take the get-to-know-me quiz"
    }
  };

  return (
    <div className="home-container">
      {/* Dynamic Circuit Background */}
      <CircuitBackground />
      
      {/* Main Content */}
      <div className="content-wrapper">
        <div ref={topAnchorRef} />
        <PresentationCV language={language} setLanguage={setLanguage} />
        
        {/* Sezione Formazione - Diploma e Triennale */}
        <div className="education-section">
          <div className="scroll-arrow">
            <div className="explore-buttons-row">
              <button
                className="interactive-explore-btn"
                onClick={() => navigate('/explore')}
              >
                <i className="bi bi-search"></i>
                <span>{language === 'it' ? labels.exploreButton.it : labels.exploreButton.en}</span>
              </button>
              {/*
              <button
                className="interactive-explore-btn"
                onClick={() => navigate('/quiz')}
              >
                <i className="bi bi-patch-question"></i>
                <span>{language === 'it' ? labels.quizButton.it : labels.quizButton.en}</span>
              </button>
              */}
            </div>
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
          <Magistrale language={language} />
        </div>

        {/* Sezione Certificazione Linguistica */}
        <h2 className="section-main-title">
          <span className="separator-icon">
            <i className="bi bi-diamond-fill"></i>
          </span>
          {language === 'it' ? 'Certificazioni' : 'Certifications'}
        </h2>
        <div className="certifications-grid">
          <CertificazioneInglese language={language}/>
          <CertificazioneTedesco language={language}/>
        </div>

        {/* Sezione Skills */}
        <h2 id="competenze-tecniche" className="section-main-title">
          <span className="separator-icon">
            <i className="bi bi-diamond-fill"></i>
          </span>
          {language === 'it' ? 'Competenze tecniche' : 'Technical Skills'}
        </h2>
        <SkillsSection language={language} />
        
        
              
        {/* Sezione Esami */}
        <h2 id="esami" className="section-main-title">
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

        <div className="go-up-section">
          <button
            type="button"
            className="scroll-arrow scroll-arrow-button"
            onClick={handleGoUp}
            onTouchEnd={handleGoUp}
            aria-label={language === 'it' ? labels.goUpText.it : labels.goUpText.en}
          >
            <div className="arrow-up">↑</div>
            <div className="scroll-text">{language === 'it' ? labels.goUpText.it : labels.goUpText.en}</div>
          </button>
        </div>

        {/* Sezione Contatti */}
        <Contatti language={language} />

      </div>
    </div>
  );
}

export { HomePageCV };
