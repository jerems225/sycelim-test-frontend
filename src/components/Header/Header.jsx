import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logos/hoazis_trans.png';
import "./Header.css";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const user = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" aria-label="Page d'accueil">
          <img src={Logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Our Products</Link></li>
          <li><Link to="/about" onClick={closeMenu}>Careers</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>

      <div className="auth-links">
        {user && !user.isAuthenticated ? (
          <>
            <Link to="/login" className="auth-link" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="auth-link auth-link-signup" onClick={closeMenu}>Sign Up</Link>
          </>
        ) : (
          <Link onClick={() => { user.logout(); closeMenu(); }} className="auth-link">Log Out</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
