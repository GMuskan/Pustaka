import { useContext, useEffect } from "react"
import { DataContext } from "../../Contexts/DataContext"
import { CartProduct } from "../../Components/CartProduct/CartProduct";
import { CartPrice } from "../../Components/CartPrice/CartPrice";
import { CouponModal } from "../../Components/Modal/CouponModal";
import "./Cart.css";

export const Cart = () => {
    const { cart, couponModal, changeTitle } = useContext(DataContext);

    useEffect(() => {
        changeTitle("Cart")
    }, [changeTitle])
    return (
        <>
            <h1>My Cart</h1>
            {cart?.length ?
                <>
                    <div className="cart-page">

                        <div className="cartList">
                            {cart.map((cartItem) => <CartProduct cartItem={cartItem} key={cartItem?.id} />)}
                        </div>
                        <div className="total-price-card">
                            <CartPrice cart={cart} />
                        </div>
                    </div>
                </>
                : <h2>Your cart is Empty!</h2>
            }
            {couponModal && <CouponModal />}
        </>
    )
}