import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function registro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);

  const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
  const [Titulo, setTitulo] = useState("");
  const [Canal, setCanal] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [url, seturl] = useState("");


  useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);
  

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Titulo: Titulo, Canal: Canal, Descricao: Descricao, url: url }]);
    setId(id + 1);
    setTitulo("");
    setCanal("");
    setDescricao("");
    seturl("");
  }


  return (
    <div>
      <div className="card">
        <form onSubmit={salvar}>
          <div className="input-container">
            <p><label htmlFor="titulo">Titulo:</label>
            <input
              id="titulo"
              onChange={(e) => setTitulo(e.target.value)}
              type="text"
              value={Titulo}
            /></p>
            <p><label htmlFor="canal">Canal:</label>
            <input
              id="canal"
              onChange={(e) => setCanal(e.target.value)}
              type="text"
              value={Canal}
            /></p>
           <p> <label htmlFor="descricao">Descricao:</label>
            <input
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              value={Descricao}
            /></p>
            <p> <label htmlFor="url">url:</label>
            <input
              id="url"
              onChange={(e) => seturl(e.target.value)}
              type="text"
              value={url}
            /></p>
            
          </div>
          <button>Salvar</button>
        </form>
      </div>

      

      



    </div>
  );
}