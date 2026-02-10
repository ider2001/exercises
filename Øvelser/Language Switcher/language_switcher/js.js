"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

//console.log(texts.da.texts);
function updateTexts(locale) {
  texts[locale].texts.forEach((elm) => {
    console.log(elm.location);
    document.querySelector(elm.location).textContent = elm.text;
  });
}

updateTexts(locale);

const dropdown = document.querySelector("#lang-dropdown");

dropdown.addEventListener("change", () => {
  const newLocale = dropdown.value;
  updateTexts(newLocale);
});
