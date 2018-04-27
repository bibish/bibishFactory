import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class Project extends Component {
    constructor(props){
        super(props);
       
       
      this.state = {
        name : this.props.name,
        id : this.props.id,
        go : false
        }

    }
    redirect(){
        this.setState({go : true})
    }
  render() {
    let { go, name } = this.state;
    if(go){

        return <Redirect to={`/${name}`}></Redirect> ;
    }else {
        return (
            <div className="Project" id={this.state.id}>
      
              <div className="projectContainer">
              <h3 onClick={this.redirect.bind(this)}>project {this.state.name}</h3>
              </div>
             
            </div>
          );
    }
    
  }
}

export default Project;
