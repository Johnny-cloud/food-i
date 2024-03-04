import './services.css'

const Services = () => {
  return (
    <div className='home-services flex-row-center dark-background'>
        <div className='home-service flex-row-center'>
            <div className='icon'><i class="bi bi-percent"></i></div>
            <div className='details'>
                <h4>Discounts</h4>
                <p>Every week new sales</p>
            </div>
        </div>

        <div className='home-service flex-row-center'>
            <div className='icon'><i class="bi bi-truck"></i></div>
            <div className='details'>
                <h4>Free Delivery</h4>
                <p>For Orders Above $99</p>
            </div>
        </div>

        <div className='home-service flex-row-center'>
            <div className='icon'><i class="bi bi-people-fill"></i></div>
            <div className='details'>
                <h4>24/7 Support</h4>
                <p>Dedicated Customer Services</p>
            </div>
        </div>

        <div className='home-service flex-row-center'>
            <div className='icon'><i class="bi bi-cash"></i></div>
            <div className='details'>
                <h4>Secure Payment</h4>
                <p>100% Secure Payments</p>
            </div>
        </div>
    </div>
  )
}

export default Services