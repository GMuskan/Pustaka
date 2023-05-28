import "./Checkout.css";
import { UserAddress } from "../../data/address";
import { AddressCard } from "../../Components/AddressCard/AddressCard";
import { OrderSummary } from "../../Components/OrderSummary/OrderSummary";
export const Checkout = () => {
    return (
        <div className="checkout-page">
            <div className="address-section">
                <h1>Select Address</h1>
                {UserAddress.map((userAddress) => <AddressCard userAddress={userAddress} key={userAddress.name} />)}
            </div>
            <div className="order-summary-section">
                <h1>Order Summary</h1>
                <OrderSummary/>
            </div>
        </div>
    )
}