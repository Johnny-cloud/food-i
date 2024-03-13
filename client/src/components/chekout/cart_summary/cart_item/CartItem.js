import './cart_item.css'

const CartItem = ({item}) => {
  return (
    <div className='cart-item flex-row-center'>
        <div >
            <div>
              <img src={item.image} alt='' />
              {item.name.slice(0, 15)}
            </div>
            <div>${item.price}</div>
        </div>
        <div >
            <div>Qty: {item.quantity}</div>
            <div>Tot: <b>${item.price * item.quantity}</b></div>
        </div>
    </div>
  )
}

export default CartItem