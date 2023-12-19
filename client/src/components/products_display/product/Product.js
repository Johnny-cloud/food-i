import "./product.css"

const Product = ({product}) => {
    return(
        <div className='product'>
            <div className='product-image-container'>
                <img src={product.image} alt="product"/>
                <div className="details">
                <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p>${product.price}/KG</p>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product