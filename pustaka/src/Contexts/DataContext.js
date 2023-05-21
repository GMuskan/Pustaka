import { createContext, useEffect, useReducer, useState } from "react";
import * as axios from 'axios';
import { DataReducer, initialState } from "../Reducers/dataReducer";
import { useNavigate } from "react-router";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(DataReducer, initialState);
    const localStorageUser = JSON.parse(localStorage?.getItem("user"));
    const localStorageToken = JSON.parse(localStorage?.getItem("token"));
    const [token, setToken] = useState(localStorageToken);
    const [user, setUser] = useState(localStorageUser)
    
    const getData = async() => {
        try{
            const productsData = await axios.get('/api/products');
            dispatch({ type: "SET_PRODUCTS", payload: productsData?.data?.products });
            const categoriesData = await axios.get('/api/categories');
            dispatch({ type: "SET_CATEGORIES", payload: categoriesData?.data?.categories });
        }catch(e){
            console.error(e)
        }
    }

    const handleSignUpClick = async ({firstName, lastName, email, password}) => {
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify(
                    {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    }
                ),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
            const {createdUser, encodedToken} = await response.json();
            localStorage.setItem("user", JSON.stringify({ user: createdUser }))
            setUser(createdUser);
            localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
            setToken(encodedToken);
        } catch (e) {
            console.error(e);
        }

    }

    const handleLoginClick = async({email, password}) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email: email,
                        password: password
                    }
                ),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const { foundUser, encodedToken } = await response.json();
            localStorage.setItem("user", JSON.stringify({ user: foundUser }));
            setUser(foundUser);
            localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
            setToken(encodedToken);
        } catch (e) {
            console.error(e)
        }
    }

    const logoutClickHandler = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setToken("");
        setUser();
        navigate("/products");
    }

    const getUserCart = async () => {
          if (token) {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.get('/api/user/cart', {
                headers: {
                    authorization: encodedToken,
                },
            })
            console.log(response?.data?.cart);
            dispatch({ type: "SET_CART", payload: response?.data?.cart });
          }
    }

    const isProductInCart = (product) => {
        if (token) {
            const foundProduct = state?.cart?.find(item => item._id === product._id)
            if (foundProduct) {
                return true;
            } else {
                return false;
            }
        }
        
    }
    const handleAddToCart = async (product) => {
        try {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.post('/api/user/cart',
                {
                    product,
                }, 
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
                
            );

            dispatch({ type: "SET_CART", payload: response?.data?.cart });
        }catch (e) {
            console.error(e);
        }
    }

    const handleRemoveFromCart = async(product) => {
        try {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.delete(`/api/user/cart/${product._id}`, {
                headers: {
                    authorization: encodedToken,
                },
            });
            console.log(response);
            dispatch({type: "UPDATE_CART", payload: product})

        } catch (err) {
            console.error(err);
        }

    }

    const getUserWishlist = async () => {
          if (token) {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.get('/api/user/wishlist', {
                headers: {
                    authorization: encodedToken, // passing token as an authorization header
                },
            })
            console.log(response?.data?.wishlist);
            dispatch({ type: "SET_WISHLIST", payload: response?.data?.wishlist });
          }
    }

    const isProductInWishlist = (product) => {
        if (token) {
            const foundProduct = state?.wishlist.length > 0 && state?.wishlist?.find(item => item._id === product._id)
            if (foundProduct) {
                return true;
            } else {
                return false;
            }
        }  
    }

    const handleAddToWishlist = async (product) => {
        
        try {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.post('/api/user/wishlist',
                {
                    product,
                }, 
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
                
            );

            dispatch({ type: "SET_WISHLIST", payload: response?.data?.wishlist })
            // handleRemoveFromCart(product);
        }catch (e) {
            console.error(e);
        }
    }

    const handleRemoveFromWishlist = async(product) => {
        try {
            const encodedToken = localStorage.getItem("token");
            const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
                headers: {
                    authorization: encodedToken,
                },
            });
            console.log(response);
             dispatch({type: "UPDATE_WISHLIST", payload: product})

        } catch (err) {
            console.error(err);
        }

    }

    const handleMoveToCart = (product) => {
        if (!state?.cart.find(item => item._id === product._id)) {
            dispatch({type: "SET_CART", payload: [...state?.cart, product]})
        }
        dispatch({type: "UPDATE_WISHLIST", payload: product})
    }

     const handleMoveToWishlist = (product) => {
        if (!state?.wishlist.find(item => item._id === product._id)) {
            dispatch({type: "SET_WISHLIST", payload: [...state?.wishlist, product]})
        }
        dispatch({type: "UPDATE_CART", payload: product})
    }


    const sortByPrice = (e) => {
            dispatch({ type: "SET_PRICE_FILTER", payload: e.target.value })
    }

    const filterByCategory = (e) => {
        dispatch({type: "SET_CATEGORY_FILTER", payload: e.target.value})
    }

    const filterByRatings = (e) => {
        dispatch({type: "FILTER_BY_RATING", payload: e.target.value})
    }

    const filterByPriceRange = (e) => {
        dispatch({type: "FILTER_BY_PRICE_RANGE", payload: e.target.value})
    }

    const searchProductHandler = (e) => {
        dispatch({type: "SET_SEARCH", payload: e.target.value})
    }
    
    const filteredProducts =
        state?.categoryFilter?.length > 0
        ? state?.products?.filter((product) =>
            state?.categoryFilter?.includes(product?.category)
            )
            : state?.products;
    
    const filteredByRatingsProducts =
        state?.rating === 0
            ? filteredProducts
            : filteredProducts.filter((product) => product?.rating >= state?.rating)
    
    const filterByPriceRangeProducts = 
        state?.priceRange === 0
            ? filteredByRatingsProducts
            : filteredByRatingsProducts.filter((product) => product?.price <= +state?.priceRange)
                
    const sortedProducts = state?.sortByPrice !== null ? filterByPriceRangeProducts?.sort((a, b) => state?.sortByPrice === "highToLow" ? b?.price - a?.price : a?.price - b?.price) : filterByPriceRangeProducts

    const searchedProducts = state?.search !== "" ? sortedProducts?.filter((product) => product?.name?.toLowerCase().includes(state?.search)) : sortedProducts

    const clearFilterHandler = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }

    useEffect(() => {
        getData();
    },[])
    
    return (
        <>
            <DataContext.Provider value={{
                handleAddToCart,
                handleSignUpClick,
                handleAddToWishlist,
                handleLoginClick,
                logoutClickHandler,
                sortByPrice,
                filterByCategory,
                filterByRatings,
                filterByPriceRange,
                clearFilterHandler,
                searchProductHandler,
                isProductInCart,
                isProductInWishlist,
                handleRemoveFromWishlist,
                getUserWishlist,
                getUserCart,
                handleRemoveFromCart,
                handleMoveToCart,
                handleMoveToWishlist,
                token, user,
                products: searchedProducts,
                categories: state.categories,
                cart: state.cart,
                wishlist: state.wishlist,
                categoryFilter: state.categoryFilter,
                priceFilter: state?.sortByPrice,
                ratingFilter: state?.rating,
                priceRangeFilter: state?.priceRange
            }}>
                {children}
            </DataContext.Provider>
        </>
    )
}