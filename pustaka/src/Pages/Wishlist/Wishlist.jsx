import { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa";
import "./Wishlist.css"
import { DataContext } from "../../Contexts/DataContext";
export const Wishlist = () => {
    const { handleMoveToCart, handleRemoveFromWishlist, wishlist, isProductInCart } = useContext(DataContext);
    
    return(
        <>
            <h1>My Wishlist</h1>
            {wishlist.map((wishlistItem) => (
                <div key={wishlistItem?._id}>
                    <div className="wishlistCard"  key={wishlistItem._id}>
                            <div className="productImage">
                                <img src={wishlistItem.img} alt="book-cover" />
                            </div>
                            <div className="productDescription">
                                <div>
                                    <p className="productName">{wishlistItem.name}</p>
                                    <p className="productAuthor">{wishlistItem.author}</p>
                                    <p className="productPrice"><span>Rs.{wishlistItem.price}{"  "}</span><span className="originalPrice">{" "}Rs. {wishlistItem.originalPrice}</span></p>
                                </div>
                                <div>
                                <button className="btn-moveToCart" style={{backgroundColor: isProductInCart(wishlistItem) ? "lightgray" : "#007bb5" }} disabled={isProductInCart(wishlistItem)} onClick={() => handleMoveToCart(wishlistItem)}>{isProductInCart(wishlistItem) ? "Item In Cart" : "Move To Cart"}</button>
                                    <button className="btn-remove" onClick={() => handleRemoveFromWishlist(wishlistItem)}>Remove</button>
                                </div>
                            </div>
                    </div>
                </div>
                
            ))}
        </>
    )
}