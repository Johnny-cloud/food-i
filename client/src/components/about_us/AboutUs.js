import './about_us.css'
import LandingTop from '../landing_top/LandingTop'
import Stats from '../home/stats/Stats'
import {useEffect} from 'react'
import SkilledTeam from '../home/skilled_team/SkilledTeam'
import Testimonials from '../home/testimonials/Testimonials'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div className='about-us'>
        <LandingTop title={'About Us'} />
        <div className='main-content'>
            <div className='contents-container flex-row-center'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <div className='details '>
                    <div >
                        <h3>Our Mision</h3>
                        <p>Our mission is to ensure that every home has access to fresh vegetables that has no additives and healthy foods.</p>
                        <p>We believe <b>You are what you eat!</b></p>
                    </div>
                    <div >
                        <h3>Our Vision</h3>
                        <p>Our vision is a healthy world where people live to their old age because of healthy food choices.</p>
                        <p>A future of long lives is our global mission.</p>
                    </div>
                </div>
            </div>
            <Stats />
            <SkilledTeam />
            <Testimonials />
        </div>
        
    </div>
  )
}

export default AboutUs