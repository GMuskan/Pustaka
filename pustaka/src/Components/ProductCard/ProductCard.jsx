import { useContext } from "react"
import { DataContext } from "../../Contexts/DataContext"
import "./ProductCard.css"
import { useNavigate } from "react-router";
import { handleAddToCart } from "../../Services/CartService";
import { handleAddToWishlist, handleRemoveFromWishlist } from "../../Services/WishlistService";
import { isProductInCart, isProductInWishlist, calculatePercentOff } from "../../utils/commonUtils";
import { AuthContext } from "../../Contexts/AuthContext";
export const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const { authState } = useContext(AuthContext);

    const { state, dispatch, getProductDetails } = useContext(DataContext);

    const token = authState?.token;

    const isInCart = isProductInCart(product, token, state);

    const addToCartHandler = (product) => {
        token ? isInCart ? navigate("/cart") : handleAddToCart(product, token, dispatch) : navigate("/login")
    }

    const isInwishlist = isProductInWishlist(product, token, state);

    const addToWishlistHandler = (product) => {
        token ? isInwishlist ? handleRemoveFromWishlist(product, token, dispatch) : handleAddToWishlist(product, token, dispatch) : navigate("/login")
    }


    return (
        <>
            <div className="productCard" key={product?._id}>
                <div className="productImage">
                    <div></div>
                    <div>
                        <img src={product?.img} alt="book-cover"
                            onClick={() => getProductDetails(product?._id)}
                        />
                    </div>
                    <button className="btn-wishlist" onClick={() => addToWishlistHandler(product)}>
                        <i className="fa fa-heart" aria-hidden="true" style={{ color: isInwishlist ? "red" : "grey" }}></i>
                    </button>
                </div>
                
                <div className="productDescription">
                    <div className="product-desc-details">
                        <p className="productName">{product?.name}</p>
                    </div>
                    <div className="product-author-rating">
                        <div>
                            <p className="productAuthor">{product?.author}</p>
                            <p className="productAuthor">{product?.category}</p>
                        </div>
                        <div className="productRating">
                            {product?.rating}
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="product-desc-price">
                    <p className="productPrice"><span>₹{product?.price}{"  "}</span><span className="originalPrice">{" "}Rs. {product?.originalPrice}</span><span className="discount">{" "}({calculatePercentOff(product?.price, product?.originalPrice)}%OFF)</span></p>
                </div>
                <button className="btn-addToCart" onClick={() => addToCartHandler(product)}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    {!isInCart ? "Add To Cart" : "Go To Cart"}
                </button>
                {product?.isBestSeller && <div className="product-tag">
                    Best Seller
                </div>}
            </div>
        </>
    )
}