import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import image_placeholder from '../Assets/image_placeholder.jpg'
import './RecipeCard.css'
import '../transversal CSS/button.css'


class RecipeCard extends Component {
    

    render() {

        return(
            <div className="recipeCard">
                <Card>
                    <Card.Img variant="top" src={image_placeholder} />
                    <Card.Body>
                        <Card.Title>12345678912345</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="button" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  export default withRouter(RecipeCard);