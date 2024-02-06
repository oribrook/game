const shotCanvas = document.getElementById("shot");
const shotCtx = shotCanvas.getContext("2d");

const SHOT_CANVAS_WIDTH = (shotCanvas.width = 1024);
const SHOT_CANVAS_HEIGHT = (shotCanvas.height = 800);

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
    console.log('check');

    res = true;
    for (i = 0; i < enemies.length; i++){
        en = enemies[i]
        endEnmX = en.x + en.width;
        endEnmY = en.y + en.height;
    
        endShotX = shotX + shotWidth;
        endShotY = shotY + shotHeight;
    
        if (endShotX < en.x ||
            shotX > endEnmX ||
            endShotY < en.y ||
            shotY > endEnmY) {
            continue;
        }
        console.log("col!");
        en.x = en.y = 0;
        score++;
        updateScore()
        return true;
    }    
    return false;
}

function updateScore() {
    elem = document.getElementById("score")
    elem.textContent = `Score: ${score}`
    
}

function animateShot() {
  shotCtx.clearRect(0, 0, SHOT_CANVAS_WIDTH, SHOT_CANVAS_HEIGHT);
  if (shotActive) {
    shotCtx.drawImage(shotImage, shotX, shotY, shotWidth, shotHeight);
    shotX += 15;
      if (shotX > SHOT_CANVAS_WIDTH) {
          shotActive = false;
    }
    if (checkCollision()) {
        shotActive = false;
    }
    }
  requestAnimationFrame(animateShot);
}

animateShot();
