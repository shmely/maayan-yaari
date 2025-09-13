import { useState } from "react";
import "./header.css";
import logoWhite from "../../assets/img/logo-white.png";
import whatsappIcon from "../../assets/img/whatsapp-svgrepo-com.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <img
          src={logoWhite}
          alt="Logo"
          className="logo"
        />
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <a href="/">קצת עליי</a>
          <a href="/">פרויקטים</a>
          <a href="/">תהליך העבודה</a>
          <a href="/">לקוחות ממליצים</a>
          <a href="/">פודקאסט</a>
          <a href="/">צרו קשר</a>
          <a href="tel:+972523468470">
            052-3468470
          </a>
          <a href="https://api.whatsapp.com/send?phone=972523468470&;text=היי מעיין">
            <img
              src={whatsappIcon}
              className="icon"
              alt="WhatsApp"
            />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="תפריט"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="/" onClick={toggleMenu}>קצת עליי</a>
          <a href="/" onClick={toggleMenu}>פרויקטים</a>
          <a href="/" onClick={toggleMenu}>תהליך העבודה</a>
          <a href="/" onClick={toggleMenu}>לקוחות ממליצים</a>
          <a href="/" onClick={toggleMenu}>פודקאסט</a>
          <a href="/" onClick={toggleMenu}>צרו קשר</a>
          <a href="tel:+972523468470" onClick={toggleMenu}>
            052-3468470
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=972523468470&;text=היי מעיין"
            onClick={toggleMenu}
          >
            <img
              src={whatsappIcon}
              className="icon"
              alt="WhatsApp"
            />
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
