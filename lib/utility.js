const colors = ["#d20202", "#14d611", "#0095DD", "#de43a4", "#8f1abf", "#787878", "#f6de09", "#156111"];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let color = randomColor();
let color2 = randomColor();
let color3 = randomColor();

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
