import { handleClosePage, handleFlipPage } from "./animation.js";

window.addEventListener("custom:flip-page", handleFlipPage);
window.addEventListener("custom:close-page", handleClosePage);