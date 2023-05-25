import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";

export const CartPrice = ({ cart }) => {
    const { calculateTotalPrice, calculateTotalDiscount, setCouponModal, couponValue, setCouponValue } = useContext(DataContext);
    const totalPrice = calculateTotalPrice(cart);
    const totalDiscount = calculateTotalDiscount(cart)
    const coupon = calculateTotalPrice
        ? Math.abs((parseFloat(totalPrice - totalDiscount) / 100) * parseFloat(couponValue.value))
        : 0;

    const totalAmout = parseFloat(totalPrice - totalDiscount - coupon).toFixed(2);
    return (
        <>
            <div className="coupon">
                <p><i className="fa fa-tag" aria-hidden="true"></i>Have a Coupon ?</p>
                <button className="apply-coupon" onClick={() => setCouponModal(true)}>Apply</button>
            </div>
            <hr />
            <div className="cart-price-details-header"><h3>PRICE DETAILS</h3></div>
            <hr />
            <div className="cart-price-details">
                <ul>
                    <li>
                        <p>Price ({cart?.length} Items)</p>
                        <p>₹ {totalPrice}</p>
                    </li>
                    <li>
                        <p>Discount</p>
                        <p>-₹ {totalDiscount}</p>
                    </li>
                    <li>
                        <p>Delivery Charges</p>
                        <p>FREE</p>
                    </li>
                    <li>
                        <p>Coupon Discount</p>
                        <p>{coupon !== 0 && "-"}₹ {coupon.toFixed(2)}</p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="total-amount">
                <h4>Total Amount</h4>
                <h4>₹{totalAmout}</h4>
            </div>
            <hr />
            <div className="discount-statement">You will save Rs. on this order</div>
            <div>
                <button className="btn-checkout">Checkout</button>
            </div>
        </>
    )
}