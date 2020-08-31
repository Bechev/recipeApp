import React, { Component } from 'react';
import {Accordion, Card, Form, Button, ButtonGroup} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './CategoryFilters.css'


class CategoryFilters extends Component {
    constructor(props){
        super(props)
        this.state = {
            filters: ['Category 1', 'Category 2', 'Category 3'],
            promotedCategories: ['Popular', 'New', 'Favorites']
        }
    }

    renderPromotedCategories(){
        return(
            <ButtonGroup className='promotedCategories' aria-label="Basic example">
                {this.state.promotedCategories.map((category, key) =>{
                    return(
                            <Button variant="secondary">{category}</Button>
                    )
                })}
            </ButtonGroup>
        )
    }

    renderCategories(categoryList){
        return(
            <Form>
                {this.state.filters.map((category, key)=>{
                    return(
                        <Form.Check key={key} type='checkbox' id={category} label={category}/>
                    )
                })}
            </Form>
        )
    }

    renderFilters(){
        return(
            <Accordion className="filters" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Filters
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Form>
                            {this.state.filters.map((filter, key)=>{
                                return(
                                    <Form.Check key={key} type='checkbox' id={filter} label={filter}/>
                                )
                            })}
                        </Form>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
    

    render() {

        return(
            <div className="categoryFilters">
                {this.renderPromotedCategories()}
                {this.renderFilters()}
            </div>
        )
    }

}

  export default withRouter(CategoryFilters);