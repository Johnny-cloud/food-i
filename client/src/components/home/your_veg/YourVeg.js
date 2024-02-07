import "./your_veg.css"
import broccoli from "../../images/broccoli.avif"

const YourVeg = () => {
  return (
    <div className="your-veg">
    <h1>Know Your Vegetable</h1>
    <div className='your-veg-container'>
        <div className='details'>
            <h1>Broccoli</h1>
            <p>Broccoli is a cruciferous vegetable that belongs to the Brassica genus of plants. It’s a type of flower and has a thick, central stalk with grayish-green 
            leaves and green florets (there are some purple varieties). It is versatile and easy to find in most grocery stores.</p>
            <h4>Benefits</h4>
            <p>
            <ul>
              <li><i class="bi bi-check2-circle"></i> Reducing the risk of cancer</li>
              <li><i class="bi bi-check2-circle"></i> Improving bone health</li>
              <li><i class="bi bi-check2-circle"></i> Boosting immune health</li>
              <li><i class="bi bi-check2-circle"></i> Improving skin health</li>
              <li><i class="bi bi-check2-circle"></i> Aiding digestion</li>
            </ul>
            </p>
            
            </div>
        <div className='image-container'>
            <img src={broccoli} alt='' />
        </div>
    </div>
    </div>
  )
}

export default YourVeg