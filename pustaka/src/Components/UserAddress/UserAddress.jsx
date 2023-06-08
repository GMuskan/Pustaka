import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { AddressCard } from "../AddressCard/AddressCard";
import { AddressModal } from "../Modal/AddressModal"
import "./UserAddress.css";
export const UserAddress = () => {
    const { authState, addressModal, setAddressModal, setAddressForm } = useContext(AuthContext);

    const addressArr = authState?.address;

    return (
        <div className="user-address-container">
            {addressArr?.length === 0 || addressArr === null ? (
                <p>No Address added yet</p>
            ) : (

                addressArr?.map((address) => (
                    <AddressCard
                        key={address?._id}
                        address={address}
                        setAddressForm={setAddressForm}
                    />
                ))
            )}
            <button
                className="user-address-add-btn"
                onClick={() => setAddressModal(true)}
            >
                Add New Address
            </button>
            {addressModal && (
                <AddressModal />
            )}
        </div>
    );
}