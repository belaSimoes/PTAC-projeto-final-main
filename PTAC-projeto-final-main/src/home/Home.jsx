import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div className="page">
      <div className="grid-container">
        <div className="grid-item">
          <Link to="/detalhe">
            <button className="nav-button">Ir para Detalhes</button>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/destaques">
            <button className="nav-button">Ir para Destaques</button>
          </Link>
        </div>
      </div>
      <div className="navbar">
        <div className="logo"></div>
        <button className="login-button">Entrar</button>
      </div>
    </div>
  );
}