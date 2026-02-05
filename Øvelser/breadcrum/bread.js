"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);
const ulElement = document.querySelector("ul");

function klik() {
  console.log("click");
  ulElement.innerHTML = "";
  bc.forEach((breaCrumb, index) => {
    const listItem = document.createElement("li");
    if (index === bc.length - 1) {
      listItem.textContent = breaCrumb.name;
    } else {
      const linkItem = document.createElement("a");
      linkItem.href = breaCrumb.link;
      linkItem.textContent = breaCrumb.name + "/";
      listItem.appendChild(linkItem);
    }
    ulElement.appendChild(listItem);
    console.log("Name", breaCrumb.name);
    console.log("link", breaCrumb.link);
  });
}
