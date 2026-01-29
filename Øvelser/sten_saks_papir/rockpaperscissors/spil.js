"use strict";
//Her definere vi konstanter og variabler
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let userChoice;
let computerChoice;

// her henter vi at javascript kan integrere med html strukturen og laber kanler funktionen init, som er definere uner.
document.addEventListener("DOMContentLoaded", init);

// her definere vi funktionen init og laver constanterne klikbare
function init() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
  console.log("test");
}

// her lsver vi funktioner for hver af mulighederne og gøre at vi skal se valgene i consolen og kaler computerens valg også, når fuktionen er aktiveret.
function rockClick() {
  console.log("ROCK!");
  userChoice = "rock";
  computerChooses();
}

function paperClick() {
  console.log("PAPER!");
  computerChooses();
}

function scissorsClick() {
  console.log("SCISSORS!");
  userChoice = "scissors";
  document.getElementsByClassName("scissors").src = "images/scissors.png";
  computerChooses();
}

// computer choise, her definere vi den funktion som bliver kaldt flere gange. 
// Vi laver en Math.random funtion hvor vi giver computeren en if else sætning, så den kan vælge imellem de 3 valg, ved at give dem talværdi.

function computerChooses() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("Computer Chooses", computerChoice);
  handShakeStart();
}

// her starter vi handshake asnimationen, som hedder "shake" i css, som vi kandler med en classlist.
function handShakeStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  showChoices();
}

function showChoices() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.classList.remove("rock,paper,scissors");
  player1.classList.remove("rock,paper,scissors");
  player1.classList.add(userChoice);
  player2.classList.add(userChoice);

  if (computerChoice === userChoice) 
    console.log("uafgjort");
  draw.classList.remove("hidden");
  setTimeout(function () {
    draw.classList.add("hidden");
  }, 2000);
  else if (( userChoice === computerChoice "paper"))
  console.log("Du vinder");
  win.classList.remove("hidden");
  setTimeout(function () {
    win.classList.add("hidden");
  }, 2000);
else ()
  console.log("Du taber");
  lose.classList.remove("hidden");
  setTimeout(function () {
    lose.classList.add("hidden");
  }, 2000);
}

// Her skal reset laves 

// evt er et objekt med en masse properties
 