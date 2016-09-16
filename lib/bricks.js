var brickRowCount = 7;
var brickColumnCount = 10;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 80;
var brickOffsetLeft = 80;
var dropAdditionalBall = false;

let bricks = [];
for (c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for (r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1, color: "#3964e6", colorSet: false, moreBalls: false };
  }
}

function randomRow() {
  return Math.abs((Math.floor(Math.random() * brickRowCount)));
}

function randomColumn() {
  return Math.abs((Math.floor(Math.random() * brickColumnCount)));
}

function randomSpecial() {
// 10 grey blocks need 2 hits
  for (i=0; i<10; i++) {
    let rowGrey = randomRow();
    let columnGrey = randomColumn();
    let brickGrey = bricks[columnGrey][rowGrey];
    if (!brickGrey.colorSet) {
      brickGrey.color =  "#c0c0c0";
      brickGrey.status = 2;
      brickGrey.colorSet = true;
    }
  };

//  yellow block gives 2 more balls
  for (i=0; i<50; i++) {
    let rowYellow = randomRow();
    let columnYellow = randomColumn();
    let brickYellow = bricks[columnYellow][rowYellow];
    if (!brickYellow.colorSet) {
      brickYellow.color =  "#f1ef25";
      brickYellow.moreBalls = true;
      brickYellow.colorSet = true;
    }
  }

}

function drawBricks() {
  randomSpecial();
  for (c=0; c<brickColumnCount; c++) {
    for (r=0; r<brickRowCount; r++) {
      if (bricks[c][r].status > 0) {
        let brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
        let brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = bricks[c][r].color;
        bricks[c][r].colorSet = true;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetection() {
  let ball = defaultBall;
  let ball2 = additionalBall;
  for (c=0; c<brickColumnCount; c++) {
    for (r=0; r<brickRowCount; r++) {
      let brick = bricks[c][r];
      if (brick.status > 0) {
        if (ball.x+ball.radius > brick.x && ball.x-ball.radius < brick.x+brickWidth && ball.y+ball.radius > brick.y && ball.y-ball.radius < brick.y+brickHeight) {
          ball.dy = -ball.dy;
          brick.status -= 1;
          score += 1;

          if (brick.moreBalls) {
            dropAdditionalBall = true;
          }
        }
        if (ball2.x+ball2.radius > brick.x && ball2.x-ball2.radius < brick.x+brickWidth && ball2.y+ball2.radius > brick.y && ball2.y-ball2.radius < brick.y+brickHeight) {
          ball2.dy = -ball2.dy;
          brick.status -= 1;
          score += 1;
        }
        let allBricks = [].concat.apply([], bricks);
        if (allBricks.every(brick => {
          return brick.status <= 0;
        })) {
          alert("YOU WIN, CONGRATULATIONS!")
          document.location.reload();
        }
      }
    }
  }
}
