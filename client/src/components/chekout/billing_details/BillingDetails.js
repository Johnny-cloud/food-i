import "./billing_details.css"
import PaymentMethod from "./payment_method/PaymentMethod"

const BillingDetails = () => {
  return (
    <div className='billing-details'>
        <div>
            <h4>BILLING DETAILS</h4>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" placeholder="Country" />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder="City" />
                </div>
                <div>
                    <label>State</label>
                    <input type="text" placeholder="State" />
                </div>
                <div>
                    <label>Zip Code</label>
                    <input type="text" placeholder="Zip Code" />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="number" placeholder="XXXXXXX" />
                </div>
            </form>
        </div>
        

        <PaymentMethod />
    </div>
  )
}

export default BillingDetails