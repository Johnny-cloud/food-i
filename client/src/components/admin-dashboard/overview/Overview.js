import './overview.css'
import TaskList from './task_list/TaskList'
import TopSelling from './top_selling/TopSelling'
import CustomerReviews from './customer_reviews/CustomerReviews'

const Overview = () => {
  return (
    <div className='overview'>
        <TaskList />
        <TopSelling />
        <CustomerReviews />
    </div>
  )
}

export default Overview