import "./featured_products.css"
import { HomeProduct } from "../home_product/HomeProduct"
import { useContext } from "react"
import AppContext from "../../app_context/AppContext"

const FeaturedProducts = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts){
        return(
            <div className="featured-products dark-background">
                <h1>Featured Products</h1>
                <div className="products-container">
                    {allProducts.slice(12, 16).map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}

export default FeaturedProducts