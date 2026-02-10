"use strict";

console.log("Theme Switcher");

const dropdown = document.querySelector("#switch");
const body = document.body;
// henter en variabel fra html body

dropdown.addEventListener("change", () => {
  const newValue = dropdown.value;
  updateTheme(newValue);
});

// her sætter den value til newvalue som bliver hentet fra body og lader css style og ændre tema i stedet for at lave if else.
function updateTheme(newValue) {
  body.dataset.theme = newValue;
}
