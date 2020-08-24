import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Profile extends Component {
    

    render() {

        return(
            <div className="profile">
                Preferences (default # of guests)
                Diet
                Log out
            </div>
            )
        }

}

  export default withRouter(Profile);