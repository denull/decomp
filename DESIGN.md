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

## Philosophy

When deciding whether to make separate components or merge into one (as variants): more components = more code, more imports, need to style all comps for each theme (one comp with variants -> simply fallbacks to default). Each component code contains mostly logic, not visual appearance (it's defined by theme) - if two components behave (almost) identically and have very similar semantics, they probably should be merged.

## Icon Libraries

## (Potential) Components

- Button

- Input (incl. numeric, multiline=textarea, auto complete, tags/chips, dropdowns)

- List
  - ListItem
  - ListSection

- Table

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