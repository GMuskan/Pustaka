import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Contexts/DataContext";
import "./OrderConfirmation.css"
import { popper } from "../../utils/popper";

const OrderConfirmation = () => {
    const { order } = useContext(DataContext);
    const { _id, orderProducts, amount, deliveryAddress, paymentId } = order;

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const placedHandler = () => {
        popper();
    };

    return (
        <div className="order-confirmation-page">
            {paymentId ? (

                <div className="order-confirmation-container">
                    <h1 className="order-confirmation-heading">🥂 You order has been placed successfully !{placedHandler()}</h1>
                    <div className="order-confirmation-box">
                        <h3 className="order-confirmation-status">Order Confirmed</h3>
                        <div className="order-confirmation-details">
                            <p className="order-confirmation-row">
                                <span>Order ID : </span>
                                <span>{_id}</span>
                            </p>
                            <p className="order-confirmation-row">
                                <span>Payement ID : </span>
                                <span>{paymentId}</span>
                            </p>
                            <p className="order-confirmation-row">
                                <span>Total Amount : </span>
                                <span>₹ {amount}</span>
                            </p>
                            <div className="order-confirmation-address">
                                <p>
                                    <span>Order will be delivered to : </span>
                                </p>
                                <p>{deliveryAddress?.name}</p>
                                <p>
                                    {deliveryAddress?.street}, {deliveryAddress?.city},{" "}
                                    {deliveryAddress?.state}
                                </p>
                                <p>
                                    PinCode: {deliveryAddress?.zipCode},{" "}
                                    {deliveryAddress?.country}
                                </p>
                                <p>Mobile No.: {deliveryAddress?.mobile}</p>
                            </div>
                        </div>
                        <div className="order-confirmation-product-container">
                            {orderProducts.map(({ img, name, _id, price, qty }) => (
                                <div key={_id} className="order-confirmation-product">
                                    <div className="order-confirmation-product-img">
                                        <img src={img} alt={name} />
                                    </div>
                                    <div className="order-confirmation-product-info">
                                        <p>{name}</p>
                                        <p>Total Quantity : {qty}</p>
                                        <p>Price : ₹ {price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="order-confirmation-empty">
                    <h3>Your Order is Empty!☹️</h3>
                    <p>Start shopping now to discover our amazing books.</p>
                    <button onClick={() => navigate("/products")}>Buy Books</button>
                </div>
            )}
        </div>
    );
};
export { OrderConfirmation };