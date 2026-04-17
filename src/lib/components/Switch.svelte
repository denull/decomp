<script>
  import { drag } from '../attachments/drag.svelte.js';
  import Field from './Field.svelte';

  const CLICK_DIST_THRESHOLD = matchMedia('(pointer: coarse)').matches ? 8 : 4;
  
  let {
    /** @type {boolean} */
    checked = $bindable(false),
    /** @type {String | null} */
    label = null,
    /** @type {boolean} */
    disabled = $bindable(false),
  } = $props();

  let maxDistSq = 0;
  let initialState = null;
  let initialPosition = $state(null);
  let el = $state(null);
</script>

<Field {label} inline>
  <div
    bind:this={el}
    class={[
      'switch', 
      checked && `is-checked`,
      disabled && `is-disabled`,
      initialState !== null && `is-dragged`,
    ]}
    style:--_initial-position={initialPosition !== null && initialPosition}
    role="switch"
    tabindex="0"
    aria-checked={checked}
    {@attach drag((x, y, final) => {
      const style = getComputedStyle(el);
      const offPosition = parseFloat(style.getPropertyValue('--_off-position'));
      const onPosition = parseFloat(style.getPropertyValue('--_on-position'));
      const position = parseFloat(style.getPropertyValue('--_position'));

      if (initialState === null) {
        initialState = checked;
        initialPosition = position;
      }
      maxDistSq = Math.max(maxDistSq, x * x + y * y);
      
      const actualPosition = Math.max(offPosition, Math.min(initialPosition + x, onPosition));
      const midPosition = (offPosition + onPosition) / 2;
      checked = actualPosition > midPosition;

      if (final) {
        if (maxDistSq < CLICK_DIST_THRESHOLD * CLICK_DIST_THRESHOLD) {
          // This is a click: just toggle the state
          checked = !initialState;
        }
        maxDistSq = 0;
        initialState = null;
        initialPosition = null;
      }
    })}
  >
    <div
      class="switch__thumb"
    ></div>
  </div>
</Field>