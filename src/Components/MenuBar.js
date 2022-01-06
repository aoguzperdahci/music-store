import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Categories from '../Resources/Categories';
import 'bootstrap/dist/css/bootstrap.css';
import "../CSS/MenuBar.css";

const MenuBar = () => {

    const [showSubCategories, setShowSubCategories] = useState(Array(Categories.length).fill(false));

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
            navigate(link.replace(" ", "-"))
        }

    }

    const redirectToSubCategory = link => {
        redirecting = true;
        navigate(link.replace(" ", "-"))
    }

    return (
        <div>
            <Navbar bg="myColour" variant="dark"
                sticky="top" expand="md" collapseOnSelect>
                <Navbar.Brand>
                    <span class="material-icons md-48">dashboard</span>
                    Music Store
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>

                        {Categories.map((category, index) =>

                            <NavDropdown className='nav-links text-capitalize' key={index} onClick={() => redirectToCategory(category.name)} show={showSubCategories[index]} onMouseEnter={() => showDropdown(index)} onMouseLeave={() => hideDropdown(index)} title={category.name}>

                                {category.subCategories.map((subCategory, subIndex) =>
                                    <NavDropdown.Item className='text-capitalize' key={index*100+subIndex} onClick={() => redirectToSubCategory( category.name + "/" + subCategory.name)} >{subCategory.name}</NavDropdown.Item>)}

                            </NavDropdown>)}

                        <Nav.Link href="aboutus">ABOUT US</Nav.Link>
                        <Nav.Link href="contactus">CONTACT US</Nav.Link>
                        <Nav.Link href="locations">LOCATIONS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default MenuBar
