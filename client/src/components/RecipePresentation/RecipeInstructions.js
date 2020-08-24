import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class RecipeInstructions extends Component {
    

    render() {

        return(
            <div className="recipeInstructions">
                Recipe Instructions
            </div>
            )
        }

}

  export default withRouter(RecipeInstructions);