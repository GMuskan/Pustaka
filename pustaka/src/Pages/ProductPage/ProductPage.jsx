import { useContext } from "react";
import { useParams } from "react-router"
import { DataContext } from "../../Contexts/DataContext";
import "./ProductPage.css";
export const ProductPage = () => {
    const { productId } = useParams();
    const { products } = useContext(DataContext);
    const foundProduct = products.find((product) => product._id === productId);
    return (
        <>
            <h1>Product Page</h1>
            <div className="product-card-container">
                <div className="product-image">
                    <img src={foundProduct.img} alt="book-cover-page"/>
                </div>
                <div className="product-details">
                    <div className="product-details-header">
                        <h1>{foundProduct.name}</h1>
                        <p>{foundProduct.rating}<i className="fa fa-star" aria-hidden="true"></i></p>
                        <p><span>Rs. {foundProduct.price}</span>{" "}<span style={{ textDecoration: "line-through" }}>Rs. {foundProduct.originalPrice}</span></p>
                    </div>
                    <div className="product-details-tags">
                        <p>Fastest Delivery</p>
                        <p>Inclusive of All Taxes</p>
                        <p>Cash On Delivery</p> 
                    </div>
                    <div className="product-details-info">
                        <p>Author: {foundProduct.author}</p>
                        <p>Category: {foundProduct.category}</p>
                        <p>Binding: Hard Cover</p>
                        <p>Language: English</p>
                    </div>
                </div>
            </div>
        </>
    )
}