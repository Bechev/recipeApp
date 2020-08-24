import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeImageCarousel from './RecipePresentation/RecipeImageCarousel.js'
import RecipeInformation from './RecipePresentation/RecipeInformation.js'
import RecipeIngredients from './RecipePresentation/RecipeIngredients.js'
import RecipeInstructions from './RecipePresentation/RecipeInstructions.js'

class RecipePresentation extends Component {
    

    render() {

        return(
            <div className="recipePresentation">
                <RecipeImageCarousel/>
                <RecipeInformation/>
                <RecipeIngredients/>
                <RecipeInstructions/>
            </div>
            )
        }

}

  export default withRouter(RecipePresentation);