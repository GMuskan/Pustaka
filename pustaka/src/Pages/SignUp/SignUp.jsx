import { NavLink, useNavigate } from "react-router-dom"
import "./SignUp.css";
import { useContext, useState } from "react";
import { DataContext } from "../../Contexts/DataContext";

const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontSize: "15px",
    textDecoration: "none",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "black"
});


  
export const SignUp = () => {
    const navigate = useNavigate();
    const [signUpForm, setSignUpForm] = useState({ "firstName": "", "lastName": "", "email": "", "password": "" });
    
    const { handleSignUpClick, token } = useContext(DataContext);

    if (token) {
        navigate("/products");
    }
    return (
        <>
            <div className="signUp-card">
                <h1>Sign Up</h1>

                <div className="userName">
                    <div className="first-name">
                        <label htmlFor="firstName">
                            First Name
                        </label>
                        <input type="text" id="firstName" placeholder="Test" value={signUpForm.firstName} onChange={(e) => setSignUpForm({...signUpForm, firstName: e.target.value})} /> 
                    </div>
                    <div className="last-name">
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input type="text" id="lastName" placeholder="Admin" value={ signUpForm.lastName } onChange={(e) => setSignUpForm({...signUpForm, lastName: e.target.value})}/></div>
                </div>

                <div className="userEmail">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input type="text" id="email" placeholder="test@gmail.com" value={ signUpForm.email } onChange={(e) => setSignUpForm({...signUpForm, email: e.target.value})}/> 
                </div>
                <div className="userPassword">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" placeholder="********" value={ signUpForm.password } onChange={(e) => setSignUpForm({...signUpForm, password: e.target.value})}/>
                </div>
                {/* <NavLink to="/products"> */}
                    <button onClick={() => handleSignUpClick(signUpForm)}>Create New Account</button>
                {/* </NavLink> */}
                <NavLink style={getActiveStyle} to="/login">Already have an account ? </NavLink>
            </div>
            
        </>
    )
}