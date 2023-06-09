import * as axios from 'axios';
import { toast } from "react-toastify";
import { handleAddToWishlist } from './WishlistService';

export const handleAddToCart = async (product, token, dispatch) => {
    if (token) {
        try {
            const response = await axios.post('/api/user/cart',
                {
                    product,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }

            );
            dispatch({ type: "ADD_TO_CART", payload: response?.data?.cart });
            toast.success('Added to Cart!');
        } catch (e) {
            console.error(e);
        }
    }

}

export const handleRemoveFromCart = async (product, token, dispatch) => {
    try {
        const response = await axios.delete(`/api/user/cart/${product?._id}`, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: "UPDATE_CART", payload: response?.data?.cart })
        toast.error('Removed From Cart!');
    } catch (err) {
        console.error(err);
    }

}

export const deleteCart = async (token, dispatch) => {
    try {
        const response = await axios.delete('/api/user/cart/', {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: "DELETE_CART", payload: response?.data?.cart })
    } catch (err) {
        console.error(err);
    }
}

export const increaseProductQuantity = async (productId, token, dispatch) => {
    try {
        const response = await axios.post(`/api/user/cart/${productId}`,
            {
                action: {
                    type: "increment"
                },
            },
            {
                headers: {
                    authorization: token,
                },
            }
        )
        dispatch({ type: "INCREASE_PRODUCT_QUANTITY", payload: response?.data?.cart })
    } catch (e) {
        console.error(e)
    }
}

export const decreaseProductQuantity = async (productId, token, dispatch) => {
    try {
        const response = await axios.post(`/api/user/cart/${productId}`,
            {
                action: {
                    type: "decrement"
                },
            },
            {
                headers: {
                    authorization: token,
                },
            }
        )
        dispatch({ type: "DECREASE_PRODUCT_QUANTITY", payload: response?.data?.cart })
    } catch (e) {
        console.error(e)
    }
}

export const handleMoveToWishlist = async (product, dispatch, token, state) => {
    try {
        const response = await axios.delete(`/api/user/cart/${product?._id}`, {
            headers: {
                authorization: token,
            },
        });

        handleAddToWishlist(product, token, dispatch)
        dispatch({ type: "UPDATE_WISHLIST", payload: [...state?.wishlist, product] })
        dispatch({ type: "UPDATE_CART", payload: response?.data?.cart })
    } catch (e) {
        console.error(e)
    }
}