import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registro from './registro'
import Destaque from './destaque'
import Detalhes from './detalhes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
        <Route path="/detalhes/:id" element={<Detalhes />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
