import "./checkout.css"
import BillingDetails from "./billing_details/BillingDetails"
import LandingTop from "../landing_top/LandingTop"
import CartSummary from "./cart_summary/CartSummary"

const Checkout = () => {
  return (
    <div className='checkout'>
        <LandingTop />
        <div className="main-content">
          <CartSummary />
          <BillingDetails />
        </div>
        
    </div>
  )
}

export default Checkout