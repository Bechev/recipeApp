import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import './GroceriesList.css'

class GroceriesList extends Component {
    constructor(props){
        super(props)
        this.state={
            groceriesList: [
                'ingredient 1',
                'ingredient 2',
                'ingredient 3',
                'ingredient 4',
                'ingredient 5'
            ]
        }
    }

    renderGroceriesList(){
        return(
            <Form className='groceriesListForm'>
                {this.state.groceriesList.map((ingredient, key)=>{
                    return(
                        <Form.Check className='groceriesListCheckbox' key={key} type='checkbox' id={ingredient} label={ingredient}/>
                    )
                })}
            </Form>
        )
    }


    render() {

        return(
            <div className="groceriesList">
                <h3>Groceries List</h3>
                {this.renderGroceriesList()}
            </div>
            )
        }

}

  export default withRouter(GroceriesList);