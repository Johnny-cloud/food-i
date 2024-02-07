import { useContext } from "react"
import AppContext from "../../../app_context/AppContext"
import "./category_products.css"
import SingleProduct from "./SingleProduct"

const CategoryProducts = () => {
    const {allProducts} = useContext(AppContext)

    return(
        <div className="category-products">
            <h4>Products</h4>
            {allProducts.slice(10, 15).map(product => <SingleProduct key={product._id} product={product} />)}
        </div>
    )
}

export default CategoryProducts