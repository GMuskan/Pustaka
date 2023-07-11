import { useContext, useEffect, useMemo, useState } from "react"
import { DataContext } from "../../Contexts/DataContext"
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import "./ProductListing.css";
import { SideBar } from "../../Components/SideBar/SideBar";
import { Loader } from "../../Components/Loader/Loader";
import { changeTitle } from "../../utils/commonUtils";
import { Pagination } from "../../Components/Pagination/Pagination";

export const ProductListing = () => {
    let PageSize = 8;

    const { products, loader } = useContext(DataContext);
    const [currentPage, setCurrentPage] = useState(1);

    const currentPageData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize, products]);

    useEffect(() => {
        changeTitle("Products")
    }, [])
    return (
        <>
            <div className="product-listing-page">
                <SideBar />
                <div className="list-of-products">
                    {loader && <Loader />}
                    {!loader &&
                        <>
                            <div className="total-products">
                                <h3>Showing All products ({products?.length})</h3>
                            </div>

                            {currentPageData?.length ?
                                <div className="cards-section">
                                    {currentPageData.map((product) => (
                                        <ProductCard key={product?._id} product={product} />
                                    ))}
                                </div>
                                :
                                <div className="no-products">
                                    <h1>No Products Available</h1>
                                </div>

                            }

                            {/* <div className="cards-section">
                        {
                            currentPageData?.length
                                ? currentPageData.map((product) => (
                                    <ProductCard key={product?._id} product={product} />
                                ))
                                :
                                <div className="no-products">
                                    <h1>No Products Available</h1>
                                </div>
                        }
                    </div> */}
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={products.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </>
                    }
                </div>
            </div >
        </>
    )
}