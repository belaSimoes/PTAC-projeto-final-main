import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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