import { IMAGES } from "../data/images.js";
import { Glitch } from "./glitch.js";

const getTodayImage = () => {
  const date = new Date();
  const index = date.getDate() % IMAGES.length;
  return IMAGES[index];
};

export const fillInitialImage = () => {
  const canvasWidth = window.innerWidth < 768 ? 176 : 300;
  const canvasHeight = window.innerWidth < 768 ? 125 : 212;
  let img;

  window.setup = () => {
    background(0);
    createCanvas(canvasWidth, canvasHeight);
    img = loadImage(getTodayImage(), () => {
      window.glitch = new Glitch(img, canvasWidth, canvasHeight);
    });
  }

  window.draw = () => {
    if (!img) {
      return;
    }
    clear();
    background(0);

    image(img, 0, 0, canvasWidth, canvasHeight, 0, 0, img.width, img.height, COVER);
  }
};
