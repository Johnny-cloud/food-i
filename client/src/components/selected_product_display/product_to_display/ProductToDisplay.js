import "./product_to_display.css"
import HomeProduct from "../../home/home_product/HomeProduct"
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
                        <h4>{selectedProduct.name}</h4>
                        <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                        <p><b>$ {selectedProduct.price}.00</b></p>
                        <p>If a person is taking blood thinners, such as warfarin (Coumadin), they should use caution when increasing their intake of dark leafy greens.</p> 
                        <p>Doctors recommend maintaining a consistent vitamin K intake over time for people taking these medications.</p>
                   
                        <div>
                            <h5>Quantity</h5>
                            <div className="quantity-buttons">
                                <button onClick={decreaseQuantity}>-</button>
                                <span className="quantity-container">{quantity}</span>
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                        </div>
                        <button className="add-to-cart-btn" onClick={addToCart}>ADD TO CART</button>
                        <p><b>Category: </b>{selectedProduct.category}</p>
                        <p><b>Tags: </b>Organic, Healthy</p>
                    </div>
                    <div className="description">
                        <h2>Description</h2>
                        <p>A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer,
                             lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check. </p>
                        <p>
                            <ul>
                                <li><i class="bi bi-check-circle"></i> Healthy</li>
                                <li><i class="bi bi-check-circle"></i> Organic</li>
                                <li><i class="bi bi-check-circle"></i> Fresh</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="related-products">
                    <h1>Related Products</h1>
                    <div className="products-container">
                        {allProducts.filter(product => product.category === selectedProduct.category).slice(0, 3).map(product => <HomeProduct product={product} />)}
                    </div>
                </div>
            </div>
          )
    } else{
        navigate("/")
    }
}

export default ProductToDisplay