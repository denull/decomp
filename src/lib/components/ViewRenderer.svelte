<script>
  let {
    /** @type {import('svelte').Component | import('svelte').Snippet | string | null} */
    view = null,
    /** @type {import('svelte').Snippet} */
    fallback = null,
    /** @type {any} */
    data = null,
    ...rest
  } = $props();

  /** Warning: this relies on undocumented (and potentially unreliable) way of checking whether a fn is a snippet. It may break in future versions of Svelte! Ideally, this should be a function provided by svelte. Related issues:
   * https://github.com/sveltejs/svelte/issues/14017
   * https://github.com/sveltejs/svelte/issues/9774
   * 
   * TODO: consider whether this is truly a "loosy-goosey" API and actually should be avoided.
   */
  function isSnippet(/** @type Function */ fn) {
    return typeof fn === 'function' && fn.name === 'snippet';
  }
</script>

{#if typeof view === 'string'}
  {@render rest[view](data)}
{:else if isSnippet(view)}
  {@render view(data)}
{:else if typeof view === 'function'}
  {@const Component = view}
  <Component {...data}/>
{:else}
  {@render fallback?.(data)}
{/if}