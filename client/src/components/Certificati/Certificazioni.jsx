import { certifications } from '../../data/certifications.mjs';
import { CertCard } from './CertCard.jsx';

function Certificazioni({ language }) {
  const visibili = certifications.filter((c) => !c.hidden);

  if (visibili.length === 0) return null;

  return (
    <div className="certifications-grid">
      {visibili.map((cert) => (
        <CertCard key={cert.key} cert={cert} language={language} />
      ))}
    </div>
  );
}

export { Certificazioni };
