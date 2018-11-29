const myCanvas = document.getElementById("my-canvas");

// context has all the methods for drawing things
const ctx = myCanvas.getContext("2d");



function drawBackground(){
  ctx.fillStyle = "pink";
  ctx.fillRect(0, 0, 1000, 500);

  // add some text
  ctx.fillStyle = "green"
  ctx.font = "30px Arial"
  ctx.fillText("Cool game!", 800, 50)

}
// drawBackground();

const spitfireImg = new Image();
const supermanImg = new Image();

spitfireImg.src = "./images/spitfire.png";
supermanImg.src = "./images/superman.png";

let spitfireX = 800;
let spitfireY = 200;

let supermanX = 0;
let supermanY = 200;

// spitfireImg.onload = function(){
//   // ctx.drawImage(whichImg, x, y, width, height)
//   ctx.drawImage(spitfireImg, spitfireX, spitfireY, 50, 50);
// }

// supermanImg.onload = function(){
//   // ctx.drawImage(whichImg, x, y, width, height)
//   ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);
// }


// move the superman!
document.onkeydown = function(event){
  console.log(event.keyCode); //check console inspector to find keyCode 
  switch(event.keyCode){
    case 37: //left
      supermanX -= 10;
      break;
    case 39: //right
      supermanX += 10;
      break;
    case 38: //up
      supermanY -= 10;
      break;
    case 40: //down
      supermanY += 10;
      break;
  }

}


// animate the canvas

function drawingLoop(){
  // erase/clear whole canvas before showing everything again
  ctx.clearRect(0, 0, 1000, 500);

  drawBackground();

  spitfireX -= 5;

  if(spitfireX < -50){
    spitfireX = 1000;
    spitfireY = Math.floor(Math.random() * 500);
  }

  // ctx.drawImage(whichImg, x, y, width, height)
  ctx.drawImage(spitfireImg, spitfireX, spitfireY, 50, 50);

  // ctx.drawImage(whichImg, x, y, width, height)
  ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);

  // re-draw the whole screen with callback function
  requestAnimationFrame(function(){
    // sets up a recursive loop (function that calls itself multiple times)
    drawingLoop();
  })

}

drawingLoop();