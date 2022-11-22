export const initAudio = () => {
  const soundcloudIframe = document.querySelector('.js-soundcloud-iframe');
  window.soundcloudWidget = SC.Widget(soundcloudIframe);
  const toggleButton = document.querySelector('.js-audio-toggle-button');

  toggleButton.addEventListener('click', () => {
    window.soundcloudWidget.toggle();
    toggleButton.classList.toggle('pause');
  });
};
