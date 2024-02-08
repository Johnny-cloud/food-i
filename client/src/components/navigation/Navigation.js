import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./navigation.css"
import { useContext, useState } from "react"
import AppContext from "../app_context/AppContext"


const Navigation = () => {
    const {cart} = useContext(AppContext)
    const [expanded, setExpanded] = useState(false)

    const hideCanvas = () => {
        setExpanded(false)
    }
    return(
            <Navbar expand='lg' sticky="top"  expanded= {expanded}>
                <Navbar.Brand><h1>FOODI</h1></Navbar.Brand>
                <Container>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Offcanvas>
                            <Offcanvas.Header><i onClick={hideCanvas} class="bi bi-x-circle"></i></Offcanvas.Header>
                            <Offcanvas.Body>              
                                <Nav className="me-auto">
                                    <Link onClick={hideCanvas} to={"/"}>Home</Link>
                                    <Link onClick={hideCanvas} to={'/about-us'}>About us</Link>
                                    <Link onClick={hideCanvas} to={"/products-display"}>Shop</Link>
                                    <Link onClick={hideCanvas} to={"/contact-us"}>Contact us</Link>
                                </Nav>
                                <Nav className="me-auto">
                                    <Link onClick={hideCanvas} to={"/cart-section"}><i class="bi bi-cart4"></i><sup className="cart-quantity">{cart.length}</sup>Cart</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navigation