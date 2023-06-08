import { createContext, useContext, useEffect, useReducer, useState } from "react";
import * as axios from 'axios';
import { DataReducer, initialState } from "../Reducers/dataReducer";
import { useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { clearCart, clearWishlist } from "../utils/commonUtils";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { initialOrderAddressState, orderReducer } from "../Reducers/OrderReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const navigate = useNavigate();

    const [state, dispatch] = useReducer(DataReducer, initialState);
    const [loader, setLoader] = useState(false);
    const [couponModal, setCouponModal] = useState(false);
    const [couponValue, setCouponValue] = useState({ couponName: "", value: 0 })
    const [orderState, orderDispatch] = useReducer(orderReducer, initialOrderAddressState)
    // const {deliveryAddress} = useContext(AuthContext);
    const [isProfileTab, setIsProfileTab] = useState(true)


    const { authState } = useContext(AuthContext);

    const token = authState?.token;

    const getData = async () => {
        try {
            setLoader(true);
            const productsData = await axios.get('/api/products');
            dispatch({ type: "SET_PRODUCTS", payload: productsData?.data?.products });
            const categoriesData = await axios.get('/api/categories');
            dispatch({ type: "SET_CATEGORIES", payload: categoriesData?.data?.categories });
            setLoader(false);
        } catch (e) {
            setLoader(false);
            console.error(e)
        }
    }

    const getProductDetails = async (productId) => {
        try {
            const response = await axios.get(`/api/products/${productId}`);
            dispatch({ type: "SET_PRODUCT_DETAILS", payload: response?.data?.product })
            navigate(`/products/${productId}`)
        } catch (e) {
            console.error(e);
        }
    }

    const categoryClickHandler = async (categoryId) => {
        dispatch({ type: "RESET_FILTERS", payload: [] })
        try {
            const response = await axios.get(`/api/categories/${categoryId}`)
            dispatch({ type: "SET_CATEGORY_FILTER", payload: response?.data?.category?.categoryName })
            navigate("/products");
        } catch (e) {
            console.error(e)
        }
    }

    const sortByPrice = (e) => {
        dispatch({ type: "SET_PRICE_FILTER", payload: e.target.value })
    }

    const filterByCategory = (e) => {
        dispatch({ type: "SET_CATEGORY_FILTER", payload: e.target.value })
    }

    const filterByRatings = (e) => {
        dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
    }

    const filterByPriceRange = (e) => {
        dispatch({ type: "FILTER_BY_PRICE_RANGE", payload: e.target.value })
    }

    const searchProductHandler = (e) => {
        dispatch({ type: "SET_SEARCH", payload: e.target.value })
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
        dispatch({ type: "CLEAR_FILTERS" })
    }

    const checkoutClickHandler = (totalPrice, totalDiscount, totalAmount) => {
        navigate("/checkout")
        dispatch({ type: "SET_ORDER_SUMMARY", payload: { price: totalPrice, discount: totalDiscount, amount: totalAmount, coupon: couponValue } })
    }

    const loadScript = async (url) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = url;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorPay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        console.log(res);

        if (!res) {
            toast.error("Razorpay SDK failed to load, check you connection");
            return;
        }

        const options = {
            key: "rzp_test_urWCFf025crWcy",
            key_secret: "P00usi7xt5MhXcydMume4O1p",
            amount: state?.orderSummary?.amount * 100,
            currency: "INR",
            name: "Pustaka",
            description: "Thank you for shopping with us",
            image: "https://github.com/GMuskan/Pustaka/blob/main/pustaka/src/Assets/app-icon.png?raw=true",
            handler: function (response) {
                // eslint-disable-next-line
                const orderData = {
                    _id: uuid(),
                    orderProducts: [...state?.cart],
                    amount: state?.orderSummary?.amount,
                    deliveryAddress: orderState?.orderAddress,
                    paymentId: response.razorpay_payment_id,
                };

                // setOrder({ ...orderData });
                // setOrderPlace(true);
                // clearCart(productDispatch, productState?.cart, encodedToken);
                // productDispatch({ type: "setCartReset" });
                // orderDispatch({ type: "setOrderReset" });
                toast.success(`Payment of Rs. ${state?.orderSummary?.amount} Successful!`);
            },
            prefill: {
                name: orderState?.orderAddress?.name,
                contact: orderState?.orderAddress?.mobile,
            },
            theme: {
                color: "#007bb5",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const handlePlaceOrderClick = () => {
        displayRazorPay();
        // setTimeout(() => {
        //     navigate("/products")
        // }, 2000);
        // navigate("/place-order");
        // clearCart(dispatch);
        // deleteCart(token, dispatch);
    }

    useEffect(() => {
        const getWishlistAndCart = async () => {
            try {
                if (token) {
                    const wishlistResponse = await axios.get('/api/user/wishlist', {
                        headers: {
                            authorization: token,
                        },
                    })
                    const cartResponse = await axios.get('/api/user/cart', {
                        headers: {
                            authorization: token,
                        },
                    })
                    dispatch({ type: "SET_INITIAL_WISHLIST", payload: wishlistResponse?.data?.wishlist });
                    dispatch({ type: "SET_INITIAL_CART", payload: cartResponse?.data?.cart });

                }
            } catch (e) {
                console.error(e)
            }

        }
        getData();
        !token && clearWishlist(dispatch);
        !token && clearCart(dispatch);
        !token && clearFilterHandler();
        token && getWishlistAndCart();
    }, [token])

    return (
        <>
            <DataContext.Provider value={{
                sortByPrice, filterByCategory, filterByRatings, filterByPriceRange, clearFilterHandler, searchProductHandler, getProductDetails,
                setCouponModal, setCouponValue, dispatch, checkoutClickHandler, handlePlaceOrderClick, categoryClickHandler,
                isProfileTab, setIsProfileTab,
                orderState, orderDispatch,
                couponValue, couponModal,
                loader, state,
                products: searchedProducts,
                productDetail: state.productDetail,
                categories: state.categories,
                cart: state.cart,
                wishlist: state.wishlist,
                categoryFilter: state.categoryFilter,
                priceFilter: state?.sortByPrice,
                ratingFilter: state?.rating,
                priceRangeFilter: state?.priceRange,
                orderSummary: state?.orderSummary,
                search: state?.search
            }}>
                {children}
            </DataContext.Provider>
        </>
    )
}