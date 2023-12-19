import "./home_product.css"

export const HomeProduct = ({product}) => {
  return (
    <div className="home-product">
        <div className="image-container"><img src={product.image} alt=""/></div>
        <div className="details">
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}/KG</p>
            <button>ADD TO CART</button>
        </div>
    </div>
  )
}
