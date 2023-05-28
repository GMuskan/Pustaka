import { useContext, useState } from "react";
import { DataContext } from "../../Contexts/DataContext";
import "./CouponModal.css";
const COUPONS = [
    { couponName: "DIWALI_DHAMAKA", value: 50 },
    { couponName: "NEW_USER", value: 10 },
];

export const CouponModal = () => {
    const { setCouponModal, couponValue, setCouponValue } = useContext(DataContext);
    const [input, setInput] = useState(couponValue)
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-header">
                    <h3>Apply Coupon</h3>
                    <i className="fa fa-times" aria-hidden="true" onClick={() => setCouponModal(false)} />
                </div>

                <div className="modal-main">
                    {COUPONS.map(({ couponName, value }) => (
                        <div className="coupon-option" key={couponName}>
                            <label className="select-input">
                                <input
                                    type="radio"
                                    name="radio"
                                    className="radio-input"
                                    onChange={() =>
                                        setInput({
                                            ...couponValue,
                                            value: value,
                                            couponName: couponName
                                        })}
                                    checked={value === input.value ? true : false}
                                />
                                <span className="text">{value}% OFF: {couponName}</span>
                            </label>
                        </div>
                    ))}
                    <button
                        className="coupon-apply-btn"
                        onClick={() => {
                            setCouponModal(false);
                            setCouponValue(input)
                        }}>
                        APPLY
                    </button>
                </div>
            </div>
        </div>
    )
}