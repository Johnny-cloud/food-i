import "./home_product.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import AppContext from "../../app_context/AppContext"

export const HomeProduct = ({product}) => {
  const {setSelectedProduct, setCart, cart} = useContext(AppContext)

  const setProductToDisplay = () => {
      setSelectedProduct(product)
  }

  const addToCart = () => {
    if(cart.find(item => item.name === product.name)){
        alert("You already have this in cart")
    } else{
        setCart([...cart, {...product, quantity: 1}])
    }
  }

  return (
    <div className="home-product">
        <Link to={"/selected-product-display"} className="image-container"><img onClick={setProductToDisplay} src={product.image} alt=""/></Link>
        <div className="details">
            <h4><Link to={"/selected-product-display"} onClick={setProductToDisplay}>{product.name}</Link></h4>
            <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
            <p className="price">${product.price}.00</p>
            <p>{product.category}</p>
            
            <button onClick={addToCart}><Link to={'/cart-section'}>ADD TO CART <i class="bi bi-cart"></i></Link></button>
        </div>
    </div>
  )
}

export default HomeProduct
