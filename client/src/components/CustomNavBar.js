import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form,FormControl} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class CustomNavBar extends Component {

    render() {

        return(
            <div className="customNavBar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Simmering</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        <Nav.Link href="/mealplan">Mealplan</Nav.Link>
                        <Nav.Link href="/shopping bag">My Cart</Nav.Link>
                        <Nav.Link href="/browse">Browse</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/suggest a recipe">Suggest a recipe</NavDropdown.Item>
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            )
        }

}

  export default withRouter(CustomNavBar);