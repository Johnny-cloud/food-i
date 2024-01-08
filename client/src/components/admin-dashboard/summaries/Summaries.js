import './summaries.css'
import RecentOrders from './recent_orders/RecentOrders'
import OrdersVsSales from './orders_vs_sales/OrdersVsSales'
import TopCustomers from './top_customers/TopCustomers'

const Summaries = () => {
  return (
    <div className='summaries'>
        <RecentOrders />
        <OrdersVsSales />
        <TopCustomers />
    </div>
  )
}

export default Summaries