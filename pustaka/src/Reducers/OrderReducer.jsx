export const initialOrderAddressState = {
    orderAddress: {}
}

export const orderReducer = (state, action) => {
    switch (action.type) {
        case "SET_ORDER_ADDRESS":
            return { ...state, orderAddress: action.payload }
        default:
            return state
    }
}