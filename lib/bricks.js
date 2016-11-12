var brickRowCount = 7;
var brickColumnCount = 10;
var brickWidth = canvas.width * 0.06;
var brickHeight = canvas.height * 0.04;
var brickPadding = canvas.width * 0.01;
var brickOffsetTop = canvas.height * 0.1;
var brickOffsetLeft = (canvas.width - (brickWidth * 10 + brickPadding * 9)) / 2;
var dropAdditionalBall = false;
var dropExtraLifeBall = false;
var dropGrenadeBall = false;

let bricks = [];
for (c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for (r=0; r<brickRowCount; r++) {
    bricks[c][r] = { status: 1, color: "#3964e6", colorSet: false, moreBalls: false, extraLife: false, grenade: false };
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
  let rowYellow = randomRow();
  let columnYellow = randomColumn();
  let brickYellow = bricks[columnYellow][rowYellow];
  if (!brickYellow.colorSet) {
    brickYellow.color =  "#f1ef25";
    brickYellow.moreBalls = true;
    brickYellow.colorSet = true;
  }

  let rowGreen = this.randomRow();
  let columnGreen = this.randomColumn();
  let brickGreen = bricks[columnGreen][rowGreen];
  if (!brickGreen.colorSet) {
    brickGreen.color =  "#27b324";
    brickGreen.extraLife = true;
    brickGreen.colorSet = true;
  }


  let rowRed = this.randomRow();
  let columnRed = this.randomColumn();
  let brickRed = bricks[columnRed][rowRed];
  if (!brickRed.colorSet) {
    brickRed.color =  "#c23636";
    brickRed.grenade = true;
    brickRed.colorSet = true;
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

          if (brick.extraLife) {
            dropExtraLifeBall = true;
          }

          if (brick.grenade) {
            dropGrenadeBall = true;
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
