document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#6448b5";
  ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#6448b5";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
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
  } else if (ball.y + ball.dy > canvas.height-paddleHeight-ball.radius) {
    if (ball.x > paddleX - ball.radius && ball.x < paddleX + paddleWidth + ball.radius) {
        ball.dy = -ball.dy * 1.05;
        color = randomColor();
    } else {
      if (!lives) {
        alert("Game Over");
        document.location.reload();
      } else {
        lives -= 1;
        ball.x = canvas.width/2;
        ball.y = canvas.height-30;
        ball.dx = 4;
        ball.dy = -3;
        paddleX = (canvas.width - paddleWidth)/2;
      }
    }
  }

  ball.x += ball.dx;
  ball.y += ball.dy;


  if (dropAdditionalBall) {
    let ball2 = additionalBall;
    drawBall(additionalBall, color2);

    if (ball2.x + ball2.dx > canvas.width-ball2.radius || ball2.x + ball2.dx < ball2.radius) {
      ball2.dx = -ball2.dx;
      color2 = randomColor();
    }

    if (ball2.y + ball2.dy < ball2.radius) {
      ball2.dy = -ball2.dy;
      color2 = randomColor();
    } else if (ball2.y + ball2.dy > canvas.height-paddleHeight-ball2.radius) {
      if (ball2.x > paddleX - ball2.radius && ball2.x < paddleX + paddleWidth + ball2.radius) {
        ball2.dy = -ball2.dy * 1.05;
        color2 = randomColor();
      } else {
        dropAdditionalBall = false;
      }
    }
    ball2.x += ball2.dx;
    ball2.y += ball2.dy;
  }

  if (dropExtraLifeBall) {
    let ball3 = extraLifeBall;
    drawBall(extraLifeBall, extraLifeBall.color);
    if (ball3.y + ball3.dy > canvas.height-paddleHeight-ball3.radius) {
      if ((ball3.x > paddleX - ball3.radius && ball3.x < paddleX + paddleWidth + ball3.radius) && !plusOneLife) {
        lives += 1;
        plusOneLife = true;
      } else {
        dropExtraLifeBall = false;
      }
    }
    ball3.y += ball3.dy;
  }

  if (dropGrenadeBall) {
    let ball4 = grenadeBall;
    drawBall(grenadeBall, grenadeBall.color);
    if (ball4.y + ball4.dy > canvas.height-paddleHeight-ball4.radius) {
      if ((ball4.x > paddleX - ball4.radius && ball4.x < paddleX + paddleWidth + ball4.radius) && !loseOneLife) {
        lives -= 1;
        loseOneLife = true;
        if (lives <= 0) {
          alert("Game Over");
          document.location.reload();
        }
      } else {
        dropGrenadeBall = false;
      }
    }
    ball4.y += ball4.dy;
  }

  if (rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 7;
  } else if (leftPressed && ballpaddleX > 0) {
      paddleX -= 7;
  }

  if (paused) {
    cancelAnimationFrame(draw);
  } else {
    requestAnimationFrame(draw);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  draw();
});
