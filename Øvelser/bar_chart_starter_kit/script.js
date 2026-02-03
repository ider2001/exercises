import { getRandomNumber } from "../vearktojer/js.js";
//henter math radom ind fra værktøjskassen

const list = document.querySelector("ul");
// henter ulén ind og laver den til en list konstant
const columnArray = [];
// laver vores array

setInterval(generateColumns, 1000); // laver et interval på 1000 milisekunder = 1 sek, den henter ind.

function generateColumns() {
  // Laver vores generateColums funktion
  // Tilføj nyt tal
  columnArray.push(getRandomNumber(100)); // her laver vi et push, somlægger til i enden af arrayet og her har vi sat den til at generere random tal til 100, hvor den lægger det til i enden.

  // Hold kun de 20 nyeste, fordi vi kun skulle alve 20 søjler.
  if (columnArray.length > 20) {
    columnArray.shift(); //
  }

  // Ryd listen i DOM'en, så vi kan lave nye højder
  list.innerHTML = "";

  // Genskab li-elementer og laver et element med createElement
  columnArray.forEach((value) => {
    const li = document.createElement("li");
    li.style.setProperty("--height", value);
    list.appendChild(li);
  });
  console.log(columnArray);
}
