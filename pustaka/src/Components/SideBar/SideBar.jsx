import { useContext, useState } from "react";
import { DataContext } from "../../Contexts/DataContext"
import "./SideBar.css"

export const SideBar = () => {
    const { sortByPrice, filterByCategory, filterByRatings, filterByPriceRange, clearFilterHandler, categories, categoryFilter, priceFilter, ratingFilter, priceRangeFilter } = useContext(DataContext);

    const ratingArray = [1, 2, 3, 4];
    const priceFilterArray = [
        { label: "Low To High", value: "lowToHigh" },
        { label: "High To Low", value: "highToLow" },
    ]

    const [isSideBarExpanded, setIsSideBarExpanded] = useState(false)

    return (
        <div className="sidebar">
            <div className="hamburger" onClick={() => {
                console.log("clicked", isSideBarExpanded)
                setIsSideBarExpanded((prev) => !prev)
            }}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className={isSideBarExpanded ? "FiltersExpanded" : "Filters"}>
                {/* <ul> */}
                <div className="filter-header">
                    <h4>Filters</h4>
                    <button className="btn-clear" onClick={clearFilterHandler}>Clear</button>
                </div>
                <div className="price-range">
                    <label htmlFor="priceRange"><h4>Price</h4></label>
                    <input
                        type="range"
                        id="priceRange"
                        name="priceRange"
                        list="values"
                        key={priceFilter}
                        min={0}
                        max={1000}
                        value={priceRangeFilter}
                        onChange={(e) => filterByPriceRange(e)}
                    />
                    <datalist id="values">
                        <option value="0" label="0">0</option>
                        <option value="500" label="500">500</option>
                        <option value="1000" label="1000">1000</option>
                    </datalist>
                </div>
                <div className="filter-categories">
                    <h4>Category</h4>
                    {categories?.map(({ _id, categoryName }) => (
                        <div key={_id}>
                            <label >
                                <input
                                    type="checkbox"
                                    key={categoryName}
                                    value={categoryName}
                                    checked={categoryFilter?.includes(categoryName)}
                                    onChange={(e) => filterByCategory(e)}
                                />
                                {categoryName}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="filter-ratings">
                    <h4>Rating</h4>
                    {ratingArray.map((rating) =>
                        <label key={rating}>
                            <input
                                type="radio"
                                name="rating"
                                key={rating}
                                value={rating}
                                checked={Number(ratingFilter) === Number(rating)}
                                onChange={(e) => filterByRatings(e)}
                            />
                            {rating} stars & above
                        </label>
                    )}
                </div>

                <div className="filter-sorting">
                    <h4>Sort By</h4>
                    {priceFilterArray.map(({ label, value }) => (
                        <label key={value}>
                            <input
                                type="radio"
                                name="price-filter"
                                key={value}
                                value={value}
                                checked={priceFilter === value}
                                onChange={(e) => sortByPrice(e)}
                            />
                            Price - {label}
                        </label>
                    ))}
                </div>
                {/* </ul> */}
            </div>
        </div>
    )
}