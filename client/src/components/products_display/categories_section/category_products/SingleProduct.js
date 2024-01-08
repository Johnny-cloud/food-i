import {useContext} from 'react'
import AppContext from '../../../app_context/AppContext'
import { Link } from 'react-router-dom'

const SingleProduct = ({product}) => {
    const {setSelectedProduct} = useContext(AppContext)

    const handleClick = () => {
        setSelectedProduct(product)
    }

  return (
    <Link to={"/selected-product-display"} onClick={handleClick} className='single-category-product'>
        <div className='image-container'><img src={product.image} alt='' /></div>
        <div className='details'><h4>{product.name}</h4></div>
    </Link>
  )
}

export default SingleProduct