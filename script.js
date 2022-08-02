const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg = new Image();
playerImg.src = 'catwalkbluespritesheet.png'
let test = 0;

function animationLoop() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(test, 50, 100, 100);
    test++;

    requestAnimationFrame(animationLoop);
};

animationLoop();