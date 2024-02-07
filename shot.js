const shotCanvas = document.getElementById("shot");
const shotCtx = shotCanvas.getContext("2d");

const SHOT_CANVAS_WIDTH = (shotCanvas.width = 1024);
const SHOT_CANVAS_HEIGHT = (shotCanvas.height = 700);

const colSound = new Audio();
colSound.src = "boom.wav";

const shotImage = new Image();
shotImage.src = "shot.png";

const shotWidth = 30;
const shotHeight = 30;

function startShot() {
  if (!shotActive) {
    shotY = playerY;
    shotX = 0;
    shotActive = true;
  }
}

function checkCollision() {
  console.log("check");

  res = true;
  for (i = 0; i < enemies.length; i++) {
    en = enemies[i];
    enCenterX = en.x + en.width / 2;
    enCenterY = en.y + en.height / 2;

    shotCenterX = shotX + shotWidth / 2;
    shotCenterY = shotY + shotHeight / 2;

    distance = Math.sqrt(
      (shotCenterX - enCenterX) ** 2 + (shotCenterY - enCenterY) ** 2
    );

      if (distance < en.width / 2 + shotWidth / 2) {
        en.randomPosition()
      return true;
    }
    continue;
    if (shotX) endEnmX = en.x + en.width;
    endEnmY = en.y + en.height;

    endShotX = shotX + shotWidth;
    endShotY = shotY + shotHeight;

    if (
      endShotX < en.x ||
      shotX > endEnmX ||
      endShotY < en.y ||
      shotY > endEnmY
    ) {
      continue;
    }
    console.log("col!");
    en.x = en.y = 0;
    score++;
    updateScore();
    return true;
  }
  return false;
}

function updateScore() {
  elem = document.getElementById("score");
  elem.textContent = `Score: ${score}`;
}

function animateShot() {
  shotCtx.clearRect(0, 0, SHOT_CANVAS_WIDTH, SHOT_CANVAS_HEIGHT);
  if (shotActive) {
    shotCtx.drawImage(shotImage, shotX, shotY, shotWidth, shotHeight);
    shotX += 15;
    if (shotX > SHOT_CANVAS_WIDTH) {
      shotActive = false;
      //   todo: add fail sound
      if (score > 0) {
        score--;
        updateScore();
      }
    }
    if (checkCollision()) {
      colSound.play();
      score++;
      updateScore();
      shotActive = false;
    }
  }
  requestAnimationFrame(animateShot);
}

animateShot();
