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

<div
  class={[
    'input', 
    variant && `is-${variant}`,
  ]}
>
  {@render children?.()}
</div>

<style>
  
</style>
