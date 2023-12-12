import React from 'react';
import Card from './Card';
import './styles.css'; // Seu arquivo CSS com as estilizações necessárias

export default function Destaque() {
    const data = JSON.parse(localStorage.getItem('Lista')) || [];

    return (
        <div className="container">
            <nav className="sidebar">
                <ul>
                    <li><a href="/">Página Principal</a></li>
                    <li><a href="/destaque">Em Destaque</a></li>
                    <li><a href="/registro">Novo Registro</a></li>
                </ul>
            </nav>
            <div className="values-area">
                {data.slice(-4).map((item, index) => (
                    <div className="card" key={item.id}>
                        <Card item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
