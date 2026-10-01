// =====================================================
// JS 03 STARTER: Arrays and Win Conditions
// Your JS 02 code is already here. The NEW parts are
// the comments marked [STEP 1], [STEP 2], [STEP 3].
// Write your code UNDER each comment. Keep the comments!
// Test in the browser after every STEP.
// =====================================================

// [STEP 2] In tic-tac-toe.html, right after the player-data </div>, add:
//          <p id="message"></p>


// ---------- HTML Elements ----------
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll('.square');
const currentPlayerText = document.querySelector('#current-player');

// [STEP 2] Select the element with the id "message". Store it in a const named messageText.


// ---------- Tracking Variables ----------
let currentPlayer = 'X';
currentPlayerText.textContent = currentPlayer;

// [STEP 1] Make a const named winningLines. It is an ARRAY that holds 8 smaller arrays.
//          Each small array is 3 square numbers in a row. Here are the first two:
//            [0, 1, 2]   top row
//            [3, 4, 5]   middle row
//          Add the other 6: bottom row, 3 columns, 2 diagonals.
//          Remember: commas between every item, and the board is numbered 0 to 8:
//            0 | 1 | 2
//            3 | 4 | 5
//            6 | 7 | 8

// [STEP 3] Make a variable named gameOver that starts as false.
//          Should it be let or const? (Hint: it changes when someone wins.)


// ---------- Functions ----------
function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  currentPlayerText.textContent = currentPlayer;
}

// [STEP 1] Make a function named checkWinner.
//   FOR EACH line of winningLines
//       first  = the textContent of the square at index line[0]   (hint: squares[line[0]])
//       second = the textContent of the square at index line[1]
//       third  = the textContent of the square at index line[2]
//       IF first is NOT empty AND first equals second AND first equals third
//           [STEP 1] log first + ' wins!' to the console
//           [STEP 2] show first + ' wins!' in messageText
//           [STEP 3] set gameOver to true

function playTurn(event) {
  const square = event.target;
  // [STEP 3] Change this IF so it also checks that gameOver is false.
  //          (Both must be true: use AND, which is &&)
  if (square.textContent === '') {
    square.textContent = currentPlayer;
    // [STEP 1] Call checkWinner here, BEFORE switchPlayer.

    switchPlayer();
  }
}

function resetGame() {
  for (const square of squares) {
    square.textContent = '';
  }
  currentPlayer = 'X';
  currentPlayerText.textContent = currentPlayer;
  // [STEP 3] Start the game again: set gameOver back to false.
  // [STEP 3] Clear the message: set messageText's textContent to ''.

}


// ---------- Event Listeners ----------
for (const square of squares) {
  square.addEventListener('click', playTurn);
}
resetButton.addEventListener('click', resetGame);


// ---------- Check your work ----------
// STEP 1: Win with 3 in a row. The CONSOLE says "X wins!" (or "O wins!").
//         Try a row, a column AND a diagonal.
// STEP 2: The PAGE says who won.
// STEP 3: After a win, clicking empty squares does nothing.
//         Reset clears the board and the message, and you can play again.
