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

document.addEventListener("touchstart", function (event) {
  // Prevent the default behavior to avoid interference with touch gestures
  event.preventDefault();

  // Retrieve the first touch object
  const touch = event.touches[0];

  // Get the x, y coordinates
  const x = touch.clientX;
  const y = touch.clientY;

  // Call your function with the coordinates
  handleTouch(x, y);
});

function handleTouch(x, y) {
  // Your function logic with x, y coordinates
  if (x < playerX + 300) {
    if (y > playerY) {
      playerY -= 15;
    } else if (y > playerY + 100) {
      playerY += 15;
    }
  } else startShot();
}
