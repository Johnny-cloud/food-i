import './contact_us.css'
import LandingTop from '../landing_top/LandingTop'

const ContactUs = () => {
  return (
    <div className='contact-us'>
        <LandingTop title={'Contact us'} />
        <div className='main-content flex-row-center'>
            <div>
                <div className='get-in-touch'>
                    <h1>Let's Get In Touch</h1>
                    <p>If you have any questions reach out to us  through the following contacts</p>
                    <div className='flex-row-center'>
                        <div className='icon'><i class="bi bi-envelope"></i></div>
                        <div>
                            <p>Email Address</p>
                            <h6>fooddi@email.com</h6>
                        </div>
                    </div>

                    <div className='flex-row-center'>
                        <div className='icon'><i class="bi bi-telephone-outbound"></i></div>
                        <div>
                            <p>Phone Number</p>
                            <h5>+254 7xxxxxxxx</h5>
                        </div>
                    </div>

                    <div className='flex-row-center'>
                        <div className='icon'><i class="bi bi-geo-alt"></i></div>
                        <div>
                            <p>Store Address</p>
                            <h5>Nairobi, Kenya</h5>
                        </div>
                    </div>
                </div>
            </div>

            <form className='flex-row-center'>
                <div>
                    <label htmlFor='first-name'><h5>First Name</h5></label>
                    <input id='first-name'/>
                </div>

                <div>
                    <label htmlFor='last-name'><h5>Last Name</h5></label>
                    <input id='last-name'/>
                </div>

                <div>
                    <label htmlFor='email'><h5>Email Address</h5></label>
                    <input id='email'/>
                </div>

                <div>
                    <label htmlFor='phone'><h5>Phone Number</h5></label>
                    <input id='phone'/>
                </div>

                <div className='textarea'>
                    <label htmlFor='questions'><h5>Comments / Questions</h5></label>
                    <textarea id='questions'></textarea>
                </div>

                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default ContactUs