export const initAudio = () => {
  const soundcloudIframe = document.querySelector('.js-soundcloud-iframe');
  const soundcloudWidget = SC.Widget(soundcloudIframe);
  const button = document.querySelector('.js-audio-toggle-button');

  button.addEventListener('click', () => {
    soundcloudWidget.toggle();
    button.classList.toggle('pause');
  });
};
