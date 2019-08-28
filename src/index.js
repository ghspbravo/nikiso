import devscripts from "./js/devscripts";

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c%s', 'color: lightblue; font-size: 1.2rem', 'Dev scripts loaded');

  devscripts.fixPageLinks();
});