import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Danilo Espinosa</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/movil">
            Moviles
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/watch">
            Relojes
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/gadget">
            Accesorios
          </Link>
        </li>

        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};
