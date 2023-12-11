import "./home.css";
import Card from "./card";

export default function Home() {
  const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];
  console.log(pegarvideos);
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="/destaque">Em Destaque</a></li>
          <li><a href="/registro">Novo Vídeo</a></li>
        </ul>
      </nav>

      <div>
        <div className="values-area">
          {pegarvideos.map((item, index) => (
            <div key={item.id}>
              <Card key={index} item={item}></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
