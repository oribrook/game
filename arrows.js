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
    currentPosition = "left";
    gameSpeed -= 5;
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
  if (x < playerX + 400) {
    if (y > (playerY +100)) {
      playerY += 15;
    } else {
      playerY -= 15;
    }
  }
  else startShot();
}
