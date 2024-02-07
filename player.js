const canvas = document.getElementById("player");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 1024);
const CANVAS_HEIGHT = (canvas.height = 700);


const playerImage = new Image();
playerImage.src = "2.jpg";
playerImage.src = "spaceship.PNG";
const spriteWidth = 638 / 8;
const spriteHeight = 213 / 2;

playerY = CANVAS_HEIGHT/2 - spriteHeight/2
frameX = 1;
let gameFrame = 1;
// let gameSpeed = 15;

const position = { up: 3, left: 1, right: 0, down: 0 };
let currentPosition = "right";

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  

  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    position[currentPosition] * spriteHeight,
    spriteWidth,
    spriteHeight,
    playerX,
    playerY,
    100,
    100
  );

  if (gameFrame % Math.floor(20 / Math.sqrt(gameSpeed)) == 0) {
    frameX = (frameX + 1) % 4;
  }

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
