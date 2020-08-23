import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeCard from './RecipeCard.js'

class CategoryViewer extends Component {
    

    render() {

        return(
            <div className="categoryViewer">
                <RecipeCard/>
            </div>
            )
        }

}

  export default withRouter(CategoryViewer);