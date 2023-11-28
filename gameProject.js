'use strict'
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer, playing;

//  starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };
  init();


const switchPlayer = function(){
    document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    currentScore = 0;
    activePlayer = activePlayer===0 ? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling the dice

btnRoll.addEventListener('click', function(){
    
// generate a random dice
const dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
// display dice 
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
// check for player change on 
if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  }  else{
     switchPlayer();
}
})

btnHold.addEventListener('click',function(){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        switchPlayer();
      }
    }
    
)

btnNew.addEventListener('click', init);