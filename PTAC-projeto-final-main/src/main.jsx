
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detalhes from './detalhes/Detalhes'; 
import Destaque from './destaque/Destaque'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Detalhes />} /> {/* Usando o componente Detalhes */}
        <Route path="/destaque" element={<Destaque />} /> {/* Usando o componente Destaque */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
