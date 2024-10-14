import { dataSlider } from "./modules/dataSlider.js";
console.dir(dataSlider);
console.log(dataSlider[0].title);

import { initImg } from "./modules/intImg.js";

globalThis.carousel = document.querySelector("#carousel");
initImg();