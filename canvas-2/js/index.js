const myCanvas = document.getElementById("my-canvas");

// context has all the methods for drawing things
const ctx = myCanvas.getContext("2d");

// global variables:
let score = 0;
let isOver = false;


function drawBackground(){
  ctx.fillStyle = "pink";
  // 1000 ===> width of the canvas that I get from the index.html
  // 500 ===> is the height of the canvas that I get from the index.html
  ctx.fillRect(0, 0, 1000, 500);

  // add some text
  ctx.fillStyle = "green"
  ctx.font = "30px Arial"
  ctx.fillText(`Score: ${score} `, 800, 50)

}
// drawBackground();
// things with "new" are _instances_ of a *constructor*
const spitfireImg = new Image();
const supermanImg = new Image();

// "src" has to dot/point as the image is used in HTML file
spitfireImg.src = "images/spitfire.png";
supermanImg.src = "images/superman.png";

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

  // start moving fireball by changing it X coordinate in every loop call
  spitfireX -= 5;

// when the fireball disappeears from the canvas
  if(spitfireX < -50){
    // set its X again to fireballX=1000
    spitfireX = 1000;
    // and for each ball pick random Y in range 0 to 450 (which is height of canvas (500) minus fireball size (50))
    spitfireY = Math.floor(Math.random() * 450);
  }

  drawEverything();
  if(isOver === false){
    // re-draw the whole screen with callback function
    requestAnimationFrame(function(){
      // sets up a recursive loop (function that calls itself multiple times)
      drawingLoop();
    })
  }
  

}

function drawEverything(){
  // ctx.drawImage(whichImg, x, y, width, height)
  ctx.drawImage(spitfireImg, spitfireX, spitfireY, 50, 50);

  // ctx.drawImage(whichImg, x, y, width, height)
  ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);

// call checkCollision before score
  if (checkCollision(supermanX, supermanY, spitfireX, spitfireY)){
    // console.log("CRASHED!!!");
    gameOver();
  }

  if (spitfireX === 0){
    score++;
  }
}

// this function is to return a true or false
function checkCollision(obj1x, obj1y, obj2x, obj2y){
  // supermanY + superman-height >= spitfireY
  return obj1y + 150 - 50 >= obj2y
  // supermanY + spitfireY + spitfire-height
    && obj1y <= obj2y + 50
    // supermanX + superman-width >= spitfireX
    && obj1x + 150 - 50 >= obj2x
    // supermanX <= spitfireX + spitfire-width
    && obj1x <= obj2x + 50
}

function gameOver(){
  // clear canvas because I don't want to see alive superman and the spitfire
  ctx.clearRect(0, 0, 1000, 500);
  // redraw the background since I like the pink color
  drawBackground();
  // create tired-superman image
  const tiredSupermanImg = new Image();
  // point to the src where is the image itself
  tiredSupermanImg.src = "images/superman-hurt.png";
  tiredSupermanImg.onload = function(){
    ctx.drawImage(tiredSupermanImg, 480, 300, 150, 150);
  }
  // change the value of isOver to true
  isOver = true;
  // display Game Over
  ctx.font = "bold 70px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("GAME OVER", 400, 225);
}

// call drawingLoop() to activate/start looping (after this point it will recursively call itself)
drawingLoop();