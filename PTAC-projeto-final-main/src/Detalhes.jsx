import React from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import './styles/estilos.css';

export default function DetalhesPagina() {
    const { id } = useParams();
    const listaSalva = JSON.parse(localStorage.getItem('Lista')) || [];
    const videoSelecionado = listaSalva.find((objeto) => objeto.id == id) || null;

    return (
        <div className="container">
            <nav className="sidebar">
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    <li><a href="/destaque">Destaques</a></li>
                    <li><a href="/registro">Adicionar Vídeo</a></li>
                </ul>
            </nav>
            <Card item={videoSelecionado} />
        </div>
    );
}
