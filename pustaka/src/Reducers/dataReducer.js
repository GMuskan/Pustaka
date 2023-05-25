export const initialState = {
    products: [],
    categories: [],
    productDetail: {},
    cart: [],
    wishlist: [],
    savedForLaterItems: [],
    categoryFilter: [],
    search: "",
    rating: 0,
    sortByPrice: "",
    priceRange: 0
}

export const DataReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload }
        case "SET_CATEGORIES":
            return { ...state, categories: action.payload }
        case "SET_INITIAL_WISHLIST":
            return { ...state, wishlist: action.payload }
        case "SET_INITIAL_CART":
            return { ...state, cart: action.payload }
        case "SET_PRODUCT_DETAILS":
            return { ...state, productDetail: action.payload }
        case "ADD_TO_CART":
            return { ...state, cart: action.payload }
        // case "SET_CART":
        //     return { ...state, cart: [...action.payload.cart, action.payload.item], wishlist: state?.wishlist.filter((item) => item._id !== action.payload.item._id) }
        case "UPDATE_CART":
            return { ...state, cart: action.payload }
        case "INCREASE_PRODUCT_QUANTITY":
            return { ...state, cart: action.payload }
        case "DECREASE_PRODUCT_QUANTITY":
            return { ...state, cart: action.payload }
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: action.payload }
        case "SET_WISHLIST":
            return { ...state, wishlist: action.payload.wishlist, cart: action.payload.cart }
        case "UPDATE_WISHLIST":
            return { ...state, wishlist: action.payload }
        case "SAVE_FOR_LATER":
            return { ...state, savedForLaterItems: action.payload }
        case "SET_PRICE_FILTER":
            return { ...state, sortByPrice: action.payload }
        case "SET_CATEGORY_FILTER":
            return { ...state, categoryFilter: state?.categoryFilter.includes(action.payload) ? state?.categoryFilter.filter((category) => category !== action.payload) : [...state?.categoryFilter, action.payload] }
        case "FILTER_BY_RATING":
            return { ...state, rating: action.payload }
        case "FILTER_BY_PRICE_RANGE":
            return { ...state, priceRange: action.payload }
        case "CLEAR_FILTERS":
            return { ...state, categoryFilter: [], sortByPrice: "", rating: 0, priceRange: 0 }
        case "SET_SEARCH":
            return { ...state, search: action.payload }
        default:
            return state;
    }

}