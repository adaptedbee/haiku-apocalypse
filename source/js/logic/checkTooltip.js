export const checkTooltip = () => {
  const FLAG_NAME = 'TOOLTIP_FLAG';
  const tooltip = document.querySelector('.js-tooltip');
  const flag = localStorage.getItem(FLAG_NAME);

  if (!flag) {
    const tooltipButton = document.querySelector('.js-tooltip-button');
    tooltipButton.addEventListener('click', () => {
      tooltip.classList.remove('active');
      localStorage.setItem(FLAG_NAME, 'true');
    });
  } else {
    tooltip.classList.remove('active');
  }
};
