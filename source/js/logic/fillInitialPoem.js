import { getTodayPoem } from "./getTodayPoem.js";

export const fillInitialPoem = () => {
  const todayPoem = getTodayPoem();

  let htmlString = '';
  const poem = document.querySelector('.js-poem');

  todayPoem.forEach(line => {
    htmlString += '<p class="poem__line">';
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
