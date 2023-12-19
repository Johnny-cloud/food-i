import "./products_display.css"
import ProductsSection from "./products_section/ProductsSection"
import CategoriesSection from "./categories_section/CategoriesSection"

const ProductsDisplay = () => {
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