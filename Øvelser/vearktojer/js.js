// Denne fil er til værktøjer og funktioner som kan bruges i flere forskellige opgaver

export function getRandomNumber(max) {
  return Math.round(Math.random() * max);
}

export function $(elName) {
  return document.querySelector(elName);
}

export function $$(elName) {
  return document.querySelector(elName);
}
