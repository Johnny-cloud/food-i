import "./categories_section.css"
import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap"
import {Link} from "react-router-dom"
import Cart from "../../cart/Cart"
import { useContext, useEffect } from "react"
import AppContext from "../../app_context/AppContext"
import CategoryProducts from "./category_products/CategoryProducts"

const CategoriesSection = () => {
    const {allProducts, setFilteredProducts} = useContext(AppContext)

    const filterProducts = (event) => {
        if(event.target.id === "all"){
            setFilteredProducts([...allProducts])
        } else{
            setFilteredProducts(allProducts.filter(product => product.category === event.target.id))
        }
        
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className='categories-section'>
        
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Offcanvas>
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body className="offcanvas-column">
                            <Cart />
                            <div className="product-categories">
                                <Nav className="me-auto">
                                <h1>Product Categories</h1>
                                    <Link id="all" to={"/products-display"} onClick={filterProducts}>All Products</Link>
                                    <Link id="veggie" to={"/products-display"} onClick={filterProducts}>Veggie</Link>
                                    <Link id="full flavour" to={"/products-display"} onClick={filterProducts}>Full Flavour</Link>
                                    <Link id="dairy free" to={"/products-display"} onClick={filterProducts}>Dairy Free</Link>
                                    <Link id="multiflower" to={"/products-display"} onClick={filterProducts}>Multiflower</Link>
                                    <Link id="single origin" to={"/products-display"} onClick={filterProducts}>Single Origin</Link>
                                    <Link id="premium" to={"/products-display"} onClick={filterProducts}>Premium</Link>
                                    <Link id="sugar free" to={"/products-display"} onClick={filterProducts}>Sugar Free</Link>
                                </Nav>
                            </div>
                            <CategoryProducts />
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default CategoriesSection