const bgCanvas = document.getElementById("bgCanvas");
const bg_ctx = bgCanvas.getContext('2d');

const BG_CANVAS_WIDTH =  bgCanvas.width = 1024;
const BG_CANVAS_HEIGHT =  bgCanvas.height = 700; 

// let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer1.jpg';

let bgx1 = 0;
let bgx2 = 1024;
let bgx3 = -1024;

bgDir = 'r'

function animateBG() {
    bg_ctx.clearRect(0, 0, BG_CANVAS_WIDTH, BG_CANVAS_HEIGHT);
        
    bg_ctx.drawImage(backgroundLayer1, 0, 0, 1024, 510, bgx1, 0, 1024, BG_CANVAS_HEIGHT);
    bg_ctx.drawImage(backgroundLayer1, 0, 0, 1024, 510, bgx2, 0, 1024, BG_CANVAS_HEIGHT);
    bg_ctx.drawImage(backgroundLayer1, 0, 0, 1024, 510, bgx3, 0, 1024, BG_CANVAS_HEIGHT);
    
            
    if (bgDir == 'r') {
        bgx1 -= gameSpeed/2;
        bgx2 -= gameSpeed/2;
        bgx3 -= gameSpeed/2;
        if (bgx1 <= -1024) {
            bgx1 = 0;
            bgx2 = 1024;
            bgx3 = -1024
        }
    } else {
        bgx1 += gameSpeed/2;
        bgx2 += gameSpeed/2;
        bgx3 += gameSpeed/2;
        if (bgx1 >= 1024)
        {
            bgx1 = 0;
            bgx2 = 1024
            bgx3 = -1024
        }        
        
    }
    requestAnimationFrame(animateBG);
}

animateBG();