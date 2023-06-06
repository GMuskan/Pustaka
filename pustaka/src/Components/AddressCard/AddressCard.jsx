import { useContext } from "react"
import "./AddressCard.css"
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";

export const AddressCard = ({ userAddress }) => {
    const { setDeliveryAddress, setAddressModal, addresses, setUserAddresses, setAddressInput } = useContext(AuthContext);

    const updateAddressHandler = (addressId) => {
        const foundAddress = addresses.find((address) => address.id === addressId)
        setAddressModal(true);
        setAddressInput({ id: foundAddress?.id, name: foundAddress?.name, address: foundAddress?.address, pincode: foundAddress?.pincode, country: foundAddress?.country, phoneNumber: foundAddress?.phoneNumber })
    }

    const deleteAddressHandler = (addressId) => {
        const newAddressArray = addresses.filter((address) => address.id !== addressId)
        setUserAddresses(newAddressArray)
        toast.error("Address Deleted Sucessfully!");
    }

    return (
        <>
            <div className="address-card">
                <label>
                    <span><input
                        type="radio"
                        name="select-address"
                        onChange={() => setDeliveryAddress({ name: userAddress?.name, add: userAddress?.address, pincode: userAddress?.pincode, country: userAddress?.country, phone: userAddress?.phoneNumber })} />{" "} {userAddress?.name}</span>
                    <p>{userAddress?.address}</p>
                    <p>{userAddress?.pincode}</p>
                    <p>{userAddress?.country}.</p>
                    <p>Phone Number: {userAddress?.phoneNumber}</p>
                </label>
                <span><button className="btn-update-address" onClick={() => updateAddressHandler(userAddress?.id)}>Update</button>{" "}<button className="btn-delete-address" onClick={() => deleteAddressHandler(userAddress?.id)}>Delete</button></span>
            </div>
        </>

    )
}