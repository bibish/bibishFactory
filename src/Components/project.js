import React, { Component } from 'react';

class Project extends Component {
    constructor(props){
        super(props);
       
       
      this.state = {
        name : this.props.name,
        id : this.props.id
    }

    }
  render() {
    return (
      <div className="Project" id={this.state.id}>
       <h3>project {this.state.name}</h3>
      </div>
    );
  }
}

export default Project;
