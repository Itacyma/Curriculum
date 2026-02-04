import React from 'react';
import '../style/Contatti.css';

function Contatti({ language }) {
  const labels = {
    it: {
      email: 'Email',
      linkedIn: 'LinkedIn',
      github: 'GitHub'
    },
    en: {
      email: 'Email',
      linkedIn: 'LinkedIn',
      github: 'GitHub'
    }
  };

  const l = labels[language] || labels.it;

  return (
    <section id="contatti" className="contatti-full-center">
      <div className="contatti-icon-row">
        <div className="contatto-icon-col">
          <a
            className="contatto-icon contatto-icon-link"
            href="mailto:marclaudio03@gmail.com"
            aria-label={l.email}
          >
            <i className="bi bi-envelope-fill" aria-hidden="true"></i>
          </a>
          <div className="contatto-label">{l.email}</div>
          <a className="contatto-link" href="mailto:marclaudio03@gmail.com">marclaudio03</a>
        </div>
        <div className="contatto-icon-col">
          <a
            className="contatto-icon contatto-icon-link"
            href="https://www.linkedin.com/in/claudio-martini-7593863a9/"
            aria-label={l.linkedIn}
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
          </a>
          <div className="contatto-label">{l.linkedIn}</div>
          <a className="contatto-link" href="https://www.linkedin.com/in/claudio-martini-7593863a9/">Claudio Martini</a>        
        </div>
        <div className="contatto-icon-col">
          <a
            className="contatto-icon contatto-icon-link"
            href="https://github.com/Itacyma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.github}
          >
            <i className="bi bi-github" aria-hidden="true"></i>
          </a>
          <div className="contatto-label">{l.github}</div>
          <a className="contatto-link" href="https://github.com/Itacyma" target="_blank" rel="noopener noreferrer">Itacyma</a>
        </div>
      </div>
    </section>
  );
}

export { Contatti };
