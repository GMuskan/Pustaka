import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css"
import { useContext, useEffect } from "react";
import { DataContext } from "../../Contexts/DataContext";
import { changeTitle } from "../../utils/commonUtils";
import homeImage from "../../Assets/home-img.jpg";
import linkedInImage from "../../Assets/linkedin.png";
import twitterImage from "../../Assets/twitter.png";

const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    textDecoration: "none",
    fontWeight: isActive ? "600" : "200",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "white"
});

export const Home = () => {
    const navigate = useNavigate()

    const { categories, categoryClickHandler } = useContext(DataContext);
    useEffect(() => {
        changeTitle("Ecommerce")
    }, [])

    return (
        <>
            <div className="home">
                <div className="header">
                    <img src={homeImage} alt="book-cover" />
                    <div className="image-overlay">
                        <p>Welcome to Pustaka,</p>
                        <p className="sub-heading">For All Your Reading Needs</p>
                        <button className="shop-now-btn" onClick={() => navigate("/products")}>SHOP NOW</button>
                    </div>
                </div>
                <div className="categories">
                    <p className="featured-categories">Featured Book Categories</p>
                    <p>There are many categories of books available at Pustaka. Choose your favorite one now.</p>
                    <div className="book-categories">
                        {categories && categories.map(({ _id, categoryName, description }) => (
                            <button key={_id} onClick={() => categoryClickHandler(_id)}>
                                <h3>{categoryName}</h3>
                                <p>{description}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <footer>
                    <div className="About">
                        <h2>Pustaka</h2>
                        <p>Fill your house with stacks of books, in all the crannies and all the nooks.</p>
                        {/* <p>Privacy Policy</p>
                        <p>Terms of Use</p> */}
                        <p>© 2023 Pustaka</p>
                    </div>
                    <div className="connect">
                        <p>Connect</p>
                        <div className="connect-buttons">
                            <button><NavLink style={getActiveStyle} to="https://github.com/GMuskan"><i className="fa fa-github-square" style={{ fontSize: "22px" }} aria-hidden="true"></i></NavLink></button>
                            <button><NavLink style={getActiveStyle} to="https://www.linkedin.com/in/muskan-gupta-75482b166/"><img src={linkedInImage} alt="linkedin-icon" /></NavLink></button>
                            <button><NavLink style={getActiveStyle} to="https://twitter.com/Muskaan58571762"><img src={twitterImage} alt="twitter-icon" /></NavLink></button>
                        </div>
                    </div>
                    <div className="resources">
                        <p>Resources</p>
                        <div>
                            <button style={{ color: "white" }} onClick={() => navigate("/signup")}>
                                Sign  Up
                            </button>
                        {/* </div>
                        <div> */}
                            <button style={{ color: "white" }} onClick={() => navigate("/login")}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}