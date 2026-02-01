import '../style/PresentationHeader.css';

function PresentationCV(props) {
    const { setError, setLoading } = props;

    const scrollToPercorsoFormativo = () => {
        const element = document.getElementById('percorso-formativo');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const downloadCV = () => {
        // Creo un link temporaneo per il download
        const link = document.createElement('a');
        link.href = '/cv-claudio-martini.pdf'; // Il file deve essere nella cartella public
        link.download = 'CV-Claudio-Martini.pdf';
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
                        <h2 className="job-title">Studente in Software Engineering</h2>
                        <div className="contact-info">
                            <div className="contact-item" onClick={scrollToPercorsoFormativo} style={{cursor: 'pointer'}}>
                                <i class="bi bi-backpack"></i>
                                <span>Il mio percorso</span>
                            </div>

                            <div className="contact-item">
                                <i class="bi bi-file-earmark-code"></i>
                                <span>I miei progetti</span>
                            </div>
                            
                            <div className="contact-item contact-highlight">
                                <i class="bi bi-chat-dots"></i>
                                <span>Contattami</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="presentation-section">
                    <div className="description">
                        <h3>Chi sono</h3>
                        <p>
                            Ciao, sono uno studente di 22 anni nato e cresciuto a Torino, dove ho conseguito la laurea triennale
                            in Ingegneria Informatica.
                        </p>
                        <p>
                            Attualmente frequento il secondo (e ultimo) anno della magistrale di Software Engineering, presso il 
                            Politecnico di Torino.
                        </p>
                    </div>
                    <div className="cta-section">
                        <button className="download-cv-btn" onClick={downloadCV}>
                            <i class="bi bi-download"></i>
                            <span>Scarica il CV</span>
                        </button>
                    </div>
                </div>
            </header>
    );
}

export { PresentationCV };
