export const initAboutPopup = () => {
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
