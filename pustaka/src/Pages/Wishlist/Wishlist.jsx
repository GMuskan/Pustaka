import { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa";
import "./Wishlist.css"
import { DataContext } from "../../Contexts/DataContext";
export const Wishlist = () => {
    const { handleMoveToCart, handleRemoveFromWishlist, wishlist } = useContext(DataContext);
    
    return(
        <>
            <h1>Wishlist: ({wishlist.length})</h1>
            {wishlist.map((wishlistItem) => (
                <>
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
                                    <button className="btn-moveToCart" onClick={() => handleMoveToCart(wishlistItem)}><FaShoppingCart />  Move To Cart</button>
                                    <button className="btn-remove" onClick={() => handleRemoveFromWishlist(wishlistItem)}>Remove</button>
                                </div>
                            </div>
                    </div>
                </>
                
            ))}
        </>
    )
}