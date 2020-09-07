import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {verify_credentials } from './services/actions/auth.js'
import {withRouter} from 'react-router-dom';
import Routes from './services/Routes/Routes.js'

class App extends React.Component{

  componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.props.verify_credentials()
        }
    }

  render(){
    return (
      <div className="App">
        <div className="AppContent">
          <Routes/>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
        verify_credentials: () => dispatch(verify_credentials()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));