import '../style/PresentationHeader.css';
import { LanguageSwitcher } from './LanguageSwitcher';

function PresentationCV(props) {
    const { language, setLanguage } = props;

    const labels = {
        it: {
            job: 'Studente in Software Engineering',
            chiSono: 'Chi sono',
            percorso: 'Il mio percorso',
            progetti: 'I miei progetti',
            contattami: 'Contattami',
            downloadCV: 'Scarica il CV',
            descrizione1: 'Ciao, sono uno studente di 22 anni nato e cresciuto a Torino, dove ho conseguito la laurea triennale in Ingegneria Informatica.',
            descrizione2: 'Attualmente frequento il secondo (e ultimo) anno della magistrale di Software Engineering, presso il Politecnico di Torino.'
        },
        en: {
            job: 'Software Engineering student',
            chiSono: 'About Me',
            percorso: 'My Education',
            progetti: 'My Projects',
            contattami: 'Contact Me',
            downloadCV: 'Download CV',
            descrizione1: "Hi, I'm a 22-year-old student born and raised in Turin, where I earned my Bachelor's degree in Computer Engineering.",
            descrizione2: "Currently, I am attending the second (and final) year of the Master's in Software Engineering at the Politecnico di Torino."
        }
    };

    const l = labels[language] || labels.it;

    const scrollToPercorsoFormativo = () => {
        const element = document.getElementById('percorso-formativo');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToContatti = () => {
        const element = document.getElementById('contatti');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToProgetti = () => {
        const element = document.getElementById('progetti-web');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = language === 'it' ? '/Claudio-Martini-CV-ita.pdf' : '/Claudio-Martini-CV-eng.pdf';
        link.download = language === 'it' ? 'Claudio-Martini-CV-ita.pdf' : 'Claudio-Martini-CV-eng.pdf';
        link.click();
    };

    return (
        <header className="presentation-header">
            <div className="profile-section">
                <div className="profile-image">
                    <img src="../public/profile-photo.jpg" alt="" />
                </div>
                <div className="profile-info">
                    <h1 className="name">Claudio Martini</h1>
                    <h2 className="job-title">- {l.job} -</h2>
                    <div className="contact-info">
                        <div className="contact-item" onClick={scrollToPercorsoFormativo} style={{cursor: 'pointer'}}>
                            <i className="bi bi-backpack"></i>
                            <span>{l.percorso}</span>
                        </div>

                        <div className="contact-item" onClick={scrollToProgetti} style={{cursor: 'pointer'}}>
                            <i className="bi bi-file-earmark-code"></i>
                            <span>{l.progetti}</span>
                        </div>
                        
                        <div className="contact-item contact-highlight" onClick={scrollToContatti} style={{cursor: 'pointer'}}>
                            <i className="bi bi-chat-dots"></i>
                            <span>{l.contattami}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="presentation-section">
                <div className="description">
                    <h3>{l.chiSono}</h3>
                    <p>{l.descrizione1}</p>
                    <p>{l.descrizione2}</p>
                </div>
                <div className="cta-section">
                    <LanguageSwitcher language={language} setLanguage={setLanguage} />
                    <button className="download-cv-btn" onClick={downloadCV}>
                        <i className="bi bi-download"></i>
                        <span>{l.downloadCV}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export { PresentationCV };
