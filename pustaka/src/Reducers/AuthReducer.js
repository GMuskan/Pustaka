const localStorageUser = JSON.parse(localStorage?.getItem("user"));
const localStorageToken = JSON.parse(localStorage?.getItem("token"));
export const initialAuthState = {
    user: localStorageUser?.user,
    token: localStorageToken?.token
}

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload }
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        default:
            return state
    }
}