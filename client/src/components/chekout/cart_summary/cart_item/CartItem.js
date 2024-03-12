import './cart_item.css'

const CartItem = ({item}) => {
  return (
    <div className='cart-item flex-row-center'>
        <div className='flex-row-center'>
            <div>{item.name.slice(0, 15)}</div>
            <div>${item.price}</div>
        </div>
        <div className='flex-row-center'>
            <div>Qty: {item.quantity}</div>
            <div>Tot: <b>${item.price * item.quantity}</b></div>
        </div>
    </div>
  )
}

export default CartItem