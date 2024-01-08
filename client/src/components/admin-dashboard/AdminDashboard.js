import {useEffect} from 'react'
import './admin-dashboard.css'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
import Totals from './totals/Totals'
import Summaries from './summaries/Summaries'
import Overview from './overview/Overview'
import ProductsOverview from './products_overview/ProductsOverview'

Chart.register(CategoryScale)

const AdminDashboard = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='admin-dashboard'>
        <h1>Welcome To The Admin's Dashboard</h1>
        <Totals />
        <Summaries />
        <Overview />
        <ProductsOverview />
    </div>
  )
}

export default AdminDashboard