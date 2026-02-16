// "mousemove";
// window.innerWidth;
// style.setProperty;
// clientX;
// // procentregning: delen/detHele * 100

let div = document.querySelector("body");

div.addEventListener("mousemove", function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  div.style.backgroundColor = `rgb(${x % 100}, ${y % 100}, ${(x + y) % 100})`;
});
