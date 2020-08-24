import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './CustomNavBar.css'

class CustomNavBar extends Component {

    render() {

        return(
            <div className="customNavBar">
                <Navbar expanded={false} bg="light" expand="lg">
                    <Navbar.Brand href="/">Simmering</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="searchBar" />
                    {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/mealplan">Mealplan</Nav.Link>
                        <Nav.Link href="/shopping bag">My Cart</Nav.Link>
                        <Nav.Link href="/browse">Browse</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        {/* <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/suggest a recipe">Suggest a recipe</NavDropdown.Item>
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
            )
        }

}

  export default withRouter(CustomNavBar);