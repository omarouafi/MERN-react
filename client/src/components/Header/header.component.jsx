import React from 'react'
import { Navbar,Nav, Container } from 'react-bootstrap';


const Header = () => {

    return(
        <nav>

            <Navbar bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home"> <i className="fa fa-shopping-cart"></i> Login</Nav.Link>
                    <Nav.Link href="#features"> <i className="fa fa-user"></i> User</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
       </nav>
    )
}


export default Header;