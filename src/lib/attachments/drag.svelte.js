import { on } from 'svelte/events';

export function drag(callback) {
  return (/** @type Element **/ el) => {
    let first, last;
    function onPointerDown(/** @type PointerEvent **/ ev) {
      offPointerMove = on(document, 'pointermove', onPointerMove);
      offPointerUp = on(document, 'pointerup', onPointerUp);
      first = [ev.clientX, ev.clientY];
      el.classList.add('is-dragged');
      el.style.setProperty('--_drag-x', `0px`);
      el.style.setProperty('--_drag-y', `0px`);
      callback?.(0, 0, false);
    }
    function onPointerMove(/** @type PointerEvent **/ ev) {
      last = [ev.clientX, ev.clientY];
      el.style.setProperty('--_drag-x', `${last[0] - first[0]}px`);
      el.style.setProperty('--_drag-y', `${last[1] - first[1]}px`);
      callback?.(last[0] - first[0], last[1] - first[1], false);
    }
    function onPointerUp(/** @type PointerEvent **/ ev) {
      if (ev) {
        last = [ev.clientX, ev.clientY];
      }
      callback?.(last[0] - first[0], last[1] - first[1], true);
      el.classList.remove('is-dragged');
      el.style.removeProperty('--_drag-x');
      el.style.removeProperty('--_drag-y');
      offPointerMove?.();
      offPointerUp?.();
      offPointerMove = offPointerUp = null;
    }
    const offPointerDown = on(el, 'pointerdown', onPointerDown);
    /** @type Function | null */
    let offPointerMove;
    /** @type Function | null */
    let offPointerUp;
    return () => {
      offPointerDown();
      onPointerUp();
    }
  }
}