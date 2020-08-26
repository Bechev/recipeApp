import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import '../transversal CSS/button.css'

class Logout extends Component {
    

    render() {

        return(
            <div className="logout">
                <Button className="button">Logout</Button>
            </div>
            )
        }

}

  export default withRouter(Logout);