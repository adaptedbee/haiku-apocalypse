import { HAIKUS } from "../data/haikus.js";

export const getTodayPoem = () => {
  const date = new Date();
  const index = date.getDate() % HAIKUS.length;
  return HAIKUS[index];
};
