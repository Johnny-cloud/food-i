import "./checkout.css"
import BillingDetails from "./billing_details/BillingDetails"
import CartSummaryAndPayment from "./cart_summary_and_payment/CartSummaryAndPayment"
import LandingTop from "../landing_top/LandingTop"

const Checkout = () => {
  return (
    <div className='checkout'>
        <LandingTop />
        <div className="main-content">
          <BillingDetails />
          <CartSummaryAndPayment />
        </div>
        
    </div>
  )
}

export default Checkout