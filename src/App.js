import React, { Component } from 'react';
import Header from './Components/header.js';
import Project from './Components/project.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header> 
       <h1>Hello world</h1>
       <Project></Project>  
      </div>
    );
  }
}

export default App;
