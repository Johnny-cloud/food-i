import "./home.css"
import LandingPage from "./landing_page/LandingPage"
import BestSellers from "./best_sellers/BestSellers"
import Offers from "./offers/Offers"
import YourVeg from "./your_veg/YourVeg"
import Services from "./services/Services"
import FromFarm from "./from_farm/FromFarm"
import Stats from "./stats/Stats"
import SkilledTeam from "./skilled_team/SkilledTeam"
import WeOffer from "./we_offer/WeOffer"
import Subscribe from "./subscribe/Subscribe"

const Home = () => {
    return(
        <div className="home">
            <LandingPage />
            <Services />
            <WeOffer />
            <FromFarm />
            <Stats />
            <YourVeg />
            <BestSellers />
            <Offers />
            <SkilledTeam />
            <Subscribe />
        </div>
    )
}

export default Home