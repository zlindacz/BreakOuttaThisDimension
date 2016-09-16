var defaultBall = {
  radius: 10,
  x: canvas.width/2,
  y: canvas.height-30,
  dx: 2,
  dy: -2,
  extra: 0
}

function drawBall(ball=defaultBall, color = randomColor()) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
