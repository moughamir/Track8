import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/account' component={AccountPage}/>
        <Route render = {function(){
          return <h1>Not Found</h1>;
        }}
        />
      </Switch>
    );
  }
}

export default Routes;
