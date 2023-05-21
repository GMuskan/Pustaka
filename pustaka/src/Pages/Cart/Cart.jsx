import { useContext } from "react"
import { DataContext } from "../../Contexts/DataContext"
import { FaStar } from "react-icons/fa";
import "./Cart.css";

export const Cart = () => {
    const { handleMoveToWishlist, cart, handleRemoveFromCart, isProductInWishlist} = useContext(DataContext);
    
    return(
        <>
            <h1>My Cart</h1>
            {cart.map((cartItem) => (
                <div key={cartItem?._id}>
                    <div className="cartCard"  key={cartItem?._id}>
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
                                    <p className="productPrice"><span>Rs.{cartItem?.price}{"  "}</span><span className="originalPrice">{" "}Rs. {cartItem?.originalPrice}</span></p>
                                </div>
                                <div className="productRating">
                                    <p>{cartItem?.rating}<FaStar/></p>
                                    
                            </div>
                            <div>
                                <button className="btn-moveToWishlist" style={{backgroundColor: isProductInWishlist(cartItem) ? "lightgray" : "#007bb5" }} disabled={isProductInWishlist(cartItem)} onClick={() => handleMoveToWishlist(cartItem)}>{isProductInWishlist(cartItem) ? "Item in Wishlist" : "Move To Wishlist"}</button>
                                <button className="btn-remove" onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            ))}
        </>
    )
}