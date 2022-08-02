//canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

//scrolling speed
let gameSpeed = 2;

//background images
//images 1-2 are x:640 , y:0
const backgroundLayer1 = new Image();
backgroundLayer1.src = '../Sprites/set3_background.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = '../Sprites/set2_tiles.png';
//might need to adjust the Y of this one to bring it down a bit to match the top of layer 4
const backgroundLayer3 = new Image();
backgroundLayer3.src = '../Sprites/set4_hills.png';
//layer 4 is weird, because it's not pushed to bottom cuz i made it myself. Its x:1232 y:476
const backgroundLayer4 = new Image();
backgroundLayer4.src = '../Sprites/layertop.png'; 

class Layer {

}

let x = 0;
let x2 = 640;


//animate BG
function animateBG(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer2, x, 0);
    ctx.drawImage(backgroundLayer2, x2, 0);
    
    if (x < -640) x = 640 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -640) x2 = 640 + x - gameSpeed;
    else x2 -= gameSpeed;

    requestAnimationFrame(animateBG);
}
animateBG();