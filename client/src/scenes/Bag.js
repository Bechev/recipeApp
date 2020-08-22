import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Bag extends Component {
    

    render() {

        return(
            <div className="bag">
                Shopping bag
            </div>
            )
        }

}

  export default withRouter(Bag);