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
import Testimonials from "./testimonials/Testimonials"
import FamilyEating from "./family_eating/FamilyEating"
import FeaturedProducts from "./featured_products/FeaturedProducts"
import FamilyMeals from "./family_meals/Familymeals"

const Home = () => {
    return(
        <div className="home">
            <LandingPage />
            <Services />
            <WeOffer />
            <FeaturedProducts />
            <FromFarm />
            <Stats />
            <YourVeg />
            <BestSellers />
            <Offers />
            <FamilyMeals />
            <SkilledTeam />
            <FamilyEating />
            <Testimonials />
            <Subscribe />
            
        </div>
    )
}

export default Home