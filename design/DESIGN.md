## TLDR: Main Principles

* No Tailwind. Tailwind is cancer, and nobody should be using it.
* Flexbox and Grid FTW. Most (if not all) containers should have display: (inline-)flex or (inline-)grid.
* Avoid margins at all costs. Use "gap" and "padding" for spacing.
* Not everything needs to be a component. Some elements can be simply defined as classes (or even tags - i.e. default typography) to be used in userland markup.
* Three-stage customization:
  1. Define sensible default state + useful custom properties in `reset.css` (+ each component can add some defaults in its component file).
  2. Theme defines values for well-known custom properties (such as `--surface-0`, `--space`, etc), defines its own custom props, styles each component.
  3. User can use either props from reset.css or well-known props (which should be available in any theme), or apply any of well-known classes.
  ("well-known" here means "defined in each of available themes")
* Less is more. All components and properties should have short, simple names. No component or a CSS class should use some namespace-like prefix. This library is opinionated, and it should be used as a core, like an extension of the default HTML tags.

## Existing UI Libraries

- [98.css](https://jdan.github.io/98.css) - not really a UI library per se, just a css file
Has: buttons, check boxes, radio buttons (called OptionButton?), group box (with optional label), text boxes, sliders (incl. vertical), dropdowns, window elements (title, frame, status bar), tree views, tabs, tables, progress indicators, field borders (sunken panel, work area). No color themes.

- [shadcn/ui](https://ui.shadcn.com/)
Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Direction, Drawer, Dropdown Menu, Empty, Field, Hover Card, Input, Input Group, Input OTP, Item, Kbd, Label, Menubar, Native Select, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip, Typography

- [MUI Base UI](https://v7.mui.com/) (base for Material UI, JoyUI)
Accordion, Alert Dialog, Autocomplete, Avatar, Button, Calendar, Checkbox, Checkbox Group, Collapsible, Combobox, Context Menu, Dialog, Drawer, Field, Fieldset, Form, Input, Menu, Menubar, Meter, Navigation Menu, Number Field, Popover, Preview Card, Progress, Radio, Scroll Area, Select, Separator, Slider, Switch, Tabs, Toast, Toggle, Toggle Group, Toolbar, Tooltip

- [daisyUI](https://daisyui.com/)

- [RadixUI](https://www.radix-ui.com/)

- [HeroUI](https://heroui.com/)

- [Chakra UI](https://chakra-ui.com/)

- [HeadlessUI](https://headlessui.com/)

- [Mantine](https://mantine.dev/)

- [Quasar](https://quasar.dev/)

- [TailwindPlus](https://tailwindcss.com/plus) - not a library, rather a collection of templates

- [Flowbite Svelte](https://flowbite-svelte-v2.vercel.app/)

- [Svelte Material UI](https://sveltematerialui.com/) - Svelte-specific

- [Skeleton UI](https://www.skeleton.dev/)

- [Bits UI](https://bits-ui.com/)

- [Melt UI](https://next.melt-ui.com/) - Svelte-specific

- [Origin UI Svelte](https://originui-svelte.pages.dev/) - Svelte-specific, based on Origin UI (now Base UI?)

- [Magic UI](https://magicui.design/)

- [Ant Design](https://ant.design/)

- [AgnosticUI](https://www.agnosticui.com/)

- [React Aria](https://react-aria.adobe.com/)

- [Open Props](https://open-props.style/) - not a UI library, a collection of CSS props
- [Open Props UI](https://open-props-ui.netlify.app/)

Suggested by AI:

- [Blueprint](https://blueprintjs.com/)
- [Evergreen](https://evergreen.segment.com/)
- [PrimeReact](https://primereact.org/)
- [Shoelace](https://shoelace.style/) - now [Web Awesome](https://webawesome.com/)
- [FAST](https://fast.design/) by Microsoft
- [Carbon Components Svelte](https://svelte.carbondesignsystem.com/)
- [Sveltestrap](https://sveltestrap.js.org/) - Bootstrap for Svelte
- [Svelte UX](https://svelte-ux.techniq.dev/)
- [Smelte](https://smeltejs.com/)
- [M3 Svelte](https://kendell.dev/m3-svelte/)
- [Quaff](https://quaff.dev/)
- [RetroUI Svelte](https://retroui-svelte.netlify.app/)

Some analysis by Perplexity and OpenAI:
- [Perplexity report](https://www.perplexity.ai/apps/7b90bbd6-30bd-4047-999d-8e64c7b5fbae) - also available as [perplexity-report.md] in this directory
- [OpenAI report](https://chatgpt.com/c/69d7a2e8-2ab0-8325-bb28-827341021a24) - also  [openai-report.md]
- [OpenAI report on components](https://chatgpt.com/c/69d7b601-df14-8384-96f3-7d10c9eb8358) - also [openai-comp-report.md]
- [Claude report on components](https://claude.ai/chat/ff10bd1d-e128-47c9-8454-9aa3e036ae3c) - also [claude-comp-report.md]
- [Claude suggested architecture](https://claude.ai/chat/ff10bd1d-e128-47c9-8454-9aa3e036ae3c) - also [claude-architecture.md]

Some other notable projects:

- [Utopia](https://utopia.fyi/) - responsive font sizes and spaces
- [cu.css](https://cu.harrycresswell.com/) - based on Utopia

## Philosophy

When deciding whether to make separate components or merge into one (as variants): more components = more code, more imports, need to style all comps for each theme (one comp with variants -> simply fallbacks to default). Each component code contains mostly logic, not visual appearance (it's defined by theme) - if two components behave (almost) identically and have very similar semantics, they probably should be merged.

Some things don't need a separate Svelte component at all: some layout utilities, typography, basic HTML tags (like <a>). Rule of thumb: if it's PURELY visual component (no special behavior) and it can be expressed in a single HTML tag (no complex layout where user can make mistakes) - no component needed. Still, CSS themes can define classes for such style-only components: see, for example, ".card".

## CSS

We have few themes: default, win98, aqua (probably need to add apple/android/windows to better match modern OSes). Each has its own CSS file (currently they all are included at the same time).

Each theme is responsible for defining rules for light and dark scheme (recommended approach: using "light-dark()" function).

Currently, each theme is mostly independent from each other - their custom property names almost not overlap each other. This can be problematic: user needs a way to define their classes without relying on a specific theme. TODO: define common set of properties (like --font, --space, --surface, etc - Open Props should be a nice inspiration probably).

Structure:
- `src/lib/reset.css`: minimalistic reset file, applies sensible rules not just for components, but all HTML content;
- `src/lib/components/<Component>.svelte`: each component defines very minimal rules, which set defaults for that component across all themes (but not for similar non-component tags: cf. <table> and <Table>);
- `src/lib/themes/<Theme>.css`: each theme is wrapped in `[data-theme="<Theme>"] {`, and firstly contains a list of all custom properties (set on root element); then all rules are grouped by component (like `.list { ... }`), with `MARK` comments for quick navigation.

Nesting child components (like `.list-section__header` in `.list-section`) is not strictly required, but is nice for organisation and being able to collapse the whole component section.

### Properties

**Surfaces**

`--surface-0`: Main background.
`--surface-1`: Background for cards/dialogs.
`--surface-2`: "Work area" background. Usually reserved just for inputs, but can be used as a container in some cases (see ["Mail" example](https://heroui.com/themes?template=mail) in HeroUI).

`--surface-2` should have strongest contrast with text. This means white in light schemes and almost-black in dark. `--surface-0` and `--surface-1` both should have lower contrast than `--surface-2`, but order between them is not explicitly specified. Currently, both in light and dark schemes `--surface-0` is slightly darker one, and `--surface-1` is slightly lighter.

It should be possible to place controls/text on any of three types of surfaces (best place for controls: --surface-1, best place for non-UI text: --surface-2). Inputs on --surface-2 are possible, but should be generally avoided (becaused they both use --surface-2 background).

Other colors should be defined for various kinds of elements:

* Buttons (default / hover / active / disabled states) - should be raised by default; sunken in active state
* Controls - should be sunken
* Inputs - should be sunken, use --surface-2 for background
* List items (default / hover / active / disabled states)
* Table rows (alternating colors; default / hover / active / disabled states)

## Icon Libraries

## Icons

Icons are represented with <Icon icon="..."/> component, and can have different types:

* **SVG-path** icons. Those should be strings starting with "M...", which will become a "d" attribute of a single "path" element. Default view box is "0 0 24 24", but can be adjusted with viewBox prop. Width/height attributes will be extracted from last two values of view box. By default icon is stroked; if "filled" prop is set, it will be filled instead. Stroke width is 2px by default, but can be adjusted with strokeWidth prop.
* **SVG** icons. Any <svg> content (it's recommended to convert them to SVG-path icons for unification though).
* **Pure CSS** icons. This is a special case: they should start with "css:" (for example, "css:close"). They will have a single <i></i> child and nothing else. This gives ability to fully define them in theme files.
* **Image** icons. Any valid URL (starting with "http:" or "https:"). Not recommended.
* Any other arbitrary HTML content. Not recommended.

## (Potential) Components

- Button
See also - Segmented Control, tab bar in Tabs. In some designed they can be displayed as grouped buttons, in others not.

- Input (incl. numeric, multiline=textarea, auto complete, tags/chips, dropdowns)
Special case: for now, if Input has a "label", it produces different markup: <div class="field"><div class="input"> (instead of just <div class="input">). Need to be careful with it.

"field" class is intended to also be used as a utility CSS class (along with "field__label") for attaching labels to any other controls.

- List
  - ListItem
  - ListSection
TODO: Currently ListItem with accessory="chevron" injects a SVG directly into the DOM, making it harder to control with theme CSS. Need to consider moving it to <theme>.css instead.

Lists include basic lists grouped into sections (think UITableView used everywhere in iOS interfaces), menus (including lists of dropdown options), and navs (i.e. sidebars - this probably need support for collapsible sections). 

- Table
*Note*: Currently, `Table` is using a different approach from `List`: instead of using some `TableRow` components, it simply accepts all data in `rows` prop, and then uses snippets for custom rendering. Both approaches are valid, we just need to keep in mind them when designing other components (like Menus).

- Tabs
Currently uses its own tab items (can be replaced with a grouped buttons/segmented control?). Also: do we need a separate tab bar / tab bar controller?

- AppShell

TODO:

- Icon (or more generic Image?)

- Checkbox/Check/Toggle (do we need a separate Toggle or is it simply a variant of Checkbox?)

- Progress(Bar) (also: Spinner - are they really different?)

- Slider

- Card?/Group?

- Dialog/Popup/Modal (also: Tooltip? Menu?)

- Chart

- Badge