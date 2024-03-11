import { Link } from 'react-router-dom'
import './we_offer.css'

const WeOffer = () => {
  return (
    <div className='we-offer'>
        <h1>What We Offer</h1>
        <div className='flex-row-center'>
            <div className='offer'>
                <Link to={'/products-display'} className='image-container'><img src='https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></Link>
                <h5>Fresh Veges</h5>
                <Link to={'/products-display'}><button>Shop Now <i class="bi bi-arrow-right"></i></button></Link>
            </div>

            <div className='offer'>
                <Link to={'/products-display'} className='image-container'><img src='https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></Link>
                <h5>Healthy Cakes</h5>
                <Link to={'/products-display'}><button>Shop Now <i class="bi bi-arrow-right"></i></button></Link>
            </div>

            <div className='offer'>
                <Link to={'/products-display'} className='image-container'><img src='https://images.unsplash.com/photo-1622006979077-afc14f833d4e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></Link>
                <h5>Best Honey</h5>
                <Link to={'/products-display'}><button>Shop Now <i class="bi bi-arrow-right"></i></button></Link>
            </div>
        </div>
    </div>
  )
}

export default WeOffer