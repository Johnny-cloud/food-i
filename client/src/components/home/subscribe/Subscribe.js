import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h1>Stay Updated</h1>
        <form>
            <input id='email' placeholder='Your Email' />
            <label for='email'><button>Subscribe</button></label>
        </form>
        <p>Subscribe to our newsletter so as not to miss out on our weekly feeds!</p>
    </div>
  )
}

export default Subscribe