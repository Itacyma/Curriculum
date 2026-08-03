import '../../style/CertificazioneLinguistica.css';

function CertCard({ cert, language }) {
  const lang = language === 'en' ? 'en' : 'it';

  return (
    <div className="cert-card-wrapper">
      <div className="cert-card">
        <i className={`${cert.icon} cert-card-icon`} aria-hidden="true"></i>
        <h3 className="cert-card-title">{cert.title[lang]}</h3>
        <p className="cert-card-description">{cert.description[lang]}</p>
        <div className="cert-card-date">
          <i className={cert.dateIcon} aria-hidden="true"></i>
          <span>{cert.date[lang]}</span>
        </div>
      </div>
    </div>
  );
}

export { CertCard };
