import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (


        <header>
            {/* <Navbar bg="darl" expand="lg">
                 */}
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>


                    <Navbar.Brand href="/">Lxury Weels</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart">
                                <i className='fas fa-shopping-cart'></i>Cart
                                </Nav.Link>
                            <Nav.Link href="/signlogin">
                                <i className='fas fa-user'></i>SignIn
                                </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default Header
