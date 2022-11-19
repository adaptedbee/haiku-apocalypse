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
    createCanvas(canvasWidth, canvasHeight);
    img = loadImage(getTodayImage(), () => {
      glitch = new Glitch(img);
    });
  }

  window.draw = () => {
    clear();

    // отображаем картинку пропорционально экрану
    // const coefW = canvasWidth / img.width;
    // const heightShift = img.height * coefW - canvasHeight;
    // if (heightShift >= 0) {
    //   image(img, 0, -heightShift/2, canvasWidth, img.height * coefW);
    // } else {
    //   const coefH = canvasHeight / img.height;
    //   const widthShift = img.width * coefH - canvasWidth;
    //   image(img, -widthShift/2, 0, img.width * coefH, canvasHeight);
    // }

    if (!!glitch) {
      glitch.show();
    }
  }
};
