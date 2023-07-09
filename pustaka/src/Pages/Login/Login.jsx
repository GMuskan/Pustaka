import { NavLink, useLocation, useNavigate } from "react-router-dom"
import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { changeTitle } from "../../utils/commonUtils";

const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontSize: "15px",
    textDecoration: "none",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "black"
});

export const Login = () => {

    const [passwordType, setPasswordType] = useState("password")

    const navigate = useNavigate();
    const location = useLocation();

    const [loginForm, setLoginForm] = useState({ email: "muskaang710@gmail.com", password: "muskanGupta" });

    const { handleLoginClick, authState } = useContext(AuthContext);

    if (authState?.token) {
        navigate(location?.state?.from || "/products");
    }

    useEffect(() => {
        changeTitle("Login")
    }, [])

    const handleShowHidePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
        } else {
            setPasswordType("password");
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Login</h1>
                <div className="userEmail">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input type="text" id="email" placeholder="test@gmail.com" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
                </div>
                <div className="userPassword">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type={passwordType} id="password" placeholder="********" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
                </div>
                <div className="show-hide-password">
                    <span><input type="checkbox" onClick={() => handleShowHidePassword()} />{passwordType === "text" ? "Hide Password" : "Show Password"}</span>
                </div>
                <button onClick={() => handleLoginClick(loginForm)}>Login</button>
                <NavLink style={getActiveStyle} to="/signup">Don't have an account? <span className="signup-link">Signup</span></NavLink>
            </div>
        </div>
    )
}