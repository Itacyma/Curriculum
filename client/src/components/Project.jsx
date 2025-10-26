import '../style/Project.css';

function ProjectCV({ mockData, techSections, language }) {
  const labels = {
    viewProject: {
      it: "Vedi il progetto completo",
      en: "View full project"
    }
  };

  return (
    <div className="project-card vertical">
      <div className="project-content">
        <h3 className="project-title">{mockData.title}</h3>
        <span className="project-date-separator"></span>
        <p className="project-description project-description-narrow">{mockData.description}</p>
        <div className="project-tools">
          {mockData.tools.map((tool, i) => (
            <span className="project-tool" key={i}>{tool}</span>
          ))}
        </div>

        <div className="project-sections">
          {techSections.map((section, i) => (
            <div className="project-tech-section" key={i}>
              <h4 className="project-tech-title">{section.name}</h4>
              <ul className="project-tech-list">
                {section.items.map((item, j) => (
                  <li key={j} className="project-tech-list-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {mockData.link && (
          <a
            className="project-link project-link-narrow"
            href={mockData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === 'it' ? labels.viewProject.it : labels.viewProject.en}
          </a>
        )}
      </div>
    </div>
  );
}

export { ProjectCV };
