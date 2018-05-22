import React, { Component } from 'react';
import city from '../assets/city.png';
import eas from '../assets/eas.png';
import plop from '../assets/plop.png';
// STEP -1  loadAssets()
// STEP 1  launch() 
// STEP 2  launch -> drawEntity()
// STEP 3   launch -> controls()
// STEP 4   drawEntity -> drawBackground
// STEP 5  drawEntity -> drawPepe, drawPlayer
// STZP 6  moveplayer -> updateGame()

class Cars extends Component {
  constructor() {
    super();
    this.canvas = React.createRef();
    this.state = { pepe: [], gameState: false, player: false,canvasWidth:600,canvasHeight:400,fps:60 }
  }
  test() { }

  loadAssets() {
    let images = [city,eas,plop];
    let loadedImages = {};
    let promiseArray = images.map(function (imgurl) {
      let prom = new Promise(function (resolve, reject) {
        let img = new Image();
        img.onload = function () {
          loadedImages[imgurl] = img;
          resolve();

        };
        img.src = imgurl;

      });

      return prom;
    });

    Promise.all(promiseArray).then(
      value =>{
        this.setState({assets:loadedImages})
        this.launch()
      }
    );

    
      
  }

  updateGame() {
    this.drawBackground();
    this.state.player.update();
    let lesVilainsPepe = this.state.pepe;
    for (let pepe of lesVilainsPepe) {
      pepe.update();
    }

  }
  movePlayer(x) { // updates my player
    let player = this.state.player;
    let lesVilainsPepe = this.state.pepe;
    let oldPlayerX = player.x;
    let newPlayerX = player.x + x;
    for (let pepe of lesVilainsPepe) {
      if (player.hitbox(pepe)) {
        console.log('ta perdu dude');
      }else {
        console.log(oldPlayerX,newPlayerX);
        if(newPlayerX >= 0 && newPlayerX + player.w <= this.state.canvasWidth ){
        player.x = newPlayerX;
       // this.updateGame();
        }
      }
    }

  }
  movePepe() {
    console.log('movepepe func')
  }
  Controls() { // get player inputs

    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 100) {
        this.movePlayer(+10)
      }
      if (e.keyCode === 113) {
        this.movePlayer(-10)
      }
    })


  }

  launch() {  //generate player + ads
    this.interval = setInterval(()=>{
      this.updateGame()
    },1000/this.state.fps);
    let it = this.canvas.current;
    let ctx = it.getContext("2d");
    ctx.strokeStyle = "#000";
    ctx.strokeRect(0, 0, it.width, it.height);
    this.drawEntity(ctx);
    this.Controls()


  }
  drawEntity(ctx, assets) { // draw all my player&ads and the background

    this.drawBackground(assets);
    this.state.player = new this.drawPlayer(220, 350, 30, 30, ctx)
    this.state.pepe.push(new this.drawPepe(10, 10, 30, 30, ctx))
    this.state.player.update();
    for (let pepe of this.state.pepe) {
      pepe.update()
    }


  }
  drawBackground() {
    let it = this.canvas.current;
    let assets = this.state.assets;
    let ctx = it.getContext("2d");
    ctx.drawImage(assets[city],0,0);
  }
  drawPepe(x, y, w, h, ctx) {  // my pepe object
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this.update = function () {
      ctx.fillStyle = '#ff0';
      ctx.fillRect(this.x, this.y, this.w, this.h);
      //this.drawBackground(ctx)
    }
    this.clear = function () {
      ctx.clearRect(this.x, this.y, this.w, this.h)
    }

  }
  drawPlayer(x, y, w, h, ctx) { // my player object
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this.update = function () {
      ctx.fillStyle = '#000';
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    this.clear = function () {
      ctx.clearRect(this.x, this.y, this.w, this.h)
    }
    this.hitbox = function (vilainPepe) {
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
        <button onClick={this.loadAssets.bind(this)}>launch game</button>
        <button onClick={this.test.bind(this)}>test</button>
        <canvas id="game" ref={this.canvas} width={this.state.canvasWidth} height={this.state.canvasHeight}></canvas>
      </div>
    );
  }
}

export default Cars;
