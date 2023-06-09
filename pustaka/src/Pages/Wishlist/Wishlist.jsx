import { useContext, useEffect } from "react"
import "./Wishlist.css"
import { DataContext } from "../../Contexts/DataContext";
import { handleMoveToCart, handleRemoveFromWishlist } from "../../Services/WishlistService";
import { isProductInCart, changeTitle, calculatePercentOff } from "../../utils/commonUtils";
import { AuthContext } from "../../Contexts/AuthContext";
export const Wishlist = () => {

    const { authState } = useContext(AuthContext);

    const { state, dispatch, wishlist } = useContext(DataContext);

    const token = authState?.token;

    useEffect(() => {
        changeTitle("Wishlist")
    }, [])
    return (
        <>
            <h1>My Wishlist</h1>
            {wishlist?.length ?
                wishlist.map((wishlistItem) => (
                    <div key={wishlistItem?._id}>
                        <div className="wishlistCard" key={wishlistItem._id}>
                            <div className="productImage">
                                <img src={wishlistItem.img} alt="book-cover" />
                            </div>
                            <div className="productDescription">
                                <div>
                                    <p className="productName">{wishlistItem.name}</p>
                                    <p className="productAuthor">{wishlistItem.author}</p>
                                    <p className="productPrice"><span>₹{wishlistItem.price}{"  "}</span><span className="originalPrice">{" "}Rs. {wishlistItem.originalPrice}</span><span className="discount">{" "}({calculatePercentOff(wishlistItem?.price, wishlistItem?.originalPrice)}%OFF)</span></p>
                                </div>
                                <div>
                                    <button className="btn-moveToCart" style={{ backgroundColor: isProductInCart(wishlistItem, token, state) ? "lightgray" : "#007bb5" }} disabled={isProductInCart(wishlistItem, token, state)} onClick={() => handleMoveToCart(wishlistItem, token, dispatch)}>{isProductInCart(wishlistItem, token, state) ? "Item In Cart" : "Add To Cart"}</button>
                                    <button className="btn-remove" onClick={() => handleRemoveFromWishlist(wishlistItem, token, dispatch)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )) : <h2>Your Wishlist is Empty!</h2>}
        </>
    )
}