import {useContext, useEffect, useState} from "react"
import AppContext from "../app_context/AppContext"
import "./cart_section.css"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import LandingTop from "../landing_top/LandingTop"


const CartSection = () => {
    const {cart} = useContext(AppContext)
    const [totals, setTotals] = useState(0)

    const updateTotals = () => {
        setTotals(cart.reduce((accum, item) => accum + (item.price * item.quantity), 0))
    }

    useEffect(() =>{
        updateTotals()
    }, [cart.length])

    useEffect(() => {
        updateTotals()
    }, [])

  return (
    <div className='cart-section'>
        <LandingTop title={'Cart Section'} />
        <div className='main-content flex-row-center'>
            <table>
                <tbody>
                    {useContext(AppContext).cart.map((item, index) => <CartItem key={index} cartItem={item} updateTotals={updateTotals}/>)}
                    <tr>
                        
                        
                    </tr>
                </tbody>
            </table>
            <div className="total-checkout">
                <h3>CART TOTALS</h3>
                <div className="flex-row-center">
                    <h5>SUBTOTAL</h5>
                    <h3>${Math.round(totals)}</h3>
                </div>
                <p>Shipping</p>
                <p>Free Shipping</p>
                <div className="flex-row-center">
                    <h5>TOTAL</h5>
                    <h3>${Math.round(totals)}</h3>
                </div>
                <div className="checkout-btn-container">
                    <Link to="/checkout" className="checkout-btn">Proceed To Checkout <i class="bi bi-cart-check"></i></Link >
                </div>
            </div>
            
        </div>
        
        
    </div>
  )
}

export default CartSection