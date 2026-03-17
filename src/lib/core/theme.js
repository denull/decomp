import { getContext, setContext } from 'svelte';

const THEME_KEY = 'decomp-theme';

/**
 * @typedef {'ios' | 'android' | 'windows' | 'semiflat' | 'skeuo' | 'win98'} ThemeName
 * @typedef {'day' | 'night' | 'hc-day' | 'hc-night'} SchemeName
 */

/**
 * @typedef {Object} ThemeContext
 * @property {ThemeName} theme
 * @property {SchemeName} scheme
 */

/**
 * Set the theme context. Called by ThemeProvider.
 * @param {() => ThemeContext} getter - reactive getter for the theme context
 */
export function setThemeContext(getter) {
  setContext(THEME_KEY, getter);
}

/**
 * Get the current theme context. Call from within a component rendered inside ThemeProvider.
 * @returns {ThemeContext | undefined}
 */
export function getTheme() {
  const getter = getContext(THEME_KEY);
  return getter?.();
}
