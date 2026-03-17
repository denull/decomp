/**
 * Svelte action: calls a callback when a click occurs outside the element.
 * @param {HTMLElement} node
 * @param {{ enabled?: boolean, handler: (event: MouseEvent) => void }} params
 */
export function clickOutside(node, params) {
  let { enabled = true, handler } = params;

  function onClick(/** @type {MouseEvent} */ event) {
    if (!enabled) return;
    if (!node.contains(/** @type {Node} */ (event.target))) {
      handler(event);
    }
  }

  document.addEventListener('pointerdown', onClick, true);

  return {
    update(newParams) {
      enabled = newParams.enabled ?? true;
      handler = newParams.handler;
    },
    destroy() {
      document.removeEventListener('pointerdown', onClick, true);
    },
  };
}
