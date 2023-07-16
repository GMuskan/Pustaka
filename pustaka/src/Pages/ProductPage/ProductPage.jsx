import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { changeTitle, isProductInCart, isProductInWishlist } from "../../utils/commonUtils";
import { useNavigate } from "react-router";
import "./ProductPage.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { handleAddToCart } from "../../Services/CartService";
import { handleAddToWishlist, handleRemoveFromWishlist } from "../../Services/WishlistService";

export const ProductPage = () => {
    const navigate = useNavigate();
    const { productDetail, products, state, dispatch } = useContext(DataContext);

    const [showMore, setShowMore] = useState(false)
    const totalStars = 5;
    const activeStars = productDetail?.rating;

    const product = products.find(item => item?._id === productDetail?._id)


    const { authState } = useContext(AuthContext);


    const token = authState?.token;

    const isInCart = isProductInCart(product, token, state);

    const addToCartHandler = (product) => {
        token ? isInCart ? navigate("/cart") : handleAddToCart(product, token, dispatch) : navigate("/login")
    }

    const isInwishlist = isProductInWishlist(product, token, state);

    const addToWishlistHandler = (product) => {
        token ? isInwishlist ? handleRemoveFromWishlist(product, token, dispatch) : handleAddToWishlist(product, token, dispatch) : navigate("/login")
    }



    useEffect(() => {
        changeTitle(productDetail?.name)
    }, [productDetail?.name])

    return (
        <>
            {Object.keys(productDetail)?.length &&
                <div className="product-card-container">
                    <div className="product-image">
                        <img src={productDetail?.img} alt="book-cover-page" />
                    </div>
                    <div className="product-details">
                        <div className="product-details-header">
                            <h2>{productDetail?.name}</h2>
                            <button className="btn-wishlist-product-details" onClick={() => addToWishlistHandler(product)}>
                                <i className="fa fa-heart" aria-hidden="true" style={{ color: isInwishlist ? "red" : "grey" }}></i>
                            </button>
                        </div>
                        <div className="product-details-tags">
                            <p>{productDetail?.author} {" "}|{" "} {productDetail?.rating}
                                {[...new Array(totalStars)].map((arr, index) => {
                                    return index < activeStars ? <i className="fa fa-star" aria-hidden="true" style={{ color: "goldenrod", padding: "0.5rem" }} key={index}></i> : <i className="fa fa-star-o" aria-hidden="true" style={{ padding: "0.5rem" }} key={index}></i>;
                                })}

                            </p>
                            <p><span>{" "}Rs. {productDetail?.price}</span>{" "}<span style={{ textDecoration: "line-through" }}>Rs. {productDetail?.originalPrice}</span></p>
                            <p><i className="fa fa-truck" aria-hidden="true"></i>{" "}Fastest Delivery</p>
                            <p><i className="fa fa-inr" aria-hidden="true"></i>{" "}Inclusive of All Taxes</p>
                            <p><i className="fa fa-shopping-bag" aria-hidden="true"></i>{" "}Cash On Delivery</p>
                        </div>
                        <div className="product-details-info">
                            {/* <p>Author: {productDetail?.author}</p> */}
                            <p>Category: {productDetail?.category}</p>
                            <p>Binding: Hard Cover</p>
                            <p>Language: English</p>
                            {showMore ? productDetail?.description : `${productDetail?.description.substring(0, 250)}`}
                            <button className="show-btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                        </div>
                        <div>
                            <button className="btn-addToCart-product-details" onClick={() => addToCartHandler(product)}>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                                {!isInCart ? "Add To Cart" : "Go To Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}