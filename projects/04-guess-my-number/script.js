'use strict';

/*
// Selecting and Manipulating Elements
document.querySelector('.message').textContent;

console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = '5';
console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('#test').textContent);

// Handling Click Events
document.querySelector('.check').addEventListener('click', smile);
let numClick = 0;
function clickFunction() {
  numClick++;
  console.log(`You clicked me ${numClick} times!`);
}

// document.querySelector('.check').addEventListener('click', function () {
//   numClick++;
//   console.log(`You clicked me ${numClick} times!`);
// });
document.querySelector('.check').addEventListener('click', clickFunction);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // Take user guess value
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Manipulating CSS Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Game replay
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// DRY - Don't Repeat Yourself
/*
document.querySelector('.check').addEventListener('click', function () {
  // Take user guess value
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    // No user input
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
  } else if (guess > secretNumber) {
    // If guess is higher than secret number
    // document.querySelector('.message').textContent = '📈 Too high!';
    displayMessage('📈 Too high!');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    // If guess is lower than secret number
    // document.querySelector('.message').textContent = '📉 Too low!';
    displayMessage('📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {

    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.score').textContent = score;
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent = secretNumber;

    // Manipulating CSS Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});
*/
