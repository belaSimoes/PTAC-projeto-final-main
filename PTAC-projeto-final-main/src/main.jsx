import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Registro from './Registro';
import Detalhes from './Detalhes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
