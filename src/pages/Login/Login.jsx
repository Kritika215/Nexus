import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        // Backend authentication will come here

        navigate("/dashboard");

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <div className="logo">

                    <h1>NEXUS</h1>

                    <p>AI Powered Digital Lending Platform</p>

                </div>

                <h2>Welcome Back</h2>

                <p className="subtitle">
                    Sign in to continue your journey.
                </p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">

                        <FaEnvelope className="icon"/>

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                    </div>

                    <div className="input-group">

                        <FaLock className="icon"/>

                        <input
                            type="password"
                            placeholder="Password"
                        />

                    </div>

                    <div className="options">

                        <label>

                            <input type="checkbox"/>

                            Remember Me

                        </label>

                        <Link to="#">
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>

                </form>

                <div className="divider">
                    <span>OR</span>
                </div>

                <p className="register-text">

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;