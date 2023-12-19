import "./your_veg.css"
import broccoli from "../../images/broccoli.avif"

const YourVeg = () => {
  return (
    <div className="your-veg">
    <h1>Know Your Vegetable</h1>
    <div className='your-veg-container'>
        <div className='details'>
            <h1>Broccoli</h1>
            <p><i>We deliver organic vegetables fresh from our fields to your doorstep with utmost care and smile.</i></p>
            <h4>Benefits</h4>
            <p>Broccoli is a cruciferous vegetable that belongs to the Brassica genus of plants. It’s a type of flower and has a thick, central stalk with grayish-green 
            leaves and green florets (there are some purple varieties). It is versatile and easy to find in most grocery stores.</p>
        </div>
        <div className='image-container'>
            <img src={broccoli} alt='' />
        </div>
    </div>
    </div>
  )
}

export default YourVeg