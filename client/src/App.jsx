import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import { HomePageCV } from './pages/Home.jsx';
import { PageNotFoundCV } from './pages/NotFound.jsx';


function App() {

  
  const [loading, setLoading] = useState(false);
  const [onError, setError] = useState(null);
  const [language, setLanguage] = useState('en');

  const navigate = useNavigate();

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
