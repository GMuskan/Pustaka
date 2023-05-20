import { useContext, useEffect, useReducer } from "react"
import { DataContext } from "../../Contexts/DataContext"
import { FaStar } from "react-icons/fa";
import * as axios from 'axios';
import "./Cart.css";
import { DataReducer, initialState } from "../../Reducers/dataReducer";

export const Cart = () => {
    const { handleAddToWishlist, token } = useContext(DataContext);
     const [state, dispatch] = useReducer(DataReducer, initialState);

    const getUserCart = async () => {
          if (token) {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.get('/api/user/cart', {
                headers: {
                    authorization: encodedToken,
                },
            })
            console.log(response?.data?.cart);
            dispatch({ type: "SET_CART", payload: response.data.cart });
          }
    }

    useEffect(() => {
        getUserCart();
    }, [])
    
    return(
        <>
            <h1>Cart</h1>
            {state?.cart.map((cartItem) => (
                <>
                    <div className="cartCard"  key={cartItem._id}>
                            <div className="productImage">
                                <div></div>
                                <div>
                                    <img src={cartItem.img} alt="book-cover" />
                                </div>
                            </div>
                            <div className="productDescription">
                                <div>
                                    <p className="productName">{cartItem.name}</p>
                                    <p className="productAuthor">{cartItem.author}</p>
                                    <p className="productPrice"><span>Rs.{cartItem.price}{"  "}</span><span className="originalPrice">{" "}Rs. {cartItem.originalPrice}</span></p>
                                </div>
                                <div className="productRating">
                                    <p>{cartItem.rating}<FaStar/></p>
                                    
                            </div>
                            <div>
                                <button className="btn-addToWishlist" onClick={() => handleAddToWishlist(cartItem)}>Add To Wishlist</button>
                                <button className="btn-remove">Remove</button>
                            </div>
                            
                        </div>
                    </div>
                </>
                
            ))}
        </>
    )
}