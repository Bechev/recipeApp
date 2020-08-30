import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'
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
            if(this.props.query && this.props.query.length >= 1){
                this.getResults()
            } else if (!this.props.query){
                this.setState({
                    results: []               
                })
            }
        }
    }

    getResults() {
        fetch("http://localhost:3000/api/v1/search",{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "uid": this.props.user.uid,
                "client":  this.props.user.client,
                "access-token":  this.props.user['access-token'],
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                char: this.props.query
            })
        })
        .then(response => response.json())
        .then(response => { 
            let resultsArr = []
            response.map((recipe, key)=>{
                resultsArr.push(recipe.name)
            })
            this.setState({
                results: resultsArr
            })
        })
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


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

// const mapDispatchToProps = dispatch => {
//     return {
//         verify_credentials: (user) => dispatch(verify_credentials(user)),
//     }
// }

export default withRouter(connect(mapStateToProps, null)(SearchResults));