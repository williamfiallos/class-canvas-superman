function draw(x, y){
  // use id "example" to get canvas tag
  const theCanvas = document.getElementById("example")
  // ctx is short for "context"
  // capture 2d context where everything happens in canvas
  const ctx = theCanvas.getContext("2d");

  // clears whole canvas to simulate animation (==movement) of the rectangle
  ctx.clearRect(0,0, 300, 300);

  // colors rectangle with this color
  ctx.fillStyle = "green";

  // ctx.fill has 4 arguments: (x, y, width, height)
  // creates rectangle => ctx.fillRect(x, y, width, height);
  // ctx.fillRect(0, 0, 50, 50);
  ctx.fillRect(x, 0, 50, 50);

  // changes position of X coordinate
  x += 3;

  // calls itself every 30ms
  setTimeout(`draw(${x}, ${y})`, 30);


}