import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from "./card";
import "./home.css"

export default function detalhes(){
    const { id } = useParams();
    const pergarvideos= JSON.parse(localStorage.getItem('Lista')) || [];
    const pegarumvideo= pergarvideos.find((objeto) => objeto.id == id) || null;
    return(
    <div>

        <body>
        <div class="container">
        <nav class="sidebar">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="/destaque">Em Destaque</a></li>
                <li><a href="/registro">Novo Vídeo</a></li>
            </ul>
        </nav>

        <Card item={pegarumvideo}></Card>

      </div>
        
    
    
     </body>
 
    
    </div>
    )
}