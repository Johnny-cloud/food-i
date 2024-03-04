import "./family_meals.css"
import { HomeProduct } from "../home_product/HomeProduct"
import { useContext } from "react"
import AppContext from "../../app_context/AppContext"

const FamilyMeals = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts){
        return(
            <div className="family-meals dark-background">
                <h1>Healthy Deserts</h1>
                <div className="products-container">
                    {allProducts.slice(8, 12).map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}

export default FamilyMeals