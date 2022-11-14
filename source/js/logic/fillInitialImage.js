import { IMAGES } from "../data/images.js";

const getTodayImage = () => {
  const date = new Date();
  const index = date.getDate() % IMAGES.length;
  return IMAGES[index];
};

export const fillInitialImage = () => {
  const windowW = window.innerWidth;
  const windowH = window.innerHeight;
  let img;

  window.setup = () => {
    createCanvas(windowW, windowH);
    img = loadImage(getTodayImage());
  }

  window.draw = () => {
    image(img, 0, 0);
  }
};
