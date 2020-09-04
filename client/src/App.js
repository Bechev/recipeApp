import React from 'react';
import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {verify_credentials } from './services/actions/auth.js'
import CustomNavBar from './components/CustomNavBar.js'
import Home from './scenes/Home.js';
import Login from './scenes/Login.js';
import Signup from './scenes/Signup.js';
import SuggestRecipe from './scenes/SuggestRecipe.js';
import MealPlan from './scenes/Mealplan.js';
import Bag from './scenes/Bag.js';
import Browse from './scenes/Browse.js';
import Profile from './scenes/Profile.js';
import NotFoundPage from './scenes/NotFoundPage.js';
import Recipe from './scenes/Recipe.js';
import ResetPassword from './scenes/ResetPassword.js';
import RequestPasswordReset from './scenes/RequestPasswordReset.js'

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
          <BrowserRouter>
            <CustomNavBar/>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/signup' component={Signup}/>
                  <Route exact path='/resend_confirmation_email' component={RequestPasswordReset}/>
                  <Route exact path='/suggest_a_recipe' component={SuggestRecipe}/>
                  <Route exact path='/mealplan' component={MealPlan}/>
                  <Route path={`/recipe/:recipeName`} component={Recipe}/>
                  <Route exact path='/shopping_bag' component={Bag}/>
                  <Route exact path='/browse' component={Browse}/>
                  <Route exact path='/profile' component={Profile}/>
                  <Route exact path='/begin_reset_password' component={RequestPasswordReset}/>
                  <Route exact path='/reset_password' component={ResetPassword}/>
                  <Route path="/404" component={NotFoundPage} />
                  <Redirect to="/404" />
              </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        verify_credentials: () => dispatch(verify_credentials()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);