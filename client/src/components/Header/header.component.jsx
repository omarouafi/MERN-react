import React from 'react'
import './header.styles.scss'
import { Navbar,Nav, Container,NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../redux/user/user.action';
const Header = () => {


    const {currentUser} = useSelector(state => state.userLogin)
    const dispatch = useDispatch() 

    const handleLogout = () => {
        dispatch(logout())
    }

    return(
        <nav>

            <Navbar bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href='/'>ProShop</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/cart"> <i className="fa fa-shopping-cart"></i>Cart</Nav.Link>
                    {
                        currentUser ? 
                        
                        <NavDropdown title={currentUser.user.name} id="username" >

                            
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>
                                        Profile
                                    </NavDropdown.Item>
                                </LinkContainer>
                            
                            <NavDropdown.Item onClick={handleLogout}>
                                Logout
                            </NavDropdown.Item>


                        </NavDropdown>
                        
                        :
                        <Nav.Link href="/login"><i className="fa fa-user"></i> Login</Nav.Link>

                    }
                </Nav>
            </Container>
            </Navbar>
       </nav>
    )
}


export default Header;