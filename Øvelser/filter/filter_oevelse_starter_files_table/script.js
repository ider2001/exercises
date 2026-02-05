"use strict";

document.querySelectorAll("button").forEach((btn, i, arr) => {
  console.log("btn", btn);
  console.log("i", i);
  console.log("i", arr);
  btn.addEventListener("click", klik);
});

function klik(evt) {
  evt.target;
  const currentFilter = evt.target.dataset.filter;
  if (currentFilter === "electricVeh") {
    showTheseVehicles(electricVeh);
  } else if (currentFilter === "moreThanTwoSeats") {
    showTheseVehicles(moreThanTwoSeats);
  } else if (currentFilter === "electricOwnedByJonas") {
    showTheseVehicles(electricOwnedByJonas);
  } else if (currentFilter === "ryeBreadMoreThanOnePass") {
    showTheseVehicles(ryeBreadMoreThanOnePass);
  } else {
    showTheseVehicles(vehicles);
  }
}

const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// hardcoded filtereinger, der bor i variabler.
const tbodyPointer = document.querySelector("tbody");

const electricVeh = vehicles.filter((veh) => veh.isElectric);

console.log("Electric vehicles:", electricVeh);

const moreThanTwoSeats = vehicles.filter((veh) => veh.passengers > 2);
console.log("Vehicles with more than 2 seats:", moreThanTwoSeats);

const electricOwnedByJonas = vehicles.filter(
  (veh) => veh.isElectric && veh.ownedBy === "Jonas",
);
console.log("Electric vehicles owned by Jonas:", electricOwnedByJonas);

const ryeBreadMoreThanOnePass = vehicles.filter(
  (veh) => veh.passengers > 1 && veh.fuel === "Rugbrød",
);
console.log(
  "Vehicles fueled by rye bread with more than 1 passenger:",
  ryeBreadMoreThanOnePass,
);

showTheseVehicles(vehicles);

//Her bruger vi en rerunarray, som er basalt en if else sætning, i each stops, for at vise om tabellen har et stop eller ej.
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops : "-"}</td> 
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem ?? "-"}</td>
</tr>`;
  });
}
