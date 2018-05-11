import React, { Component } from 'react';
import Project from './project';


class Projects extends Component {
    constructor(props){
        super();
        this.state = {
          projects : ['todo','sudoku','cars']
        }
        

    }
  render() {

    return (
      <div className="Projects">
       <h1>project container</h1>
        {
          this.state.projects.map((item, i) =>
          <Project name={item} id={i} key={i} ></Project> )
        }
      </div>
    );
  }
}

export default Projects;
