import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

import { ExamCV } from "../components/Exam.jsx";
import { Exam } from "../models/models.mjs";
import { getAllExams } from "../API/API.mjs";

import '../style/ExamSection.css';

function ExamSection() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllExams, setShowAllExams] = useState(false);

  // Nomi degli 8 esami principali da mostrare inizialmente
  const mainExams = [
    "Software Engineering I",
    "Applicazioni Web I",
    "Introduzione alle Applicazioni Web",
    "Data Science e Tecnologie per le Basi di Dati",
    "Basi di Dati",
    "Programmazione a Oggetti"
  ];

  // Filtra gli esami in base a se mostrare tutti o solo i principali
  const getDisplayedExams = () => {
    if (showAllExams) {
      // Mostra prima gli esami principali, poi gli altri
      const mainExamsFiltered = exams.filter(exam => mainExams.includes(exam.name));
      const otherExams = exams.filter(exam => !mainExams.includes(exam.name));
      return [...mainExamsFiltered, ...otherExams];
    }
    // Mostra solo gli esami i cui nomi sono nella lista mainExams
    return exams.filter(exam => mainExams.includes(exam.name));
  };

  // Fetch degli esami dal server
  useEffect(() => {
    const fetchExams = async () => {
      try {
        setLoading(true);
        setError(null);
        const examData = await getAllExams();
        setExams(examData);
      } catch (err) {
        console.error("Error fetching exams:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  return (
    <div className="exams-section">
      <h2 className="section-title">Esami di indirizzo</h2>
      
      {/* Error Alert */}
      {error && (
        <Alert variant="warning" className="mx-auto" style={{ maxWidth: '800px' }}>
          <strong>Attenzione:</strong> Impossibile caricare i dati dal server. 
          Visualizzazione dati di esempio. <br />
          <small>Errore: {error}</small>
        </Alert>
      )}
      
      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="success" size="lg" />
          <p className="mt-3" style={{ color: '#4CB963' }}>Caricamento esami...</p>
        </div>
      ) : (
        <>
          <div className="exams-grid">
            {getDisplayedExams().map((exam) => (
              <ExamCV key={exam.id} exam={exam} />
            ))}
          </div>
          
          {/* Pulsante per mostrare/nascondere tutti gli esami */}
          {exams.length > mainExams.length && (
            <div className="show-more-container">
              <button 
                className="show-more-btn" 
                onClick={() => setShowAllExams(!showAllExams)}
              >
                {showAllExams ? (
                  <>
                    <i className="bi bi-chevron-up"></i>
                    <span>Mostra solo esami principali</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-chevron-down"></i>
                    <span>Mostra anche altri esami ({exams.length - mainExams.length})</span>
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