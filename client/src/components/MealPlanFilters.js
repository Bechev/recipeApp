import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Accordion, Card} from 'react-bootstrap';
import MealViewer from './MealViewer.js'


class MealPlanFilters extends Component {
    
    constructor(props){
        super(props)
        this.state={
            daysList: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Friday"],
        }
        this.renderDays = this.renderDays.bind(this)
    }


    renderDays(){
        return(
            this.state.daysList.map((day, key) =>{
                return(
                    <Card>
                        <Accordion.Toggle  as={Card.Header} eventKey={key+1}>
                            {day}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={key+1}>
                            <Card.Body>
                                <MealViewer/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })
        )
    }


    render() {
        return(
            <div className="mealplanFilter">
                <Accordion defaultActiveKey="0">
                    {this.renderDays()}
                </Accordion>
            </div>
            )
        }

}

  export default withRouter(MealPlanFilters);