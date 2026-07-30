import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container nav-container">

        {/* Logo */}

        <Link to="/" className="logo">

          <div className="logo-circle">
            N
          </div>

          <div className="logo-text">

            <h2>NEXUS</h2>

            <span>
              AI Powered Digital Lending
            </span>

          </div>

        </Link>

        {/* Navigation */}

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#workflow">How It Works</a>
          </li>

          <li>
            <a href="#faq">FAQ</a>
          </li>

        </ul>

        {/* Right Side */}

        <div className="nav-actions">

          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/register" className="start-btn">
            Get Started
          </Link>

          <button className="theme-btn">
            <FaMoon />
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;