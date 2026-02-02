"use strict";

let min = 1;
let max = 100;
let currentGuess = null; // computerens gæt er sat til null, som et udgangspunkt.
let tries = 0;

// her definere vi elementerne inden fra html'en til konstante vaiabler i javascript

const guess = document.getElementById("guess");
const tekst = document.getElementById("tekst");
const triesEl = document.getElementById("tries");

// Her definere vi knapperne fra html'en

const startBtn = document.getElementById("startbtn");
const lowerBtn = document.getElementById("lowerbtn");
const higherBtn = document.getElementById("higherbtn");
const correctBtn = document.getElementById("correctbtn");

function makeGuess() {
  // Binærsøgning: midten af intervallet
  currentGuess = Math.floor((min + max) / 2); // her gætter computeren midt i mellem. så den får variablerne min og max for så at tage valget mit i, som så er 50 her.
  guess.textContent = currentGuess;
  tries = tries + 1;
  triesEl.textContent = tries;
  tekst.textContent = "Er dit tal højere, lavere eller rigtigt?";
}

function resetGame() {
  min = 1;
  max = 100;
  tries = 0;
  currentGuess = null;
  guess.textContent = "x";
  triesEl.textContent = "0";
  tekst.textContent = 'Tænk på et tal og tryk "Start".';
}

startBtn.addEventListener("click", () => {
  resetGame();
  // Aktiver knapper, hvor at start kanppen bliver deaktiveret, og de andre funktionelle
  startBtn.classList.add("inactive");
  lowerBtn.classList.remove("inactive");
  higherBtn.classList.remove("inactive");
  correctBtn.classList.remove("inactive");
  makeGuess();
});

// Når higere bliver klikket, kører denne funktion, som nytter til click og derefter sammenligner.
higherBtn.addEventListener("click", () => {
  // Her søger vi får at når der bliver trykket highere, så kan vi udelukke alle gæt op tilgættet. Det vil sige 50 + 1
  min = currentGuess + 1;

  makeGuess();
});

lowerBtn.addEventListener("click", () => {
  // her er et samme slags funktion, men med max
  max = currentGuess - 1;

  makeGuess();
});

correctBtn.addEventListener("click", () => {
  // Her bruger vi en template literal sætning for at variablen "tries" bliver vist i sætningen.
  tekst.textContent = `Jeg gættede dit tal på ${tries} forsøg. Tryk "Start" for et nyt spil.`;
  lowerBtn.classList.add("inactive");
  higherBtn.classList.add("inactive");
  correctBtn.classList.add("inactive");
  startBtn.classList.remove("inactive");
  resetGame();
});
