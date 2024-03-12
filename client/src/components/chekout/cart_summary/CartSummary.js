import './cart_summary.css'
import { useContext } from 'react'
import AppContext from '../../app_context/AppContext'
import CartItem from './cart_item/CartItem'

const CartSummary = () => {
    const {cart} = useContext(AppContext)
    const total = cart.reduce((totals,  item) => totals + (item.quantity * item.price) , 0)
  return (
    <div>
        <div className='cart-summary'>
            <h3>CART SUMMARY</h3>
            <div>
                {
                    cart.map(item => <CartItem item={item} /> )
                }
            </div>
            <div className='totals'>
                <div className='flex-row-center'>
                    <div>Total</div>
                    <div><b>${total}</b></div>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default CartSummary