<script>
  let {
    /** @type {null | 'primary' | 'destructive'} */
    variant = null,
    /** @type {boolean} */
    disabled = false,
    /** @type {import('svelte').Snippet | undefined} */
    children = null,
  } = $props();
</script>

<button
  class={[
    'button', 
    variant && `is-${variant}`,
  ]}
  {disabled}
>
  {@render children?.()}
</button>

<style>
  
</style>
