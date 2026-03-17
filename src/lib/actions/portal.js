/**
 * Svelte action: moves the element to a target container (default: document.body).
 * @param {HTMLElement} node
 * @param {HTMLElement | string} [target]
 */
export function portal(node, target = 'body') {
  let container = typeof target === 'string'
    ? document.querySelector(target)
    : target;

  if (!container) {
    console.warn('[portal] Target not found, falling back to document.body');
    container = document.body;
  }

  container.appendChild(node);

  return {
    update(newTarget) {
      const newContainer = typeof newTarget === 'string'
        ? document.querySelector(newTarget)
        : newTarget;
      if (newContainer && newContainer !== container) {
        container = newContainer;
        container.appendChild(node);
      }
    },
    destroy() {
      node.remove();
    },
  };
}
