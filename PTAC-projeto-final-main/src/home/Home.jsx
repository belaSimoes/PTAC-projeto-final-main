import "./home.css";

export default function Home() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <input type="text" className="search-bar" placeholder="Pesquisar..." />
      <div className="login-icon">Login</div>
    </div>
  );
}
