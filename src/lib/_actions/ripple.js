/**
 * Material-style ripple effect. Typically used in the Android theme.
 * @param {HTMLElement} node
 * @param {{ enabled?: boolean, color?: string }} [params]
 */
export function ripple(node, params = {}) {
  let enabled = params.enabled ?? true;
  let color = params.color ?? 'currentColor';

  function handlePointerDown(/** @type {PointerEvent} */ event) {
    if (!enabled) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    const rippleEl = document.createElement('span');
    Object.assign(rippleEl.style, {
      position: 'absolute',
      left: `${x - size / 2}px`,
      top: `${y - size / 2}px`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: color,
      opacity: '0.12',
      transform: 'scale(0)',
      pointerEvents: 'none',
      animation: 'ripple-expand 0.5s cubic-bezier(0, 0, 0.2, 1) forwards',
    });

    // Ensure the container is positioned for absolute children
    const position = getComputedStyle(node).position;
    if (position === 'static') {
      node.style.position = 'relative';
    }
    node.style.overflow = 'hidden';

    node.appendChild(rippleEl);

    function cleanup() {
      rippleEl.style.opacity = '0';
      rippleEl.style.transition = 'opacity 0.3s ease';
      setTimeout(() => rippleEl.remove(), 300);
    }

    node.addEventListener('pointerup', cleanup, { once: true });
    node.addEventListener('pointerleave', cleanup, { once: true });
  }

  node.addEventListener('pointerdown', handlePointerDown);

  // Inject keyframes if not already present
  if (!document.getElementById('ripple-keyframes')) {
    const style = document.createElement('style');
    style.id = 'ripple-keyframes';
    style.textContent = `
      @keyframes ripple-expand {
        to { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }

  return {
    update(newParams) {
      enabled = newParams?.enabled ?? true;
      color = newParams?.color ?? 'currentColor';
    },
    destroy() {
      node.removeEventListener('pointerdown', handlePointerDown);
    },
  };
}
