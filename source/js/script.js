const initAboutPopup = () => {
  const openLink = document.querySelector('.js-open-about-popup');
  const popup = document.querySelector('.js-about-popup');
  const closeButton = document.querySelector('.js-close-about-popup');

  openLink.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('active');
  });
  closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
  });
};

initAboutPopup();

const fillInitialText = () => {
  const TEST_TEXT = [
    ['На мёртвой', 'ветке'],
    ['чернеет', 'ворон'],
    ['осенний', 'вечер']
  ];
  let htmlString = '';
  const poem = document.querySelector('.js-poem');

  TEST_TEXT.forEach(line => {
    htmlString += '<p class="poem__line">';
    line.forEach((word, index) => {
      if (index > 0) {
        htmlString += ' ';
      }
      htmlString += `<span>${word}</span>`;
    });
    htmlString += '</p>';
  });

  poem.innerHTML = htmlString;
};

fillInitialText();
