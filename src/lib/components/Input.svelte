<script>
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
    /** @type {String} */
    value = $bindable(''),
    /** @type {Array | null} */
    options = null,
    /** @type {number | null} */
    activeOptionIndex = $bindable(null),
    /** @type {String} */
    placeholder = '',
    /** @type {String | import('svelte').Snippet | null} */
    label = null,
  } = $props();

  const uid = $props.id();
  let el = $state(null);
  let open = $state(false);
</script>

{#snippet body()}
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
        {#if activeOptionIndex !== null && options[activeOptionIndex]}
          <div class="input__value">
            {#if typeof options[activeOptionIndex] == 'string'}
            {options[activeOptionIndex]}
            {:else}
            {options[activeOptionIndex].title}
            {/if}
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
      }}></button>
      {#if open}
      <List
        variant="menu"
        items={options}
        onselect={(item, i) => {
          console.log('Selecting',item,i)
          activeOptionIndex = i;
          open = false;
        }}
      />
      {/if}
    {/if}
  </div>
{/snippet}

{#if label === null}
  {@render body()}
{:else}
  <div class="field">
    <label for={uid} class="field__label">
      {#if typeof label === 'function'}{@render label()}{:else}{label}{/if}
    </label>
    {@render body()}
  </div>
{/if}

<style>
  .input {
    display: flex;

    input, textarea {
      flex: 1;
    }
  }
</style>
