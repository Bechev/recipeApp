import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import './RecipeIngredients.css'

class RecipeIngredients extends Component {
    constructor(props){
        super(props)
        this.state={
            ingredientList: ["carrots", "pinapple", "salt", "chicken", "cucumber"],
            unitList: ["bunch", "whole", "tsp", "", "cup"],
            measureList: [50, 547, 54, 1, 555]

        }
        this.renderIngredientList = this.renderIngredientList.bind(this)
    }


    renderIngredientList(){
        return(
            <ul className="ingredientList">
            {this.state.ingredientList.map((ingredient, key)=>{
                return(
                    <li className="ingredient">{this.state.measureList[key]} {this.state.unitList[key]} {ingredient}</li>
                )
            })}
            </ul>
        )
    }


    render() {

        return(
            <div className="recipeIngredients">
                <Card className="card">
                    <Card.Body>
                        <Card.Text className="cardText">
                            {this.renderIngredientList()}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  export default withRouter(RecipeIngredients);