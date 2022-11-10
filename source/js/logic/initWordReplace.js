import { SUBSTITUTIONS } from "../data/substitutions.js";
import { getRandomInteger } from "../utils/getRandomInteger.js";
import { isCapitalized } from "../utils/isCapitalized.js";
import { capitalizeWord } from "../utils/capitalizeWord.js";

export const initWordReplace = () => {
  const poem = document.querySelector('.js-poem');

  poem.addEventListener('click', (evt) => {
    const wordWrapper = evt.target.closest('span');
    if (!wordWrapper) {
      return;
    }

    let isLowercased = false;
    const REGEX = /[^а-яё\-]/g;
    let word = wordWrapper.innerText;
    if (isCapitalized(word)) {
      word = word.toLowerCase();
      isLowercased = true;
    }
    word = word.replace(REGEX, '');

    const substitutions = SUBSTITUTIONS.find(array => array.includes(word));
    if (!substitutions) {
      return;
    }
    const wordIndex = substitutions.indexOf(word);
    let cleanSubstitutions = [...substitutions];
    cleanSubstitutions.splice(wordIndex, 1);
    const randomIndex = getRandomInteger(0, cleanSubstitutions.length - 1);
    const randomWord = cleanSubstitutions[randomIndex];

    let newWord = wordWrapper.innerText.toLowerCase().replace(word, randomWord);
    if (isLowercased) {
      newWord = capitalizeWord(newWord);
    }
    wordWrapper.innerText = newWord;
  });
};
