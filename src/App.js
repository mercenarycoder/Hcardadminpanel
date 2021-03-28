// import logo from '../public/3dlogo.png';
import './App.css';
import { Route, Switch, Redirect,withRouter } from 'react-router-dom';
// import {connect} from 'react-redux';
import React, { Component } from 'react';
// importing the base container pages
import Login from './containers/Login/login';
import Register from './containers/Register/register';
import Dashboard from './containers/Dashboard/dashboard';
import * as action from './store/Action/index';
// import {Redirect,Switch} from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    // this.props.checkAuth();
  }
  render() {
    let routes = (
      <Switch>
        <Route path='/' component={Dashboard} />
        <Redirect to='/' />
      </Switch>
    );
    if (this.props.token===null) {
      routes = (
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/' component={Dashboard} exact/>
          {/* <Redirect to='/login'/> */}
        </Switch>
      )
    }
    return (
      <div className='App'>
         <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/' component={Dashboard} exact/>
          <Redirect to='/login'/>
        </Switch>
      </div>
    )
  }
}
const mapStatetoProps = state => {
  return {
    token: state.reducer1.token 
  }
}

const mapDispatchProps = dispatch => {
  return {
    checkAuth: () => dispatch(action.checkAuth())
  }
}
// export default withRouter(connect(mapStatetoProps, mapDispatchProps)(App));
export default App;
