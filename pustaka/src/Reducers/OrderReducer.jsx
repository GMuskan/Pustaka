export const initialOrderAddressState = {
    orderAddress: {}
}

export const orderReducer = (state, action) => {
    console.log(action, action.payload)
    switch (action.type) {
        case "SET_ORDER_ADDRESS":
            return { ...state, orderAddress: action.payload }
        default:
            return state
    }
}