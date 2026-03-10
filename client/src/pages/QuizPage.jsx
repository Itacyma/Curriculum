import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CircuitBackground } from '../components/CircuitBackground';
import { Quiz } from '../components/Quiz';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { skillsQuiz, interestsQuiz } from '../data/quizData.mjs';
import '../style/InteractiveSearch.css';
import '../style/QuizPage.css';

function QuizPage({ language, setLanguage }) {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const navigate = useNavigate();

  const labels = {
    backButton: { it: 'Torna al curriculum', en: 'Back to curriculum' },
    title: { it: 'Quiz conoscitivo', en: 'Get-to-know-me Quiz' },
    subtitle: {
      it: 'Scopri il mio profilo personale e professionale partecipando a questo quiz!',
      en: 'Discover my personal and professional profile by taking this quiz!'
    },
    skillsBtn: { it: 'Quiz sulle Competenze', en: 'Skills Quiz' },
    interestsBtn: { it: 'Quiz sugli Interessi', en: 'Interests Quiz' },
    skillsDesc: {
      it: '5 domande sulle mie competenze tecniche e sui progetti realizzati',
      en: '5 questions about my technical skills and completed projects'
    },
    interestsDesc: {
      it: '4 domande sui miei interessi e passioni',
      en: '4 questions about my interests and passions'
    }
  };

  const l = (key) => labels[key]?.[language] ?? labels[key]?.it;

  return (
    <div className="interactive-search-container">
      <CircuitBackground />

      <div className="interactive-search-content">
        <div className="interactive-top-bar">
          <button className="interactive-back-btn" onClick={() => navigate('/')}>
            <i className="bi bi-arrow-left"></i>
            <span>{l('backButton')}</span>
          </button>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>

        {/* Hero */}
        <div className="interactive-hero">
          {!activeQuiz && (
            <div className="interactive-photo-wrapper">
              <img src="/ProfilePhoto.png" alt="Profile" className="interactive-photo" />
              <div className="interactive-photo-overlay"></div>
            </div>
          )}
          {!activeQuiz && (
            <>
              <h1 className="interactive-title">{l('title')}</h1>
              <p className="interactive-subtitle">{l('subtitle')}</p>
            </>
          )}
        </div>

        {/* Quiz selection or active quiz */}
        <div className="quiz-page-body">
          {!activeQuiz ? (
            <div className="quiz-selection">
              <button className="quiz-select-card" onClick={() => setActiveQuiz('skills')}>
                <i className={`bi ${skillsQuiz.icon} quiz-select-icon`}></i>
                <span className="quiz-select-title">{l('skillsBtn')}</span>
                <span className="quiz-select-desc">{l('skillsDesc')}</span>
                <i className="bi bi-arrow-right quiz-select-arrow"></i>
              </button>

              <button className="quiz-select-card" onClick={() => setActiveQuiz('interests')}>
                <i className={`bi ${interestsQuiz.icon} quiz-select-icon`}></i>
                <span className="quiz-select-title">{l('interestsBtn')}</span>
                <span className="quiz-select-desc">{l('interestsDesc')}</span>
                <i className="bi bi-arrow-right quiz-select-arrow"></i>
              </button>
            </div>
          ) : (
            <Quiz
              quiz={activeQuiz === 'skills' ? skillsQuiz : interestsQuiz}
              language={language}
              onBack={() => setActiveQuiz(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export { QuizPage };
