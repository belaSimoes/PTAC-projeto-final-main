import React from 'react';
import Card from './card';

function Destaque() {
    const pegarVideos = JSON.parse(localStorage.getItem('Lista')) || [];

    return (
        <div className="container">
            <nav className="sidebar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/destaque">Em Destaque</a></li>
                    <li><a href="/registro">Novo Vídeo</a></li>
                </ul>
            </nav>
            <div className="content">
                <div className="values-area">
                    {pegarVideos.slice(-4).map((item, index) => (
                        <div key={index}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Destaque;
