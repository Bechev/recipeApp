import React, { Component } from 'react';
import {withRouter, Link, Route} from 'react-router-dom';
import Recipe from '../scenes/Recipe.js'
import './SearchResults.css'

class SearchResults extends Component {

    constructor(props){
        super(props)
        this.state={
            results: []
        }
    }

    renderResults(){
        if(this.state.results[0] !== undefined){
            return(
                <div className="searchResults">
                    {this.state.results.map((result, key)=>{
                        return(
                            <React.Fragment>
                                <Link to={`/recipe/${result}`}>{result}</Link>
                                <br/>
                            </React.Fragment>
                        )
                    })}
                </div>
            )
        }
    }

    render() {

        return(
            <React.Fragment>
                {this.renderResults()}
            </React.Fragment>
            )
        }

}

  export default withRouter(SearchResults);