// === Decomp UI Component Library ===
// Barrel export for all components, actions, and utilities.

// Core
export { setThemeContext, getTheme } from './core/theme.js';
export { getFocusableElements, getFirstFocusable, announce, uid } from './core/a11y.js';

// Foundation
export { default as ThemeProvider } from './components/ThemeProvider.svelte';

// Primitives
export { default as Button } from './components/Button.svelte';
export { default as Check } from './components/Check.svelte';
export { default as Slider } from './components/Slider.svelte';

// Inputs
export { default as Input } from './components/Input.svelte';

// Lists
export { default as List } from './components/List.svelte';
export { default as ListItem } from './components/ListItem.svelte';
export { default as Group } from './components/Group.svelte';

// Navigation
export { default as Tabs } from './components/Tabs.svelte';

// Layout
export { default as AppShell } from './components/AppShell.svelte';
export { default as Toolbar } from './components/Toolbar.svelte';
export { default as Sidebar } from './components/Sidebar.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Stack } from './components/Stack.svelte';
export { default as Divider } from './components/Divider.svelte';

// Overlays
export { default as Overlay } from './components/Overlay.svelte';

// Feedback
export { default as Progress } from './components/Progress.svelte';

// Display
export { default as Badge } from './components/Badge.svelte';
export { default as Avatar } from './components/Avatar.svelte';

// Actions
export { clickOutside } from './actions/clickOutside.js';
export { portal } from './actions/portal.js';
export { focusTrap } from './actions/focusTrap.js';
export { ripple } from './actions/ripple.js';
