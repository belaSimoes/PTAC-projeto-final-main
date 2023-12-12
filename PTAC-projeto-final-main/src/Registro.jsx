import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Registro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);

  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [Titulo, setTitulo] = useState("");
  const [Canal, setCanal] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Titulo: Titulo, Canal: Canal, Descricao: Descricao, url: url }]);
    setId(id + 1);
    setTitulo("");
    setCanal("");
    setDescricao("");
    setUrl("");
  }

  return (
    <div>
      <div className="card">
        <form onSubmit={salvar}>
          <div className="input-container">
            <p>
              <label htmlFor="titulo" className="input-label">
                Titulo:
              </label>
              <input
                id="titulo"
                onChange={(e) => setTitulo(e.target.value)}
                type="text"
                value={Titulo}
                className="input-field"
              />
            </p>
            <p>
              <label htmlFor="canal" className="input-label">
                Canal:
              </label>
              <input
                id="canal"
                onChange={(e) => setCanal(e.target.value)}
                type="text"
                value={Canal}
                className="input-field"
              />
            </p>
            <p>
              <label htmlFor="descricao" className="input-label">
                Descricao:
              </label>
              <input
                id="descricao"
                onChange={(e) => setDescricao(e.target.value)}
                type="text"
                value={Descricao}
                className="input-field"
              />
            </p>
            <p>
              <label htmlFor="url" className="input-label">
                URL:
              </label>
              <input
                id="url"
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                value={url}
                className="input-field"
              />
            </p>
          </div>
          <button className="submit-button">Salvar</button>
        </form>
      </div>
    </div>
  );
}
