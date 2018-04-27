import React, { Component } from 'react';
import TodoContainer from './todoContainer'


class Todo extends Component {
   constructor(props){
    super(props);
    this.state = {
        todoInput : '',
        fun : 25,
        isTodo : false
    }
   }
    
  render() {
    let {fun, isTodo} = this.state;
    return (
      <div className="Todo" >

            <h1>This is a todo list Yeah</h1>
            <span>todolist is like ... how can we add fun to the fun ?<br/>let's try something !</span>
            <div className="TodoControls">
                <span>fun Metter {fun}</span>
                <button>Add My todo !</button>
                <button>Create random todo</button>
                <button>Edits todo</button>
            </div>
            { isTodo ? 
            <TodoContainer></TodoContainer>
             : 
            null 
              }
                    

       
      </div>
    );
  }
}

export default Todo;
