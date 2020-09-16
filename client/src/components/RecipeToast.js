import React, { Component } from 'react';
import {Toast, Button} from 'react-bootstrap';
import {withRouter, Link, Redirect} from 'react-router-dom';
import {addOrRemoveRecipeToMealplan } from '../services/actions/mealplan.js'
import { connect } from 'react-redux'
import './RecipeToast.css'
import '../transversal CSS/button.css'


class RecipeToast extends Component {

    redirectToRecipe(){
        let path = `/recipe/${this.props.recipe.name}`;
        this.props.history.push(path);
    }    

    render() {

        return(
            <Toast className='recipeToast'>
                <Toast.Header>
                    {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                    <strong className="mr-auto">{this.props.recipe.name}</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>Guests: {this.props.quantities_multiplicator.multiplicator}</Toast.Body>
            </Toast>
            )
        }

}

const mapStateToProps = (state, ownProps) => {
    return {
      mealplan: state.mealplan,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addOrRemoveRecipeToMealplan: (action, mealplan_id, day_name, meal_name, recipe_id, multiplicator) => dispatch(addOrRemoveRecipeToMealplan(action, mealplan_id, day_name, meal_name, recipe_id, multiplicator)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeToast));