
class Exam {
    constructor(id, name, date, grade, description, tags = []) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.description = description;
        this.tags = tags; // Popolato dal mapping della seconda tabella
    }

    /**
     * Crea un nuovo esame
     * @param {number} id - ID univoco dell'esame
     * @param {string} name - Nome dell'esame
     * @param {string} date - Data di conseguimento dell'esame
     * @param {number} grade - Voto conseguito (18-30, 31 per lode)
     * @param {string} description - Breve descrizione dell'esame
     * @param {Array<string>} tags - Array di linguaggi/tecnologie (da mapping tabella)
     * @returns {Exam} Nuovo oggetto Exam
     */
    static create(id, name, date, grade, description, tags = []) {
        return new Exam(id, name, date, grade, description, tags);
    }

    /**
     * Verifica se il voto è una lode (grade = 31)
     * @returns {boolean} True se il voto è 31 (lode)
     */
    isLode() {
        return this.grade === 31;
    }

    /**
     * Restituisce il voto formattato per la visualizzazione
     * @returns {string} Voto formattato (31 diventa "30L")
     */
    getFormattedGrade() {
        if (this.isLode()) {
            return "30L";
        }
        return this.grade.toString();
    }

    /**
     * Estrae l'anno dalla data
     * @returns {number} Anno di conseguimento
     */
    getYear() {
        return new Date(this.date).getFullYear();
    }

    /**
     * Verifica se l'esame è recente (negli ultimi 2 anni)
     * @returns {boolean} True se l'esame è recente
     */
    isRecent() {
        const currentYear = new Date().getFullYear();
        return (currentYear - this.getYear()) <= 2;
    }

    /**
     * Converte l'oggetto in formato JSON per l'API
     * @returns {Object} Rappresentazione JSON dell'esame
     */
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            date: this.date,
            grade: this.grade,
            description: this.description,
            tags: this.tags
        };
    }

    /**
     * Crea un oggetto Exam da dati JSON/API
     * @param {Object} data - Dati dell'esame dal server
     * @returns {Exam} Nuovo oggetto Exam
     */
    static fromJSON(data) {
        return new Exam(
            data.id,
            data.name,
            data.date,
            data.grade,
            data.description,
            data.tags || []
        );
    }
}

export { Exam }; 