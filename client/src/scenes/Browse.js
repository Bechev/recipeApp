import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CategoryViewer from '../components/CategoryViewer.js'
import CategoryLists from '../components/CategoryLists.js'

class Browse extends Component {
    

    render() {

        return(
            <div className="browse">
                <CategoryLists/>
                <CategoryViewer/>
            </div>
            )
        }

}

  export default withRouter(Browse);