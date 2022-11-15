import { IMAGES } from "../data/images.js";

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
    createCanvas(canvasWidth, canvasHeight);
    img = loadImage(getTodayImage());
  }

  window.draw = () => {
    // отображаем картинку пропорционально экрану
    const coefW = canvasWidth / img.width;
    const heightShift = img.height * coefW - canvasHeight;
    if (heightShift >= 0) {
      image(img, 0, -heightShift/2, canvasWidth, img.height * coefW);
    } else {
      const coefH = canvasHeight / img.height;
      const widthShift = img.width * coefH - canvasWidth;
      image(img, -widthShift/2, 0, img.width * coefH, canvasHeight);
    }
  }
};
