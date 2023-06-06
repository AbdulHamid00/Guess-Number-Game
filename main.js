'use strict';

// Select Elements
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.btn-check');
const hintsMsg = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const labelHighScore = document.querySelector('.highscore');
const secretNum = document.querySelector('.number');
const guessNum = document.querySelector('.guess-number');
const welcomeMsg = document.querySelector('h1');
const body = document.querySelector('body');

// Secret Number
let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

// Display Message generic function
const displayMessage = function (msg) {
  hintsMsg.textContent = msg;
};

// Check button functionality
checkBtn.addEventListener('click', function () {
  if (!guessNum.value) {
    displayMessage('Please Input a Number!');
  } else if (+guessNum.value === randomNum) {
    secretNum.textContent = randomNum;
    guessNum.value = '';
    body.style.backgroundColor = 'green';

    highScore = score;
    labelHighScore.textContent = highScore;
    displayMessage('Congratulations!');
  } else if (+guessNum.value !== randomNum) {
    if (score > 1) {
      score--;
      labelScore.textContent = score;
      // Show Hints
      displayMessage(
        +guessNum.value > randomNum ? 'Too High...' : 'Too Low...'
      );
    } else {
      // checkBtn.style.pointerEvent = 'none';
      displayMessage('You have lost the game!');
      score = 0;
      labelScore.textContent = score;
    }
  }
});

againBtn.addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;

  body.style.backgroundColor = 'Black';
  displayMessage('Start Guessing...');
  score = 10;
  labelScore.textContent = score;
  secretNum.textContent = '?';
});
