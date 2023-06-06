import { useContext, useEffect } from "react"
import { DataContext } from "../../Contexts/DataContext"
import "./OrderSummary.css"
import { AuthContext } from "../../Contexts/AuthContext";
export const OrderSummary = () => {
    const { orderSummary, cart, handlePlaceOrderClick, changeTitle } = useContext(DataContext);
    const { deliveryAddress } = useContext(AuthContext);
    useEffect(() => {
        changeTitle("Order Summary")
    }, [changeTitle])
    return (
        <>
            <div className="order-summary">
                <div className="order-details">
                    <hr />
                    <h3>ORDER DETAILS</h3>
                    <hr />
                    <div className="order-details-header">
                        <h4>Item</h4>
                        <h4>Quantity</h4>
                    </div>
                    <div className="order-details-list">
                        <ul>
                            {cart.map(item => (
                                <li key={item?.name}>
                                    <p>{item?.name}</p>
                                    <p>{item?.qty}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <hr />
                    <h4>PRICE DETAILS</h4>
                    <hr />
                    <div className="price-details-list">
                        <ul>
                            <li>
                                <p>Price ({cart?.length} Items)</p>
                                <p>₹ {orderSummary?.price}</p>
                            </li>
                            <li>
                                <p>Discount</p>
                                <p>-₹ {orderSummary?.discount}</p>
                            </li>
                            <li>
                                <p>Delivery Charges</p>
                                <p>FREE</p>
                            </li>
                            <li>
                                <p>Coupon Discount</p>
                                <p>-₹ {orderSummary?.coupon?.value}</p>
                            </li>
                            {orderSummary?.coupon?.couponName ? <li className="coupon-msg">
                                <p>
                                    <img src="https://cdn-icons-png.flaticon.com/512/726/726448.png" alt="coupon-icon" />
                                    {orderSummary?.coupon?.couponName}
                                </p>
                            </li> : ""}
                            <li>
                                <p>Total Amount</p>
                                <p>₹ {orderSummary?.amount}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {deliveryAddress?.add !== "" &&
                    <div>
                        <hr />
                        <h4>DELIVER TO</h4>
                        <hr />
                        <div className="address-details">
                            <p>{deliveryAddress?.name}</p>
                            <p>{deliveryAddress?.add}</p>
                            <p>{deliveryAddress?.country}</p>
                            <p>{deliveryAddress?.pincode}</p>
                            <p>Phone Number: {deliveryAddress?.phone}</p>
                        </div>
                    </div>
                }
                <div>
                    <button className="place-order-btn" onClick={() => handlePlaceOrderClick()}>
                        Place Order
                    </button>
                </div>

            </div>
        </>
    )
}