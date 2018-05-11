import React, { Component } from 'react';


class Sudoku extends Component {
  constructor(props){
    super(props);
    this.state = {
        gamesize : 4,

    }
  }

  gameMatrix = (n) => {
        let blocN = n*n -1 ;
        let matrix = [];
        let raw = [];
        let col = [];
        let ret = [];
        let test = {};
        for(let k=0;k<=blocN;k++){
          ret.push(k)
          if(ret.length === n){
            raw.push(ret);
            ret = []
          }
          matrix.push(k);
        }
        //create col
        for(let k=0;k<n;k++){
          for(let u=0;u<n;u++){
            let item = raw[u][k];
            ret.push(item);
            if(u === n -1){
              col.push(ret);
              ret = [];
            }
          
        }
       }

       

       for(let k=0;k<blocN;k++){
        test[k] = Math.floor(Math.random()*4) +1;
        
       }
       console.log(test)
        
       
      
       













       let game = matrix.map((item,key)=>
               <div className='sudokuBox' key={key} id={key}>{}</div>
       );

        return ( 
            game
        );
  }
    
  render() {
    let {gamesize} = this.state;
    return (
      <div className="Sudoku" >
           <h1>hello there its the sudoku time</h1>  
           <div className='gameContainer'>
           {this.gameMatrix(gamesize)}
           
           </div>
      </div>
    );
  }
}

export default Sudoku;
