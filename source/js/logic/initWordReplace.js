import { SUBSTITUTIONS } from "../data/substitutions.js";
import { getRandomInteger } from "../utils/getRandomInteger.js";

export const initWordReplace = () => {
  const poem = document.querySelector('.js-poem');

  poem.addEventListener('click', (evt) => {
    const wordWrapper = evt.target.closest('span');
    if (!wordWrapper) {
      return;
    }
    const REGEX = /[^а-яё\-]/g;
    const word = wordWrapper.innerText.toLowerCase().replace(REGEX, '');
    console.log(word);

    const substitutions = SUBSTITUTIONS.find(array => array.includes(word));
    if (!substitutions) {
      return;
    }
    const wordIndex = substitutions.indexOf(word);
    let cleanSubstitutions = [...substitutions];
    cleanSubstitutions.splice(wordIndex, 1);
    console.log(cleanSubstitutions);
    const randomIndex = getRandomInteger(0, cleanSubstitutions.length - 1);
    const randomWord = cleanSubstitutions[randomIndex];
    console.log(randomIndex, randomWord);

    const newWord = wordWrapper.innerText.toLowerCase().replace(word, randomWord);
    wordWrapper.innerText = newWord;
  });
};
