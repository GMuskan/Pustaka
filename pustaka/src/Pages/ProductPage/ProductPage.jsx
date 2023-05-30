import { useContext, useEffect } from "react";
import { DataContext } from "../../Contexts/DataContext";
import "./ProductPage.css";
export const ProductPage = () => {
    const { productDetail, changeTitle } = useContext(DataContext);

    useEffect(() => {
        changeTitle(productDetail?.name)
    }, [productDetail?.name, changeTitle])

    return (
        <>
            {Object.keys(productDetail)?.length &&
                <div className="product-card-container">
                    <div className="product-image">
                        <img src={productDetail?.img} alt="book-cover-page" />
                    </div>
                    <div className="product-details">
                        <div className="product-details-header">
                            <h1>{productDetail?.name}</h1>
                            <p>{productDetail?.rating}<i className="fa fa-star" aria-hidden="true"></i></p>
                            <p><span>Rs. {productDetail?.price}</span>{" "}<span style={{ textDecoration: "line-through" }}>Rs. {productDetail?.originalPrice}</span></p>
                        </div>
                        <div className="product-details-tags">
                            <p>Fastest Delivery</p>
                            <p>Inclusive of All Taxes</p>
                            <p>Cash On Delivery</p>
                        </div>
                        <div className="product-details-info">
                            <p>Author: {productDetail?.author}</p>
                            <p>Category: {productDetail?.category}</p>
                            <p>Binding: Hard Cover</p>
                            <p>Language: English</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}