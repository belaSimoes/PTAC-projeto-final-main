import React from 'react';
import { Link as RedirectLink } from 'react-router-dom';
import './styles/estilos.css';

export default function Card({ item }) {
    // Verifica se item.url existe e tem o formato esperado antes de usar o slice(17)
    const vidRef = item.url && typeof item.url === 'string' && item.url.slice(17);

    return (
        <RedirectLink to={`/detalhes/${item.id}`}>
            <div className="video-card-hidden">
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
                <h6>{item.Titulo}</h6>
                <p>{item.Canal}</p>
            </div>
        </RedirectLink>
    );
}
