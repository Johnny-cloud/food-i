import "./checkout.css"
import BillingDetails from "./billing_details/BillingDetails"
import LandingTop from "../landing_top/LandingTop"
import CartSummary from "./cart_summary/CartSummary"
import { useEffect } from "react"

const Checkout = () => {
  
  useEffect(() => {
    window.scrollTo(0, 20)
  }, [])

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