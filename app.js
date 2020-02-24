document.getElementById('draw').addEventListener('click', drawRectangle);
document.getElementById('clear').addEventListener('click', clearRectangle);
document.getElementById('move-right').addEventListener('click', moveRight);
document.getElementById('move-left').addEventListener('click', moveLeft);

var x = 160;
var y = 100;

function drawRectangle() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(200,0,200)";
  ctx.fillRect(x, y, 160, 75);
  // ctx.fillRect(15, 10, 150, 75);
}

function clearRectangle() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function moveRight() {
  x = x + 20;
  if (x > 340) {
    x = 340;
  } else {
    clearRectangle();
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,200)";

    ctx.fillRect(x, y, 160, 75);

  }


}

function moveLeft() {
  x = x - 20;
  if (x < 0) {
    x = 0;
  } else {
    clearRectangle();
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,200)";
    ctx.fillRect(x, y, 160, 75);
  }

}