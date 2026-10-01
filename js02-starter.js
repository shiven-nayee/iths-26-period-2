// =====================================================
// JS 02 STARTER: For Loops and Taking Turns
// Write your code UNDER each comment. Keep the comments!
// Copy this whole file into your script.js, then start.
// Test in the browser after every STEP.
// =====================================================

// PERIOD 5 ONLY, do this first, in tic-tac-toe.html:
//   Right after <main>, above the board, paste:
//   <div id="player-data">
//       <p id="player-label">Current Player: </p>
//       <p id="current-player"></p>
//   </div>


// ---------- HTML Elements ----------

// [STEP 1] Select the element with the id "reset". Store it in a const named resetButton.

// [STEP 1] Select ALL the elements with the class "square" (hint: querySelectorAll).
//          Store the list in a const named squares (plural!).

// [STEP 2] Select the element with the id "current-player". Store it in a const named currentPlayerText.


// ---------- Tracking Variables ----------

// [STEP 2] Make a variable named currentPlayer that starts as 'X'.
//          Should it be let or const? (Hint: it changes every turn.)

// [STEP 2] Show currentPlayer on the page: set currentPlayerText's textContent to currentPlayer.


// ---------- Functions ----------

// [STEP 2] Make a function named switchPlayer.
//   IF currentPlayer is 'X'
//       set currentPlayer to 'O'
//   OTHERWISE
//       set currentPlayer to 'X'
//   Show the new currentPlayer in currentPlayerText.

// [STEP 1] Make a function named playTurn that takes in event.
//   Store the square that was clicked (event.target) in a const named square.
//   [STEP 1] Set the square's textContent to 'X'.
//   [STEP 2] Change 'X' to currentPlayer, then call switchPlayer.
//   [STEP 3] Wrap those two lines in an IF: only run them when the square is empty ('').

// [STEP 4, YOUR TURN] Make a function named resetGame.
//   FOR EACH square of squares
//       set the square's textContent to '' (empty)
//   Set currentPlayer back to 'X'.
//   Show currentPlayer in currentPlayerText.


// ---------- Event Listeners ----------

// [STEP 1] FOR EACH square of squares:
//          when the square is clicked, run playTurn. (No ( ) after playTurn!)

// [STEP 4, YOUR TURN] When resetButton is clicked, run resetGame.


// ---------- Check your work ----------
// STEP 1: Clicking ANY square puts an X in it.
// STEP 2: X and O take turns, and Current Player changes.
// STEP 3: Clicking a square that's already taken does nothing.
// STEP 4: Reset clears all 9 squares and Current Player goes back to X.
