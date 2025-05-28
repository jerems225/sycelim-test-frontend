import { createContext, useContext, useState } from "react"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("AuthToken"));
    const navigate = useNavigate();

    const login = (token, user) => {
        localStorage.setItem("AuthToken", token);
        localStorage.setItem("user", user)
        setIsAuthenticated(true);
    }

    const getUser = () => {
        const user = localStorage.getItem("user");
        console.log(user)

        return JSON.parse(user);
    }

    const logout = () => {
        localStorage.removeItem("AuthToken");
        setIsAuthenticated(false);
        navigate('/login');
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, getUser, logout}}>
            { children }
        </AuthContext.Provider>
    );

}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}
