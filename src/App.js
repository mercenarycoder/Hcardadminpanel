// import logo from '../public/3dlogo.png';
import './App.css';
import {Route,Switch} from 'react-router-dom';
// import {connect} from 'react-redux';
import React,{ Component } from 'react';
// importing the base container pages
import Login from './containers/Login/login';
import Register from './containers/Register/register';
import Dashboard from './containers/Dashboard/dashboard';

class App extends Component{

  render(){
    return(
      <div className='App'>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/' component={Dashboard} exact/>
          </Switch>
      </div>
    )
  }
}

export default App;
