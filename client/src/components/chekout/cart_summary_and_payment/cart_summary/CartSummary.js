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
       <Table striped>
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
                  <td><h4>Subtotal</h4></td>
                  <td></td>
                  <td><h4>${subTotal}</h4></td>
                </tr>
            </tbody>
       </Table>
    </div>
  )
}

export default CartSummary