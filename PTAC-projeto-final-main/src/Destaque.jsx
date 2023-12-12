import React from 'react';
import Card from './Card';

export default function Destaque() {
    const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];

    // Estilos diretamente no componente
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    };

    const sidebarStyle = {
        width: '200px',
        
    };

    const valuesAreaStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        
    };

    return (
        <div style={containerStyle}>
            <div style={sidebarStyle}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/destaque">Em Destaque</a></li>
                    <li><a href="/registro">Novo Vídeo</a></li>
                </ul>
            </div>

            <div style={valuesAreaStyle}>
                {pegarvideos.slice(-4).map((item, index) => (
                    <div className="card" key={item.id}>
                        <Card item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
