/* this is the flier class outline, pre-inheritance*/

class Enemy {
    constructor(name) {
        this.enemyImage = new Image();
        this.enemyImage.src = '../Sprites/e_spritesheet.png';
        this.name = enemyAnimations[name];
        this.spriteWidth = this.name.width;
        this.spriteHeight = this.name.height;
        this.width = this.spriteWidth / 1;
        this.height = this.spriteHeight / 1;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height) - 300;
        this.locations = this.name.loc;
        this.frame = 0;
        this.flapSpeed = 10 //Math.floor(Math.random() * 11 + 1);
    }
    update() {
        this.x += Math.random() * 2 - 1;
        this.y += Math.random() * 2 - 1;
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

/* snaky spikeballs */

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
        this.locations = this.name.loc;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 11 + 5);
        this.angle = Math.random() * 2 -1;
        this.anglespeed = Math.random() * 0.5 + 0.5;
        //this.curve = Math.random() * 200 + 50;
    }
    update() {
        this.x = (canvas.width/2 - 32) * Math.sin(this.angle * Math.PI/90) + canvas.width/2 - this.width/2;
        this.y = (canvas.height/2 - 32) * Math.cos(this.angle * Math.PI/90) + canvas.height/2 - this.height/2;
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