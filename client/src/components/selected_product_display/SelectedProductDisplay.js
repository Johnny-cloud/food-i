import "./selected_product_display.css"
import CategoriesSection from "../products_display/categories_section/CategoriesSection"
import ProductToDisplay from "./product_to_display/ProductToDisplay"
import { useContext, useEffect } from "react"
import AppContext from "../app_context/AppContext"
import LandingTop from "../landing_top/LandingTop"

const SelectedProductDisplay = () => {
    const {cart} = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [cart.length])
  return (
    <div className="selected-product-display">
        <LandingTop title={'Shop'}/>
        <div className="main-content">
          <ProductToDisplay />
          <CategoriesSection />
        </div>
        
    </div>
  )
}

export default SelectedProductDisplay