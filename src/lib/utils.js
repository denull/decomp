export function itemValue(/** @type String | { value: String } */ item) {
  return typeof item === 'string' ? item : item.value;
}

export function itemTitle(/** @type String | { title: String } */ item) {
  return typeof item === 'string' ? item : item.title;
}

/** Warning: this relies on undocumented (and potentially unreliable) way of checking whether a fn is a snippet. It may break in future versions of Svelte! Ideally, this should be a function provided by svelte. Related issues:
 * https://github.com/sveltejs/svelte/issues/14017
 * https://github.com/sveltejs/svelte/issues/9774
 * 
 * Currently Tabs and AppShell uses this. TODO: consider whether this is truly a "loosy-goosey" API and actually should be avoided.
 */
export function isSnippet(/** @type Function */ fn) {
  return fn.name === 'snippet';
}