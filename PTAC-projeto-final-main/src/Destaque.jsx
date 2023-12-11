import "./home.css";
import Card from "./Card";
import "./home.css";

export default function DestaqueComponent() {
    const data = JSON.parse(localStorage.getItem('Lista')) || [];
    return (
        <div>
            <body>
                <div className="container">

                    <nav className="sidebar">
                        <ul>
                            <li><a href="./">Página Principal</a></li>
                            <li><a href="./destaque.html">Em Destaque</a></li>
                            <li><a href="/registro">Novo Registro</a></li>
                        </ul>
                    </nav>

                    <div>
                        <div className="values-area">
                            {data.slice(-4).map((item, index) => (
                                <div key={item.id}>
                                    <Card key={index} item={item}></Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}
