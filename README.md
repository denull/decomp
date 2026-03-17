# Decomp UI

A universal, themable component library for **Svelte 5**. Designed to look and feel native across platforms — from iOS to Windows 98.

## Features

- **6 visual themes**: Semi-Flat, iOS/macOS, Android (Material), Windows (Fluent), Skeuomorphic, Win98
- **4 color schemes**: Day, Night, High Contrast Day, High Contrast Night
- **Configurable accent color** via CSS custom properties with `oklch(from ...)` derivation
- **Mobile-first**: bottom sheets, safe area insets, 44px touch targets
- **Accessible**: ARIA roles, keyboard navigation, focus management
- **Zero dependencies**: pure Svelte 5 + CSS

## Quick Start

Wrap your app in `ThemeProvider`:

```svelte
<script>
  import { ThemeProvider, Button, Input, Check } from '$lib';
</script>

<ThemeProvider theme="semiflat" scheme="day" accent="oklch(0.6 0.2 280)">
  <Button variant="primary">Hello World</Button>
</ThemeProvider>
```

### Theme options

| Prop | Values | Default |
|---|---|---|
| `theme` | `semiflat`, `ios`, `android`, `windows`, `skeuo`, `win98` | `semiflat` |
| `scheme` | `day`, `night`, `hc-day`, `hc-night` | `day` |
| `accent` | Any oklch color string | Theme default |

## Components

### Primitives
- **Button** — default, primary, destructive, ghost variants. Supports grouped/segment mode, icon-only, loading state.
- **Check** — Unified checkbox, radio, and toggle via `type` prop. Supports labels, sizes, disabled.
- **Slider** — Range input with optional label and value display.

### Input
- **Input** — Universal input covering text, multiline (textarea), search, tags, select (dropdown), and combobox (autocomplete). Mode determined by props: `multiline`, `options`, `autocomplete`, `tags`, `type="search"`.

### Lists
- **List** — Scrollable container for list items.
- **ListItem** — Row with leading/trailing snippets, title, description. Interactive by default.
- **Group** — Section wrapper with title/description. Use standalone or inside List for grouped sections. `inset` prop for card-like appearance.

### Navigation
- **Tabs** — Top tab strip (`position="top"`) or bottom tab bar (`position="bottom"`). Supports badges, disabled tabs, keyboard navigation.

### Layout
- **AppShell** — CSS Grid layout: toolbar + sidebar + main + tabbar. Sidebar collapses to drawer on mobile.
- **Toolbar** — Sticky header with title, leading/trailing action areas.
- **Sidebar** — Collapsible side panel. Becomes overlay drawer on mobile with backdrop.
- **Card** — Elevated content container with optional header/footer.
- **Stack** — Flex primitive: vertical/horizontal with gap tokens.
- **Divider** — Separator with optional text label.

### Overlays
- **Overlay** — Unified overlay: popover (`mode="popover"`), modal (`mode="modal"`), or tooltip (`mode="tooltip"`). Modals become bottom sheets on mobile. Auto-positioning for popovers.

### Feedback
- **Progress** — Progress bar (`type="bar"`) or spinner (`type="spinner"`). Supports determinate and indeterminate states.

### Display
- **Badge** — Standalone or anchored notification indicator. Dot mode, multiple color variants.
- **Avatar** — Image with fallback initials. Multiple sizes.

## Svelte Actions

```svelte
<script>
  import { ripple, clickOutside, focusTrap, portal } from '$lib';
</script>

<button use:ripple={{ enabled: true }}>Material ripple</button>
<div use:clickOutside={{ handler: close }}>Click outside to close</div>
<div use:focusTrap={{ enabled: isOpen }}>Focus is trapped here</div>
<div use:portal={'body'}>Teleported to body</div>
```

## CSS Custom Properties

The library uses a three-tier system with **no prefix** for clean, readable names:

```css
/* Tier 1: Global tokens (theme-independent) */
--space-md: 12px;  --radius-md: 8px;  --font-md: 15px;

/* Tier 2: Semantic variables (set by theme + scheme) */
--surface-primary   --text-primary     --accent
--control-bg        --control-border   --accent-hover
--shadow-sm         --border-default   --danger

/* Tier 3: Component-private (--_ prefix) */
.button { --_bg: var(--control-bg); }
```

## Class Naming

```
component-name              → block
component-name__part-name   → element
component-name--sm          → size variant
is-active, is-primary       → state/modifier
```

## Development

```bash
npm run storybook     # Start Storybook on port 6006
npm run dev           # Start Vite dev server
npm run build         # Build for production
```

## Storybook

All components are showcased in Storybook with interactive controls. Use the toolbar to switch between themes and color schemes.

## Browser Support

Targets evergreen browsers. Uses modern CSS features:
- `oklch()` and `oklch(from ...)` for color derivation
- `container queries` for responsive components
- `100dvh` for viewport-relative layouts
- `env(safe-area-inset-*)` for iOS safe areas
- `backdrop-filter` for translucent surfaces
