import { useContext } from "react"
import "./AddressCard.css"
import { DataContext } from "../../Contexts/DataContext"

export const AddressCard = ({ userAddress }) => {

    const { setDeliveryAddress } = useContext(DataContext);
    return (
        <div className="address-card">
            <label>
                <span><input
                    type="radio"
                    name="select-address"
                    // checked={userAddress?.name === userName}
                    onChange={() => setDeliveryAddress({ name: userAddress?.name, add: userAddress?.address, country: userAddress?.country, phone: userAddress?.phoneNumber })} />{" "} {userAddress?.name}</span>
                <p>{userAddress?.address}</p>
                <p>{userAddress?.country}.</p>
                <p>Phone Number: {userAddress?.phoneNumber}</p>
            </label>
        </div>
    )
}