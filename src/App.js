import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Header from './Components/header.js';
import Projects from './Components/projects.js';
import Todo from './Components/todo.js'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header> 
       <Switch>
         <Route exact path ='/' component={Projects}/>
         <Route exact path ='/todo' component={Todo}/> 
       </Switch>
      </div>
    );
  }
}

export default App;
