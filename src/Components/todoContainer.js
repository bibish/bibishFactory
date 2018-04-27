import React, { Component } from 'react';


class TodoContainer extends Component {
  constructor(props){
    super(props);
    this.state = this.props
  }
    
  render() {
    return (
      <div className="TodoContainer" >
           <span>{this.props.content}, niveau de fun : <h1>{this.props.fun}</h1></span>    
      </div>
    );
  }
}

export default TodoContainer;
