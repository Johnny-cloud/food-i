import { useContext } from "react"
import AppContext from "../../../app_context/AppContext"
import "./category_products.css"
import SingleProduct from "./SingleProduct"

const CategoryProducts = () => {
    const {allProducts} = useContext(AppContext)

    return(
        <div className="category-products">
            <h1>Products</h1>
            {allProducts.slice(10, 15).map(product => <SingleProduct key={product._id} product={product} />)}
        </div>
    )
}

export default CategoryProducts