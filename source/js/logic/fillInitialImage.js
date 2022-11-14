import { IMAGES } from "../data/images.js";

const getTodayImage = () => {
  const date = new Date();
  const index = date.getDate() % IMAGES.length;
  return IMAGES[index];
};

export const fillInitialImage = () => {
  const imageSrc = getTodayImage();

  const canvas = document.querySelector('.js-canvas');
  const ctx = canvas.getContext('2d');
  const image = document.createElement('img');
  image.width = "1024";
  image.height = "768";
  image.addEventListener('load', () => {
    ctx.drawImage(image, 0, 0, 1024, 768);
  });
  image.src = imageSrc;
};
