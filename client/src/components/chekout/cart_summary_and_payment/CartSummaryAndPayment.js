import "./cart_summary_and_payment.css"
import CartSummary from "./cart_summary/CartSummary"
import PaymentMethod from "./payment_method/PaymentMethod"

const CartSummaryAndPayment = () => {
  return (
    <div className='cart-summary-and-payment'>
        <CartSummary />
        <PaymentMethod />
    </div>
  )
}

export default CartSummaryAndPayment