import { useContext } from "react"
import "./AddressModal.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { updateUserAddress, addUserAddress } from "../../Services/AddressService";
export const AddressModal = () => {
    const { setAddressModal, addressForm, setAddressForm, initialAddressForm, authState, authDispatch } = useContext(AuthContext);
    const token = authState?.token

    const saveAddressHandler = (e) => {
        e.preventDefault();
        addressForm._id
            ? updateUserAddress(
                addressForm,
                token,
                authDispatch,

            )
            : addUserAddress(
                addressForm,
                token,
                authDispatch,

            );
    };
    return (
        <>
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <h3>Add Address</h3>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => {
                            setAddressModal(false)
                            setAddressForm(initialAddressForm)
                        }} />
                    </div>
                    <div className="addressModal">
                        <div className="name-field">
                            <label htmlFor="name">
                                Name:
                            </label>
                            <input type="text" id="name" value={addressForm?.name}
                                onChange={(e) => {
                                    setAddressForm((prev) => ({ ...prev, name: e.target.value }))
                                }}
                            />
                        </div>
                        <div className="address-field">
                            <label htmlFor="street">
                                Street:
                            </label>
                            <input type="text" id="street" value={addressForm?.street}
                                onChange={(e) =>
                                    setAddressForm((prev) => ({ ...prev, street: e.target.value }))
                                } />
                        </div>
                        <div className="address-field">
                            <label htmlFor="city">
                                City:
                            </label>
                            <input type="text" id="city" value={addressForm?.city}
                                onChange={(e) =>
                                    setAddressForm((prev) => ({ ...prev, city: e.target.value }))
                                } />
                        </div>
                        <div className="address-field">
                            <label htmlFor="state">
                                State:
                            </label>
                            <input type="text" id="state" value={addressForm?.state}
                                onChange={(e) =>
                                    setAddressForm((prev) => ({ ...prev, state: e.target.value }))} />
                        </div>
                        <div className="address-field">
                            <label htmlFor="country">
                                Country:
                            </label>
                            <input type="text" id="country" value={addressForm?.country}
                                onChange={(e) =>
                                    setAddressForm((prev) => ({ ...prev, country: e.target.value }))
                                } />
                        </div>
                        <div className="address-field">
                            <label htmlFor="zipCode">
                                ZipCode:
                            </label>
                            <input type="text" id="zipCode" value={addressForm?.zipCode}
                                onChange={(e) =>
                                    setAddressForm((prev) => ({ ...prev, zipCode: e.target.value }))} />
                        </div>

                        <div className="phone-field">
                            <label htmlFor="mobile">
                                Phone:
                            </label>
                            <input type="text" id="mobile" value={addressForm?.mobile}
                                onChange={(e) =>
                                    setAddressForm((prev) => ({ ...prev, mobile: e.target.value }))
                                } />
                        </div>
                    </div>
                    <div>
                        <button className="add-btn"
                            onClick={(e) => {
                                setAddressModal(false);
                                saveAddressHandler(e);
                                setAddressForm(initialAddressForm)
                            }}
                        >Add</button>
                    </div>
                </div>

            </div>
        </>
    )
}