import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

class RecipeInstructions extends Component {
    
    constructor(props){
        super(props)
        this.state={
            instructions: ["instruction 1", "instruction 2", "instruction 3", "instruction 4", "instruction 5"]

        }
        this.renderInstructions = this.renderInstructions.bind(this)
    }

    renderInstructions(){
        return(
            <ol>
            {this.state.instructions.map((instruction, key)=>{
                return(
                    <li key={key}>{instruction}</li>
                )
            })}
            </ol>
        )
    }

    render() {

        return(
            <div className="recipeInstructions">
                <Card className="card">
                    <Card.Body>
                        <Card.Text className="cardText">
                            {this.renderInstructions()}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  export default withRouter(RecipeInstructions);