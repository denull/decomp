import { getFocusableElements } from '$lib/core/a11y.js';

/**
 * Svelte action: traps keyboard focus within the element.
 * @param {HTMLElement} node
 * @param {{ enabled?: boolean }} [params]
 */
export function focusTrap(node, params = {}) {
  let enabled = params.enabled ?? true;
  /** @type {HTMLElement | null} */
  let previouslyFocused = null;

  function onKeyDown(/** @type {KeyboardEvent} */ event) {
    if (!enabled || event.key !== 'Tab') return;

    const focusable = getFocusableElements(node);
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  function activate() {
    previouslyFocused = /** @type {HTMLElement | null} */ (document.activeElement);
    document.addEventListener('keydown', onKeyDown);

    // Focus first focusable element
    const focusable = getFocusableElements(node);
    if (focusable.length > 0) {
      // Defer to next tick so the element is fully rendered
      requestAnimationFrame(() => focusable[0].focus());
    }
  }

  function deactivate() {
    document.removeEventListener('keydown', onKeyDown);
    if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus();
    }
  }

  if (enabled) activate();

  return {
    update(newParams) {
      const newEnabled = newParams?.enabled ?? true;
      if (newEnabled !== enabled) {
        enabled = newEnabled;
        if (enabled) activate();
        else deactivate();
      }
    },
    destroy() {
      deactivate();
    },
  };
}
