import React, { useEffect, useState, useContext } from 'react'
import AppContext from '../app_context/AppContext'

const CartItem = ({cartItem, updateTotals}) => {

    const {cart, setCart} = useContext(AppContext)
    let [quantity, setQuantity] = useState(cartItem.quantity)

    const deleteItem = () => {
        setCart(cart.filter(item => item._id !== cartItem._id))
    }

    const increaseQuantity = () => {
        setQuantity(quantity += 1) 
    }

    const reduceQuantity = () => {
        if(quantity <= 1){
            setQuantity(1)
        } else{
           setQuantity(quantity -= 1) 
        }
    }

    useEffect(() => {
        updateTotals()
        setCart([...cart])
    }, [quantity])


    if(cartItem){
        cartItem.quantity = quantity
        return (
                <tr key={cartItem._id}>
                    <td>{cartItem.name}</td>
                    <td>${cartItem.price}</td>
                    <td><button onClick={reduceQuantity}>-</button>{cartItem.quantity}<button onClick={increaseQuantity}>+</button></td>
                    <td>${Math.round(cartItem.price * cartItem.quantity)}</td>
                    <td><button onClick={deleteItem} className='delete-btn'><i class="bi bi-trash-fill"></i></button></td>
                </tr>
          )
    }
  
}

export default CartItem