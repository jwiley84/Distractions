import animationStates from './animationStates.json' assert {type: 'json'}

let playerState = "idle"
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function(e){
    playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg = new Image();
playerImg.src = 'spritesheet.png'

// if using ded, it's 558, otherwise, width is 544
let spriteWidth = animationStates[playerState].width;
let spriteHeight = animationStates[playerState].height;

console.log(playerState)

let gameFrame = 0;
//allows slowing of frame. higher the number,the slower the animation
const staggerFrames =  10;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) %  animationStates[playerState].loc.length;
    let frameX = animationStates[playerState].width * position; 
    let frameY = animationStates[playerState].loc[position].y;

    //ctx.drawImage(image, sourcex, sourcey, sourcew, sourceh, destx, desty, destw, desth)
    ctx.drawImage(playerImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
   
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();
console.log(animationStates.walk.loc.length)