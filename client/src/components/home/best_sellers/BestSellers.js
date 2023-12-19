import "./best_sellers.css"
import { HomeProduct } from "../home_product/HomeProduct"
import { useContext } from "react"
import AppContext from "../../app_context/AppContext"

const BestSellers = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts){
        return(
            <div className="best-sellers">
                <h1>Customers Favourites</h1>
                <div className="products-container">
                    {allProducts.slice(0, 4).map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}

export default BestSellers