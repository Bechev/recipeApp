import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
// import { fetchRecipe } from '../services/actions/recipe.js'
import './CardControlPanel.css'

class CardControlPanel extends Component {
    
    constructor(props){
        super(props)
        this.state={
            guests: 2,
            recipeCalories: 160,
            recipeCookingTime: 50,
        }
        this.addGuest = this.addGuest.bind(this)
        this.removeGuest = this.removeGuest.bind(this)
    }
    
    addGuest(event){
        event.preventDefault();
        event.stopPropagation();
        let guests = this.state.guests + 1
        this.setState({guests: guests})

    }

    removeGuest(event){
        event.preventDefault();
        event.stopPropagation();
        let guests = Math.max(1, this.state.guests - 1)
        this.setState({guests: guests})
    }

    render() {


        return(
            <div className="cardControlPanel">
                <div className="recipeInformation">
                    <span className="recipeCalories">
                        Cal: {this.state.recipeCalories}
                    </span>
                    <span className="recipeCookingTime">
                        Toc: {this.state.recipeCookingTime}
                    </span>
                </div>
                <div className="guestControls">
                    <div className="guestControlButtons">
                        <button className="guestButton plus" onClick={this.addGuest}>+</button>
                        <button className="guestButton minus" onClick={this.removeGuest}>-</button>
                    </div>
                    <div className="guestCounter">{this.state.guests}</div>
                </div>

            </div>
            )
        }

}

const mapStateToProps = (state, ownProps) => {
    return {
      recipedata: state.recipe.recipe,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchRecipe: (recipe_name) => dispatch(fetchRecipe(recipe_name)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardControlPanel));