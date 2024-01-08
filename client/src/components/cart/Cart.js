import {useContext} from 'react'
import AppContext from '../app_context/AppContext'
import CartItem from './CartItem'

const Cart = () => {
    const {cart} = useContext(AppContext)

    return (
        <div className='cart'>
            <h1>Cart</h1>
            {cart.length > 0 ? (
                cart.map(item => <CartItem cartItem={item} key={item._id} />)
            ) : "No products in cart"}
        </div>
    )
}

export default Cart