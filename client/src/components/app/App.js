import "./app.css"
import AppContext from "../app_context/AppContext"
import { useState, useEffect } from "react"
import ProductsDisplay from "../products_display/ProductsDisplay"
import {Routes, Route} from 'react-router-dom'
import Navigation from "../navigation/Navigation"
import Home from "../home/Home"
import SelectedProductDisplay from "../selected_product_display/SelectedProductDisplay"
import CartSection from "../cart_section/CartSection"
import Checkout from "../chekout/Checkout"
import AboutUs from "../about_us/AboutUs"
import ContactUs from "../contact_us/ContactUs"
import TeamMemberDetails from "../team_member_details/TeamMemberDetails"

const App = () => {

    // const api = "http://localhost:8001"
    const api = "https://food-i-backend.vercel.app"
    const [allProducts, setAllProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cart, setCart] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedMember, setSelectedMember] = useState(null)

    const contextValues = {allProducts, selectedProduct, setSelectedProduct, cart, setCart,
    filteredProducts, setFilteredProducts, selectedMember, setSelectedMember
    }

    const fetchAllProducts = async () => {
        const response = await fetch(`${api}/products`, {credentials: "include"})
        if(response.ok){
            const fetchedProducts = await response.json()
            setAllProducts(fetchedProducts)
            setFilteredProducts(fetchedProducts)
        }
    }


    useEffect(() => {
        fetchAllProducts()

        if(JSON.parse(localStorage.getItem("cart"))){
            setCart([...JSON.parse(localStorage.getItem("cart"))])
        }

    }, []) // Comes before localStorage.setItem in order to set the cart to the values of the localStorage

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return(
        <div>
            <AppContext.Provider value={contextValues}>
                <Navigation />
                <div className="main-content">
                    <Routes>
                        <Route exact path="/products-display" element={<ProductsDisplay />} />
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/selected-product-display" element={<SelectedProductDisplay />} />
                        <Route exact path="/cart-section" element={<CartSection />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/about-us" element={<AboutUs />} />
                        <Route exact path="/contact-us" element={<ContactUs />} />
                        <Route exact path="/team-member-details" element={<TeamMemberDetails />} />
                    </Routes>
                </div>
                
            </AppContext.Provider>
        </div>
    )
}

export default App