import { dataSlider } from "./modules/dataSlider.js";
import { initImg } from "./modules/intImg.js";
import { initNavigation } from "./modules/initNavigation.js";
// console.dir(dataSlider);
// console.log(dataSlider[0].title);


globalThis.carousel = document.querySelector("#carousel");
globalThis.dataSlider = dataSlider;
globalThis.currentImg = 0;


initImg();
initNavigation();