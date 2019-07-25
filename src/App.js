import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Login from "./components/Home/Login";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
          <NavLink to='/kill_map' activeClassName='active'>Kill Map</NavLink>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/profile" render={() =>{
        return <div>this is the profile path</div>}}/>
        <Route exact path="/kill_map" render={() =>{
        return <div>this is the map path</div>}}/>
        <Route exact path="*" render={() =>{
        return <div>Y'ALL BEEN ZAPPED!</div>}}/>
      </Switch>
      
    </div>
  );
}

export default App;
