import "./home.css"
import LandingPage from "./landing_page/LandingPage"
import BestSellers from "./best_sellers/BestSellers"
import Offers from "./offers/Offers"
import YourVeg from "./your_veg/YourVeg"

const Home = () => {
    return(
        <div className="home">
            <LandingPage />
            <YourVeg />
            <BestSellers />
            <Offers />
        </div>
    )
}

export default Home