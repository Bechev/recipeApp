import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import RecipeCard from './RecipeCard.js'
import './MealViewer.css'


class MealViewer extends Component {
    
    constructor(props){
        super(props)
        this.state={
            mealList: [{name: "Breakfast", recipes: ["recipe1", "recipe2", "recipe3", "recipe4"]}, {name: "Lunch", recipes: ["recipe3", "recipe4"]}, {name: "Dinner", recipes: ["recipe5", "recipe6"]}],
        }
        this.renderMealViewer = this.renderMealViewer.bind(this)
        this.renderMealRecipes = this.renderMealRecipes.bind(this)
    }

    renderMealRecipes(meal){
        return(
            meal.recipes.map((recipe, key) =>{
                return(
                    <RecipeCard/>
                )
            })
        )
    }

    renderMealViewer(){
        return(
            this.state.mealList.map((meal, key) =>{
                return(
                    <Card className="meal">
                        <h3>{meal.name}</h3>
                        <div className="mealRecipes">
                            {this.renderMealRecipes(meal)}
                        </div>
                    </Card>
                )
            })
        )
    }


    render() {
        return(
            <div className="mealViewer">
                {this.renderMealViewer()}
            </div>
            )
        }

}

  export default withRouter(MealViewer);