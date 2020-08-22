import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class SignupForm extends Component {

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


    renderStatesOptions(){
        const statesList = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
        return(
            statesList.map((state, key)=>{
                return(
                    <option key={key} value={state}>{state}</option>
                )
            })
        )
    }
    

    render() {

        return(
            <div className="signupForm">
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

                    <Form.Group controlId="formBasicState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" required>
                            {this.renderStatesOptions()}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We collect your state to suggest local and seasonal ingredients
                        </Form.Text>

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            )
        }

}

  export default withRouter(SignupForm);