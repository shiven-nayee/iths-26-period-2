// JS 04 ANSWER KEY (teacher only): counters and a scoreboard
// Builds on the finished JS 03 class script (checkWinner, messageText, gameOver, resetGame).
// Matches the class code: currentPlayer is the <p id="current-player"> element,
// so currentPlayer.textContent is 'X' or 'O'.

// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');
const messageText = document.querySelector('#message');
const xScoreText = document.querySelector('#x-score');
const oScoreText = document.querySelector('#o-score');
const drawScoreText = document.querySelector('#draw-score');

// Arrays
const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Tracking Variables
let gameOver = false;
let moves = 0;
let xWins = 0;
let oWins = 0;
let draws = 0;

// Functions
function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

function playTurn(event) {
  const square = event.target;
  if (gameOver === false && square.textContent === '') {
    square.textContent = currentPlayer.textContent;
    moves = moves + 1;
    checkWinner();
    switchPlayer();
  }
}

function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;
    if (first !== '' && first === second && first === third) {
      messageText.textContent = first + ' wins!';
      gameOver = true;
      if (first === 'X') {
        xWins = xWins + 1;
        xScoreText.textContent = 'X: ' + xWins;
      } else {
        oWins = oWins + 1;
        oScoreText.textContent = 'O: ' + oWins;
      }
      return;
    }
  }
  // Only reached when no line won (return stops the function on a win)
  if (moves === 9) {
    messageText.textContent = "It's a draw!";
    gameOver = true;
    draws = draws + 1;
    drawScoreText.textContent = 'Draws: ' + draws;
  }
}

function resetGame() {
  for (const square of squares) {
    square.textContent = '';
  }
  currentPlayer.textContent = 'X';
  gameOver = false;
  moves = 0;
  messageText.textContent = '';
  // xWins, oWins and draws are NOT reset: the scoreboard remembers every game
}

// Event Listeners
for (const square of squares) {
  square.addEventListener('click', playTurn);
}
resetButton.addEventListener('click', resetGame);
