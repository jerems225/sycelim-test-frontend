import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Login.css";
import logo from '../../../assets/logos/hoazis.png';
import { useAuth } from '../../../context/AuthContext';
import { loginUser } from '../../../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const user = useAuth();
    if (user.isAuthenticated) return <Navigate to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await loginUser({ email, password, rememberMe });
            user.login(data.token, data.user);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login">
            <div className="login_form_container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="login-container">
                    <h2>Sign In Now</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="remember-me-container">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Remember Me
                            </label>
                            <a href="#">Forgot your password ?</a>
                        </div>
                        <button type="submit" className="submit-btn">Sign In</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
            <footer className="footer-login">
                <Link to="/" className="return-link">Return to Spadex</Link>
                <Link to="/signup" className="signup-link">Sign Up</Link>
            </footer>
        </div>
    );
};

export default Login;
