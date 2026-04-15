<script>
  import { itemTitle, itemValue } from '../utils.js';
  import Field from './Field.svelte';
  import List from './List.svelte';

  let {
    /** @type {null | 'multiline' | 'number' | 'phone' | 'email' | 'select'} */
    variant = null,
    /** @type {boolean} */
    readonly = false,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | null} */
    children = null,
    /** @type {any} */
    value = $bindable(''),
    /** @type {String} */
    text = $bindable(''),
    /** @type {Array | null} */
    options = null,
    /** @type {String} */
    placeholder = '',
    /** @type {String | import('svelte').Snippet | null} */
    label = null,
    /** @type {boolean} */
    inline = false,
    onselect = null,
  } = $props();

  const uid = $props.id();
  let el = $state(null);
  let open = $state(false);

  const selectedOption = $derived(
    variant === 'select' &&
    value !== null &&
    options &&
    options.find(option => value === itemValue(option)) || null);

  $effect(() => {
    if (selectedOption) {
      text = itemTitle(selectedOption);
    }
  });
</script>

<Field {label} {inline} inputId={`input-${uid}`}>
  <div
    bind:this={el}
    class={[
      'input',
      variant && `is-${variant}`,
      disabled && `is-disabled`,
      open && `is-open`,
    ]}
    style={`--_menu-anchor: --_input-${uid}; anchor-name: --_input-${uid}`}
  >
    {#if variant == 'multiline'}
      <textarea
        id={label && uid && `input-${uid}`}
        bind:value={value}
        {disabled}
        {placeholder}></textarea>
    {:else if variant == 'select'}
      <button class="input__select" onclick={(ev) => {
        open = true;
        ev.preventDefault();
      }} onblur={(ev) => {
        if (!el.contains(ev.relatedTarget)) {
          open = false;
        }
      }}>
        {#if value !== null && selectedOption !== null}
          <div class="input__value">
            {itemTitle(selectedOption)}
          </div>
        {:else if placeholder}
          <div class="input__placeholder">{placeholder}</div>
        {/if}
      </button>
    {:else}
      <input
        id={label && uid && `input-${uid}`}
        type={variant == 'email' ? 'email' : 'text'}
        bind:value={value}
        {disabled}
        {placeholder}/>
    {/if}
    {@render children?.()}

    {#if options}
      <button class="input__menu-button" tabindex="-1" onclick={(ev) => {
        open = true;
        ev.preventDefault();
      }} aria-label="Show options"></button>
      {#if open}
      <List
        variant="menu"
        items={options}
        onselect={(item, i) => {
          onselect?.(item, i);
          if (typeof item === 'string') {
            value = item;
          } else
          if ('value' in item) {
            value = item.value;
          }
          open = false;
        }}
      />
      {/if}
    {/if}
  </div>
</Field>

<style>
  .input {
    display: flex;
    width: 100%;

    input, textarea {
      flex: 1;
    }
  }
</style>
