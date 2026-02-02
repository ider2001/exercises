import { getRandomNumber } from "../vearktojer/js.js";

import { $ } from "../vearktojer/js.js";
import { $$ } from "../vearktojer/js.js";

console.log("getRandomNumber", getRandomNumber(3));

$(".mitPTag").innerHTML = "MODUELS";
$$(".myListElement").forEach((elm, i) => {
  elm.innerHTML = "hej" + i;
});
