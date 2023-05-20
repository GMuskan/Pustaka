import { useContext, useEffect, useReducer } from "react"
import { FaShoppingCart } from "react-icons/fa";
import * as axios from 'axios';
import "./Wishlist.css"
import { DataContext } from "../../Contexts/DataContext";
import { DataReducer, initialState } from "../../Reducers/dataReducer";
export const Wishlist = () => {
    const { handleAddToCart, token } = useContext(DataContext);

    const [state, dispatch] = useReducer(DataReducer, initialState);

    const getUserWishlist = async () => {
          if (token) {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.get('/api/user/wishlist', {
                headers: {
                    authorization: encodedToken,
                },
            })
            console.log(response?.data?.wishlist);
            dispatch({ type: "SET_WISHLIST", payload: response.data.wishlist });
          }
    }

    useEffect(() => {
        getUserWishlist();
    },[])
    
    return(
        <>
            <h1>Wishlist</h1>
            {state?.wishlist.map((wishlistItem) => (
                <>
                    <div className="wishlistCard"  key={wishlistItem._id}>
                            <div className="productImage">
                                <img src={wishlistItem.img} alt="book-cover" />
                            </div>
                            <div className="productDescription">
                                <div>
                                    <p className="productName">{wishlistItem.name}</p>
                                    <p className="productAuthor">{wishlistItem.author}</p>
                                    <p className="productPrice"><span>Rs.{wishlistItem.price}{"  "}</span><span className="originalPrice">{" "}Rs. {wishlistItem.originalPrice}</span></p>
                                </div>
                                <div>
                                    <button className="btn-addToCart" onClick={() => handleAddToCart(wishlistItem)}><FaShoppingCart />  Move To Cart</button>
                                    <button className="btn-remove">Remove</button>
                                </div>
                            </div>
                    </div>
                </>
                
            ))}
        </>
    )
}