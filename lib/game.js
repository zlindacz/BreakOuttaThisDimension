document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function drawWelcome() {
  ctx2
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(defaultBall, color);

  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  drawBricks();

  let ball = defaultBall;

  if (ball.x + ball.dx > canvas.width-ball.radius || ball.x + ball.dx < ball.radius) {
      ball.dx = -ball.dx;
      color = randomColor();
  }

  if (ball.y + ball.dy < ball.radius) {
      ball.dy = -ball.dy;
      color = randomColor();
  }
  else if (ball.y + ball.dy > canvas.height-paddleHeight-ball.radius) {
    if (ball.x > paddleX - ball.radius && ball.x < paddleX + paddleWidth + ball.radius) {
        ball.dy = -ball.dy * 1.1;
        color = randomColor();
    } else {
      if (!lives) {
        alert("Game Over");
        document.location.reload();
      } else {
        lives -= 1;
        ball.x = canvas.width/2;
        ball.y = canvas.height-30;
        ball.dx = 2;
        ball.dy = -2;
        paddleX = (canvas.width - paddleWidth)/2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (paused) {
    cancelAnimationFrame(draw);
  } else {
    requestAnimationFrame(draw);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (paused) {
    drawWelcome();
  } else {
    draw();
  }
});
