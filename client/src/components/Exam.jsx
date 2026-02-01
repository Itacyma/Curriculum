import { useState } from 'react';
import '../style/Exam.css';

function ExamCV({ exam, language }) {
    const { name, date, grade, description, tags } = exam;
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Estrae solo l'anno dalla data
    const yearFromDate = new Date(date).getFullYear();
    
    // Testi dei pulsanti in base alla lingua
    const expandText = language === 'en' ? 'Description' : 'Descrizione';
    const hideText = language === 'en' ? 'Hide description' : 'Nascondi descrizione';

    return (
        <div className={isExpanded ? 'exam-card is-expanded' : 'exam-card'}>
            <div className="exam-header">
                <div className="exam-title-section">
                    <h3 className="exam-title">{name}</h3>
                </div>
                <div className="exam-credits-display">
                    <span className="credits-value">{yearFromDate}</span>
                </div>
            </div>

            <div className="exam-description">
                <div className="exam-description-text">
                    {isExpanded ? <p>{description}</p> : null}
                </div>

                {isExpanded ? (
                    <button 
                        className="expand-btn expanded"
                        onClick={() => setIsExpanded(false)}
                    >
                        {hideText}
                        <i className="bi bi-chevron-up"></i>
                    </button>
                ) : (
                    <button 
                        className="expand-btn"
                        onClick={() => setIsExpanded(true)}
                    >
                        {expandText}
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
