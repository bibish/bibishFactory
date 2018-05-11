import React, { Component } from 'react';
import TodoContainer from './todoContainer'


class Todo extends Component {
   constructor(props){
    super(props);
    this.state = {
        todoInput : '',
        fun : 25,
        isTodo : false,
        todos : ['I should finish this feature and do the css'],
        funWarning : 'THERE IS NO LONGER FUN HERE'
        }
    }
   handleInput(e){
        this.setState({
            todoInput : e.target.value
        })
        

   }
   send(){
       
       let todo = this.state.todoInput;
       this.setState({
           todos:[...this.state.todos, todo],
           fun : this.state.fun - 15
        })
   }
   create(){
       
    this.setState({
        todos:[...this.state.todos, 'lol no'],
        fun : this.state.fun + 1026*15
     })
    }


    
  render() {
    let {fun, isTodo, todos,funWarning} = this.state;
    if(todos.length > 0){isTodo = !isTodo}
    return (
      <div className="Todo" >

            <h1>This is a todo list Yeah</h1>
            <span>todolist is like ... how can we add fun to the fun ?<br/>let's try something !</span>
            <div className="TodoControls">
                <br/>
                {/* <h1>fun Metter {fun} {(fun < 0) ? funWarning : null }</h1> */}
                <br/>
                <input type='text' placeholder='kek' onChange={(e)=> this.handleInput(e)}/>
                <button onClick={()=> this.send()} >Add My todo !</button>
                <button onClick={()=> this.create()}>Create random todo</button>
                {/* <button onClick={}>Edits todo</button> */}
            </div>
            { isTodo ? 
                <h1>lis of your tododododo</h1>
             :  
            null 
              }
            {
                  todos.map( (todo,i) =>{
                  let data = {
                      content : todo,
                      fun : fun
                  }    
                  return ( <TodoContainer key={i} {...data}></TodoContainer> )
                  })
              }
              

       
      </div>
    );
  }
}

export default Todo;
