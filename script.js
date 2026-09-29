console.log("Hello World!!");

// HTML Elements
const resetButton = document.querySelector('#reset');
const square = document.querySelector('.square');
const currentPlayer = document.querySelector('#current-player');

// Tracking Variables
let counter = 0;

// Functions
function count() {
  counter = counter + 1;
  console.log('Count: ' + counter);
}

// 2. Create a function to change the Text to an X
function changeToX() {
  square.textContent = 'X';
  currentPlayer.textContent = 'O';
}

// Change to 0
function changeToO() {
  square.textContent = '0'
  currentPlayer.textContent = 'X';
}

// Change SquareValue, depending on what's inside
function changeSquareValue() {
  let squareValue = square.textContent;
  if (squareValue === 'X') {
    changeToO();
  } else {
    changeToX();
  }
}

// Event Listeners
resetButton.addEventListener('click', count);
square.addEventListener('click', changeSquareValue);
