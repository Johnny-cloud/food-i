import "./products_display.css"
import ProductsSection from "./products_section/ProductsSection"
import CategoriesSection from "./categories_section/CategoriesSection"
import { useEffect } from "react"
import { useContext } from "react"
import AppContext from "../app_context/AppContext"

const ProductsDisplay = () => {
  const {cart, filteredProducts} = useContext(AppContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [filteredProducts])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [cart.length])
    return(
      <div className='products-display'>
        <div className='banner'></div>
        <div className="products-and-categories-container">
          <ProductsSection />
          <CategoriesSection />
        </div>
      </div>
      
    )
  
}

export default ProductsDisplay