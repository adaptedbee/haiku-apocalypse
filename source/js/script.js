import { fillInitialPoem } from "./logic/fillInitialPoem.js";
import { fillInitialImage } from "./logic/fillInitialImage.js";
import { initWordReplace} from "./logic/initWordReplace.js";
import { initAboutPopup } from "./logic/initAboutPopup.js";
import { isFirefox } from "./utils/isFirefox.js";
import { checkTooltip } from "./logic/checkTooltip.js";
import { setRandomBodyColor } from "./logic/setRandomBodyColor.js";

fillInitialPoem();
fillInitialImage();
initWordReplace(() => {
  if (!!window.glitch) {
    window.glitch.update();
  }
  setRandomBodyColor();
});
initAboutPopup();
checkTooltip();

// Фикс для высоты в мобильном Firefox
// (в эмуляторе не работает)
if (window.innerWidth < 1024 && isFirefox()) {
  const el = document.querySelector('body');
  el.style.minHeight = window.innerHeight + 'px';
}
