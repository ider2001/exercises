const moms = 0.75;

prismedmoms();

function prismedmoms() {
  const randomNumber = Math.floor(Math.random() * 150 * moms);

  console.log(randomNumber);
}
// her laver vi math random for at have forskellige tal. DDer ganger vi med 0,75 for at få momsen oveni

// Her kalder vi funktionen med nogle parametre som vi definere i funktionen.
// de er konstante
prismedmomsen(125, 25);

function prismedmomsen(beløb, momsen) {
  const momsdecimal = momsen / 100;
  // Her udregner vi momsen i deciaml, som vi bruger i resultatet

  // beløb * moms, regner decimalet af beløbet og + beløb giver så beløbet med moms.
  const resultat = beløb * momsdecimal + beløb;

  console.log(resultat);
}
