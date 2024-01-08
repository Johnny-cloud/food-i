import {useContext} from 'react'
import AppContext from '../../app_context/AppContext'
import {Table} from 'react-bootstrap'
import './products_overview.css'

const ProductsOverview = () => {
    const {allProducts} = useContext(AppContext)
  return (
    <div className='products-overview'>
        <h3>Products Overview</h3>
        <Table striped >
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Product ID</th>
                <th>Status</th>
                <th>Sales</th>
                <th>Revenue</th>
            </thead>
            <tbody>
                {
                    allProducts.slice(0,10).map(product => {
                        return (
                            <tr>
                                <td><img src={product.image} alt=''/>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>#{product._id.slice(0,6)}</td>
                                <td><span className='completed'>Available</span></td>
                                <td>12000</td>
                                <td>$50000</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}

export default ProductsOverview