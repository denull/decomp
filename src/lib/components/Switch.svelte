<script>
  import { drag } from '../attachments/drag.svelte.js';
  import Field from './Field.svelte';

  let {
    /** @type {boolean} */
    checked = $bindable(false),
    /** @type {String | null} */
    label = null,
    /** @type {boolean} */
    disabled = $bindable(false),
  } = $props();

  let maxDist = 0;
  let initialState = null;
  let initialPosition = $state(null);
  const CLICK_DIST_THRESHOLD = 4 * 4;
  let thumbEl = $state(null);

  function parseCssValue(value) {
    return parseFloat(value.replaceAll(/[^0-9\.]/g, ''));
  }
</script>

<Field {label} inline>
  <div
    class={[
      'switch', 
      checked && `is-checked`,
      disabled && `is-disabled`,
    ]}
    style:--_initial-position={initialPosition !== null && initialPosition}
    role="switch"
    tabindex="0"
    onclick={() => checked = !checked}
    aria-checked={checked}
  >
    <div
      bind:this={thumbEl}
      class="switch__thumb"
      onclick={(ev) => ev.stopPropagation()}
      {@attach drag((x, y, final) => {
        const style = getComputedStyle(thumbEl);
        const offPosition = parseFloat(style.getPropertyValue('--_off-position'));
        const onPosition = parseFloat(style.getPropertyValue('--_on-position'));
        const position = parseFloat(style.getPropertyValue('--_position'));

        if (initialState === null) {
          initialState = checked;
          initialPosition = position;
        }
        maxDist = Math.max(maxDist, x * x + y * y);
        
        const actualPosition = Math.max(offPosition, Math.min(initialPosition + x, onPosition));
        const midPosition = (offPosition + onPosition) / 2;
        checked = actualPosition > midPosition;

        if (final) {
          if (maxDist < CLICK_DIST_THRESHOLD) {
            // This is a click: just toggle the state
            checked = !initialState;
          }
          maxDist = 0;
          initialState = null;
          initialPosition = null;
        }
      })}></div>
  </div>
</Field>