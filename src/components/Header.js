import logo from "../assets/logos-mundo-rojo.svg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
      <Link className="link" to={`/`}>
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
      
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
