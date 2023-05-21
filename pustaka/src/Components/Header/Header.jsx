import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: isActive ? "900" : "600",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "darkblue" : "white"
  });

export const Header = () => {
    const navigate = useNavigate();
    const { searchProductHandler, wishlist, cart } = useContext(DataContext)
    return(
        <>
        <nav>
            <div className="appName">
                <NavLink
                    style={getActiveStyle}
                    to="/">Pustaka</NavLink>{"  "}
            </div>
                <div className="search-container">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input
                        type="text"
                        placeholder="Search for product"
                        className="search-bar"
                        onChange={(e) => searchProductHandler(e)}
                    />
            </div>
            <div className="actionItems">
                <button className="btn-wishlist" onClick={() => navigate("/wishlist")}>
                    <div className="btn-icon">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                    <div className="btn-count">
                        <p>{wishlist.length}</p>
                    </div>    
                </button>

                <button className="btn-cart" onClick={() => navigate("/cart")}>
                    <div className="btn-icon">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                    <div className="btn-count">
                        <p>{cart.length}</p>
                    </div> 
                </button>
                <button className="btn-user" onClick={() => navigate("/user-profile")}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                </button>
            </div>           
        </nav>
        </>
    )
}