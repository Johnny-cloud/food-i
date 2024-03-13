import './footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='info-container'>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/cart-section'}>Cart</Link></li>
              <li><Link to={'/contact-us'}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contacts</h4>
            <ul>
              <li><i class="bi bi-envelope"></i> fooddi@gmail.com</li>
              <li><i class="bi bi-headset"></i> +254 7xxxxx899</li>
              <li><i class="bi bi-geo-alt"></i> Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><i class="bi bi-percent"></i> Discounts</li>
              <li><i class="bi bi-truck"></i> Free Delivery</li>
              <li><i class="bi bi-people-fill"></i> 24/7 Support</li>
              <li><i class="bi bi-cash"></i> Secure Payment</li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <ul>
              <li><Link><i class="bi bi-facebook"></i>Facebook</Link></li>
              <li><Link><i class="bi bi-whatsapp"></i>Whatsapp</Link></li>
              <li><Link><i class="bi bi-instagram"></i>Instagram</Link></li>
              
            </ul>
          </div>

        </div>
        <h3>Fooddi &copy;2024</h3>
    </div>
  )
}

export default Footer