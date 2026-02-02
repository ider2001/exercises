import { getRandomNumber } from "../vearktojer/js.js";

console.log("gæt et tal"); // Taler til consolen

// Her er koden til et tilfældigt tal, hvor vi importere MathRandom funktionen fra værktøjsmappen
console.log("et hemmelige tal er: " + getRandomNumber(100));

//Det her er den tidligere kode for at lave et tilfældigt tal.
//let hemmeligtTal = Math.ceil(Math.random() * 100); // Laver et tilfældigt tal mellem 1 og 100
//console.log("Det hemmelige tal er: " + hemmeligtTal); // viser det tilfeldigt tal i consolen m. tekst

document.querySelector("#checkBtn").addEventListener("click", checkGuess); // lytter efter kilk på knap og kører funktionen lige efter.

function checkGuess() {
  const input = Number(document.querySelector("#guess").value);

  if (input === hemmeligtTal) {
    konfetti();
  } else {
    gameOver();
  }
}

function konfetti() {
  document.querySelector("#result").textContent = "Rigtigt!";

  setTimeout(resetGame, 1500);
}

function gameOver() {
  document.querySelector("#result").textContent = "Forkert, prøv igen!";
  document.querySelector("#guess").value = "";
}

function resetGame() {
  hemmeligtTal = Math.ceil(Math.random() * 100);
  console.log("Det hemmelige tal er: " + hemmeligtTal);
  document.querySelector("#guess").value = "";
  document.querySelector("#result").textContent = "";
}
