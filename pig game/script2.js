"use strict";
//selecting element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector("player--1");
const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const current0El = document.querySelector("current--0");
const current1El = document.querySelector("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const switchPlayer = function () {
  document.getElementById("current--${activePlayer}").textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
let currentScore = 0;
const score = [0, 0];
let activePlayer = 0;
let playing = true;

//function for new game
const init = function () {
  currentScore = 0;
  score = [0, 0];
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.remove("player--winner");
  player1El.remove("player--winner");
  player0El.add("player--active");
  player1El.remove("player--active");
};
init();

//rolling dice funtionally
btnRoll.addEventListener("click", function () {
  //generating a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = "dice-${dice}.png";
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById("current--${activePlayer}").textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  //add current score to active player score
  if (playing) {
    score[activePlayer] += currentScore;
    //score[1]=score[1]+currentscore
    document.querySelector("current--${activePlayer}").textContent =
      score[activePlayer];
    //check if player score is >=100
    if (scores[activePlayer] >= 20) {
      /* when we use queryseector always give a dot(.) berfore selecting a class but when we use getElementById
  ,don't need to give a dot */
      diceEl.classList.add("hidden");
      playing = false;
      document
        .querySelector(".player--${activePlayer}")
        .classList.add("player--winner");
      document
        .querySelector(".player--${activePlayer}")
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
