import devscripts from "./js/devscripts";

document.addEventListener('DOMContentLoaded', () => {
  const isDevelop = !process.argv.includes('production');

  if (isDevelop) {
    console.log('%c%s', 'color: lightblue; font-size: 1.2rem', 'Dev scripts loaded');

    devscripts.fixPageLinks();
  }
});