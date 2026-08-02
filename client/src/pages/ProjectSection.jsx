import { Fragment, useRef, useState } from 'react';
import '../style/ProjectSection.css';
import { GiocoDellaSfortuna } from '../components/Projects/GiocoDellaSfortuna';
import { TORent } from '../components/Projects/TORent';
import { AppRuggine } from '../components/Projects/AppRuggine';
import { GeoControl } from '../components/Projects/GeoControl';
import { RaspberryPi } from '../components/Projects/RaspberryPi';
import { Fridge } from '../components/Projects/FRIDGE';
import { EuroTransit } from '../components/Projects/EuroTransit';

function ProjectSection({ language }) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const showMoreButtonRef = useRef(null);

  const projects = [
    { key: 'raspberry', element: <RaspberryPi language={language} /> },
    { key: 'appruggine', element: <AppRuggine language={language} /> },
    { key: 'stuff-happens', element: <GiocoDellaSfortuna language={language} /> },
    { key: 'geocontrol', element: <GeoControl language={language} /> },
    { key: 'torent', element: <TORent language={language} /> },
    { key: 'fridge', element: <Fridge language={language} /> },
    { key: 'eurotransit', element: <EuroTransit language={language} /> },
  ];

  const featuredProjectKeys = new Set(['eurotransit', 'raspberry', 'fridge']);
  const featuredProjects = projects.filter((p) => featuredProjectKeys.has(p.key));
  const displayedProjects = showAllProjects ? projects : featuredProjects;
  const otherProjectsCount = Math.max(0, projects.length - featuredProjects.length);
  const hasOtherProjects = otherProjectsCount > 0;

  const handleToggleProjects = () => {
    setShowAllProjects((prev) => !prev);

    if (showAllProjects && showMoreButtonRef.current) {
      setTimeout(() => {
        showMoreButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 50);
    }
  };

  return (
    <section className="project-section" id="progetti-web">
      {displayedProjects.map((project, index) => (
        <Fragment key={project.key}>
          {project.element}
          <div style={{ height: '0.5rem' }}></div>
        </Fragment>
      ))}

      {hasOtherProjects && (
        <div className="show-more-container" ref={showMoreButtonRef}>
          <button className="show-more-btn" onClick={handleToggleProjects}>
            {showAllProjects ? (
              <>
                <i className="bi bi-chevron-up"></i>
                <span>
                  {language === 'it'
                    ? 'Mostra solo progetti principali'
                    : 'Show only main projects'}
                </span>
              </>
            ) : (
              <>
                <i className="bi bi-chevron-down"></i>
                <span>
                  {language === 'it'
                    ? `Mostra anche altri progetti (${otherProjectsCount})`
                    : `Show other projects (${otherProjectsCount})`}
                </span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

export { ProjectSection };
