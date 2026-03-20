<script>
  import { uid } from '$lib/core/a11y.js';
  import Overlay from './Overlay.svelte';
  import List from './List.svelte';
  import ListItem from './ListItem.svelte';

  /**
   * Universal input: text, multiline, search, tags, select, combobox.
   * Mode determined by props.
   */

  let {
    /** @type {'text' | 'password' | 'email' | 'number' | 'search' | 'url' | 'tel'} */
    type = 'text',
    value = $bindable(''),
    placeholder = '',
    disabled = false,
    readonly = false,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {boolean} Multiline/textarea mode */
    multiline = false,
    /** @type {number} Min rows for multiline */
    rows = 3,
    /** @type {Array<{label: string, value: any, disabled?: boolean}> | undefined} */
    options = undefined,
    /** @type {boolean} Enable type-to-filter when options are provided */
    autocomplete = false,
    /** @type {any[]} Tag/chip list */
    tags = $bindable(undefined),
    /** @type {string | undefined} */
    label = undefined,
    /** @type {string | undefined} */
    error = undefined,
    /** @type {string | undefined} */
    hint = undefined,
    /** @type {import('svelte').Snippet | undefined} */
    leading,
    /** @type {import('svelte').Snippet | undefined} */
    trailing,
    /** @type {import('svelte').Snippet | undefined} */
    children,
    class: className,
    oninput,
    onchange,
    onfocus,
    onblur,
    /** @type {((option: {label: string, value: any}) => void) | undefined} */
    onselect,
    ...rest
  } = $props();

  const inputId = uid('input');
  const listId = uid('listbox');

  let inputEl = $state(null);
  let wrapperEl = $state(null);
  let dropdownOpen = $state(false);
  let focusedIndex = $state(-1);
  let tagInputValue = $state('');
  let isFocused = $state(false);

  // Determine mode
  let isSelect = $derived(!!options && !autocomplete);
  let isCombobox = $derived(!!options && autocomplete);
  let isTagInput = $derived(tags !== undefined);
  let isSearch = $derived(type === 'search');
  let hasDropdown = $derived(!!options);

  // Filter options for combobox
  let filterText = $derived(isCombobox ? String(value) : '');
  let filteredOptions = $derived(
    options
      ? (isCombobox && filterText
          ? options.filter(o => o.label.toLowerCase().includes(filterText.toLowerCase()))
          : options)
      : []
  );

  // Display value for select mode
  let displayValue = $derived(
    isSelect && options
      ? (options.find(o => o.value === value)?.label ?? '')
      : ''
  );

  function handleInputEvent(e) {
    if (isSelect) return; // no typing in select mode
    value = e.target.value;
    if (isCombobox) {
      dropdownOpen = true;
      focusedIndex = -1;
    }
    oninput?.(e);
  }

  function handleFocus(e) {
    isFocused = true;
    if (hasDropdown && !isCombobox) {
      dropdownOpen = true;
    }
    onfocus?.(e);
  }

  function handleBlur(e) {
    isFocused = false;
    onblur?.(e);
  }

  function selectOption(option) {
    value = isCombobox ? option.label : option.value;
    dropdownOpen = false;
    focusedIndex = -1;
    onselect?.(option);
    onchange?.({ target: { value: option.value } });
  }

  function handleKeydown(e) {
    if (!hasDropdown) {
      if (isTagInput && e.key === 'Enter' && tagInputValue.trim()) {
        e.preventDefault();
        addTag(tagInputValue.trim());
        return;
      }
      if (isTagInput && e.key === 'Backspace' && !tagInputValue && tags?.length) {
        tags = tags.slice(0, -1);
        return;
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!dropdownOpen) {
          dropdownOpen = true;
        } else {
          focusedIndex = Math.min(focusedIndex + 1, filteredOptions.length - 1);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusedIndex = Math.max(focusedIndex - 1, 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (dropdownOpen && focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          selectOption(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        dropdownOpen = false;
        focusedIndex = -1;
        break;
    }
  }

  function addTag(text) {
    if (tags && !tags.includes(text)) {
      tags = [...tags, text];
    }
    tagInputValue = '';
  }

  function removeTag(index) {
    if (tags) {
      tags = tags.filter((_, i) => i !== index);
    }
  }

  function clearSearch() {
    value = '';
    inputEl?.focus();
    oninput?.({ target: { value: '' } });
  }

  function handleSelectClick() {
    if (!disabled) {
      dropdownOpen = !dropdownOpen;
      inputEl?.focus();
    }
  }

  let wrapperClasses = $derived(
    [
      'input',
      size !== 'md' && `input--${size}`,
      multiline && 'is-multiline',
      isSelect && 'is-select',
      isCombobox && 'is-combobox',
      isTagInput && 'is-tags',
      isFocused && 'is-focused',
      disabled && 'is-disabled',
      error && 'is-error',
      className,
    ].filter(Boolean).join(' ')
  );
</script>

<div class={wrapperClasses}>
  {#if label}
    <label class="input__label" for={inputId}>{label}</label>
  {/if}

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    bind:this={wrapperEl}
    class="input__wrapper"
    class:is-focused={isFocused}
    role={isSelect ? 'combobox' : undefined}
    aria-expanded={hasDropdown ? dropdownOpen : undefined}
    aria-haspopup={hasDropdown ? 'listbox' : undefined}
    onclick={isSelect ? handleSelectClick : undefined}
  >
    {#if leading}
      <span class="input__leading">{@render leading()}</span>
    {/if}

    {#if isTagInput && tags}
      <div class="input__tags">
        {#each tags as tag, i}
          <span class="input__tag">
            <span class="input__tag-text">{tag}</span>
            <button
              class="input__tag-remove"
              type="button"
              onclick={() => removeTag(i)}
              aria-label="Remove {tag}"
            >×</button>
          </span>
        {/each}
        <input
          bind:this={inputEl}
          id={inputId}
          class="input__field input__field--tag"
          type="text"
          bind:value={tagInputValue}
          {placeholder}
          {disabled}
          onfocus={handleFocus}
          onblur={handleBlur}
          onkeydown={handleKeydown}
          {...rest}
        />
      </div>
    {:else if multiline}
      <textarea
        bind:this={inputEl}
        id={inputId}
        class="input__field"
        {value}
        {placeholder}
        {disabled}
        {readonly}
        {rows}
        oninput={handleInputEvent}
        onfocus={handleFocus}
        onblur={handleBlur}
        onkeydown={handleKeydown}
        {...rest}
      ></textarea>
    {:else if isSelect}
      <span class="input__field input__field--display" id={inputId} tabindex="0"
        onfocus={handleFocus}
        onblur={handleBlur}
        onkeydown={handleKeydown}
        aria-controls={listId}
        role="textbox"
        aria-readonly="true"
      >{displayValue || placeholder}</span>
    {:else}
      <input
        bind:this={inputEl}
        id={inputId}
        class="input__field"
        {type}
        {value}
        {placeholder}
        {disabled}
        {readonly}
        oninput={handleInputEvent}
        onfocus={handleFocus}
        onblur={handleBlur}
        onkeydown={handleKeydown}
        aria-controls={hasDropdown ? listId : undefined}
        aria-autocomplete={isCombobox ? 'list' : undefined}
        role={isCombobox ? 'combobox' : undefined}
        aria-expanded={isCombobox ? dropdownOpen : undefined}
        {...rest}
      />
    {/if}

    {#if isSearch && value}
      <button class="input__clear" type="button" onclick={clearSearch} aria-label="Clear">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    {/if}

    {#if isSelect}
      <span class="input__chevron" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    {/if}

    {#if trailing}
      <span class="input__trailing">{@render trailing()}</span>
    {/if}
  </div>

  {#if hasDropdown}
    <Overlay
      mode="popover"
      bind:open={dropdownOpen}
      anchor={wrapperEl}
      placement="bottom"
      class="input__dropdown"
    >
      <List id={listId} role="listbox" scrollable maxHeight="240px">
        {#each filteredOptions as option, i}
          <ListItem
            selected={isSelect ? option.value === value : false}
            disabled={option.disabled}
            onclick={() => selectOption(option)}
            aria-selected={focusedIndex === i}
            class={focusedIndex === i ? 'is-focused' : ''}
          >
            {option.label}
          </ListItem>
        {/each}
        {#if filteredOptions.length === 0}
          <div class="input__no-results">No results</div>
        {/if}
      </List>
    </Overlay>
  {/if}

  {#if error}
    <span class="input__error">{error}</span>
  {:else if hint}
    <span class="input__hint">{hint}</span>
  {/if}
</div>

<style>
  .input {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    width: 100%;
  }

  .input__label {
    font-size: var(--font-sm);
    font-weight: var(--weight-medium);
    color: var(--text-secondary);
  }

  .input__wrapper {
    --_height: var(--control-height-md);
    --_px: var(--space-md);
    --_font: var(--font-md);
    --_radius: var(--radius-md);

    display: flex;
    align-items: center;
    gap: var(--space-sm);
    min-height: var(--_height);
    padding-inline: var(--_px);
    background: var(--control-bg);
    border: 1px solid var(--control-border);
    border-radius: var(--_radius);
    font-size: var(--_font);
    transition:
      border-color var(--duration-fast) var(--ease-default),
      box-shadow var(--duration-fast) var(--ease-default);
  }

  .input--sm .input__wrapper {
    --_height: var(--control-height-sm);
    --_px: var(--space-sm);
    --_font: var(--font-sm);
  }

  .input--lg .input__wrapper {
    --_height: var(--control-height-lg);
    --_px: var(--space-lg);
    --_font: var(--font-lg);
  }

  .input__wrapper.is-focused {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-subtle);
  }

  .input.is-error .input__wrapper {
    border-color: var(--danger);
  }

  .input.is-error .input__wrapper.is-focused {
    box-shadow: 0 0 0 3px var(--danger-subtle);
  }

  .input.is-disabled .input__wrapper {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Text field */
  .input__field {
    flex: 1;
    min-width: 0;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-family: var(--font-family);
    font-size: inherit;
  }

  .input__field::placeholder {
    color: var(--text-tertiary);
  }

  /* Multiline */
  .input.is-multiline .input__wrapper {
    align-items: flex-start;
    padding-block: var(--space-sm);
  }

  .input.is-multiline .input__field {
    resize: vertical;
    min-height: calc(var(--font-md) * 1.5 * 3);
    line-height: 1.5;
  }

  /* Select display */
  .input__field--display {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    flex: 1;
    height: var(--_height);
    outline: none;
  }

  .input.is-select .input__wrapper {
    cursor: pointer;
  }

  .input__chevron {
    display: flex;
    color: var(--text-tertiary);
    transition: transform var(--duration-fast) var(--ease-default);
    flex-shrink: 0;
  }

  /* Tags */
  .input__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    padding-block: var(--space-xs);
    flex: 1;
    min-width: 0;
  }

  .input__tag {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 2px 6px 2px 8px;
    background: var(--accent-subtle);
    color: var(--accent-text);
    border-radius: var(--radius-sm);
    font-size: var(--font-sm);
    line-height: 1.4;
    white-space: nowrap;
  }

  .input__tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    border-radius: 50%;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
  }

  .input__tag-remove:hover {
    opacity: 1;
    background: oklch(from var(--accent) l c h / 0.2);
  }

  .input__field--tag {
    flex: 1;
    min-width: 80px;
    height: auto;
    padding: 2px 0;
  }

  /* Search clear button */
  .input__clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    background: var(--surface-tertiary);
    color: var(--text-secondary);
    cursor: pointer;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .input__clear:hover {
    background: var(--border-default);
  }

  /* Leading/trailing */
  .input__leading,
  .input__trailing {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: var(--text-tertiary);
  }

  /* Dropdown styling */
  :global(.input__dropdown) {
    width: 100%;
  }

  .input__no-results {
    padding: var(--space-md) var(--space-lg);
    color: var(--text-tertiary);
    font-size: var(--font-sm);
    text-align: center;
  }

  /* Error / hint */
  .input__error {
    font-size: var(--font-sm);
    color: var(--danger);
  }

  .input__hint {
    font-size: var(--font-sm);
    color: var(--text-tertiary);
  }

  /* Touch target */
  @media (pointer: coarse) {
    .input__wrapper {
      min-height: 44px;
    }
    .input--sm .input__wrapper {
      min-height: 36px;
    }
  }
</style>
