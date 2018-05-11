import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Header from './Components/header.js';
import Projects from './Components/projects.js';
import Sudoku from './Components/sudoku.js';
import Todo from './Components/todo.js'
import Cars from './Components/cars.js'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header> 
       <Switch>
         <Route exact path ='/' component={Projects}/>
         <Route exact path ='/todo' component={Todo}/> 
         <Route exact path ='/sudoku' component={Sudoku}/> 
         <Route exact path ='/cars' component={Cars}/> 
       </Switch>
      </div>
    );
  }
}

export default App;
