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
  let glitch;

  window.setup = () => {
    background(0);
    createCanvas(canvasWidth, canvasHeight);
    img = loadImage(getTodayImage(), () => {
      glitch = new Glitch(img, canvasWidth, canvasHeight);
    });
  }

  window.draw = () => {
    clear();
    background(0);

    // отображаем картинку пропорционально экрану
    image(img, 0, 0, canvasWidth, canvasHeight, 0, 0, img.width, img.height, COVER);

    if (!!glitch) {
      glitch.show();
    }
  }
};
