import "./cart_summary.css"
import { useContext, useState, useEffect } from "react"
import AppContext from "../../../app_context/AppContext"
import CartSummaryItem from "./cart_summary_item/CartSummaryItem"
import { Table } from "react-bootstrap"

const CartSummary = () => {
    const {cart} = useContext(AppContext)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        setSubTotal(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0))
    }, [cart])

  return (
    <div className='cart-summary'>
        <h3>Cart Summary</h3>
       <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </thead>
            <tbody>
                {cart.map(item => (
                    <CartSummaryItem key={item._id} item={item} />
                ))}
                <tr>
                  <td><h5>Subtotal</h5></td>
                  <td></td>
                  <td><h5>${subTotal}</h5></td>
                </tr>
            </tbody>
       </table>
    </div>
  )
}

export default CartSummary