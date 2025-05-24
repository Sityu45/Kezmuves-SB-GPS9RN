import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Kézműves Sütemények</h1>
    <ul className="nav-links">
      <li><Link to="/">Főoldal</Link></li>
      <li><Link to="/products">Sütemények</Link></li>
      <li><Link to="/contact">Kapcsolat</Link></li>
    </ul>
  </nav>
);

export default Navbar;
