export function viewportAware(/** @type (Element) **/ el) {
  let stopped = false;
  function update() {
    const bounds = el.getBoundingClientRect();
    el.classList.toggle('is-closer-to-right', window.innerWidth - bounds.right < bounds.left);
    el.classList.toggle('is-closer-to-bottom', window.innerHeight - bounds.bottom < bounds.top);
    if (!stopped) {
      requestAnimationFrame(update);
    }
  }
  update();
  return () => {
    stopped = true;
  }
}