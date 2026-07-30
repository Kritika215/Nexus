import "./Register.css";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

function Register() {
  return (
    <div className="register-page">

      <div className="register-card">

        <div className="logo">
          <h1>NEXUS</h1>
          <p>AI Powered Digital Lending Platform</p>
        </div>

        <h2>Create Account</h2>

        <form>

          <div className="input-group">
            <FaUser className="icon"/>
            <input type="text" placeholder="Full Name"/>
          </div>

          <div className="input-group">
            <FaEnvelope className="icon"/>
            <input type="email" placeholder="Email"/>
          </div>

          <div className="input-group">
            <FaPhone className="icon"/>
            <input type="tel" placeholder="Phone Number"/>
          </div>

          <div className="input-group">
            <FaLock className="icon"/>
            <input type="password" placeholder="Password"/>
          </div>

          <div className="input-group">
            <FaLock className="icon"/>
            <input type="password" placeholder="Confirm Password"/>
          </div>

          <button className="register-btn">
            Create Account
          </button>

        </form>

        <p className="login-text">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;