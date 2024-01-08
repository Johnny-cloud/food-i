import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./navigation.css"
import { useContext } from "react"
import AppContext from "../app_context/AppContext"

const Navigation = () => {
    const {cart} = useContext(AppContext)
    return(
        <div className="navigation">
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand><h1>FOODI</h1></Navbar.Brand>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Offcanvas>
                            <Offcanvas.Header></Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto">
                                    <Link to={"/"}>HOME</Link>
                                    <Link to={"/products-display"}>SHOP</Link>
                                </Nav>
                                <Nav className="me-auto">
                                    <Link to={"/cart-section"}><i class="bi bi-cart4"></i><sup className="cart-quantity">{cart.length}</sup>CART</Link>
                                </Nav>
                                <Nav className="me-auto">
                                    <Link to={'/admin-dashboard'}>ADMIN DASHBOARD</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation