import React from 'react';
import Card from './card';
import './styles/estilos.css';

export default function Home() {
    const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];

    return (
        <div className="container">
            <nav className="sidebar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Destaque.jsx">Destaques</a></li>
                    <li><a href="/registro">Adicionar Vídeo</a></li>
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
