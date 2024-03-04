import "./products_section.css"
import {useContext, useState} from 'react'
import AppContext from "../../app_context/AppContext"
import HomeProduct from "../../home/home_product/HomeProduct"

const ProductsSection = () => {
    const {allProducts, filteredProducts, setFilteredProducts} = useContext(AppContext)
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(9)

    const filterProducts = (event) => {
      window.scrollTo(0, 0)
      setFilteredProducts(allProducts.slice(event.target.id - 9, event.target.id))
      setStart(event.target.id - 8)
      setEnd(event.target.id)
    }
    
    if(allProducts){
        return (
            <div className='products-section'>
                <div><h4>Showing {start} - {end} of {allProducts.length} results</h4></div>
                <div className='products-container'>
                  {filteredProducts.slice(0,9).map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
                <div className="page-buttons">
                  <button id={9} onClick={filterProducts}>1</button>
                  <button id={18} onClick={filterProducts}>2</button>
                  <button id={25} onClick={filterProducts}>3</button>
                </div>
            </div>
          )
    }
  
}

export default ProductsSection