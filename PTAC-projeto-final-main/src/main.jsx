import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Detalhe from './detalhe/Detalhe'; // Importe a página Detalhe
import Destaques from './destaques/Destaques'; // Importe a página Destaques

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhe" element={<Detalhe />} /> {/* Rota para a página Detalhe */}
        <Route path="/destaques" element={<Destaques />} /> {/* Rota para a página Destaques */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
