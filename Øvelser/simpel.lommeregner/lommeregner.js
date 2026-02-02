document.addEventListener("DOMContentLoaded", init);

function init() {
  const tal1 = document.querySelector("#tal1");
  const tal2 = document.querySelector("#tal2");
  const resultat = document.querySelector("#resultat");
  const beregnBtn = document.querySelector("#beregnBtn");
  const valg = document.querySelector("#valg");

  beregnBtn.addEventListener("click", function () {
    const nummer1 = Number(tal1.value);
    const nummer2 = Number(tal2.value);
    const operator = valg.value;
    let result;

    if (operator === "+") {
      result = nummer1 + nummer2;
    } else if (operator === "-") {
      result = nummer1 - nummer2;
    } else if (operator === "*") {
      result = nummer1 * nummer2;
    } else if (operator === "/") {
      result = nummer1 / nummer2;
    }

    resultat.value = result;
  });
}
