import React from 'react'
import './totals.css'

const Totals = () => {
  return (
    <div className='totals'>
        <div className='total'>
            <div className='total-icon'>Icon</div>
            <div className='total-details'>
                <h5>Total Orders</h5>
                <p><b>13,890</b></p>
                <p className='up-rate'><i class="bi bi-arrow-up"></i> +12.6%</p>
            </div>
        </div><div className='total'>
            <div className='total-icon'>Icon</div>
            <div className='total-details'>
                <h5>Total Sales</h5>
                <p><b>15,300</b></p>
                <p className='down-rate'><i class="bi bi-arrow-down"></i> +12.6%</p>
            </div>
        </div>
        <div className='total'>
            <div className='total-icon'>Icon</div>
            <div className='total-details'>
                <h5>Total Visitors</h5>
                <p><b>10,000</b></p>
                <p className='up-rate'><i class="bi bi-arrow-up"></i> +12.6%</p>
            </div>
        </div>
        <div className='total'>
            <div className='total-icon'>Icon</div>
            <div className='total-details'>
                <h5>Total Income</h5>
                <p><b>12,800</b></p>
                <p className='up-rate'><i class="bi bi-arrow-up"></i> +12.6%</p>
            </div>
        </div>
        <div className='total'>
            <div className='total-icon'>Icon</div>
            <div className='total-details'>
                <h5>Total Expenses</h5>
                <p><b>8,600</b></p>
                <p className='down-rate'><i class="bi bi-arrow-down"></i> +12.6%</p>
            </div>
        </div>

    </div>
  )
}

export default Totals