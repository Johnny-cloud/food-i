import "./categories_section.css"
import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap"

const CategoriesSection = () => {
  return (
    <div className='categories-section'>
        
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Offcanvas>
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body className="offcanvas-column">
                            <div className="cart-section">
                                <h1>Cart</h1>
                                <p>No Products In The Cart</p>
                            </div>
                            <div className="product-categories">
                                <Nav className="me-auto">
                                <h1>Product Categories</h1>
                                    <Nav.Link>Veggie</Nav.Link>
                                    <Nav.Link>Full Flavour</Nav.Link>
                                    <Nav.Link>Dairy Free</Nav.Link>
                                    <Nav.Link>Multiflower</Nav.Link>
                                    <Nav.Link>Single Origin</Nav.Link>
                                    <Nav.Link>Premium</Nav.Link>
                                    <Nav.Link>Sugar Free</Nav.Link>
                                </Nav>
                            </div>
                            <div className="products-available">
                            <Nav className="me-auto">
                                <h1>Products</h1>
                                    <Nav.Link>Veggie</Nav.Link>
                                    <Nav.Link>Full Flavour</Nav.Link>
                                    <Nav.Link>Dairy Free</Nav.Link>
                                    <Nav.Link>Multiflower</Nav.Link>
                                    <Nav.Link>Single Origin</Nav.Link>
                                    <Nav.Link>Premium</Nav.Link>
                                    <Nav.Link>Sugar Free</Nav.Link>
                                </Nav> 
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default CategoriesSection