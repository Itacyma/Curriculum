import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../style/Quiz.css';

function Quiz({ quiz, language, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();

  const total = quiz.questions.length;
  const q = quiz.questions[currentQuestion];

  const labels = {
    questionOf: {
      it: (curr, tot) => `Domanda ${curr} di ${tot}`,
      en: (curr, tot) => `Question ${curr} of ${tot}`
    },
    correct: { it: 'Corretto!', en: 'Correct!' },
    wrong: { it: 'Sbagliato!', en: 'Wrong!' },
    correctAnswer: { it: 'La risposta corretta era:', en: 'The correct answer was:' },
    next: { it: 'Prossima domanda', en: 'Next question' },
    seeResults: { it: 'Vedi i risultati', en: 'See results' },
    resultTitle: { it: 'Quiz completato!', en: 'Quiz completed!' },
    yourScore: { it: 'Il tuo punteggio:', en: 'Your score:' },
    perfect: {
      it: 'Perfetto! Conosci molto bene il mio profilo. Se sei interessato\\a a lavorare con me, che ne dici di pianificare un incontro conoscitivo per approfondire? Troverai tutti i miei contatti nella pagina principale!',
      en: 'Perfect! You know my profile very well. How about scheduling a meeting to discuss further? You can find all my contact details on the main page!'
    },
    great: {
      it: 'Ottimo risultato! Hai una buona conoscenza del mio profilo. Se sei interessato\\a a lavorare con me, che ne dici di pianificare un incontro conoscitivo per approfondire? Troverai tutti i miei contatti nella pagina principale!',
      en: 'Great result! You have a good knowledge of my profile. I\'d love to discuss more in a meeting! You can find all my contact details on the main page!'
    },
    good: {
      it: 'Buon punteggio, ma c\'è ancora molto da scoprire. Se sei interessato\\a a lavorare con me, che ne dici di pianificare un incontro conoscitivo per approfondire? Troverai tutti i miei contatti nella pagina principale!',
      en: 'Good score, but there\'s still a lot to discover. Shall we schedule a meeting to get to know each other better? You can find all my contact details on the main page!'
    },
    tryAgain: {
      it: 'Non male! Ma il modo migliore per conoscermi è di persona. Se sei interessato\\a a lavorare con me, che ne dici di pianificare un incontro conoscitivo? Troverai tutti i miei contatti nella pagina principale!',
      en: 'Not bad! But the best way to know me is in person. Would you like to schedule a meeting? You can find all my contact details on the main page!'
    },
    ctaButton: {
      it: 'Torna alla pagina principale',
      en: 'Back to the main page'
    },
    backToQuizzes: {
      it: 'Torna ai quiz',
      en: 'Back to quizzes'
    },
    retryQuiz: {
      it: 'Riprova il quiz',
      en: 'Retry quiz'
    }
  };

  const l = (key) => labels[key]?.[language] ?? labels[key]?.it;

  const handleSelect = (index) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);
    if (index === q.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < total - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setFinished(false);
  };

  const getResultMessage = () => {
    const ratio = score / total;
    if (ratio === 1) return l('perfect');
    if (ratio >= 0.8) return l('great');
    if (ratio >= 0.6) return l('good');
    return l('tryAgain');
  };

  // ─── Results screen ───────────────────────────────
  if (finished) {
    return (
      <div className="quiz-results">
        <div className="quiz-results-card">
          <i className="bi bi-trophy quiz-trophy-icon"></i>
          <h2 className="quiz-results-title">{l('resultTitle')}</h2>
          <p className="quiz-score-label">{l('yourScore')}</p>
          <div className="quiz-score-display">
            <span className="quiz-score-number">{score}</span>
            <span className="quiz-score-separator">/</span>
            <span className="quiz-score-total">{total}</span>
          </div>
          <div className="quiz-score-bar-wrapper">
            <div
              className="quiz-score-bar-fill"
              style={{ width: `${(score / total) * 100}%` }}
            ></div>
          </div>
          <p className="quiz-result-message">{getResultMessage()}</p>
          <div className="quiz-results-actions">
            <button
              className="quiz-cta-button"
              onClick={() => navigate('/')}
            >
              <i className="bi bi-arrow-left"></i>
              {l('ctaButton')}
            </button>
            <button className="quiz-secondary-btn" onClick={handleRetry}>
              <i className="bi bi-arrow-clockwise"></i>
              {l('retryQuiz')}
            </button>
            <button className="quiz-secondary-btn" onClick={onBack}>
              <i className="bi bi-arrow-left"></i>
              {l('backToQuizzes')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Question screen ──────────────────────────────
  return (
    <div className="quiz-question-area">
      {/* Progress and Question Box */}
      <div className="quiz-question-box">
        {/* Question */}
        <h2 className="quiz-question-text">{q.question[language]}</h2>

        {/* Progress */}
        <div className="quiz-progress">
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{ width: `${((currentQuestion + 1) / total) * 100}%` }}
            ></div>
          </div>
          <span className="quiz-progress-text">
            {labels.questionOf[language](currentQuestion + 1, total)}
          </span>
        </div>
      </div>

      {/* Options */}
      <div className="quiz-options">
        {q.options[language].map((opt, i) => {
          let optClass = 'quiz-option';
          if (hasAnswered) {
            if (i === q.correctIndex) optClass += ' correct';
            else if (i === selectedOption) optClass += ' wrong';
            else optClass += ' faded';
          } else if (i === selectedOption) {
            optClass += ' selected';
          }
          return (
            <button
              key={i}
              className={optClass}
              onClick={() => handleSelect(i)}
              disabled={hasAnswered}
            >
              <span className="quiz-option-letter">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="quiz-option-text">{opt}</span>
              {hasAnswered && i === q.correctIndex && (
                <i className="bi bi-check-circle-fill quiz-option-icon correct-icon"></i>
              )}
              {hasAnswered && i === selectedOption && i !== q.correctIndex && (
                <i className="bi bi-x-circle-fill quiz-option-icon wrong-icon"></i>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {hasAnswered && (
        <div className={`quiz-explanation ${selectedOption === q.correctIndex ? 'correct' : 'wrong'}`}>
          <div className="quiz-explanation-header">
            <i className={`bi ${selectedOption === q.correctIndex ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`}></i>
            <span>
              {selectedOption === q.correctIndex ? l('correct') : l('wrong')}
              {selectedOption !== q.correctIndex && (
                <> {l('correctAnswer')} <strong>{q.options[language][q.correctIndex]}</strong></>
              )}
            </span>
          </div>
          <p className="quiz-explanation-text">{q.explanation[language]}</p>
          <button className="quiz-next-btn" onClick={handleNext}>
            {currentQuestion < total - 1 ? l('next') : l('seeResults')}
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export { Quiz };
