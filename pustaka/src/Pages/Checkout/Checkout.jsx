import "./Checkout.css";
import { AddressCard } from "../../Components/AddressCard/AddressCard";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { AddressModal } from "../../Components/Modal/AddressModal";
import { AuthContext } from "../../Contexts/AuthContext";
import { changeTitle } from "../../utils/commonUtils";

export const Checkout = () => {
    const {  cart } = useContext(DataContext);
    const { addressModal, setAddressModal } = useContext(AuthContext);
    const { addresses } = useContext(AuthContext);
    useEffect(() => {
        changeTitle("Checkout")
    }, [])

    return (
        <>
            {cart?.length > 0 ?
                <>
                    <div className="checkout-page">
                        <div className="address-section">
                            <h1>Select Address</h1>
                            {addresses?.map((userAddress) => (
                                <AddressCard userAddress={userAddress} key={userAddress.name} />
                            ))}
                            <button className="btn-add-address" onClick={() => setAddressModal(true)}>Add Address</button>
                        </div>
                        <div className="order-summary-section">
                            {/* <h1>Order Summary</h1> */}
                            <OrderSummary />
                        </div>
                    </div>
                </> : <h1>Please add some item to cart to Checkout</h1>
            }
            {addressModal && <AddressModal />}
        </>

    )
}