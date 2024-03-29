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
                        placeholder="Search"
                        className="search-bar"
                        value={search}
                        onChange={(e) => {
                            navigate("/products")
                            searchProductHandler(e)
                        }}
                    />
                </div>
                <div className="actionItems">
                    <button className="btn-wishlist" onClick={() => navigate("/wishlist")}>
                        <div className="btn-icon">
                            <i className="fa fa-heart" aria-hidden="true" onClick={() => navigate("/wishlist")}></i>
                        </div>
                        {authState?.token && wishlist?.length > 0 &&
                            <div className="btn-count">
                                <p>{wishlist?.length}</p>
                            </div>
                        }
                    </button>
                    <button className="btn-cart" onClick={() => navigate("/cart")}>
                        <div className="btn-icon">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        {authState?.token && cart?.length > 0 && <div className="btn-count">
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
                    {authState?.token ? <button className="btn-user" onClick={logoutClickHandler}>
                        <span>Logout</span> <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button> : <button className="btn-user" onClick={() => navigate("/login")}>
                        <span>Login</span> <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>}
                </div>
            </nav>
        </>
    )
}