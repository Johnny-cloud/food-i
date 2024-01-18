import "./product_to_display.css"
import Product from "../../products_display/product/Product"
import { useContext, useEffect, useState } from "react"
import AppContext from "../../app_context/AppContext"
import { useNavigate } from "react-router-dom"

const ProductToDisplay = () => {
    const {selectedProduct, allProducts, cart, setCart} = useContext(AppContext)
    let [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    const increaseQuantity = () => {
        setQuantity(quantity += 1)
    }

    const decreaseQuantity = () => {
        if(quantity <= 1){
            setQuantity(1)
        } else{
            setQuantity(quantity -= 1)
        }
    }

    const addToCart = () =>{
        setCart([...cart, {...selectedProduct}])
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [selectedProduct])

    if(selectedProduct){
        selectedProduct.quantity = quantity
        return (
            <div className="product-to-display">
                <div className="selected-product">
                    <div className="image-container"><img src={selectedProduct.image} alt="" /></div>
                    <div className="details">
                        <p>{selectedProduct.category.toUpperCase()}</p>
                        <h1>{selectedProduct.name}</h1>
                        <p>$ {selectedProduct.price} / KG</p>
                        <div>
                            <h3>Quantity</h3>
                            <div className="quantity-buttons">
                                <button onClick={decreaseQuantity}>-</button>
                                <span className="quantity-container">{quantity}</span>
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                        </div>
                        <button className="add-to-cart-btn" onClick={addToCart}>ADD TO CART</button>
                    </div>
                    <div className="description">
                        <h2>Description</h2>
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
                <div className="related-products">
                    <h1>Related Products</h1>
                    <div className="products-container">
                        {allProducts.filter(product => product.category === selectedProduct.category).slice(0, 3).map(product => <Product product={product} />)}
                    </div>
                </div>
            </div>
          )
    } else{
        navigate("/")
    }
}

export default ProductToDisplay