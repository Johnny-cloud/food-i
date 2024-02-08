import {useContext, useEffect, useState} from "react"
import AppContext from "../app_context/AppContext"
import {Table} from "react-bootstrap"
import "./cart_section.css"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

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
        <h1>My Cart</h1>
        <table>
            <tbody>
                {useContext(AppContext).cart.map((item, index) => <CartItem key={index} cartItem={item} updateTotals={updateTotals}/>)}
                <tr>
                    <div className="flex-row-center">
                        <div><h4>Total</h4></div>
                        <div><h3>${Math.round(totals)}</h3></div>
                    </div>
                    
                </tr>
            </tbody>
        </table>
        <div className="checkout-btn-container">
            <Link to="/checkout" className="checkout-btn">Proceed To Checkout <i class="bi bi-cart-check"></i></Link >
        </div>
        
    </div>
  )
}

export default CartSection