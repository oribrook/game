const pressedKeys = {};

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentPosition = "right";
    bgDir = "r";
    gameSpeed += 5;
  }
  if (event.key === "ArrowUp") {
    playerY -= 25;
  }
  if (event.key === "ArrowLeft") {
    // currentPosition = "left";
    gameSpeed -= 5;
    if (gameSpeed < 0) {
      gameSpeed = 0;
    }
  }
  if (event.key === "ArrowDown") {
    playerY += 25;
  }
  if (event.code === "Space") {
    startShot();
  }
});

let touchStartTime; // prevent double-touch
document.addEventListener("touchstart", function (event) {
  const currentTime = new Date().getTime();
  // Check the time difference to determine if it's a double-tap
  if (touchStartTime && currentTime - touchStartTime < 300) {
    event.preventDefault();
    touchStartTime = null;
  } else {
    touchStartTime = currentTime;
  }
  event.preventDefault();
  const touch = event.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;
  handleTouch(x, y);
});

function handleTouch(x, y) {
  mainCanvas = document.getElementById("bgCanvas");
  rect = mainCanvas.getBoundingClientRect();
  // middleY = (rect.bottom - rect.top) * 0.5;
  middleX = (rect.right - rect.left) * 0.5;

  py = rect.top + playerY;
  px = rect.top + playerY;
  console.log(x, y);
  // console.log(middleX, middleY);
  console.log(rect.left, rect.right);
  console.log(rect.top, rect.bottom);

  if (x < middleX) {
    if (y > py) {
      playerY += 15;
    } else {
      playerY -= 15;
    }
  } else startShot();
}
