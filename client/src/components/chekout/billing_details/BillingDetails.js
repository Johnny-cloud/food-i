import { Form } from "react-bootstrap"
import "./billing_details.css"

const BillingDetails = () => {
  return (
    <div className='billing-details'>
        <h2>Billing Details</h2>
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="John" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Doe" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" />
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="XXXXXXX" />
            </Form.Group>
        </Form>
    </div>
  )
}

export default BillingDetails