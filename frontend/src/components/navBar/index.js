import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function NavBar() {

  const location = useLocation();

   console.log("location", location.pathname)

  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">Foli</Link>
      <div className="navbar__links">
      <Link className={`navbar__link ${location.pathname === '/articles' ? 'active' : ''}`} to="/articles">Artigos</Link>
      <Link className={`navbar__link ${location.pathname === '/aboult' ? 'active' : ''}`} to="/aboult">Sobre</Link>
      <Link className={`navbar__link ${location.pathname === '/search' ? 'active' : ''}`} to="/search">Buscar Plantas</Link>
      </div>
    </nav>
  );
}
