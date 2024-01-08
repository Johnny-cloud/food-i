import React from 'react'
import './customer_reviews.css'

const CustomerReviews = () => {
  return (
    <div className='customer-reviews'>
        <h3>Customer Reviews</h3>
        <div className='review'>
          <h1>4.5</h1>
          <p>(4.5 out of 5)</p>
        </div>
        <p>1500 reviews</p>
        <div className='review'>
          <p>5 Star</p>
          <p>75%</p>
          <div className='percentage-container'>
            <div className='percentage-75'></div>
          </div>
        </div>
        <div className='review'>
          <p>4 Star</p>
          <p>80%</p>
          <div className='percentage-container'>
            <div className='percentage-80'></div>
          </div>
        </div>
        <div className='review'>
          <p>3 Star</p>
          <p>65%</p>
          <div className='percentage-container'>
            <div className='percentage-65'></div>
          </div>
        </div>
        <div className='review'>
          <p>2 Star</p>
          <p>20%</p>
          <div className='percentage-container'>
            <div className='percentage-20'></div>
          </div>
        </div>
        <div className='review'>
          <p>1 Star</p>
          <p>5%</p>
          <div className='percentage-container'>
            <div className='percentage-5'></div>
          </div>
        </div>
    </div>
  )
}

export default CustomerReviews