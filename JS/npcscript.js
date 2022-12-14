/** @type {HTMLCanvasElement} */
import enemyAnimations from './enemyAnimations.json' assert {type: 'json'}

//canvas setup
const canvas = document.getElementById('canvasnpcs');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
let gameFrame = 0;

class Enemy {
    constructor(name) {
        this.enemyImage = new Image();
        this.enemyImage.src = '../Sprites/e_spritesheet.png';
        this.speed = Math.random() * 4 + 1;
        this.name = enemyAnimations[name];
        this.spriteWidth = this.name.width;
        this.spriteHeight = this.name.height;
        this.width = this.spriteWidth / 1;
        this.height = this.spriteHeight / 1;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.newx = Math.random() * (canvas.width - this.width);
        this.newy = Math.random() * (canvas.height - this.height);
        this.locations = this.name.loc;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 11 + 5);
        this.interval = Math.floor(Math.random() * 200 + 50);
        
    }
    update() {
        if (gameFrame % this.interval === 0) {
            this.newx = Math.random() * (canvas.width - this.width);
            this.newy = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newx;
        let dy = this.y - this.newy;
        this.x -= dx/70;
        this.y -= dy/70;

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


const numberofEnemies = 20;
const enemies = []

for (let i = 0; i < numberofEnemies; i++) {
    enemies.push(new Enemy("spikeball")) 
}

function animateEnemy() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemies.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animateEnemy);
};

animateEnemy();