export const checkTooltip = () => {
  const FLAG_NAME = 'TOOLTIP_FLAG';
  const tooltip = document.querySelector('.js-tooltip');
  const tooltipButton = document.querySelector('.js-tooltip-button');
  const flag = localStorage.getItem(FLAG_NAME);

  if (!flag) {
    tooltip.classList.add('active');
    tooltipButton.addEventListener('click', () => {
      tooltip.classList.remove('active');
      localStorage.setItem(FLAG_NAME, 'true');
    });
  }
};
