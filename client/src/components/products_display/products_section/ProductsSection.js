import "./products_section.css"
import {useContext} from 'react'
import AppContext from "../../app_context/AppContext"
import Product from '../product/Product'

const ProductsSection = () => {
    const {allProducts} = useContext(AppContext)
    
    if(allProducts){
        return (
            <div className='products-section'>
                <div className='products-container'>
                  {allProducts.slice(0,9).map(product => <Product product={product} key={product._id} />)}
                </div>
            </div>
          )
    }
  
}

export default ProductsSection