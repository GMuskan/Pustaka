import { useContext } from "react"
import "./Wishlist.css"
import { DataContext } from "../../Contexts/DataContext";
export const Wishlist = () => {
    const { handleMoveToCart, handleRemoveFromWishlist, isProductInCart, wishlist, calculatePercentOff } = useContext(DataContext);

    return (
        <>
            <h1>My Wishlist</h1>
            {wishlist.map((wishlistItem) => (
                <div key={wishlistItem?._id}>
                    <div className="wishlistCard" key={wishlistItem._id}>
                        <div className="productImage">
                            <img src={wishlistItem.img} alt="book-cover" />
                        </div>
                        <div className="productDescription">
                            <div>
                                <p className="productName">{wishlistItem.name}</p>
                                <p className="productAuthor">{wishlistItem.author}</p>
                                <p className="productPrice"><span>Rs.{wishlistItem.price}{"  "}</span><span className="originalPrice">{" "}Rs. {wishlistItem.originalPrice}</span><span className="discount">{" "}({calculatePercentOff(wishlistItem?.price, wishlistItem?.originalPrice)}%OFF)</span></p>
                            </div>
                            <div>
                                <button className="btn-moveToCart" style={{ backgroundColor: isProductInCart(wishlistItem) ? "lightgray" : "#007bb5" }} disabled={isProductInCart(wishlistItem)} onClick={() => handleMoveToCart(wishlistItem)}>{isProductInCart(wishlistItem) ? "Item In Cart" : "Add To Cart"}</button>
                                <button className="btn-remove" onClick={() => handleRemoveFromWishlist(wishlistItem)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}