import React, { Component } from 'react';
import {Accordion, Card, Form} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './CategoryFilters.css'


class CategoryFilters extends Component {
    constructor(props){
        super(props)
        this.state = {
            promotedCategories: ['Favorites', 'Popular', 'New'],
            favorites: ['test'],
            popular: [],
            new: []
        }
    }

    renderPromotedCategories(){
        return(
            this.state.promotedCategories.map((category, key) =>{
                return(
                    <Accordion className="categoryFilter" key={key} defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                {category}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                {this.renderCategories(category.toLowerCase())}
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                )
            })
        )
    }

    renderCategories(categoryList){
        return(
            <Form>
                {this.state[categoryList].map((category, key)=>{
                    return(
                        <Form.Check key={key} type='checkbox' id={category} label={category}/>
                    )
                })}
            </Form>
        )
    }
    

    render() {

        return(
            <div className="categoryFilters">
                {this.renderPromotedCategories()}
            </div>
        )
    }

}

  export default withRouter(CategoryFilters);