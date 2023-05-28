import { NavLink, useNavigate } from "react-router-dom";
// import * as axios from 'axios';
import "./Home.css"
import { useContext, useEffect } from "react";
import { DataContext } from "../../Contexts/DataContext";


const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    textDecoration: "none",
    fontWeight: isActive ? "600" : "200",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "white"
});

export const Home = () => {
    const navigate = useNavigate()

    const { categories, changeTitle, categoryClickHandler } = useContext(DataContext);
    useEffect(() => {
        changeTitle("Home")
    }, [])

    return (
        <>
            <div className="home">
                <div className="header">
                    <img src="https://pustaka-react.netlify.app/static/media/home-img.839d5b46.jpg" alt="book-cover" height="400px" />
                    <div className="image-overlay">
                        <p>Welcome to Pustaka,</p>
                        <h1>For All Your Reading Needs</h1>
                        <button className="shop-now-btn" onClick={() => navigate("/products")}>SHOP NOW</button>
                    </div>
                </div>
                <div className="categories">
                    <h1>Featured Book Categories</h1>
                    <p>There are many categories of books available at Pustaka. Choose your favorite one now.</p>
                    <div className="book-categories">
                        {categories && categories.map(({ _id, categoryName, description }) => (
                            <button key={_id} onClick={() => categoryClickHandler(categoryName, _id)}>
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
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>© 2022 Pustaka</p>
                    </div>
                    <div className="connect">
                        <p>Connect</p>
                        <button><NavLink style={getActiveStyle} to="https://github.com/GMuskan">GitHub</NavLink></button>
                        <button><NavLink style={getActiveStyle} to="https://twitter.com/Muskaan58571762">Twitter</NavLink></button>
                        <button><NavLink style={getActiveStyle} to="https://www.linkedin.com/in/muskan-gupta-75482b166/">LinkedIn</NavLink></button>
                    </div>
                    <div className="resources">
                        <p>Resources</p>
                        <div>
                            <button style={{ color: "white" }} onClick={() => navigate("/signup")}>
                                Sign  Up
                            </button>
                        </div>
                        <div>
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