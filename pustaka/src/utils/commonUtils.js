export const isProductInCart = (product, token, state) => {
    if (token) {
        const foundProduct = state?.cart?.find(item => item?._id === product?._id)
        if (foundProduct) {
            return true;
        } else {
            return false;
        }
    }
}

export const clearCart = (dispatch) => {
    dispatch({ type: "SET_INITIAL_CART", payload: [] })
}

export const isProductInWishlist = (product, token, state) => {
    if (token) {
        const foundProduct = state?.wishlist?.length > 0 && state?.wishlist?.find(item => item._id === product._id)
        if (foundProduct) {
            return true;
        } else {
            return false;
        }
    }
}

export const clearWishlist = (dispatch) => {
    dispatch({ type: "SET_INITIAL_WISHLIST", payload: [] })
}

export const changeTitle = (title) => (document.title = `${title} | Pustaka`);

export const calculatePercentOff = (discountedPrice, originalPrice) => Math.floor(((originalPrice - discountedPrice) * 100) / originalPrice)
export const calculateTotalPrice = (cart) => cart.reduce((acc, curr) => acc + (curr?.qty * curr?.originalPrice), 0)
export const calculateTotalDiscount = (cart) => cart.reduce((acc, curr) => acc + curr?.qty * (curr?.originalPrice - curr?.price), 0)




