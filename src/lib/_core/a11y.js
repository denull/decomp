/**
 * Get all focusable elements within a container.
 * @param {HTMLElement} container
 * @returns {HTMLElement[]}
 */
export function getFocusableElements(container) {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');
  return /** @type {HTMLElement[]} */ (Array.from(container.querySelectorAll(selector)));
}

/**
 * Get the first focusable element within a container.
 * @param {HTMLElement} container
 * @returns {HTMLElement | null}
 */
export function getFirstFocusable(container) {
  return getFocusableElements(container)[0] ?? null;
}

/**
 * Announce a message to screen readers via an aria-live region.
 * @param {string} message
 * @param {'polite' | 'assertive'} [priority='polite']
 */
export function announce(message, priority = 'polite') {
  const el = document.createElement('div');
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', priority);
  el.setAttribute('aria-atomic', 'true');
  Object.assign(el.style, {
    position: 'absolute',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  });
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

/**
 * Generate a unique ID for ARIA attributes.
 * @param {string} [prefix='dc']
 * @returns {string}
 */
export function uid(prefix = 'dc') {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
