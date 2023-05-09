const gameBoard = document.getElementById("game-board");
const leftPaddle = document.getElementById("left-paddle");
const rightPaddle = document.getElementById("right-paddle");
const ball = document.getElementById("ball");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

let ballX = 245;
let ballY = 145;
let ballSpeedX = 5;
let ballSpeedY = 5;
let leftPaddleY = 115;
let rightPaddleY = 115;
let player1ScoreValue = 0;
let player2ScoreValue = 0;
let gameInterval;
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY > 290 || ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballX > 900) {
    ballSpeedX = -ballSpeedX;
    player1ScoreValue++;
    player1Score.innerText = player1ScoreValue;
    gameBoard.style.backgroundColor = randomColor;
  }

  if (ballX < 10) {
    ballSpeedX = -ballSpeedX;
    player2ScoreValue++;
    player2Score.innerText = player2ScoreValue;
    gameBoard.style.backgroundColor = randomColor;
  }

  if (ballX < 20 && ballY >= leftPaddleY && ballY <= leftPaddleY + 70) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX > 470 && ballY >= rightPaddleY && ballY <= rightPaddleY + 70) {
    ballSpeedX = -ballSpeedX;
  }

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

function moveLeftPaddle(event) {
  leftPaddleY = event.clientY - gameBoard.offsetTop - 35;
  if (leftPaddleY < 0) {
    leftPaddleY = 0;
  }
  if (leftPaddleY > 230) {
    leftPaddleY = 230;
  }
  leftPaddle.style.top = leftPaddleY + "px";
}

function moveRightPaddle(event) {
  rightPaddleY = event.clientY - gameBoard.offsetTop - 35;
  if (rightPaddleY < 0) {
    rightPaddleY = 0;
  }
  if (rightPaddleY > 230) {
    rightPaddleY = 230;
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
