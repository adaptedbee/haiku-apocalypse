const getCurrentPoemText = () => {
  let result = '';
  const lines = document.querySelectorAll('.js-line');
  lines.forEach((line, index) => {
    result += line.innerText;
    if (index < lines.length - 1) {
      result += ' ';
    }
  });
  return result;
};

export const initShare = () => {
  const twitterButton = document.querySelector('.js-share-twitter');
  const telegramButton = document.querySelector('.js-share-telegram');
  const URL = 'http://haiku-apocalypse.surge.sh' || window.location.href;
  const text = getCurrentPoemText();

  twitterButton.addEventListener('click', () => {
    const url = `https://twitter.com/intent/tweet?url=${URL}/&text=${text}`;
    window.open(url, '_blank').focus();
  });

  telegramButton.addEventListener('click', () => {
    const url = `https://telegram.me/share/url?url=${URL}&text=${text}`;
    window.open(url, '_blank').focus();
  });
};
