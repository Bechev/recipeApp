import React, { Component } from 'react';
import {withRouter, Link, Route} from 'react-router-dom';
import Recipe from '../scenes/Recipe.js'
import './SearchResults.css'

class SearchResults extends Component {

    constructor(props){
        super(props)
        this.state={
            results: ["result 1", "result 2", "result 3"]
        }
    }

    renderResults(){
        return(
            this.state.results.map((result, key)=>{
                return(
                    <React.Fragment>
                        <Link to={`/recipe/${result}`}>{result}</Link>
                        <br/>
                    </React.Fragment>
                )
            })
        )
    }

    render() {

        return(
            <div className="searchResults">
                {this.renderResults()}
                {/* <Route path={`/recipe/:recipeName`} component={Recipe}/> */}
            </div>
            )
        }

}

  export default withRouter(SearchResults);