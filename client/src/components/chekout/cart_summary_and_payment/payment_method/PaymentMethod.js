import "./payment_method.css"
import {Form} from "react-bootstrap"

const PaymentMethod = () => {
  return (
    <div className='payment-method'>
        <h3>Payment Method</h3>
        <div className="card-images-container">
            <img src="https://ma.visamiddleeast.com/dam/VCOM/regional/ap/taiwan/global-elements/images/tw-visa-platinum-card-498x280.png" alt="" />
            <img src="https://www.acledabank.com.kh/kh/assets/image/card-visa-debit-gold.jpg" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt=""/>
        </div>
        <Form>
            <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Card Number" />
            </Form.Group>
            <Form.Group>
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" placeholder="CVV" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type="text" placeholder="Expiration Date" />
            </Form.Group>
        </Form>
    </div>
  )
}

export default PaymentMethod