<script>
  import { uid } from '$lib/core/a11y.js';

  /**
   * @typedef {{
   *   label: string,
   *   value: string,
   *   icon?: import('svelte').Snippet,
   *   disabled?: boolean,
   *   badge?: string | number
   * }} TabItem
   */

  let {
    /** @type {TabItem[]} */
    items = [],
    value = $bindable(''),
    /** @type {'top' | 'bottom'} */
    position = 'top',
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    onchange,
    ...rest
  } = $props();

  const tabsId = uid('tabs');

  function selectTab(item) {
    if (item.disabled) return;
    value = item.value;
    onchange?.(item.value);
  }

  function handleKeydown(e) {
    const enabledItems = items.filter(i => !i.disabled);
    const currentIndex = enabledItems.findIndex(i => i.value === value);

    let newIndex = currentIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIndex = (currentIndex + 1) % enabledItems.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = enabledItems.length - 1;
    }

    if (newIndex !== currentIndex && enabledItems[newIndex]) {
      selectTab(enabledItems[newIndex]);
      // Focus the new tab
      const tabEl = document.getElementById(`${tabsId}-${enabledItems[newIndex].value}`);
      tabEl?.focus();
    }
  }

  let classes = $derived(
    [
      'tabs',
      `tabs--${position}`,
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<div class={classes} {...rest}>
  <div class="tabs__list" role="tablist" aria-orientation={position === 'bottom' ? undefined : 'horizontal'}>
    {#each items as item}
      <button
        id="{tabsId}-{item.value}"
        class="tabs__tab"
        class:is-active={value === item.value}
        class:is-disabled={item.disabled}
        role="tab"
        aria-selected={value === item.value}
        aria-controls="{tabsId}-panel-{item.value}"
        tabindex={value === item.value ? 0 : -1}
        disabled={item.disabled}
        onclick={() => selectTab(item)}
        onkeydown={handleKeydown}
      >
        {#if item.icon}
          <span class="tabs__icon">{@render item.icon()}</span>
        {/if}
        <span class="tabs__label">{item.label}</span>
        {#if item.badge != null}
          <span class="tabs__badge">{item.badge}</span>
        {/if}
      </button>
    {/each}
  </div>
  {#if children}
    <div
      class="tabs__panels"
      id="{tabsId}-panel-{value}"
      role="tabpanel"
      aria-labelledby="{tabsId}-{value}"
    >
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .tabs {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* === Top tabs === */
  .tabs--top .tabs__list {
    display: flex;
    gap: 0;
    border-bottom: 1px solid var(--border-subtle);
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .tabs--top .tabs__list::-webkit-scrollbar {
    display: none;
  }

  .tabs--top .tabs__tab {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    height: 42px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-secondary);
    font-family: var(--font-family);
    font-size: var(--font-md);
    font-weight: var(--weight-medium);
    cursor: pointer;
    white-space: nowrap;
    transition:
      color var(--duration-fast) var(--ease-default),
      border-color var(--duration-fast) var(--ease-default);
    flex-shrink: 0;
  }

  .tabs--top .tabs__tab:hover:not(.is-disabled) {
    color: var(--text-primary);
  }

  .tabs--top .tabs__tab.is-active {
    color: var(--accent-text);
    border-bottom-color: var(--accent);
  }

  .tabs--top .tabs__tab.is-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* === Bottom tab bar === */
  .tabs--bottom {
    flex-direction: column-reverse;
  }

  .tabs--bottom .tabs__list {
    display: flex;
    justify-content: space-around;
    background: var(--surface-elevated);
    border-top: 1px solid var(--border-subtle);
    padding-bottom: env(safe-area-inset-bottom, 0);
  }

  .tabs--bottom .tabs__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: var(--space-xs) var(--space-sm);
    min-width: 64px;
    background: transparent;
    border: none;
    color: var(--text-tertiary);
    font-family: var(--font-family);
    font-size: var(--font-xs);
    font-weight: var(--weight-medium);
    cursor: pointer;
    transition: color var(--duration-fast) var(--ease-default);
  }

  .tabs--bottom .tabs__tab:hover:not(.is-disabled) {
    color: var(--text-secondary);
  }

  .tabs--bottom .tabs__tab.is-active {
    color: var(--accent);
  }

  .tabs--bottom .tabs__icon {
    font-size: 22px;
    line-height: 1;
  }

  /* Shared */
  .tabs__panels {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
  }

  .tabs__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: var(--danger);
    color: var(--text-on-accent);
    font-size: var(--font-xs);
    font-weight: var(--weight-bold);
    border-radius: var(--radius-full);
    line-height: 1;
  }

  .tabs__tab:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
    border-radius: var(--radius-sm);
  }

  /* Touch target */
  @media (pointer: coarse) {
    .tabs--top .tabs__tab {
      min-height: 44px;
    }
    .tabs--bottom .tabs__tab {
      min-height: 50px;
    }
  }
</style>
