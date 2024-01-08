import "./product.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import AppContext from "../../app_context/AppContext"

const Product = ({product}) => {
    const {setSelectedProduct, setCart, cart} = useContext(AppContext)

    const setProductToDisplay = () => {
        setSelectedProduct(product)
    }

    const addToCart = () => {
        if(cart.find(item => item._id === product._id)){
            alert("You already have this in cart")
        } else{
            setCart([...cart, {...product, quantity: 1}])
        }
        
    }

    return(
        <div className='product'>
            <Link to={"/selected-product-display"} className='product-image-container'>
                <img onClick={setProductToDisplay} src={product.image} alt="product"/>
            </Link>
            <div className="details">
                <h2><Link to={"/selected-product-display"} onClick={setProductToDisplay}>{product.name}</Link></h2>
                    <p>{product.category}</p>
                    <p>${product.price}/KG</p>
                    <button onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product