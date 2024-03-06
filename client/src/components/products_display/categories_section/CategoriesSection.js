import "./categories_section.css"
import {Link} from "react-router-dom"
import Cart from "../../cart/Cart"
import { useContext, useEffect } from "react"
import AppContext from "../../app_context/AppContext"
import CategoryProducts from "./category_products/CategoryProducts"

const CategoriesSection = () => {
    const {allProducts, setFilteredProducts} = useContext(AppContext)

    const filterProducts = (event) => {
        if(event.target.id === "all"){
            setFilteredProducts([...allProducts])
        } else{
            setFilteredProducts(allProducts.filter(product => product.category === event.target.id))
        }
        
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
        <div className='categories-section'>
            <Cart />
            <div className="product-categories">
                <h4>Categories</h4>
                    <Link id="all" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> All Products</Link>
                    <Link id="veggie" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> Veggie</Link>
                    <Link id="full flavour" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> Full Flavour</Link>
                    <Link id="dairy free" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> Dairy Free</Link>
                    <Link id="multiflower" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> Multiflower</Link>
                    <Link id="single origin" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> Single Origin</Link>
                    <Link id="premium" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> Premium</Link>
                    <Link id="sugar free" to={"/products-display"} onClick={filterProducts}><i class="bi bi-chevron-right"></i> Sugar Free</Link>
            </div>
            <CategoryProducts />
                            
        </div>
    </div>
    
  )
}

export default CategoriesSection