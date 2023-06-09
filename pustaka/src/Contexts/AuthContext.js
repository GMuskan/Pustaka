import { createContext, useReducer, useState } from "react";
import { AuthReducer, initialAuthState } from "../Reducers/AuthReducer";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
    const navigate = useNavigate();
    const [addressModal, setAddressModal] = useState(false);
    const initialAddressForm = {
        name: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        mobile: "",
    };
    const [addressForm, setAddressForm] = useState(initialAddressForm);

    const handleSignUpClick = async ({ firstName, lastName, email, password }) => {
        if (firstName === "" || lastName === "" || email === "" || password === "") {
            navigate("/signup")
            toast.error('All fields are mandatory to signup!')
        } else {
            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password,
                        }
                    ),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                if (response?.status === 201) {
                    const { createdUser, encodedToken } = await response.json();
                    localStorage.setItem("user", JSON.stringify({ user: createdUser }))
                    localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
                    authDispatch({ type: "SET_USER", payload: createdUser });
                    authDispatch({ type: "SET_TOKEN", payload: encodedToken });
                } else if (response?.status === 422) {
                    navigate("/signup")
                    toast.error('Email Already Exists!')
                }

            } catch (e) {
                console.error(e);
            }
        }


    }

    const handleLoginClick = async ({ email, password }) => {
        if (email === "" || password === "") {
            navigate("/login")
            toast.error('email and password cannot be empty!')
        }
        else {
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            email: email,
                            password: password
                        }
                    ),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                if (response?.status === 200) {
                    const { foundUser, encodedToken } = await response.json();
                    localStorage.setItem("user", JSON.stringify({ user: foundUser }));
                    localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
                    localStorage.setItem("address", JSON.stringify(foundUser?.address));
                    authDispatch({ type: "SET_USER", payload: foundUser });
                    authDispatch({ type: "SET_TOKEN", payload: encodedToken });
                    authDispatch({ type: "SET_ADDRESS", payload: foundUser?.address });
                    toast.success('Logged In Successfully!')
                } else if (response?.status === 401) {
                    navigate("/login")
                    toast.error('The credentials you entered are invalid!')
                } else {
                    navigate("/login")
                    toast.error('The email you entered is not Registered!')
                }
            } catch (e) {
                console.error(e)
            }
        }
    }

    const logoutClickHandler = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("address");

        authDispatch({ type: "SET_USER", payload: "" });
        authDispatch({ type: "SET_TOKEN", payload: "" });
        authDispatch({ type: "SET_ADDRESS", payload: [] });
        navigate("/products");

    }

    return (
        <AuthContext.Provider value={{
            handleSignUpClick,
            handleLoginClick,
            logoutClickHandler,
            setAddressModal,
            addressModal,
            authState,
            addressForm, setAddressForm, initialAddressForm, authDispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}