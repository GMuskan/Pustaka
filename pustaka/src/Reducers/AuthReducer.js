const localStorageUser = JSON.parse(localStorage?.getItem("user"));
const localStorageToken = JSON.parse(localStorage?.getItem("token"));
const localStorageAddress = JSON.parse(localStorage?.getItem("address"));

export const initialAuthState = {
    user: localStorageUser?.user,
    token: localStorageToken?.token,
    address: localStorageAddress
}

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload }
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        case "SET_ADDRESS":
            return { ...state, address: action.payload }
        default:
            return state
    }
}