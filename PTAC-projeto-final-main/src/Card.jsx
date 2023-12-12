import React from 'react';
import { Link as RedirectLink } from 'react-router-dom';
import './styles/estilos.css';

export default function Card({ item }) {
    const vidRef = item.url && typeof item.url === 'string' && item.url.slice(17);

    return (
        <RedirectLink to={`/detalhes/${item.id}`}>
            <div className="video-card">
                {vidRef ? (
                    <iframe
                        width="300"
                        height="200"
                        src={`https://www.youtube.com/embed/${vidRef}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p>Video não disponível</p>
                )}
                <div className="video-info">
                    <h6>{item.Titulo}</h6>
                    <p>{item.Canal}</p>
                </div>
            </div>
        </RedirectLink>
    );
}
