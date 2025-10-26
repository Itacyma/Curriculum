import React from 'react';
import '../style/Contatti.css';

function Contatti() {
  return (
    <section id="contatti" className="contatti-full-center">
      <div className="contatti-icon-row">
        <div className="contatto-icon-col">
          <div className="contatto-icon"><i className="bi bi-envelope-fill"></i></div>
          <div className="contatto-label">Email</div>
          <a className="contatto-link" href="mailto:marclaudio03@gmail.com">marclaudio03@gmail.com</a>
        </div>
        <div className="contatto-icon-col">
          <div className="contatto-icon"><i className="bi bi-telephone-fill"></i></div>
          <div className="contatto-label">Telefono</div>
          <a className="contatto-link" href="tel:+393669589060">+39&#8239;366&#8239;958&#8239;9060</a>        
        </div>
        <div className="contatto-icon-col">
          <div className="contatto-icon"><i className="bi bi-github"></i></div>
          <div className="contatto-label">GitHub</div>
          <a className="contatto-link" href="https://github.com/Itacyma" target="_blank" rel="noopener noreferrer">github.com/Itacyma</a>
        </div>
      </div>
    </section>
  );
}

export { Contatti };