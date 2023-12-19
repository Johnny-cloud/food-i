import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./navigation.css"

const Navigation = () => {
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
                                <Nav>
                                    <Link to={"/"}>HOME</Link>
                                    <Link to={"/products-display"}>SHOP</Link>
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