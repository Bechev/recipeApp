import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class Logout extends Component {
    

    render() {

        return(
            <div className="logout">
                <Button>Logout</Button>
            </div>
            )
        }

}

  export default withRouter(Logout);