/** @type {HTMLCanvasElement} */

const en_canvas = document.getElementById("enemy");
const en_ctx = en_canvas.getContext("2d");

const EN_CANVAS_WIDTH = (en_canvas.width = 1024);
const EN_CANVAS_HEIGHT = (en_canvas.height = 700);

const enemySpriteWidth = Math.floor(860 / 5);
const enemySpriteHeight = Math.floor(474 / 3);

const speed = 5

class Enemy {
  constructor() {
    this.enemyImage = new Image();
    this.enemyImage.src = "enemy1.jpg";
    this.x = Math.floor(Math.random() * (en_canvas.width*0.8)) + 0.2*en_canvas.width;
    this.y = Math.floor(Math.random() * en_canvas.height);
    this.width = 50;
    this.height = 50;
    this.frame = 0;
    this.dirX = (Math.random() - 0.5)*speed;
    this.dirY = (Math.random() - 0.5)*speed;
  }
  randomPosition() {
    this.x = Math.floor(Math.random() * (en_canvas.width*0.8)) + 0.2*en_canvas.width;
    this.y = Math.floor(Math.random() * en_canvas.height);
  }
  update() {
    if (Math.floor(this.x % 2) == 0) {
      this.frame = (this.frame + 1) % 5;
    }
    // this.x += this.dirX * Math.random()*5-2.5;  // jumpy style
    this.x += this.dirX;
    this.y += this.dirY;

    if (this.x + this.width / 2 >= EN_CANVAS_WIDTH) {
        // this.x = 0;
        this.randomPosition()
    }
    if (this.y + this.height / 2 >= EN_CANVAS_HEIGHT) {
        this.randomPosition()
        //   this.y = 0;
    }
    if (this.x + this.width / 2 <= 0.2*EN_CANVAS_WIDTH) {
        // this.x = EN_CANVAS_WIDTH - this.width;
        this.randomPosition()
    }
    if (this.y + this.height / 2 <= 0) {
        // this.y = EN_CANVAS_HEIGHT - this.height;
        this.randomPosition()
    }
  }
  draw() {
    en_ctx.drawImage(
      this.enemyImage,
      this.frame * enemySpriteWidth,
      0,
      enemySpriteWidth,
      enemySpriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (i = 0; i < 5; i++) {
  enemies.push(new Enemy());
}

function animateEnemy() {
  // enemy1.updateCor()
  en_ctx.clearRect(0, 0, EN_CANVAS_WIDTH, EN_CANVAS_HEIGHT);
  enemies.forEach((en) => {
    en.update();
    en.draw();
  });

  requestAnimationFrame(animateEnemy);
}

animateEnemy();
