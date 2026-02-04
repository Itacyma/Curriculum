import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import { HomePageCV } from './pages/Home.jsx';
import { PageNotFoundCV } from './pages/NotFound.jsx';
import { applyDocumentLanguage, getInitialLanguage, persistLanguage } from './utils/language.mjs';


function App() {

  
  const [loading, setLoading] = useState(false);
  const [onError, setError] = useState(null);
  const [language, setLanguage] = useState(() => getInitialLanguage());

  const navigate = useNavigate();

  useEffect(() => {
    applyDocumentLanguage(language);
    persistLanguage(language);
  }, [language]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePageCV setLanguage={setLanguage} language={language}/>} />
        <Route path="*" element={<PageNotFoundCV />} />
      </Routes>
    </div>
  )
}

export default App
