import { toast } from "react-toastify";
import * as axios from 'axios';

const addUserAddress = async (
    address,
    token,
    authDispatch,
) => {
    try {
        const res = await fetch("/api/user/address", {
            method: "POST",
            headers: {
                authorization: token,
            },
            body: JSON.stringify({ address }),
        });
        const resJson = await res.json();
        if (res.status === 201) {
            authDispatch({ type: "SET_ADDRESS", payload: resJson?.address });
            toast.success("New address is added!");
        }
    } catch (err) {
        console.log(err);
    }
};

const removeUserAddress = async (addressId, token, authDispatch) => {
    console.log("inside address service")
    try {
        const res = await axios.delete(`api/user/address/${addressId}`, {

            headers: {
                authorization: token,
            },
        });
        console.log(res)
        authDispatch({ type: "SET_ADDRESS", payload: res?.data?.address })
        toast.success('Address removed!');
    } catch (err) {
        console.error(err);
    }
};

const updateUserAddress = async (
    address,
    token,
    authDispatch,
) => {
    try {
        const res = await fetch(`api/user/address/${address._id}`, {
            method: "POST",
            headers: {
                authorization: token,
            },
            body: JSON.stringify({ address }),
        });
        const resJson = await res.json();
        if (res.status === 200) {
            authDispatch({ type: "SET_ADDRESS", payload: resJson?.address });
            toast.success("Address Updated!");
        }
    } catch (err) {
        console.log(err);
    }
};

export { addUserAddress, removeUserAddress, updateUserAddress };