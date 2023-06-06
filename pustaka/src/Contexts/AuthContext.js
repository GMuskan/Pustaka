import { createContext, useReducer, useState } from "react";
import { AuthReducer, initialAuthState } from "../Reducers/AuthReducer";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { UserAddress } from "../data/address";
import { v4 as uuid } from "uuid";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
    const navigate = useNavigate();
    const [addressModal, setAddressModal] = useState(false);
    const [addresses, setUserAddresses] = useState(UserAddress);
    const [addressInput, setAddressInput] = useState({ id: uuid(), name: "", address: "", pincode: "", country: "", phoneNumber: "" });
    const [deliveryAddress, setDeliveryAddress] = useState({ name: "", add: "", country: "", pincode: "", phone: "" })
   
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
                //console.log(response);
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
                    authDispatch({ type: "SET_USER", payload: foundUser });
                    authDispatch({ type: "SET_TOKEN", payload: encodedToken });
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
        // setToken("");
        //setUser();
        authDispatch({ type: "SET_USER", payload: "" });
        authDispatch({ type: "SET_TOKEN", payload: "" })
        setUserAddresses(UserAddress)
        navigate("/products");

    }

    return (
        <AuthContext.Provider value={{
            handleSignUpClick,
            handleLoginClick,
            logoutClickHandler,
            setDeliveryAddress,
            setAddressInput,
            setAddressModal,
            setUserAddresses,
            addressModal,
            addressInput,
            authState,
            addresses,
            deliveryAddress,
        }}>
            {children}
        </AuthContext.Provider>
    )
}