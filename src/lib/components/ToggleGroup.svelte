<script>
  import { crossfade } from 'svelte/transition';
  import { itemTitle, itemValue } from '../utils.js';
  import SelectionIndicator from './SelectionIndicator.svelte';

  let {
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {Array} */
    options = [],
    /** @type {any} */
    value = $bindable(null),
  } = $props();

  const uid = $props.id();
  const [send, receive] = crossfade({ duration: (d) => Math.sqrt(d * 200) });
</script>

<div
  class={[
    'toggle-group',
    size != 'md' && `is-${size}`,
  ]}
  role="radiogroup"
>
  {#each options as option (itemValue(option))}
    {@const isSelected = value === itemValue(option)}
    <div
      class={['toggle-group__option', value === itemValue(option) && 'is-selected']}
      role="radio"
      tabindex={isSelected ? 0 : -1}
      aria-checked={isSelected}
      onclick={() => value = itemValue(option)}
    >
      <SelectionIndicator
        class="toggle-group__indicator"
        key={`selection-${uid}`}
        {send} {receive}
        visible={isSelected}/>
      {itemTitle(option)}
    </div>
  {/each}
</div>