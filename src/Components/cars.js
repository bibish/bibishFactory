import React, { Component } from 'react';
import city from '../assets/city.png';
// STEP -1  loadAssets()
// STEP 1  launch() 
// STEP 2  launch -> drawEntity()
// STEP 3   launch -> controls()
// STEP 4   drawEntity -> drawBackground
// STEP 5  drawEntity -> drawPepe, drawPlayer
// STZP 6  moveplayer -> updateGame()

class Cars extends Component {
  constructor(){
      super();
      this.canvas = React.createRef();
      this.state ={pepe:[], gameState:false, player:false}
  }
  test(){}

  loadAssets(){
    
  }












  updateGame(){
    this.drawBackground();
    this.state.player.update();
    let lesVilainsPepe = this.state.pepe;
    for(let pepe of lesVilainsPepe){
      pepe.update();
    }
    
  }
  movePlayer(x){ // updates my player
      let player = this.state.player;
      let lesVilainsPepe = this.state.pepe;
      for(let pepe of lesVilainsPepe){
        if(player.hitbox(pepe)){
            console.log('ta perdu dude');
        }else{
            player.clear();
            player.x += x;
            this.updateGame();
            // this.drawBackground();
            // player.update()
        }
      }
      
  }
  movePepe(){
    console.log('movepepe func')
  }
  Controls(){ // get player inputs
    
        document.addEventListener('keypress',(e)=>{
            if(e.keyCode === 100){
                 this.movePlayer(+10) 
            }
            if(e.keyCode === 113){
                this.movePlayer(-10)
            }
        })
    
      
  }
  
  launch(){  //generate player + ads
      this.interval = setInterval(this.movePepe, 1000);
      let it = this.canvas.current;
      let ctx = it.getContext("2d");
      ctx.strokeStyle= "#000";
      ctx.strokeRect(0, 0, it.width, it.height);
      this.drawEntity(ctx);
      this.Controls()


  }
  drawEntity(ctx){ // draw all my player&ads and the background

    this.drawBackground(ctx);
    this.state.player =  new this.drawPlayer(220,350,30,30,ctx) 
    this.state.pepe.push( new this.drawPepe(10,10,30,30,ctx))
    this.state.player.update();
    for( let pepe of this.state.pepe){
        pepe.update()
    }
    

  }
  drawBackground(){
    let it = this.canvas.current;
    let ctx = it.getContext("2d");
    ctx.fillStyle ='#bebe';
    ctx.fillRect(0,0,600,400);
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
      //this.drawBackground(ctx)
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
      this.hitbox = function(vilainPepe) {
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
