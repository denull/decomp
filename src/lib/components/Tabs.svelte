<script>
  import { crossfade } from 'svelte/transition';
  import { itemTitle, itemValue } from '../utils.js';
  import SelectionIndicator from './SelectionIndicator.svelte';

  let {
    /** @type {any} */
    value = $bindable(null),

    /** @type {Array} */
    tabs = [],
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
    ...rest
  } = $props();

  const uid = $props.id();

  const selectedTab = $derived(
    value !== null &&
    tabs.find(tab => value === itemValue(tab)) || null);
  const [send, receive] = crossfade({ duration: (d) => Math.sqrt(d * 200) });
</script>

<div
  class={['tabs']}
>
  <div class="tabs__head" role="tablist">
    {#each tabs as tab, i}
      {@const isSelected = value === itemValue(tab)}
      <div
        class={[
          'tabs__tab',
          isSelected && 'is-selected'
        ]}
        role="tab"
        tabindex={isSelected ? 0 : -1}
        aria-selected={isSelected}
        onclick={() => value = itemValue(tab)}>
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
    {#if selectedTab?.component}
    {@const Component = selectedTab.component}
    <Component/>
    {:else if selectedTab?.snippet}
    {@render rest[selectedTab.snippet](selectedTab)}
    {/if}
    {@render children?.()}
  </div>
</div>