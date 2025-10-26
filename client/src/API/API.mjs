import { Exam } from '../models/models.mjs';

const SERVER_URL = "http://localhost:3001";


// EXAMS
export const getAllExams = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/exams`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Converte i dati del server in oggetti Exam del client
        return data.map(examData => Exam.fromJSON(examData));
        
    } catch (error) {
        console.error("Error fetching exams:", error);
        throw new Error(`Failed to fetch exams: ${error.message}`);
    }
};



const API = { getAllExams }; 
export default API
