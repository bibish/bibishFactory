import React, { Component } from 'react';
import './style.css';
import Header from './Components/header.js';
import Projects from './Components/projects.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header> 
       <Projects></Projects>  
      </div>
    );
  }
}

export default App;
