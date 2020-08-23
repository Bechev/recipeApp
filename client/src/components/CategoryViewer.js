import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import RecipeCard from './RecipeCard.js'
import './CategoryViewer.css'

class CategoryViewer extends Component {
    

    render() {

        return(
            <div className="categoryViewer">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
            )
        }

}

  export default withRouter(CategoryViewer);