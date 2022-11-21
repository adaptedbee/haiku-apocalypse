import { HAIKUS } from "../data/haikus.js";

const getTodayPoem = () => {
  const date = new Date();
  const index = date.getDate() % HAIKUS.length;
  return HAIKUS[index];
};

export const fillInitialPoem = () => {
  const todayPoem = getTodayPoem();

  let htmlString = '';
  const poem = document.querySelector('.js-poem');

  todayPoem.forEach(line => {
    htmlString += '<p class="poem__line js-line">';
    const words = line.split(' ');
    words.forEach((word, index) => {
      if (index > 0) {
        htmlString += ' ';
      }
      htmlString += `<span>${word}</span>`;
    });
    htmlString += '</p>';
  });

  poem.innerHTML = htmlString;
};
