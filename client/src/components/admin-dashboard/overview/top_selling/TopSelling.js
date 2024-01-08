import {useContext} from 'react'
import {Table} from 'react-bootstrap'
import AppContext from '../../../app_context/AppContext'
import './top_selling.css'

const TopSelling = () => {
    const {allProducts} = useContext(AppContext)
  return (
    <div className='top-selling'>
        <h3>Top Selling Products</h3>
        <Table>
            <thead>
                <th>Product</th>
                <th>Stock</th>
                <th>Sales</th>
            </thead>
            <tbody>
                {allProducts.slice(0,6).map(product => {
                    return (
                        <tr>
                            <td><img src={product.image} alt='' />{product.name}</td>
                            <td>In Stock</td>
                            <td>$12,500</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  )
}

export default TopSelling