import cors from 'cors';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import DAO from "./dao.mjs"
import { check, validationResult } from 'express-validator';

const app = new express();
const port = 3001;

app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Route per ottenere tutti gli esami
app.get('/api/exams', async (req, res) => {
  try {
    const exams = await DAO.getAllExams();
    res.json(exams);
  } catch (error) {
    console.error('Error fetching exams:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: 'Failed to fetch exams from database' 
    });
  }
});




