import React from 'react';
import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './scenes/Home.js';
import Login from './scenes/Login.js';
import Signup from './scenes/Signup.js';
import Browse from './scenes/Browse.js';
import Bag from './scenes/Bag.js';
import Profile from './scenes/Profile.js';
import Settings from './scenes/Settings.js';
import NotFoundPage from './scenes/NotFoundPage.js';

function App() {
  return (
    <div className="App">
      <div className="AppContent">
        <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/browse' component={Browse}/>
                    <Route exact path='/shopping bag' component={Bag}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/settings' component={Settings}/>
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
