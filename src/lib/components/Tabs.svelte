<script>
  let {
    /** @type {number} */
    activeTabIndex = $bindable(0),

    /** @type {Array} */
    items = [],
  } = $props();
</script>

<div
  class={[
    'tabs',
  ]}
>
  <div class="tabs__head" role="tablist">
    {#each items as item, i}
      <div
        class={[
          'tabs__tab',
          i == activeTabIndex && 'is-active'
        ]}
        role="tab"
        tabindex={i}
        aria-selected={activeTabIndex == i}
        onclick={() => activeTabIndex = i}>
        {item.name}
      </div>
    {/each}
  </div>
  <div class="tabs__body">
    {#if items[activeTabIndex]}
    {@const Component = items[activeTabIndex].component}
    <Component/>
    {/if}
  </div>
</div>

<style>
  :global {
    .tabs {
      .tabs__tab {
        cursor: pointer;
        user-select: none;
      }
    }
  }
</style>
