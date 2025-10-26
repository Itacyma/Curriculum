import crypto from "crypto";
import sqlite from "sqlite3";
import dayjs from "dayjs";
import * as utils from './utils.mjs';
import { Exam } from "./models.mjs"

const db = new sqlite.Database("../db.sqlite", (err) => {
    if (err) throw err;
});

const getAllExams = () => {
  return new Promise((resolve, reject) => {
    // Prima query: ottieni tutti gli esami
    const examQuery = 'SELECT id, name, date, grade, description FROM Exams;';
    
    db.all(examQuery, (err, examRows) => {
      if (err) return reject(err);
      
      if (examRows.length === 0) {
        return resolve([]);
      }
      
      // Seconda query: ottieni tutti i tag/features per tutti gli esami
      const featuresQuery = 'SELECT id_exam, name FROM Features;';
      
      db.all(featuresQuery, (err, featureRows) => {
        if (err) return reject(err);
        
        // Raggruppa i tag per exam_id
        const tagsByExamId = {};
        featureRows.forEach(feature => {
          if (!tagsByExamId[feature.id_exam]) {
            tagsByExamId[feature.id_exam] = [];
          }
          tagsByExamId[feature.id_exam].push(feature.name);
        });
        
        // Crea gli oggetti Exam con i relativi tag
        const exams = examRows.map(row => {
          const examTags = tagsByExamId[row.id] || [];
          return Exam.create(
            row.id,
            row.name,
            row.date,
            row.grade,
            row.description,
            examTags
          );
        });
        console.log(exams);
        resolve(exams);
      });
    });
  });
};




const DAO = { 
  getAllExams,
}; 
export default DAO