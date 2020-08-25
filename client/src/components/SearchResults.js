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
        this.resetState = this.resetState.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.query !== this.props.query){
            this.setState({results: [this.props.query]})
            console.log("props:" + this.props.query)
            console.log("state:" + this.state.results[0])
        }
    }

    resetState(){
        this.setState({results: []})
    }

    renderResults(){
        if(this.state.results[0]){
            return(
                <div className="searchResults">
                    {this.state.results.map((result, key)=>{
                        return(
                            <React.Fragment>
                                <Link to={`/recipe/${result}`} onClick={this.resetState}>{result}</Link>
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