<script>
  let {
    /** @type {null} */
    variant = null,
    /** @type {'sm' | 'md' | 'lg'} */
    size = 'md',
    /** @type {String | null} */
    label = null,
  } = $props();
</script>

<div
  class={[
    'spinner', 
    variant && `is-${variant}`,
    size != 'md' && `is-${size}`,
  ]}>
  {#if label}
    <div class="spinner__label">
      {#if typeof label === 'function'}{@render label()}{:else}{label}{/if}
    </div>
  {/if}
</div>
