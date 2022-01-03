import React from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const MenuBar = () => {
    return (
        <div>
        <Navbar bg="myColour" variant="dark"
        sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand>
            <span class="material-icons md-48">dashboard</span>
            Music Store
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
            <NavDropdown title="PIANO">
                <NavDropdown.Item href="PIANO/ACOUSTIC" >ACOUSTIC</NavDropdown.Item>
                <NavDropdown.Item href="PIANO/ACOUSTIC">DIGITAL</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GUITAR">
                <NavDropdown.Item href="GUITAR/CLASSSIC">CLASSIC</NavDropdown.Item>
                <NavDropdown.Item href="GUITAR/ELECTRICAL">ELECTRICAL</NavDropdown.Item>
                <NavDropdown.Item href="GUITAR/ACOUSTIC">ACOUSTIC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CELLO">
            <NavDropdown.Item href="CELLO/CLASSSIC">CLASSIC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FIDDLE">
                <NavDropdown.Item href="FIDDLE/CLASSSIC">CLASSIC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FLUTE">
                 <NavDropdown.Item href="FLUTE/CLASSSIC">CLASSIC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="DRUMS">
                 <NavDropdown.Item href="DRUMS/CLASSSIC">CLASSIC</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="aboutus">ABOUT US</Nav.Link>
            <Nav.Link href="contactus">CONTACT US</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        
        </Navbar>
    </div>
    )
}

export default MenuBar
