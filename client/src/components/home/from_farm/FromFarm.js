import './from_farm.css'

const FromFarm = () => {
  return (
    <div className='from-farm'>
        <h1>Fresh Love From The Farm</h1>
        <div className='flex-row-center'>
            <div className='details'>
                <div>
                    <h5><i class="bi bi-check-circle"></i> Organic</h5>
                    <p>Our farm products are 100% organic, and suitable for consumption.</p>
                </div>
                <div>
                    <h5><i class="bi bi-check-circle"></i> Locally Grown</h5>
                    <p>We source our seeds from the local farmers and the local markets.</p>
                </div>
                <div>
                    <h5><i class="bi bi-check-circle"></i> Healthy Food</h5>
                    <p>We emphasize that food be organic, suitable for consumption and prepared tasty.</p>
                </div>
            </div>
            <div className='image-container'>
                <img src='https://images.unsplash.com/photo-1604908814792-f3d42c558764?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            </div>
            <div className='details'>
                <div>
                    <h5><i class="bi bi-check-circle"></i> Pesticide Free</h5>
                    <p>Our products are pesticide free as we use natural means to kill pests.</p>
                </div>
                <div>
                    <h5><i class="bi bi-check-circle"></i> Hand Picked</h5>
                    <p>Our products are directly hand picked by our farmers.</p>
                </div>
                <div>
                    <h5><i class="bi bi-check-circle"></i> Fresh Food</h5>
                    <p>We emphasize that food be fresh and suitable for consumption.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FromFarm