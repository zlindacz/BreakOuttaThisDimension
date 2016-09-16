var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var paused = true;

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  } else if (e.keyCode == 77) { // m for menu
    togglePause();
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  } else if (e.keyCode == 13) {
    toggleFullScreen();
  }
}

function togglePause() {
  let menu = document.getElementById("welcome-canvas");
  if (paused) {
    menu.style.visibility = "hidden";
    canvas.style.visibility = "visible";
    paused = false;
    draw();
  } else {
    menu.style.visibility = "visible";
    canvas.style.visibility = "hidden";
    paused = true;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > paddleWidth/2 && relativeX < canvas.width-paddleWidth/2) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "olive";
    ctx.fill();
    ctx.closePath();
}
