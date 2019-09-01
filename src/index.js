import devscripts from "./js/devscripts";

document.addEventListener('DOMContentLoaded', () => {
  const isDevelop = (process.env || {}).NODE_ENV === 'development';
  if (isDevelop) {
    console.log('%c%s', 'color: lightblue; font-size: 1.2rem', 'Dev scripts loaded');

    devscripts.fixPageLinks();
  }
});