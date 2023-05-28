import { NavLink, useLocation, useNavigate } from "react-router-dom"
import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Contexts/DataContext";

const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontSize: "15px",
    textDecoration: "none",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "black"
});

export const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [loginForm, setLoginForm] = useState({ email: "test@gmail.com", password: "test" });

    const { handleLoginClick, token, changeTitle } = useContext(DataContext);

    if (token) {
        navigate(location?.state?.from || "/products");
    }

    useEffect(() => {
        changeTitle("Login")
    }, [])

    return (
        <>
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
                    <input type="password" id="password" placeholder="********" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
                </div>
                {/* <NavLink to="/products"> */}
                <button onClick={() => handleLoginClick(loginForm)}>Login with Test Credentials</button>
                {/* </NavLink> */}
                <NavLink style={getActiveStyle} to="/signup">Create New Account</NavLink>
            </div>

        </>
    )
}