import { useContext } from "react"
import "./AddressCard.css"
import { AuthContext } from "../../Contexts/AuthContext";
import { removeUserAddress } from "../../Services/AddressService";

export const AddressCard = ({ address, setAddressForm }) => {

    const { authState, authDispatch, setAddressModal } = useContext(AuthContext)
    const { _id, name, street, city, state, zipCode, country, mobile } = address;
    const token = authState?.token

    const updateAddressHandler = (_id, name, street, city, state, zipCode, country, mobile) => {
        setAddressModal(true);
        setAddressForm((prev) => ({
            ...prev,
            _id,
            name,
            street,
            city,
            state,
            zipCode,
            country,
            mobile
        }))
    }

    const deleteAddressHandler = (addressId, token, authDispatch) => {
        console.log(addressId)
        removeUserAddress(addressId, token, authDispatch)
    }

    return (
        <>
            <div className="address-card">
                <div className="user-address-card-container">
                    <p className="user-address-card-name">{name}</p>
                    <p>
                        {street}, {city}, {state}
                    </p>
                    <p>
                        PinCode: {zipCode}, {country}
                    </p>
                    <p>Mobile No. {mobile}</p>
                    <button className="update-address-button"
                        onClick={() =>
                            updateAddressHandler(_id, name, street, city, state, country, zipCode, mobile)
                        }
                    >
                        Edit
                    </button>
                    <button className="delete-address-button"
                        onClick={() =>
                            deleteAddressHandler(address?._id, token, authDispatch)
                        }
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>

    )
}