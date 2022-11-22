import { getRandomInteger } from "../utils/getRandomInteger.js";

const COLORS = ['#ECE535', '#4450DE', '#151515'];

export const setRandomBodyColor = () => {
  const index = getRandomInteger(0, COLORS.length - 1);
  const color = COLORS[index];
  const body = document.querySelector('body');
  body.style.backgroundColor = color;
};
