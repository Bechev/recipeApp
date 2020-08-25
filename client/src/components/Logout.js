import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Logout extends Component {
    

    render() {

        return(
            <div className="logout">
                Logout
            </div>
            )
        }

}

  export default withRouter(Logout);