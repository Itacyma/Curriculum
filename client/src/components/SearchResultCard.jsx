import { useState } from 'react';
import '../style/SearchResultCard.css';
import { NoTranslate } from './NoTranslate.jsx';

function SearchResultCard({ item, language }) {
  const [expanded, setExpanded] = useState(false);

  const isExam = item.type === 'exam';
  const name = item.name[language] || item.name.it;
  const description = item.description[language] || item.description.it;

  const typeLabel = isExam
    ? (language === 'it' ? 'Esame' : 'Exam')
    : (language === 'it' ? 'Progetto' : 'Project');

  const typeIcon = isExam ? 'bi bi-journal-bookmark' : 'bi bi-code-slash';

  const expandLabel = expanded
    ? (language === 'it' ? 'Nascondi dettagli' : 'Hide details')
    : (language === 'it' ? 'Mostra dettagli' : 'Show details');

  return (
    <div className={`search-result-card ${expanded ? 'expanded' : ''} ${isExam ? 'result-exam' : 'result-project'}`}>
      <div className="result-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="result-card-type">
          <i className={typeIcon}></i>
          <span className="result-type-label">{typeLabel}</span>
        </div>
        <h3 className="result-card-name"><NoTranslate>{name}</NoTranslate></h3>
        {item.date && <span className="result-card-date">{item.date}</span>}
        <button className="result-card-toggle" aria-label={expandLabel}>
          <i className={`bi ${expanded ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
        </button>
      </div>

      {expanded && (
        <div className="result-card-body">
          <p className="result-card-description">{description}</p>
          <div className="result-card-tags">
            {item.tags && item.tags.map((tag, i) => (
              <span key={i} className="result-tag"><NoTranslate>{tag}</NoTranslate></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { SearchResultCard };
