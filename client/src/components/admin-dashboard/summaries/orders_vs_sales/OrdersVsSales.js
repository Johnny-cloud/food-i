import React from 'react'
import {Line} from 'react-chartjs-2'
import './orders_vs_sales.css'

const OrdersVsSales = () => {
  return (
    <div className='orders-vs-sales'>
        <h3>Revenue vs Expenses</h3>
        <div className='chart-container'>
            <Line 
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [2000, 2300, 2500, 2100, 2000, 2300, 2400, 2300, 2500, 2600, 2500, 2700]
                        }, 
                        {
                            label: "Expenses",
                            data: [1900, 2000, 2200, 2000, 1900, 2000, 2100, 2000, 2200, 2200, 2100, 1900]
                        },

                    ]
                }}
            />
        </div>
    </div>
  )
}

export default OrdersVsSales