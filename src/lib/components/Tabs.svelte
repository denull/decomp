<script>
  import { itemTitle, itemValue } from '../utils.js';

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
</script>

<div
  class={['tabs']}
  style={`--_selected-tab: --_selected-tab-${uid}`}
>
  <div class="tabs__head" role="tablist">
    {#each tabs as tab, i}
      {@const isSelected = value === itemValue(tab)}
      <div
        class={[
          'tabs__tab',
          isSelected && 'is-selected'
        ]}
        style={
          isSelected ? `anchor-name: --_selected-tab-${uid}` : ''
        }
        role="tab"
        tabindex={isSelected ? 0 : -1}
        aria-selected={isSelected}
        onclick={() => value = itemValue(tab)}>
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

<style>
  :global {
    .tabs {
      .tabs__tab {
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
      }
      .tabs__body {
        display: flex;
        flex-direction: column;
        container-type: inline-size;
      }
    }
  }
</style>
