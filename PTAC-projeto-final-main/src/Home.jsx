import React from 'react';
import Card from './Card';
import './styles/estilos.css';

export default function Home() {
    const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];

    return (
        <div className="container">
            <nav className="sidebar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Destaque">Em Destaque</a></li>
                    <li><a href="/registro">Novo Vídeo</a></li>
                </ul>
            </nav>
            <div className="values-area">
                {pegarvideos.map((item, index) => (
                    <div key={item.id}>
                        <Card key={index} item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
