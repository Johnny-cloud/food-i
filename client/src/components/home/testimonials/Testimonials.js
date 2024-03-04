import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials dark-background'>
        <h1>What Our Clients Say</h1>
        <div className='flex-row-center'>
            <div className='testimony'>
                <h3><img src='https://images.unsplash.com/photo-1610130383669-95917c70ca20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                Jany</h3>
                <p>Fooddi are true to their word! I can't believe just how fresh and tasty their vegetables are!</p>
            </div>

            <div className='testimony'>
                <h3><img src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                Tom</h3>
                <p>Who knew that healthy cakes can help one to reduce weight?? I was shocked too!</p>
            </div>

            <div className='testimony'>
                <h3><img src='https://plus.unsplash.com/premium_photo-1689564003745-946f35267ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                Irene</h3>
                <p>Thanks Fooddi for connecting us to such yummy and fresh vegetables! Just keep doing what you are doing.</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials