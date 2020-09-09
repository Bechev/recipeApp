import React, { Component } from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import {withRouter, Link, Redirect} from 'react-router-dom';
import image_placeholder from '../Assets/image_placeholder.jpg'
import CardControlPanel from './CardControlPanel.js'
import './RecipeCard.css'
import '../transversal CSS/button.css'


class RecipeCard extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            diplayAddToMealPlanModal: false,
            isInMealPlan: false,
        }
        this.redirectToRecipe = this.redirectToRecipe.bind(this)
        this.addToMealPlan = this.addToMealPlan.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    redirectToRecipe(){
        let path = `/recipe/${this.props.recipe.name}`;
        this.props.history.push(path);
    }    

    addToMealPlan(){
        this.setState({diplayAddToMealPlanModal: true})
    }

    handleClose(){
        this.setState({diplayAddToMealPlanModal: false})
    }

    renderAddToMealPlanModal(){
        return(
            <Modal show={this.state.diplayAddToMealPlanModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {

        return(
            <div className="recipeCard">
            {this.renderAddToMealPlanModal()}
                <Card>
                    <Card.Img onClick={this.redirectToRecipe} variant="top" src={image_placeholder} />
                    <Card.Body>
                        <Card.Title className="title" onClick={this.redirectToRecipe}>{this.props.recipe.name}</Card.Title>
                        <CardControlPanel className="controlPanel"/>
                        {this.state.isInMealPlan ? null : <Button className="button" variant="primary" onClick={this.addToMealPlan}>Add to MealPlan</Button>}
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  export default withRouter(RecipeCard);