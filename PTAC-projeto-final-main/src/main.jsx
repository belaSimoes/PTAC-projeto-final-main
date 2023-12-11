import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './Home';
import PaginaCadastro from './Registro';
import PaginaEmDestaque from './Destaque';
import PaginaDetalhes from './Detalhes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/registro" element={<PaginaCadastro />} />
        <Route path="/destaque" element={<PaginaEmDestaque />} />
        <Route path="/detalhes/:id" element={<PaginaDetalhes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
