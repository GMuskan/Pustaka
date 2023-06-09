import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import "./OrderAddressStyle.css";
import { DataContext } from "../../Contexts/DataContext";

const OrderAddress = () => {
    const { authState } = useContext(AuthContext);
    const { setIsProfileTab, orderDispatch, orderState } =
        useContext(DataContext);
    const navigate = useNavigate();
    const [selectedAddress, setSelectedAddress] = useState(
        authState?.address?.[0]
    );

    useEffect(() => {
        orderDispatch({ type: "SET_ORDER_ADDRESS", payload: selectedAddress });
        // eslint-disable-next-line
    }, [selectedAddress]);

    return (
        <div className="order-address-container">
            <h3 className="order-address-heading">Select Address</h3>
            {orderState?.orderAddress ? (
                <div className="order-address-card-container">
                    {authState?.address?.map(
                        ({
                            _id: addressID,
                            name,
                            street,
                            city,
                            state,
                            country,
                            zipCode,
                            mobile,
                        }) => (
                            <div key={addressID} className="order-address-card">
                                <input
                                    type="radio"
                                    name="address-radio"
                                    id={addressID}
                                    checked={selectedAddress._id === addressID}
                                    onChange={() => {
                                        setSelectedAddress(
                                            authState?.address?.find(({ _id }) => _id === addressID)
                                        );
                                    }}
                                />
                                <label htmlFor={addressID} className="order-address-label">
                                    <p>
                                        <strong>{name}</strong>
                                    </p>
                                    <p>
                                        {street}, {city}, {state}
                                    </p>
                                    <p>
                                         {zipCode}, {country}
                                    </p>
                                    <p>{mobile}</p>
                                </label>
                            </div>
                        )
                    )}
                </div>
            ) : (
                <p className="order-address-empty">No address is added!</p>
            )}
            <button
                className="order-adress-btn"
                onClick={() => {
                    setIsProfileTab(false);
                    navigate("/user-profile");
                }}
            >
                Add New Address
            </button>
        </div>
    );
};

export { OrderAddress };