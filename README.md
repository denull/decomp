# Decomp UI

A themable component library for **Svelte 5**. Components provide minimal structural CSS — visual appearance is fully defined by swappable CSS themes.

## Principles

- **No Tailwind.** Flexbox, Grid, `gap`, and `padding` for layout — no margins.
- **Three-tier customization:** sensible defaults in `reset.css` → theme defines custom properties and styles → user overrides via well-known props/classes.
- **Not everything is a component.** Purely visual, single-tag elements (cards, typography, links) are just CSS classes or bare HTML tags.
- **Merge over split.** If two components behave identically and have similar semantics, they should be one component with variants, not two separate ones.

## Themes

Four themes, each supporting light/dark via `light-dark()`:

| Theme | File | Description |
|---|---|---|
| `default` | `default.css` | Semi-flat, modern desktop look |
| `apple` | `apple.css` | iOS/macOS style |
| `aqua` | `aqua.css` | macOS Aqua (skeuomorphic) |
| `win98` | `win98.css` | Windows 98 retro |

Themes are loaded lazily — only the active theme's CSS is injected.

## Quick Start

Wrap your app in `AppShell`, which handles theme loading and layout:

```svelte
<script>
  import { AppShell, Button, Input } from 'decomp';
</script>

<AppShell theme="default" scheme="light">
  <Button variant="primary">Hello</Button>
  <Input label="Name" placeholder="Enter your name" />
</AppShell>
```

`AppShell` sets `data-theme` and `data-scheme` on `<html>`, imports `reset.css`, and dynamically loads the chosen theme CSS.

## Components

### Layout
- **AppShell** — CSS Grid shell: header + sidebar + main + footer. Also acts as theme provider.

### Primitives
- **Button** — Variants: `primary`, `destructive`, `ghost`. Sizes: `sm`/`md`/`lg`. Supports `icon`, `grouped`, `dropdown`.
- **Checkbox** — Checkbox or radio (`variant="radio"`). Supports `group` binding for radio groups, `checked` binding for checkboxes.
- **Switch** — Toggle switch with optional `label`.
- **ToggleGroup** — Segmented control. Takes `options` array (strings or `{title, value}`), binds `value`.
- **Icon** — Renders SVG-path (`"M..."`), CSS-only (`"css:name"`), raw SVG, or URL icons.

### Input
- **Input** — Text, email, phone, number, multiline (textarea), or select (dropdown). Variant-driven: `variant="multiline"`, `variant="select"`, etc. Select variant opens a `List` menu from `options`. Supports `label` and `inline` field layout.

### Data
- **List** — Container for list items. Variants: `menu`, `nav`. Accepts `items` array or `children` snippet.
- **ListItem** — Row with `leading`/`trailing` snippets, `title`, `description`, `accessory` (`chevron`/`switch`). Wrapped in `<button>` for accessibility.
- **ListSection** — Grouped section with `header`/`footer` text. Supports `collapsible`/`collapsed`.
- **Table** — Data table with sortable columns. Takes `columns` and `rows` props, supports custom cell rendering via snippets, row selection.

### Navigation
- **Tabs** — Tab strip with animated selection indicator (CSS anchor positioning). Takes `tabs` array, binds `value`. Tab content via `component`, `snippet`, or `children`.

### Feedback
- **Progress** — Determinate progress bar (`value`/`min`/`max`). Supports `label`.
- **Spinner** — Indeterminate loading indicator with optional `label`.
- **Slider** — Range input. Supports `label`, vertical variant.

### Overlays
- **Dialog** — Modal dialog using native `<dialog>`. Variants: `alert`. Has `title`, `header`/`footer` snippets, `open` binding, `draggable` prop.

## CSS Architecture

### Reset (`reset.css`)
Global reset + utility classes (`.card`, `.row`, `.field`). Defines font stacks (from Open Props), animation durations, and base typography. Theme-dependent props (`--surface-*`, `--text`, `--space`, `--radius`) are expected from the active theme.

### Themes (`themes/<name>.css`)
Each theme is scoped to `[data-theme="<name>"]`. Defines:
1. Custom properties (surfaces, controls, accents, spacing, font sizes)
2. Per-component rules grouped with `MARK` comments

### Naming Convention
```
component-name              → block
component-name__part-name   → element
is-variant, is-selected     → state modifier (applied as class)
```

Components use `variant` prop mapped to `is-<variant>` classes. Sizes use `is-sm`/`is-lg` (md is default, no class added).

### Shared Utilities
- `itemTitle(item)` / `itemValue(item)` — normalize `string | {title, value}` items used across List, Tabs, ToggleGroup, Input select.
- `.field` / `.field__label` — reusable label+control layout (used by Input, Slider, Progress, Switch).

## Development

```bash
npm run dev           # Vite dev server
npm run storybook     # Storybook on port 6006
npm run build         # Production build
```

## Tech Stack

- Svelte 5 (runes, snippets, `$props.id()`)
- Vite 8
- Storybook 10
- Zero runtime dependencies
