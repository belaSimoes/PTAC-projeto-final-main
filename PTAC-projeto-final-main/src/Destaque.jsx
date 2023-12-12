import "./home.css"
import Card from "./card";
import "./home.css"

export default function destaque(){
    const pegalosv = JSON.parse(localStorage.getItem('Lista')) || [];
    console.log(pegalosv);
    return(
    <div><body>
        <div class="container">
        <nav class="vertcal">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./destaque.jsx">Destaques</a></li>
                <li><a href="/registro">Adicionar Vídeo</a></li>
            </ul>
        </nav>


        <div>
          <div className="values-area">
            {pegalosv.slice(-4).map((item,index) => (
              <div key={item.id}>
                <Card key={index} item={item}></Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
     </body></div>
    )
}