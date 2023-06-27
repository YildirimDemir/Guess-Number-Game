"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('#message').textContent = message;
};

document.querySelector("#check").addEventListener("click", function() {
    let guessNumber = document.querySelector("#guess").value;
    if (!guessNumber) {
        displayMessage(' No number!!');
    
      } else if (guessNumber == secretNumber) {

        displayMessage('🎉 Correct Number!');
        document.querySelector('#number').textContent = secretNumber;
    
        document.querySelector('body').style.backgroundColor = 'green';
    
        if (score > highscore) {
          highscore = score;
          document.querySelector('#highscore').textContent = highscore;
        }
      } else if (guessNumber !== secretNumber) {
        if (score > 1) {
          displayMessage(guessNumber > secretNumber ? 'Too high!' : 'Too low!');
          score--;
          document.querySelector('#score').textContent = score;
        } else {
        
          displayMessage('You lost the game!!');
          document.querySelector('#score').textContent = 0;
          document.querySelector('body').style.backgroundColor = 'red';
        }
      }
      
})

document.querySelector('#again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    displayMessage('Start guessing...');
    document.querySelector('#score').textContent = score;
    document.querySelector('#guess').textContent = '?';
    document.querySelector('#guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
  });