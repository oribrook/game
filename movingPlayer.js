const mpCanvas = document.getElementById("mpcanvas");
const mpCtx = mpCanvas.getContext("2d");

const MP_CANVAS_WIDTH = (mpCanvas.width = 1024);
const MP_CANVAS_HEIGHT = (mpCanvas.height = 800);

const mpImage = new Image();
mpImage.src = "2.jpg";
const mpSpriteWidth = 660 / 8;
const mpSpriteHeight = 213 / 2;

const mpPosition = { up: 3, left: 1, right: 0, down: 0 };
let mpX = 0;
let mpY = 0;

let mpCurrentPosition = "right";

function animate() {
    mpCtx.clearRect(0, 0, MP_CANVAS_WIDTH, MP_CANVAS_HEIGHT);

  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh)
  mpCtx.drawImage(
    mpImage,
    0,
    0,
    mpSpriteWidth,
    mpSpriteHeight,
    mpX,
    mpY,
    200,
    200
  );
  requestAnimationFrame(animate);
}

animate();
