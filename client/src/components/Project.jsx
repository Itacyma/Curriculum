import { useState } from 'react';
import '../style/Project.css';
import { NoTranslate } from './NoTranslate.jsx';

/* ── keyword highlighter ─────────────────────────────────
   Wraps known tech words in <span className="tech-keyword"> */
const KEYWORDS = [
  // Languages
  'Rust','JavaScript','TypeScript','Python','C','HTML5','CSS3','SQL','JSON',
  'JS','TS', 'Kotlin','Java','Bash','Shell','Markdown',
  // Frameworks / libs
  'React','React-Bootstrap','React Router','Express','Express.js','Node.js',
  'Flask','Vite','Bootstrap','Passport','Jest','Jinja2',
  'tokio','serde','tracing','sysinfo','rusqlite', 'GitHub', 'Firebase', 'Firestore', 
  'Jetpack Compose','Spring Boot','Spring','Spring Cloud','Resilience4j',
  // DB / infra
  'SQLite','SQLite3','MySQL','Docker','Docker Compose',
  // APIs / concepts
  'WebSocket','Web Crypto API','WebSocket API','REST','RESTful',
  'Swagger','OpenAPI','Swagger/OpenAPI','CORS',
  'TypeORM','openapi-validator','Swagger UI',
  // HW
  'Raspberry Pi','GPIO','Raspberry Pi GPIO',
  // Misc
  'SPA','Single Page Application','E2E','cargo test',
  'ORM',
  'CI/CD','GitOps','ArgoCD','Prometheus','Grafana','Kafka','Debezium',
  'Coroutines','Kubernetes','Microservices','Microservices architecture',
  'Load balancing','Scalability','Fault tolerance',
];

/* Sort longest-first so "React Router" matches before "React" */
const SORTED_KW = [...KEYWORDS].sort((a, b) => b.length - a.length);
const KW_RE = new RegExp(`\\b(${SORTED_KW.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'g');

function highlightKeywords(text) {
  const parts = text.split(KW_RE);
  return parts.map((part, i) =>
    KW_RE.test(part)
      ? <span className="tech-keyword" key={i}><NoTranslate>{part}</NoTranslate></span>
      : part
  );
}

/* Accetta sia link: 'url' sia links: ['url', ...] oppure links: [{ href, label }] */
function normalizzaLink(mockData) {
  const grezzi = Array.isArray(mockData.links)
    ? mockData.links
    : [mockData.links, mockData.link];

  return grezzi
    .flat()
    .filter(Boolean)
    .map((v) => (typeof v === 'string' ? { href: v } : v))
    .filter((v) => v.href)
    .map((v) => ({ href: v.href, label: v.label || etichettaRepo(v.href, mockData.title) }));
}

/* Da .../eurotransit-configuration-g04 ricava "Configuration" */
function etichettaRepo(url, titolo) {
  try {
    const segmento = new URL(url).pathname.split('/').filter(Boolean).pop() || '';
    const nome = segmento
      .replace(/-g\d+$/i, '')
      .replace(new RegExp(`^${(titolo || '').toLowerCase()}[-_]?`, 'i'), '')
      .replace(/[-_]+/g, ' ')
      .trim();
    return nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : 'GitHub';
  } catch {
    return 'GitHub';
  }
}

function ProjectCV({ mockData, techSections }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  /* Set: alcuni progetti ripetono lo stesso file più volte */
  const projectImages = Array.isArray(mockData.images)
    ? [...new Set(mockData.images.filter(Boolean))]
    : [];
  const hasImages = projectImages.length > 0;

  const projectLinks = normalizzaLink(mockData);
  const linkMultipli = projectLinks.length > 1;



  /* Build slides array: [overview, ...techSections] */
  const totalSlides = 1 + techSections.length;

  const goTo = (idx) => setCurrentSlide(Math.max(0, Math.min(totalSlides - 1, idx)));
  const goPrev = () => goTo(currentSlide - 1);
  const goNext = () => goTo(currentSlide + 1);

  const goNextImage = () => {
    if (!hasImages) return;
    setCurrentImage((prev) => (prev + 1) % projectImages.length);
  };

  const goPrevImage = () => {
    if (!hasImages) return;
    setCurrentImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className={`project-card vertical${hasImages ? ' has-media' : ''}`}>
      <div className="project-content">
       <div className="project-body">
        <div className="project-main">

        {/* ── Carousel container ── */}
        <div className="project-carousel">
          <div
            className="project-carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* SLIDE 0 — Overview */}
            <div className="project-carousel-slide">
              <div className="project-slide-overview">
                <div className="project-slide-main">
                  <h3 className="project-title"><NoTranslate>{mockData.title}</NoTranslate></h3>
                  <span className="project-date-separator"></span>
                  <p className="project-description">{mockData.description}</p>
                  <div className="project-tools">
                    {mockData.tools.map((tool, i) => (
                      <span className="project-tool" key={i}><NoTranslate>{tool}</NoTranslate></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDES 1..N — Tech sections */}
            {techSections.map((section, i) => (
              <div className="project-carousel-slide" key={i}>
                <div className="project-carousel-section">
                  <h4 className="project-tech-title">
                    <i className={
                      section.name === 'Client' ? 'bi bi-display' :
                      section.name === 'Server' ? 'bi bi-hdd-rack' :
                      section.name === 'Database' ? 'bi bi-database' :
                      'bi bi-layers'
                    }></i>
                    <NoTranslate>{section.name}</NoTranslate>
                  </h4>
                  <ul className="project-tech-list">
                    {section.items.map((item, j) => (
                      <li key={j} className="project-tech-list-item">
                        {highlightKeywords(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Carousel controls ── */}
        <div className="project-carousel-controls">
          <div className="project-carousel-actions">
            {projectLinks.map((l) => (
              <a
                key={l.href}
                className={`project-carousel-github${linkMultipli ? ' with-label' : ''}`}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                title={l.label}
                aria-label={linkMultipli ? `GitHub — ${l.label}` : 'GitHub'}
              >
                <i className="bi bi-github"></i>
                {linkMultipli && <span className="project-carousel-github-label">{l.label}</span>}
              </a>
            ))}
          </div>

          <div className="project-carousel-nav">
            <button
              className="project-carousel-arrow"
              onClick={goPrev}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className="project-carousel-dots">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  className={`project-carousel-dot ${i === currentSlide ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="project-carousel-arrow"
              onClick={goNext}
              disabled={currentSlide === totalSlides - 1}
              aria-label="Next slide"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          <div className="project-carousel-controls-spacer" aria-hidden="true"></div>
        </div>

        </div>

        {hasImages && (
          <aside className="project-media">
            <div className="project-media-stage">
              <img
                src={projectImages[currentImage]}
                alt={`${mockData.title} screenshot ${currentImage + 1}`}
                className="project-media-img"
                loading="lazy"
              />
            </div>

            {projectImages.length > 1 && (
              <div className="project-media-nav">
                <button
                  className="project-media-arrow"
                  onClick={goPrevImage}
                  aria-label="Immagine precedente"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <div className="project-media-dots">
                  {projectImages.map((src, i) => (
                    <button
                      key={src}
                      className={`project-media-dot ${i === currentImage ? 'active' : ''}`}
                      onClick={() => setCurrentImage(i)}
                      aria-label={`Immagine ${i + 1}`}
                      aria-current={i === currentImage}
                    />
                  ))}
                </div>

                <button
                  className="project-media-arrow"
                  onClick={goNextImage}
                  aria-label="Immagine successiva"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            )}
          </aside>
        )}
       </div>
      </div>
    </div>
  );
}

export { ProjectCV };
