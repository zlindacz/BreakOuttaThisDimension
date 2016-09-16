var defaultBall = {
  radius: 10,
  x: canvas.width/2,
  y: canvas.height-30,
  dx: 4,
  dy: -3,
}

var additionalBall = {
  radius: 10,
  x: Math.floor(Math.random()*canvas.width),
  y: canvas.height/2+20,
  dx: 2,
  dy: 2,
}

var extraLifeBall = {
  radius: 10,
  x: Math.floor(Math.random()*canvas.width),
  y: 0,
  dx: 0,
  dy: 5,
  color: "#27b324",
}

var grenadeBall = {
  radius: 10,
  x: canvas.width/2,
  y: 0,
  dx: 0,
  dy: 5,
  color: "#c23636",
}

function drawBall(ball=defaultBall, color = randomColor()) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
