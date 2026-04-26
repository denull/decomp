<script>
  import { crossfade } from 'svelte/transition';
  import { itemTitle } from '../utils.js';
  import SelectionIndicator from './SelectionIndicator.svelte';
  import ViewRenderer from './ViewRenderer.svelte';

  let {
    /** @type {any} */
    selected = $bindable(null),

    /** @type {Array} */
    tabs = [],
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    ...rest
  } = $props();

  const uid = $props.id();

  const tab = $derived(
    selected !== null &&
    tabs.find(tab => selected === tab.id) || null);
  const [send, receive] = crossfade({ duration: (d) => Math.sqrt(d * 200) });
</script>

<div
  class={['tabs']}
>
  <div class="tabs__head" role="tablist">
    {#each tabs as tab, i}
      {@const isSelected = selected === tab.id}
      <div
        class={[
          'tabs__tab',
          isSelected && 'is-selected'
        ]}
        role="tab"
        tabindex={isSelected ? 0 : -1}
        aria-selected={isSelected}
        onclick={() => selected = tab.id}>
        <SelectionIndicator
          class="tabs__indicator"
          key={`selection-${uid}`}
          {send} {receive}
          visible={isSelected}/>
        {itemTitle(tab)}
      </div>
    {/each}
  </div>
  <div class="tabs__body" role="tabpanel">
    <ViewRenderer view={tab.view} fallback={children} data={tab.data} {...rest}/>
  </div>
</div>