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

function ProjectCV({ mockData, techSections, language }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showImageCarousel, setShowImageCarousel] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projectImages = Array.isArray(mockData.images)
    ? mockData.images.filter(Boolean)
    : [];
  const hasImages = projectImages.length > 0;



  /* Build slides array: [overview, ...techSections] */
  const totalSlides = 1 + techSections.length;

  const goTo = (idx) => setCurrentSlide(Math.max(0, Math.min(totalSlides - 1, idx)));
  const goPrev = () => goTo(currentSlide - 1);
  const goNext = () => goTo(currentSlide + 1);

  const goNextImage = () => {
    if (!hasImages) return;
    setCurrentImage((prev) => (prev + 1) % projectImages.length);
  };

  const toggleImageCarousel = () => {
    setShowImageCarousel((prev) => !prev);
    if (!showImageCarousel) setCurrentImage(0);
  };

  return (
    <div className="project-card vertical">
      <div className="project-content">

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

          <div className="project-carousel-right-actions">
            {hasImages && (
              <button
                className="project-carousel-gallery"
                onClick={toggleImageCarousel}
                aria-label="Project images"
                aria-pressed={showImageCarousel}
              >
                <i className="bi bi-images"></i>
              </button>
            )}

            {mockData.link && (
              <a
                className="project-carousel-github"
                href={mockData.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            )}
          </div>

          
        </div>

        {showImageCarousel && hasImages && (
          <div className="project-image-gallery">
            <div className="project-image-stage">
              <img
                src={projectImages[currentImage]}
                alt={`${mockData.title} screenshot ${currentImage + 1}`}
                className="project-image-item"
                loading="lazy"
              />

              {projectImages.length > 1 && (
                <button
                  className="project-image-next"
                  onClick={goNextImage}
                  aria-label="Next image"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { ProjectCV };
