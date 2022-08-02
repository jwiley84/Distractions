const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg = new Image();
playerImg.src = 'catwalkbluespritesheet.png'
// let test = 0;
const spriteWidth = 544;
const spriteHeight = 476;
let frameX = 2;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animateWalk() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(0, 50, 100, 100);
    //ctx.drawImage(image, sourcex, sourcey, sourcew, sourceh, destx, desty, destw, desth)
    ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 9) frameX++;
        else frameX = 0;
    }


    
    gameFrame++;
    requestAnimationFrame(animateWalk);
};

animateWalk();

