import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="nav-brand">
        <img src="logo_3.png" alt="Logo" className="nav-logo" />
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <p className="nav-link" onClick={() => { navigate("/home"); setIsMenuOpen(false); }}>Home</p>
        <p className="nav-link" onClick={() => { navigate("/prediction"); setIsMenuOpen(false); }}>AI Prediction</p>
        <p className="nav-link" onClick={() => { navigate("/history"); setIsMenuOpen(false); }}>History</p>
        <p className="nav-link" onClick={handleLogout}>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;