// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');

// Functions
function changeToX() {
  square.textContent = 'X';
  currentPlayer.textContent = 'O';
  console.log('X played');
}

// Change to 0
function changeToO() {
  square.textContent = '0'
  currentPlayer.textContent = 'X';
  console.log('O played');
}

function changeSquare(event) {
  console.log('Click event:', event)
  const square = event.target;
  console.log('Square', square);
  square.textContent = 'X';
}

// How can we simplify the code by only using the current player?
function switchPlayer() {
  // Check the current player
    // if the current player is X switch the current player text content to O
  // else the current player is O
    // Change the current player to X
}

// How can we use the currentPlayer and switchPlayer function to simplify our code?
function playTurn(event) {
  // Get the div that was clicked with the event target

  // Check if the current div is played
  // If the square text content is empty the play the current player
    // SET THE CLICKED SQUARE's TEXT CONTENT TO CURRENT PLAYER
    // Use the switch player function
}

// Event Listeners
for (const square of squares) {
  square.addEventListener('click', changeSquare)
}
