import React from 'react';

export default function Card({ item }) {
    // Verifica se item está definido e se item.url está definido antes de executar o slice
    const videomostra = item && item.url ? item.url.slice(17) : '';

    return (
        <div className="video-card">
            {videomostra && (
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${videomostra}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
            <h6>{item && item.Titulo}</h6>
            <p>{item && item.Canal}</p>
        </div>
    );
}
