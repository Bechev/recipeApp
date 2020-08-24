import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import './RecipeInformation.css'

class RecipeInformation extends Component {
    

    render() {

        return(
            <div className="recipeInformation">
                <Card className="card">
                    <Card.Body>
                        <Card.Text className="cardText">
                            <table className="preparationInformationTable">
                                <tr>
                                    <td className="tableLabel"> Preparation time:</td>
                                    <td className="tableMeasure">10 min</td>
                                </tr>
                                <tr>
                                    <td className="tableLabel">Cooking time:</td>
                                    <td className="tableMeasure">20 min</td>
                                </tr>
                                <tr>
                                    <td className="tableLabel">Total time:</td>
                                    <td className="tableMeasure">30 min</td>
                                </tr>
                            </table>

                            <table className="nutritionInformationTable">
                                <tr>
                                    <td className="tableLabel">Servings:</td>
                                    <td className="tableMeasure">340kcal</td>
                                </tr>
                                <tr>
                                    <td className="tableLabel">Calories:</td>
                                    <td className="tableMeasure">340kcal</td>
                                </tr>
                            </table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )
        }

}

  export default withRouter(RecipeInformation);