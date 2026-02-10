"use strict";

// 1.1, få css til at skifte tema. Ekstra, lave ene selector knap.

const locale = "bat";

updateTexts(locale);

const dropdown = document.querySelector("#animal-dropdown");

dropdown.addEventListener("change", () => {
  const newTheme = dropdown.value;
  document.body.setAttribute("data-filter", newTheme);
});

// KONCEPTET OM SCOPE
const level0var = "level0var";

level1();
function level1() {
  const level1var = "level1var";
  level2("jeg er tekst");

  function level2(txt) {
    console.log("level0var", level0var);
    console.log("level1var", level1var);
    console.log("level2", txt);

    level3();
    function level3() {
      console.log("level3", txt); // her kører den samme tekst som i levl2
    }
  }
}

// vi kan sagtens console log i slutningen af funktionen fordi de alle lægger i samme funktion.
