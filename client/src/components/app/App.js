import "./app.css"
import AppContext from "../app_context/AppContext"
import { useState, useEffect } from "react"
import ProductsDisplay from "../products_display/ProductsDisplay"
import {Routes, Route} from 'react-router-dom'
import Navigation from "../navigation/Navigation"
import Home from "../home/Home"

const App = () => {

    const api = "http://localhost:8001"
    const [allProducts, setAllProducts] = useState([])

    const contextValues = {allProducts}

    const fetchAllProducts = async () => {
        const response = await fetch(`${api}/products`)
        if(response.ok){
            const fetchedProducts = await response.json()
            setAllProducts(fetchedProducts)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return(
        <div>
            <AppContext.Provider value={contextValues}>
                <Navigation />
                <div className="main-content">
                    <Routes>
                        <Route exact path="/products-display" element={<ProductsDisplay />} />
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </div>
                
            </AppContext.Provider>
        </div>
    )
}

export default App