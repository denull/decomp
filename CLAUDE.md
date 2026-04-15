# CLAUDE.md

## Project Overview

Decomp is a themable Svelte 5 component library. Components provide minimal structural behavior/CSS; visual appearance is entirely defined by swappable CSS theme files.

## Key Architecture Decisions

- **AppShell is the theme provider.** It imports `reset.css`, sets `data-theme`/`data-scheme` on `<html>`, and lazily loads theme CSS via `import.meta.glob` with `?inline` query.
- **Components use `:global` styles.** Component `.svelte` files define only structural/default CSS in `:global {}` blocks. Theme files target these classes to apply visuals.
- **BEM-ish naming:** `component-name`, `component-name__part`, `is-variant`/`is-selected` state classes. Variants come from a `variant` prop, sizes from `size` prop (md is default = no class).
- **No margins.** Layout uses `gap` and `padding` exclusively. See `docs/DESIGN.md` for philosophy.
- **Merge over split.** Prefer one component with variants over multiple similar components.
- **Not everything is a component.** `.card`, `.row`, `.field` are CSS-only utilities in `reset.css`.

## File Structure

- `src/lib/index.js` — public exports
- `src/lib/reset.css` — global reset, font stacks, utility classes
- `src/lib/utils.js` — `itemTitle()`/`itemValue()` helpers for `string | {title, value}` items
- `src/lib/components/` — Svelte components
- `src/lib/themes/` — CSS theme files (default, apple, aqua, win98), scoped to `[data-theme="..."]`
- `src/lib/fonts/` — bundled fonts (MS Sans Serif for win98 theme)
- `src/stories/` — Storybook stories
- `docs/DESIGN.md` — design philosophy, component roadmap, reference links

## Conventions

- Items (in List, Tabs, ToggleGroup, Input select) use a unified `string | {title, value}` format, normalized via `itemTitle()`/`itemValue()`.
- The `.field` + `.field__label` pattern is reused by Input, Slider, Progress, Switch for labeled controls. Check `inline` prop for horizontal layout.
- Themes use `light-dark()` CSS function for light/dark scheme support.
- Component-private CSS custom properties use `--_` prefix (e.g., `--_progress`, `--_selected-tab`).
- CSS anchor positioning is used for animated selection indicators (Tabs, ToggleGroup).

## Commands

```bash
npm run dev           # Vite dev server
npm run storybook     # Storybook on port 6006
npm run build         # Production build
```

## Things to Watch

- `Popover.svelte` exists as a file but is currently empty (not exported).
- `ListSection` is not exported from `index.js` (used internally by `List`).
- `Dialog` uses native `<dialog>` element with `showModal()`/`close()`.
- Icon `"css:name"` icons are defined purely in theme CSS files (e.g., `icon-close`).
- The `docs/DESIGN.md` contains the component roadmap and TODO items.
