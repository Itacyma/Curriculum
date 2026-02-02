import { useEffect, useState, useRef } from "react";
import { Alert, Spinner } from "react-bootstrap";

import { ExamCV } from "../components/Exam.jsx";
import {
  mainExamsEn,
  mainExamsIt,
  mockExamsEn,
  mockExamsIt,
} from "../data/exams.mjs";

import '../style/ExamSection.css';

const normalizeExamName = (value) => (value ?? "").trim().toLowerCase();


function ExamSection(props) {
  const { language } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllExams, setShowAllExams] = useState(false);
  const [exams, setExams] = useState([]);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const showMoreButtonRef = useRef(null);

  useEffect(() => {
    try {
      setExams(language === "it" ? mockExamsIt : mockExamsEn);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [language]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");
    const update = () => setIsCompactViewport(mediaQueryList.matches);
    update();

    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", update);
      return () => mediaQueryList.removeEventListener("change", update);
    }

    mediaQueryList.addListener(update);
    return () => mediaQueryList.removeListener(update);
  }, []);

  const mainExams = language === "it" ? mainExamsIt : mainExamsEn;
  const mainExamNameSet = new Set(mainExams.map(normalizeExamName));
  const compactMainExamsLimit = 4;

  const mainExamsFiltered = exams.filter((exam) =>
    mainExamNameSet.has(normalizeExamName(exam.name))
  );
  const otherExams = exams.filter(
    (exam) => !mainExamNameSet.has(normalizeExamName(exam.name))
  );
  const otherExamsCount = otherExams.length;

  const displayedMainExams = isCompactViewport
    ? mainExamsFiltered.slice(0, compactMainExamsLimit)
    : mainExamsFiltered;

  const getDisplayedExams = () => {
    if (showAllExams) {
      return [...mainExamsFiltered, ...otherExams];
    }
    return displayedMainExams;
  };

  const totalExamsCount = mainExamsFiltered.length + otherExams.length;
  // Calcola quanti esami sarebbero nascosti nella vista "compattata".
  // Se lo calcoliamo in base alla vista corrente, quando si espande diventerebbe 0
  // e il pulsante sparirebbe, impedendo di ricompattare.
  const hiddenExamsCount = Math.max(0, totalExamsCount - displayedMainExams.length);
  const canToggleExams = totalExamsCount > displayedMainExams.length;

  const handleToggleExams = () => {
    setShowAllExams(!showAllExams);
    
    // Quando si nascondono gli esami, scrolla al pulsante
    if (showAllExams && showMoreButtonRef.current) {
      setTimeout(() => {
        showMoreButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 50);
    }
  };

  return (
    <div className="exams-section">

      {error && (
        <Alert variant="warning" className="mx-auto" style={{ maxWidth: '800px' }}>
          <strong>{language === "it" ? "Attenzione:" : "Warning:"}</strong> {language === "it" ? "Impossibile caricare i dati dal server." : "Unable to load data from server."}
          <br />
          <small>{language === "it" ? `Errore: ${error}` : `Error: ${error}`}</small>
        </Alert>
      )}

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="success" size="lg" />
          <p className="mt-3" style={{ color: '#4CB963' }}>
            {language === "it" ? "Caricamento esami..." : "Loading exams..."}
          </p>
        </div>
      ) : (
        <>
          <div className="exams-grid">
            {getDisplayedExams().map((exam, index) => (
              <ExamCV key={index} exam={exam} language={language}/>
            ))}
          </div>

          {canToggleExams && (
            <div className="show-more-container" ref={showMoreButtonRef}>
              <button className="show-more-btn" onClick={handleToggleExams}>
                {showAllExams ? (
                  <>
                    <i className="bi bi-chevron-up"></i>
                    <span>
                      {language === "it"
                        ? (isCompactViewport
                            ? `Mostra solo ${compactMainExamsLimit} esami`
                            : "Mostra solo esami principali")
                        : (isCompactViewport
                            ? `Show only ${compactMainExamsLimit} exams`
                            : "Show only main exams")}
                    </span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-chevron-down"></i>
                    <span>
                      {language === "it"
                        ? `Mostra anche altri esami (${hiddenExamsCount})`
                        : `Show other exams (${hiddenExamsCount})`}
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export { ExamSection };
