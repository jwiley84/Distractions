//canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

//scrolling speed
let gameSpeed = 1;

//background images
/* 
It doens't matter how wide the background images are, but they MUST be larger than the canvas/screen 
that they're being displayed on or they 'hiccup' with the issue i've been having lately

*/

class Layer {
    constructor(image, speedModifier, width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x < -this.width) {
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.speed);
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

const backgroundLayer1 = new Image();
backgroundLayer1.src = '../Sprites/set3_background.png';
const layer1 = new Layer(backgroundLayer1, 1, 1280, 500)

const backgroundLayer2 = new Image();
backgroundLayer2.src = '../Sprites/set2_tiles.png';
const layer2 = new Layer(backgroundLayer2, 1, 1280, 400);

//might need to adjust the Y of this one to bring it down a bit to match the top of layer 4
const backgroundLayer3 = new Image();
backgroundLayer3.src = '../Sprites/set4_hills.png';
const layer3 = new Layer(backgroundLayer3, 1.1, 1280, 500)

const backgroundLayer4 = new Image();
backgroundLayer4.src = '../Sprites/layertop.png'; 
const layer4 = new Layer(backgroundLayer4, 0.5, 1232, 200);
layer4.y = 500;

window.addEventListener('load', function() {
    const slider = document.getElementById('slider')
    slider.value = gameSpeed;
    const showGameSpeed =document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener('change', function(e) {
        console.log(e)
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = e.target.value;
    });

    const layerSet = [layer1, layer2, layer3, layer4];

    //animate BG
    function animateBG(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        layerSet.forEach(layer => {
            layer.update();
            layer.draw();
        });
        requestAnimationFrame(animateBG);
    }
    animateBG();
});

