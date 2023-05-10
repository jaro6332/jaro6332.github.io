const gameBoard = document.getElementById("game-board");
const leftPaddle = document.getElementById("left-paddle");
const rightPaddle = document.getElementById("right-paddle");
const ball = document.getElementById("ball");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

let ballX = 500;
let ballY = 300;
let ballSpeedX = 5;
let ballSpeedY = 5;
let leftPaddleY = 250;
let rightPaddleY = 250;
let player1ScoreValue = 0;
let player2ScoreValue = 0;
let gameInterval;
const colors = ['#d24787', '#7f3667', '#e5a0c6', '#a53e76', '#ff1493'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
function moveBall() {
    ballX += ballSpeedX;
  
    // Move the ball vertically
    ballY += ballSpeedY;
    
    // Check for collision with the left paddle
    if (ballX <= 30 && ballY > leftPaddleY && ballY < leftPaddleY + 140) {
      ballSpeedX *= -1;
      ballSpeedY = (ballY - (leftPaddleY + 70)) * 0.1;
    }
    
    // Check for collision with the right paddle
    if (ballX >= 970 && ballY > rightPaddleY && ballY < rightPaddleY + 140) {
      ballSpeedX *= -1;
      ballSpeedY = (ballY - (rightPaddleY + 70)) * 0.1;
    }
    
    // Check for collision with the top and bottom walls
    if (ballY <= 10 || ballY >= 590) {
      ballSpeedY *= -1;
    }
    
    // Check for scoring on the left side
    if (ballX <= 0) {
      player2ScoreValue++;
      player2Score.innerHTML = player2ScoreValue;
      ballX = 500;
      ballY = 300;
      ballSpeedY = 5;
      ballSpeedX = -5;
      gameBoard.style.backgroundColor = randomColor;
    }
    
    // Check for scoring on the right side
    if (ballX >= 1000) {
      player1ScoreValue++;
      player1Score.innerHTML = player1ScoreValue;
      ballX = 500;
      ballY = 300;
      ballSpeedY = 5;
      ballSpeedX = 5;
      gameBoard.style.backgroundColor = randomColor;
    }
    
    // Move the ball to its new position
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
}

function moveLeftPaddle(event) {
  leftPaddleY = event.clientY - gameBoard.offsetTop - 35;
  if (leftPaddleY < 0) {
    leftPaddleY = 0;
  }
  if (leftPaddleY > 500) {
    leftPaddleY = 500;
  }
  leftPaddle.style.top = leftPaddleY + "px";
}

function moveRightPaddle(event) {
  rightPaddleY = event.clientY - gameBoard.offsetTop - 35;
  if (rightPaddleY < 0) {
    rightPaddleY = 0;
  }
  if (rightPaddleY > 500) {
    rightPaddleY = 500;
  }
  rightPaddle.style.top = rightPaddleY + "px";
}

function startGame() {
  setInterval(moveBall, 50);
  gameBoard.addEventListener("mousemove", moveLeftPaddle);
  gameBoard.addEventListener("mousemove", moveRightPaddle);
}

function stopGame() {
    clearInterval(gameInterval);
    gameBoard.removeEventListener("mousemove", moveLeftPaddle);
    gameBoard.removeEventListener("mousemove", moveRightPaddle);
  }
  startGame();  
startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);
