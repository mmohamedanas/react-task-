import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Header.css"; // Assuming you have custom styles in Header.css

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" variant="dark" className="custom-navbar bg-dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="mx-lg-5">
                        <img
                            src="https://cdn.britannica.com/mendel/eb-logo/MendelNewThistleLogo.png"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="mx-5">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="mx-5">About</Nav.Link>
                            <Nav.Link as={Link} to="/tours" className="mx-5">Tours</Nav.Link>
                            {/* Additional links */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
