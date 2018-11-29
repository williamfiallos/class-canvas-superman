window.onload = function(){
  const canvas = document.getElementById("example");

  const ctx = canvas.getContext("2d");

  // draw rectangle:
  // --------------------
  ctx.fillStyle = "purple";
  ctx.fillRect(200, 200, 30, 30);


  // draw text
  // -------------------- 
  ctx.fillStyle = "orange"
  ctx.font = "30px arial"
  // ctx.fillText("string", x, y) x,y are coordinates for text to appear
  ctx.fillText("Hello there", 20, 40);

  // draw path
  // --------------------

  // start the path
  ctx.beginPath();
  // starting position is x=50, y=50
  ctx.moveTo(50, 50);
  // 
  ctx.lineTo(250, 50);
  // to execute:
  ctx.stroke();
  // ctx.closePath(); while this is commented it allows end point to continue at last point

  ctx.beginPath();
  ctx.moveTo(250, 50);
  ctx.lineTo(250, 100);
  // to execute:
  ctx.stroke();
  ctx.closePath();

  // draw circle
  // ---------------------

  ctx.beginPath();
  // ctx.arc(x, y, radius, startAngle, endAngle)
  ctx.arc(150, 170, 75, 0, Math.PI * 2); //"* 2" for two sides of a circle
  ctx.lineWidth = 10;
  ctx.strokeStyle = "green"
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(150, 170, 35, 0, Math.PI * 2);
  ctx.fillStyle = "red"
  // fills the inner circle with red color
  ctx.fill();
  ctx.closePath();

}