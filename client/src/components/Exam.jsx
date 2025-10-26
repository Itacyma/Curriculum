import { useState } from 'react';
import '../style/Exam.css';

function ExamCV ({ exam }) {
    const { name, date, grade, description, tags } = exam;
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Estrae solo l'anno dalla data
    const yearFromDate = new Date(date).getFullYear();
    
    // Formatta il voto (31 -> "30L")
    const formattedGrade = exam.getFormattedGrade();

    return (
        <div className="exam-card">
            <div className="exam-header">
                <div className="exam-title-section">
                    <h3 className="exam-title">{name}</h3>
                </div>
                <div className="exam-credits-display">
                    <span className="credits-value">{yearFromDate}</span>
                </div>
            </div>

            <div className="exam-description">
                {isExpanded ? (
                    <>
                        <p>{description}</p>
                        <button 
                            className="expand-btn expanded"
                            onClick={() => setIsExpanded(false)}
                        >
                            Nascondi descrizione
                            <i className="bi bi-chevron-up"></i>
                        </button>
                    </>
                ) : (
                    <button 
                        className="expand-btn"
                        onClick={() => setIsExpanded(true)}
                    >
                        Descrizione
                        <i className="bi bi-chevron-down"></i>
                    </button>
                )}
            </div>

            <div className="exam-tags">
                {tags && tags.map((tag, index) => (
                    <span key={index} className="exam-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export { ExamCV };