import React, { Component } from 'react';
import city from '../assets/city.png';


class Cars extends Component {
  constructor(){
      super();
      this.canvas = React.createRef();
      this.state ={pepe:[], gameState:false, player:false}
  }
  test(){
    let bg = new Image(600,400);  
    bg.src = city;
    console.log(bg)
  }
  movePlayer(x){ // updates my player
      let player = this.state.player;
      let lesVilainsPepe = this.state.pepe;
      for(let pepe of lesVilainsPepe){
        if(player.crashWith(pepe)){
            console.log('ta perdu dude')
            
        }else{
            player.clear()
            player.x += x;
            player.update()
        }
      }
      
  }
  moveRequest(){ // get player inputs
    
        document.addEventListener('keypress',(e)=>{
            if(e.keyCode === 100){
                 this.movePlayer(1) 
            }
            if(e.keyCode === 113){
                this.movePlayer(-1)
            }
        })
    
      
  }
  launch(){  //generate player + ads
      this.gameState = true;  
      let it = this.canvas.current;
      console.log(it);
      let ctx = it.getContext("2d");
      ctx.strokeStyle= "#000";
      ctx.strokeRect(0, 0, it.width, it.height);
      this.state.player =  new this.drawPlayer(100,10,30,30,ctx) 
      this.state.pepe.push( new this.drawPepe(10,10,30,30,ctx))
      this.drawGame(ctx);
      this.moveRequest()


  }
  drawGame(ctx){ // draw all my player&ads and the background

    let bg = new Image(600,400);
    bg.src=city;
    bg.onload = function(){
    ctx.drawImage(bg,0,0)
    }
    this.state.player.update();
    for( let pepe of this.state.pepe){
        pepe.update()
    }

  }
  drawPepe(x,y,w,h, ctx){  // my pepe object
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    ctx.fillRect(this.x,this.y,this.w,this.h);
    this.update = function(){
      ctx.fillStyle ='#ff0';
      ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    this.clear = function(){
        ctx.clearRect(this.x,this.y,this.w,this.h)
    }
    
}
  drawPlayer(x,y,w,h, ctx){ // my player object
      this.w = w;
      this.h = h;
      this.x = x;
      this.y = y;
      ctx.fillRect(this.x,this.y,this.w,this.h);
      this.update = function(){
        ctx.fillStyle ='#000';
        ctx.fillRect(this.x,this.y,this.w,this.h);
      }
      this.clear = function(){
          ctx.clearRect(this.x,this.y,this.w,this.h)
      }
      this.crashWith = function(vilainPepe) {
        let myleft = this.x;
        let myright = this.x + (this.w);
        let mytop = this.y;
        let mybottom = this.y + (this.h);
        let otherleft = vilainPepe.x;
        let otherright = vilainPepe.x + (vilainPepe.w);
        let othertop = vilainPepe.y;
        let otherbottom = vilainPepe.y + (vilainPepe.h);
        let crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }
      
  }
      
  render() {
 
    return (
      <div className="Cars">
        <h1>Cars page</h1>
        <button onClick={this.launch.bind(this)}>launch game</button>
        <button onClick={this.test.bind(this)}>test</button>
        <canvas id="game" ref={this.canvas} width={600} height={400}></canvas>
      </div>
    );
  }
}

export default Cars;
