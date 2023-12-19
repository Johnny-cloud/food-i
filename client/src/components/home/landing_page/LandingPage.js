import "./landing_page.css"
import foodBasket from "../../images/basket-full-vegetables_1112-316.avif"

const LandingPage = () => {
  return (
    <div className="landing-page">
        <div className="info">
            <h1>Welcome To Foodi</h1>
        </div>
        <div className="image-container">
            <img src={foodBasket} alt=""/>
        </div>
    </div>
  )
}

export default LandingPage