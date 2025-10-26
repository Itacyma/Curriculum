import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import API from "./API/API.mjs";

import { LayoutCV } from './components/Layout.jsx';
import { HomePageCV } from './pages/Home.jsx';
import { PageNotFoundCV } from './pages/NotFound.jsx';


function App() {

  
  const [loading, setLoading] = useState(false);
  const [onError, setError] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutCV
          setLoading={setLoading} setError={setError}
        />}>
          <Route index element={<HomePageCV/>} />
          <Route path="*" element={<PageNotFoundCV />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
