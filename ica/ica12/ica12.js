// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball{
    constructor(x, y, velx, vely, color, size){
        this.x=x;
        this.y=y;
        this.velx=velx;
        this.vely=vely;
        this.color=color;
        this.size=size;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
    update(){
        if ((this.x + this.size) >= width) {
            this.velx = -(this.velx);
          }
        
          if ((this.x - this.size) <= 0) {
            this.velx = -(this.velx);
          }
        
          if ((this.y + this.size) >= height) {
            this.vely = -(this.vely);
          }
        
          if ((this.y - this.size) <= 0) {
            this.vely = -(this.vely);
          }

        this.x=this.x+this.velx;
        this.y=this.y+this.vely;

    }
    collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
      }
}
const balls=[];

while (balls.length<25){
    const size=random(1,20)
    const ball = new Ball(
        random(0+size, width-size),
        random(0+size, height-size),
        random(-10,10), //vel speedx
        random(-10,10),//vell speed y
        randomRGB(),
        size

    );

    balls.push(ball);
}
function loop(){
    ctx.fillStyle="rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    for(const ball of balls){
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }
    requestAnimationFrame(loop);
}
loop();
//const testBall =new Ball(100, 100, 2, 2, "red", 10);
//const testBall1 =new Ball(400, 238, 2, 2, "blue", 10);
//const testBall2 =new Ball(700, 438, 2, 2, "aquamarine", 500);

//testBall.draw();
//testBall1.draw();
//testBall2.draw();
