import "./checkout.css"
import BillingDetails from "./billing_details/BillingDetails"
import CartSummaryAndPayment from "./cart_summary_and_payment/CartSummaryAndPayment"

const Checkout = () => {
  return (
    <div className='checkout'>
        <BillingDetails />
        <CartSummaryAndPayment />
    </div>
  )
}

export default Checkout