import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

import { HomePageCV } from './pages/Home.jsx';
import { InteractiveSearchPage } from './pages/InteractiveSearch.jsx';
import { QuizPage } from './pages/QuizPage.jsx';
import { PageNotFoundCV } from './pages/NotFound.jsx';
import { applyDocumentLanguage, getInitialLanguage, persistLanguage } from './utils/language.mjs';


function App() {
  const [language, setLanguage] = useState(() => getInitialLanguage());

  useEffect(() => {
    applyDocumentLanguage(language);
    persistLanguage(language);
  }, [language]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePageCV setLanguage={setLanguage} language={language}/>} />
        <Route path="/explore" element={<InteractiveSearchPage language={language} setLanguage={setLanguage} />} />
        <Route path="/quiz" element={<QuizPage language={language} setLanguage={setLanguage} />} />
        <Route path="*" element={<PageNotFoundCV />} />
      </Routes>
    </div>
  )
}

export default App
