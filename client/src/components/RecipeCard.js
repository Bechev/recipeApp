import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class RecipeCard extends Component {
    

    render() {

        return(
            <div className="recipeCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Recipe Whatever but a long title to see what it does and if i like it or not otherwise i will do something else</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  export default withRouter(RecipeCard);