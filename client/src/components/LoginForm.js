import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import '../transversal CSS/button.css'

class LoginForm extends Component {

        constructor(props){
        super(props)
        this.state = {
            validated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const form = event.currentTarget;
        console.log(event.currentTarget.formBasicEmail.value)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        this.setState({validated: true})
    };
    

    render() {

        return(
            <div className="login">
                                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"  placeholder="Enter email" required/>
                        <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button className="button" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            )
        }

}

  export default withRouter(LoginForm);