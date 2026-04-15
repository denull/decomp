<script>
    import Field from './Field.svelte';

  let {
    /** @type {boolean} */
    checked = $bindable(false),
    /** @type {String | null} */
    label = null,
  } = $props();
</script>

<Field {label} inline>
  <div
    class={[
      'switch', 
      checked && `is-checked`,
    ]}
    role="switch"
    tabindex="0"
    onclick={() => checked = !checked}
    aria-checked={checked}
  >
    <div class="switch__thumb"></div>
  </div>
</Field>

<style>
  :global {
    .switch {
      display: flex;
    }
  }
</style>
