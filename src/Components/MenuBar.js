import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Categories from '../Resources/Categories';
import 'bootstrap/dist/css/bootstrap.css';
import "../CSS/MenuBar.css";
import "../CSS/menuBar.js";
import logo from "../Resources/images/logo.png"

const MenuBar = () => {

    const [showSubCategories, setShowSubCategories] = useState(Array(Categories.length).fill(false));
    const [expand, setExpand] = useState(false);

    var redirecting = false;

    const navigate = useNavigate();

    const showDropdown = index => {
        let a = Array(Categories.length).fill(false)
        a[index] = true;
        setShowSubCategories(a);
    }

    const hideDropdown = index => {
        let a = Array(Categories.length).fill(false)
        a[index] = false;
        setShowSubCategories(a);
    }

    const redirectToCategory = link => {
        if (redirecting) {
            redirecting = false;
        } else {
            navigate(link.replace(" ", "-"));
        }

        setExpand(false);
    }

    const redirectToSubCategory = link => {
        redirecting = true;
        navigate(link.replace(" ", "-"));
    }

    return (
        <div>
            <Navbar id='top-bar'>
                <Row style={{ width: "100%" }}>
                    <Nav.Link onClick={() => navigate("/aboutus")} style={{ marginLeft: 15 }}>About Us</Nav.Link>
                    <Nav.Link onClick={() => navigate("/contactus")} style={{}}>Contact Us</Nav.Link>

                    <Link to="/" className='navbar-brand'>
                        <Image className='logo' src={logo}></Image>
                    </Link>

                    <Nav.Link onClick={() => navigate("/locations")} style={{ marginRight: 15, marginLeft: "auto" }}>Locations</Nav.Link>
                </Row>
            </Navbar>

            <Navbar id='menu' variant="dark"
                expand="md" collapseOnSelect expanded={expand}>
                <Navbar.Toggle onClick={() => setExpand(!expand)} />
                <Navbar.Collapse>
                    <Nav>

                        {Categories.map((category, index) =>

                            <NavDropdown className='nav-links text-capitalize' key={index} onClick={() => redirectToCategory(category.name)} show={showSubCategories[index] && window.innerWidth > 767} onMouseEnter={() => showDropdown(index)} onMouseLeave={() => hideDropdown(index)} title={category.name}>

                                {category.subCategories.map((subCategory, subIndex) =>
                                    <NavDropdown.Item className='nav-items text-capitalize' key={index * 100 + subIndex} onClick={() => redirectToSubCategory(category.name + "/" + subCategory.name)} >{subCategory.name}</NavDropdown.Item>)}

                            </NavDropdown>)}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MenuBar
