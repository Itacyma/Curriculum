import '../style/Contatti.css';

const TESTI = {
  it: {
    ruolo: 'Ingegnere Informatico',
    ateneo: 'Politecnico di Torino · Laurea magistrale',
    sezioni: 'Sezioni',
    contatti: 'Contatti',
    diritti: 'Tutti i diritti riservati',
    voci: [
      { href: '#percorso-formativo', label: 'Percorso formativo' },
      { href: '#competenze-tecniche', label: 'Competenze tecniche' },
      { href: '#esami', label: 'Esami di indirizzo' },
      { href: '#progetti-web', label: 'Progetti' },
    ],
  },
  en: {
    ruolo: 'Computer Engineer',
    ateneo: 'Politecnico di Torino · Master\u2019s degree',
    sezioni: 'Sections',
    contatti: 'Contacts',
    diritti: 'All rights reserved',
    voci: [
      { href: '#percorso-formativo', label: 'Educational path' },
      { href: '#competenze-tecniche', label: 'Technical skills' },
      { href: '#esami', label: 'Major exams' },
      { href: '#progetti-web', label: 'Projects' },
    ],
  },
};

const CONTATTI = [
  {
    key: 'email',
    label: 'Email',
    valore: 'marclaudio03@gmail.com',
    href: 'mailto:marclaudio03@gmail.com',
    icona: 'bi-envelope-fill',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    valore: 'Claudio Martini',
    href: 'https://www.linkedin.com/in/claudio-martini-7593863a9/',
    icona: 'bi-linkedin',
    esterno: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    valore: 'Itacyma',
    href: 'https://github.com/Itacyma',
    icona: 'bi-github',
    esterno: true,
  },
];

function Contatti({ language }) {
  const t = TESTI[language] || TESTI.it;
  const anno = new Date().getFullYear();

  return (
    <footer id="contatti" className="site-footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <p className="footer-name">Claudio Martini</p>
          <p className="footer-role">{t.ruolo}</p>
          <p className="footer-meta">{t.ateneo}</p>
        </div>

        <nav className="footer-nav" aria-label={t.sezioni}>
          <p className="footer-heading">{t.sezioni}</p>
          <ul className="footer-nav-list">
            {t.voci.map((voce) => (
              <li key={voce.href}>
                <a className="footer-nav-link" href={voce.href}>
                  {voce.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contacts">
          <p className="footer-heading">{t.contatti}</p>
          <ul className="footer-contact-list">
            {CONTATTI.map((c) => (
              <li key={c.key}>
                <a
                  className="footer-contact"
                  href={c.href}
                  {...(c.esterno ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="footer-contact-icon" aria-hidden="true">
                    <i className={`bi ${c.icona}`}></i>
                  </span>
                  <span className="footer-contact-text">
                    <span className="footer-contact-label">{c.label}</span>
                    <span className="footer-contact-value">{c.valore}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {anno} Claudio Martini</span>
        <span className="footer-bottom-sep" aria-hidden="true">·</span>
        <span>{t.diritti}</span>
      </div>
    </footer>
  );
}

export { Contatti };
