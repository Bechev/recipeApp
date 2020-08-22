import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js'
import './Login.css'
import {withRouter} from 'react-router-dom';

class Login extends Component {
    

    render() {

        return(
            <div className="login">
                <div className="loginWelcome">Test</div>
                <LoginForm/>
            </div>
            )
        }

}

  export default withRouter(Login);