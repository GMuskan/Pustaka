import { useEffect } from "react";
import { changeTitle } from "../../utils/commonUtils";

export const PlaceOrder = () => {
    useEffect(() => {
        changeTitle("Order Placed")
    }, [])
    return (
        <>
            <div className="place-order-icon">
                <img src="https://th.bing.com/th/id/OIP.9A4apqke8dZvlviJcEEhEQHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="tick-icon" />
            </div>
            <h1>Congratulations, Your order has been place successfully!</h1>
        </>
    )
}