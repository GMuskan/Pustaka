import { toast } from "react-toastify";
import { handleAddToCart } from "./CartService";
import * as axios from 'axios';

export const handleAddToWishlist = async (product, token, dispatch) => {
    if (token) {
        try {
            const response = await axios.post('/api/user/wishlist',
                {
                    product,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }

            );
            dispatch({ type: "ADD_TO_WISHLIST", payload: response?.data?.wishlist })
            toast.success('Added to Wishlist!');
        } catch (e) {
            console.error(e);
        }
    }
}

export const handleRemoveFromWishlist = async (product, token, dispatch) => {
    try {
        console.log(product?._id)
        const response = await axios.delete(`/api/user/wishlist/${product?._id}`, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: "UPDATE_WISHLIST", payload: response?.data?.wishlist })
        toast.error('Removed From Wishlist!');
    } catch (err) {
        console.error(err);
    }
}

export const handleMoveToCart = async (product, token, dispatch) => {
    try {
        handleAddToCart(product, token, dispatch);
    } catch (e) {
        console.error(e);
    }

}