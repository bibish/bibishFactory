import React, { Component } from 'react';

class Project extends Component {
    constructor(props){
        super();
        this.state = {
            projectId:1
        }

    }
  render() {
    return (
      <div className="Project">
       <h1>projet n° {this.state.projectId}</h1>
      </div>
    );
  }
}

export default Project;
