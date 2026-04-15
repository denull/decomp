<script>
  import { itemTitle, itemValue } from '../utils.js';

  let {
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {Array} */
    options = [],
    /** @type {any} */
    value = $bindable(null),
  } = $props();

  const uid = $props.id();
</script>

<div
  class={[
    'toggle-group',
    size != 'md' && `is-${size}`,
  ]}
  style={`--_selected-toggle: --_selected-toggle-${uid}`}
  role="radiogroup"
>
  {#each options as option}
    <div
      class={['toggle-group__item', value === itemValue(option) && 'is-selected']}
      style={
        value === itemValue(option) ? `anchor-name: --_selected-toggle-${uid}` : ''
      }
      role="radio"
      tabindex={value === itemValue(option) ? 0 : -1}
      aria-checked={value === itemValue(option)}
      onclick={() => value = itemValue(option)}
    >{itemTitle(option)}</div>
  {/each}
</div>