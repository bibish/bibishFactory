import React, { Component } from 'react';


class TodoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      update:true
    }
  }
    
  render() {
   
    return (
      <div className="TodoContainer" >
           <span>{this.props.content}</span>    
      </div>
    );
  }
}

export default TodoContainer;
