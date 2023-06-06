import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { handleRemoveFromCart, increaseProductQuantity, decreaseProductQuantity, handleMoveToWishlist } from "../../Services/CartService";
import { isProductInWishlist, calculatePercentOff } from "../../utils/commonUtils";
import { AuthContext } from "../../Contexts/AuthContext";

export const CartProduct = ({ cartItem }) => {

    const { authState } = useContext(AuthContext);

    const { state, dispatch, cart } = useContext(DataContext);

    const token = authState?.token;

    const checkQuantity = (cartItem) => {
        if (cart.find(item => item._id === cartItem._id).qty > 1) {
            decreaseProductQuantity(cartItem._id, token, dispatch)
        } else {
            handleRemoveFromCart(cartItem, token, dispatch);
        }
    }
    return (
        <>
            <div className="cartCard" key={cartItem?._id}>
                <div className="productImage">
                    <div></div>
                    <div>
                        <img src={cartItem?.img} alt="book-cover" />
                    </div>
                </div>
                <div className="productDescription">
                    <div>
                        <p className="productName">{cartItem?.name}</p>
                        <p className="productAuthor">{cartItem?.author}</p>
                        <p className="productPrice"><span>₹{cartItem?.price}{"  "}</span><span className="originalPrice">{" "}₹ {cartItem?.originalPrice}</span><span className="discount">{" "}({calculatePercentOff(cartItem?.price, cartItem?.originalPrice)}%OFF)</span></p>
                    </div>
                    <div>Quantity: {cartItem.qty}{" "}<button onClick={() => increaseProductQuantity(cartItem?._id, token, dispatch)}>+</button>{" "}
                        <button onClick={() => checkQuantity(cartItem)}>-</button>
                    </div>
                    <div>
                        <button className="btn-moveToWishlist" style={{ backgroundColor: isProductInWishlist(cartItem, token, state) ? "lightgray" : "#007bb5" }} disabled={isProductInWishlist(cartItem)} onClick={() => handleMoveToWishlist(cartItem, dispatch, token, state)}>{isProductInWishlist(cartItem) ? "Item in Wishlist" : "Move To Wishlist"}</button>
                        <button className="btn-remove" onClick={() => handleRemoveFromCart(cartItem, token, dispatch)}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}