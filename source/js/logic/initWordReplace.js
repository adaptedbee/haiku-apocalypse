import { SUBSTITUTIONS } from "../data/substitutions.js";
import { getRandomInteger } from "../utils/getRandomInteger.js";
import { isCapitalized } from "../utils/isCapitalized.js";
import { capitalizeWord } from "../utils/capitalizeWord.js";

export const initWordReplace = (callback) => {
  const poem = document.querySelector('.js-poem');

  poem.addEventListener('click', (evt) => {
    const wordWrapper = evt.target.closest('span');
    if (!wordWrapper) {
      return;
    }

    let isLowercased = false;
    const REGEX = /[^а-яёА-ЯЁ\-]/g;
    let clickedWord = wordWrapper.innerText;
    const fullLine = wordWrapper.parentNode.textContent;
    const wordInLineIndex = fullLine.indexOf(clickedWord);
    clickedWord = clickedWord.replace(REGEX, '');
    let searchWord = clickedWord;
    // Если это первое слово в строке, то меняем его на слово с заглавной буквы
    if (isCapitalized(clickedWord) && wordInLineIndex === 0) {
      searchWord = clickedWord.toLowerCase();
      isLowercased = true;
    }

    // ищем по двум версиям слова - с заглавной и с маленькой буквы
    const substitutions = SUBSTITUTIONS.find(array => array.includes(searchWord) || array.includes(clickedWord));
    if (!substitutions) {
      return;
    }
    const searchWordIndex = substitutions.indexOf(searchWord);
    const clickedWordIndex = substitutions.indexOf(clickedWord);
    const wordIndex = searchWordIndex !== -1 ? searchWordIndex : clickedWordIndex;
    let cleanSubstitutions = [...substitutions];
    cleanSubstitutions.splice(wordIndex, 1);
    const randomIndex = getRandomInteger(0, cleanSubstitutions.length - 1);
    const randomWord = cleanSubstitutions[randomIndex];

    let newWord = wordWrapper.innerText.replace(clickedWord, randomWord);
    if (isLowercased) {
      newWord = capitalizeWord(newWord);
    }
    wordWrapper.classList.remove('bounce');
    setTimeout(() => {
      wordWrapper.classList.add('bounce');
    }, 0);
    setTimeout(() => {
      wordWrapper.innerText = newWord;
    }, 500);

    if (!!callback) {
      callback();
    }
  });
};
