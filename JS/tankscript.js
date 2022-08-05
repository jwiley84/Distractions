/** @type {HTMLCanvasElement} */
import enemyAnimations from './enemyAnimations.json' assert {type: 'json'}

//canvas setup
const canvas = document.getElementById('canvastank');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
let gameFrame = 0;

class Enemy {
    constructor(name) {
        this.enemyImage = new Image();
        this.enemyImage.src = '../Sprites/e_spritesheet.png';
        this.speed = Math.random() * 2 + 1;
        this.name = enemyAnimations[name];
        this.spriteWidth = this.name.width;
        this.spriteHeight = this.name.height;
        this.width = this.spriteWidth / 1;
        this.height = this.spriteHeight / 1;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height)-150;
        this.locations = this.name.loc;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 11 + 5);
        this.angle = Math.random() * 2;
        this.anglespeed = Math.random() * 0.2;
        this.curve = Math.random() * 2;
    }
    update() {
        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.anglespeed;
        if ((this.x + this.width) < 0) this.x = canvas.width;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame >= 3 ? this.frame = 0 : this.frame++;
        }
        
    }
    draw() {
        //ctx.drawImage(image, sourcex, sourcey, sourcew, sourceh, destx, desty, destw, desth)
        ctx.drawImage(
            this.enemyImage, 
            this.locations[this.frame].x, 
            this.locations[this.frame].y, 
            this.spriteWidth, 
            this.spriteHeight, 
            this.x, 
            this.y, 
            this.width, 
            this.height);
    }
}


const backgroundLayer4 = new Image();
backgroundLayer4.src = '../Sprites/layertop.png'; 

const numberofEnemies = 100;
const enemies = []

for (let i = 0; i < numberofEnemies; i++) {
    enemies.push(new Enemy("swimmer")) 
}

const spikeballs = [];
const no_spikeballs = 10;
for (let i = 0; i < no_spikeballs; i++){
    spikeballs.push(new Enemy("spikeball"))
}

function animateEnemy() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(backgroundLayer4, 0, 0, canvas.width, canvas.height, 0, 500, canvas.width, canvas.height);
    // spikeballs.forEach(spikeball => {
    //     spikeball.speed = 0;
    //     spikeball.curve = 0.5;
    //     spikeball.update();
    //     spikeball.draw();
    // });
    
    enemies.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    //ctx.drawImage(image, sourcex, sourcey, sourcew, sourceh, destx, desty, destw, desth)
    
    gameFrame++;
    requestAnimationFrame(animateEnemy);
};

animateEnemy();