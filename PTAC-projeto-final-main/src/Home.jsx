import React from 'react';
import Card from './card';
import './home.css'; // Importe o arquivo CSS corretamente

export default function Home() {
    const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];
    console.log(pegarvideos);

    return (
        <div>
            <div className="container">
                <nav className="sidebar">
                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="/destaque">Em Destaque</a></li>
                        <li><a href="/registro">Novo Vídeo</a></li>
                    </ul>
                </nav>

                <div>
                    <div className="values-area">
                        {pegarvideos.map((item, index) => (
                            <div key={item.id}>
                                <Card key={index} item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
