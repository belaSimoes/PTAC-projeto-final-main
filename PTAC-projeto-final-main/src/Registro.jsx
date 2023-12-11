import React, { useEffect, useState } from 'react';

export default function RegistroComponent() {
    const listaGuardada = JSON.parse(localStorage.getItem("Lista")) || [];
    const [lista, setLista] = useState(listaGuardada);
    const [id, setId] = useState(listaGuardada[listaGuardada.length - 1]?.id + 1 || 1);
    const [Titulo, setTitulo] = useState("");
    const [Canal, setCanal] = useState("");
    const [Descricao, setDescricao] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);

    function salvarInformacoes(e) {
        e.preventDefault();
        setLista([
            ...lista,
            { id: id, Titulo: Titulo, Canal: Canal, Descricao: Descricao, url: url },
        ]);
        setId(id + 1);
        setTitulo("");
        setCanal("");
        setDescricao("");
        setUrl("");
    }

    return (
        <div>
            <div className="card">
                <form onSubmit={salvarInformacoes}>
                    <div className="input-container">
                        <p>
                            <label htmlFor="titulo">Título:</label>
                            <input
                                id="titulo"
                                onChange={(e) => setTitulo(e.target.value)}
                                type="text"
                                value={Titulo}
                            />
                        </p>
                        <p>
                            <label htmlFor="canal">Canal:</label>
                            <input
                                id="canal"
                                onChange={(e) => setCanal(e.target.value)}
                                type="text"
                                value={Canal}
                            />
                        </p>
                        <p>
                            <label htmlFor="descricao">Descrição:</label>
                            <input
                                id="descricao"
                                onChange={(e) => setDescricao(e.target.value)}
                                type="text"
                                value={Descricao}
                            />
                        </p>
                        <p>
                            <label htmlFor="url">URL:</label>
                            <input
                                id="url"
                                onChange={(e) => setUrl(e.target.value)}
                                type="text"
                                value={url}
                            />
                        </p>
                    </div>
                    <button>Salvar</button>
                </form>
            </div>
        </div>
    );
}
