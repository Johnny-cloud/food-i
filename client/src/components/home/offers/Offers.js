import "./offers.css"

const Offers = () => {
  return (
    <div className="offers">
        <h1>Our Weekly Offers</h1>
        <div className="products-container">
            <div className="image-container-holder">
                <div className="image-container"><img src="https://images.unsplash.com/photo-1582803824122-f25becf36ad8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
            </div>
            <div className="details">
                <h2>No Potatoes Veg Bag</h2>
                <p><i>We deliver organic vegetables fresh from our fields to your doorstep with utmost care.</i></p>
                <p>All the delicious organic veggies without the potatoes. A weekly veg box overflowing with fresh vegetables (and probably a little bit of mud). 
                Feeds 3-5 people for 1 week. Varieties included may differ from those listed depending on harvests and availability.</p>
                <p>
                    <ul>
                        <li><i class="bi bi-check2-circle"></i> Carrots 1kg</li>
                        <li><i class="bi bi-check2-circle"></i> Red Onion 500g</li>
                        <li><i class="bi bi-check2-circle"></i> Corn 500g</li>
                        <li><i class="bi bi-check2-circle"></i> Curly Kale 300g</li>
                    </ul>
                </p>
                <button>ORDER NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Offers