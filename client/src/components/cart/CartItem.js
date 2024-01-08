import "./cart_item.css"
import { useContext } from "react"
import AppContext from "../app_context/AppContext"

const CartItem = ({cartItem}) => {

    const {cart, setCart} = useContext(AppContext)

    const deleteItem = () => {
        let filteredCart = cart.filter(item => item._id !== cartItem._id)
        setCart([...filteredCart])
    }
  
    return(
        <div className='cart-item'>
            <div className='image-container'><img src={cartItem.image} alt='' /></div>
            <div>{cartItem.name}</div>
            <div>$.{cartItem.price} x {cartItem.quantity}</div>
            <button className="delete-btn" onClick={deleteItem}><i class="bi bi-trash"></i></button>
        </div>
    )
}

export default CartItem