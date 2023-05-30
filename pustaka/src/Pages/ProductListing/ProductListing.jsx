import { useContext, useEffect } from "react"
import { DataContext } from "../../Contexts/DataContext"
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import "./ProductListing.css";
import { SideBar } from "../../Components/SideBar/SideBar";
import { RotatingLines } from "react-loader-spinner"


export const ProductListing = () => {

    const { products, loader, changeTitle } = useContext(DataContext);

    useEffect(() => {
        changeTitle("Products")
    }, [changeTitle])
    return (
        <>
            <div className="product-listing-page">

                <SideBar />
                <div className="list-of-products">
                    {loader ? <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        margin="auto"
                        visible={true}
                    /> : ""}
                    {!loader && <>
                        <div className="total-products">
                            <h3>Showing All products ({products?.length})</h3>
                        </div>
                        <div className="cards-section">
                            {products?.length ? products.map((product) => (
                                <ProductCard key={product?._id} product={product} />
                            )) : <h1>No Products Available</h1>}
                        </div></>}
                </div>
            </div>
        </>
    )
}