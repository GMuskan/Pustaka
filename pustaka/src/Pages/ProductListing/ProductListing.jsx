import { useContext } from "react"
import { DataContext } from "../../Contexts/DataContext"
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import "./ProductListing.css";
import { SideBar } from "../../Components/SideBar/SideBar";


export const ProductListing = () => {

    const { products } = useContext(DataContext);
   
    return(
        <>
            <div className="product-listing-page">
                <SideBar />
                
                <div className="list-of-products">
                    <div className="total-products">
                        <h3>Showing All products ({products?.length})</h3>
                    </div>
                    <div className="cards-section">
                        {products?.length ? products.map((product) => (
                        <ProductCard key={ product?._id } product={product} />
                    )) : <h1>No Products Available</h1>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}