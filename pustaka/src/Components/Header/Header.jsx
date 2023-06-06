import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { AuthContext } from "../../Contexts/AuthContext";


export const Header = () => {
    const navigate = useNavigate();
    const { searchProductHandler, wishlist, cart, search } = useContext(DataContext);
    const { authState } = useContext(AuthContext);
    const { logoutClickHandler } = useContext(AuthContext);


    return (
        <>
            <nav>
                <div className="appName" onClick={() => navigate("/")}>
                    Pustaka
                </div>
                <div className="search-container">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input
                        type="text"
                        placeholder="Search for product"
                        className="search-bar"
                        value={search}
                        onChange={(e) => searchProductHandler(e)}
                    />
                </div>
                <div className="actionItems">
                    <button className="btn-wishlist" onClick={() => navigate("/wishlist")}>
                        <div className="btn-icon">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        {authState?.token && wishlist && <div className="btn-count">
                            <p>{wishlist?.length}</p>
                        </div>}
                    </button>

                    <button className="btn-cart" onClick={() => navigate("/cart")}>
                        <div className="btn-icon">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        {authState?.token && cart && <div className="btn-count">
                            <p>{cart?.length}</p>
                        </div>}
                    </button>
                    <button className="btn-user" onClick={() => navigate("/user-profile")}>
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </button>
                </div>
                {authState?.user &&
                    <div className="user-name">
                        Welcome, {authState?.user?.firstName}!
                    </div>
                }
                <div className="logout-btn">
                    <button className="btn-user" onClick={logoutClickHandler}>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                </div>
            </nav>
        </>
    )
}