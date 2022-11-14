import { IMAGES } from "../data/images.js";

const getTodayImage = () => {
  const date = new Date();
  const index = date.getDate() % IMAGES.length;
  return IMAGES[index];
};

export const fillInitialImage = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  let img;

  window.setup = () => {
    createCanvas(windowWidth, windowHeight);
    img = loadImage(getTodayImage());
  }

  window.draw = () => {
    // отображаем картинку пропорционально экрану
    const coefW = windowWidth / img.width;
    const heightShift = img.height * coefW - windowHeight;
    if (heightShift >= 0) {
      image(img, 0, -heightShift/2, windowWidth, img.height * coefW);
    } else {
      const coefH = windowHeight / img.height;
      const widthShift = img.width * coefH - windowWidth;
      image(img, -widthShift/2, 0, img.width * coefH, windowHeight);
    }
  }
};
