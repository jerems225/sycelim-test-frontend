import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Register.css";
import logo from '../../../assets/logos/hoazis.png';
import { useAuth } from '../../../context/AuthContext';
import { signup } from '../../../services/authService';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const user = useAuth();
    if (user.isAuthenticated) return <Navigate to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = `${firstName} ${lastName}`;

        try {
            const data = await signup({ fullName, email, password });
            user.login(data.token, data.user);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Registration failed.');
        }
    };

    return (
        <div className="register">
            <div className="register_form_container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="login-container">
                    <h2>Registration</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
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
                        <button type="submit" className="submit-btn">Sign Up</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
            <footer className="footer-login">
                <Link to="/" className="return-link">Return to Spadex</Link>
                <Link to="/login" className="signup-link">Sign In</Link>
            </footer>
        </div>
    );
};

export default Register;
