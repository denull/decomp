import { on } from 'svelte/events';

export function drag(callback) {
  return (/** @type Element **/ el) => {
    let first, last;
    function onPointerDown(/** @type PointerEvent **/ ev) {
      if (ev.button !== 0) {
        return;
      }
      offPointerMove = on(el, 'pointermove', onPointerMove);
      offPointerUp = on(el, 'pointerup', onPointerUp);
      first = last = [ev.clientX, ev.clientY];
      el.setPointerCapture(ev.pointerId);
      el.style.setProperty('--_drag-x', 0);
      el.style.setProperty('--_drag-y', 0);
      callback?.(0, 0, false);
    }
    function onPointerMove(/** @type PointerEvent **/ ev) {
      last = [ev.clientX, ev.clientY];
      el.style.setProperty('--_drag-x', last[0] - first[0]);
      el.style.setProperty('--_drag-y', last[1] - first[1]);
      callback?.(last[0] - first[0], last[1] - first[1], false);
    }
    function onPointerUp(/** @type PointerEvent **/ ev) {
      if (ev) {
        last = [ev.clientX, ev.clientY];
        ev.preventDefault();
        callback?.(last[0] - first[0], last[1] - first[1], true);
      }
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