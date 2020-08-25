import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import SearchResults from './SearchResults.js'
import './CustomNavBar.css'

class CustomNavBar extends Component {

    constructor(props) {
      super(props);
      this.state = {
        query: ''
        // results: []
      };
      this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
      this.setState({query: event.target.value})
    //   console.log(this.state.query)
    }

    // handleChange(event) {
    //   this.setState({query: event.target.value}, () => {
    //     if(this.state.query && this.state.query.length >= 1){
    //         console.log(this.state.query)
    //     //   this.getResults()
    //     } else if (!this.state.query){
    //       this.setState({
    //         results: []               
    //       })
    //     }
    //   })
    // }

    render() {

        return(
            <div className="customNavBar">
                <Navbar expanded={false} bg="light" expand="lg">
                    <Navbar.Brand href="/">Simmering</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="searchBar" onChange={this.handleChange}/>
                        <SearchResults query={this.state.query}/>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/mealplan">Mealplan</Nav.Link>
                        <Nav.Link href="/shopping bag">My Cart</Nav.Link>
                        <Nav.Link href="/browse">Browse</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
            )
        }

}

  export default withRouter(CustomNavBar);