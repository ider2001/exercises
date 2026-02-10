const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let hasTheButtonBeenClickedFlag = false;
let theText = document.querySelector("p").textContent;

document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (hasTheButtonBeenClickedFlag === true) {
    console.log("KLIK");
  } else {
    console.log("not KLIK");
    sfw();
  }
  hasTheButtonBeenClickedFlag = true; // Når knappen har været kikket på, så bliver den true
}
// Ikke færdig
function sfw() {
  console.log(theText);
  curseWords.forEach((word) => {
    console.log("bad word:", word.bad);
    console.log("good word:", word.good);
    console.log(theText.replaceAll(word.bad, word.good));
    theText = theText.replaceAll((CurseWord.bad, "span ${CurseWord.good}"));
  });
}

// Bruge ReplaceAll og loope ting over arrayet som foreach

// const txtArr = txt.split("")

// console.log ( "txtArr", txtArr)
//  const return_arr =[]
// txtArr.array.forEach((letter, i, arr) => {
//   if ((arr[i]) !== " " && arr[i + 1] === "")} {
//     return_arr.push(arr[i])
//   }

// });
