import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

export default function Card({ item }) {
    const videomostra = item.url.slice(17)
    return(
        <Link to={`/detalhe/${item.id}`} >
            <div className="video-card">
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${videomostra}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>

                <h6>{item.Titulo}</h6>
                <p>{item.Canal}</p>
            </div>
        </Link>
    )
}