import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe dark-background'>
        <h1>Stay Updated</h1>
        <p>Subscribe to our newsletter so as not to miss out on our weekly feeds!</p>
        <form className='flex-row-center'>
            <input id='email' placeholder='Your Email' />
            <label for='email'><button>Subscribe</button></label>
        </form>
    </div>
  )
}

export default Subscribe