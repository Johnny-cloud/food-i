import './about_us.css'
import LandingTop from '../landing_top/LandingTop'
import Stats from '../home/stats/Stats'
import {useEffect} from 'react'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div className='about-us'>
        <LandingTop title={'About Us'} />
        <div className='contents-container flex-row-center'>
            <div className='details '>
                <h1>Our Mision</h1>
                <p>Our mission is to ensure that every home has access to fresh vegetables that has no additives and healthy foods.</p>
                <p>We believe <b>You are what you eat!</b></p>
            </div>
            <div className='image-container'><img src='https://images.unsplash.com/photo-1526016650454-68a6f488910a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
        </div>
        <Stats />
        <div className='contents-container flex-row-center'>
            <div className='details vision'>
                <h1>Our Vision</h1>
                <p>Our vision is a healthy world where people live to their old age because of healthy food choices.</p>
                <p>A future of long lives is our global mission.</p>
            </div>

            <div className='image-container'><img src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
        </div>
    </div>
  )
}

export default AboutUs