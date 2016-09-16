const colors = ["#d20202", "#1aed17", "#1da8eb", "#de43a4", "#ad34df", "#787878", "#f6de09", "#06f0cd"];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let plusOneLife = false;
let loseOneLife = false;
let color = randomColor();
let color2 = randomColor();
var score = 0;
var lives = 3;

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
}
