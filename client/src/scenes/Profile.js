import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Logout from '../components/Logout.js'
import UserPreferences from '../components/UserPreferences.js'
import PreviousMealplans from '../components/PreviousMealplans.js'

class Profile extends Component {
    

    render() {

        return(
            <div className="profile">
                <Logout/>
                <UserPreferences/>
                <PreviousMealplans/>
            </div>
            )
        }

}

  export default withRouter(Profile);