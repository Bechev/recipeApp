import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class RecipeIngredients extends Component {
    

    render() {

        return(
            <div className="recipeIngredients">
                recipe ingredients
            </div>
            )
        }

}

  export default withRouter(RecipeIngredients);