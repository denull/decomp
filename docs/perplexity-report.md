# Survey of Modern Web UI Component Libraries for Building a Svelte 5 Design System

## Overview

This report surveys a set of modern web UI component libraries and adjacent theming primitives that can inform the design of a Svelte 5–based component system with flexible theming and styling.
It focuses on the breadth of components, headless vs styled approaches, theming mechanisms, and trade‑offs relevant when building a custom, framework‑specific library.


## 98.css

98.css is a single CSS file that restyles semantic HTML to mimic Windows 98, with no JavaScript and framework‑agnostic usage.[^1]
The documentation and examples cover window chrome (window, title bar, status bar), buttons, text inputs, checkboxes, radio buttons, group boxes, menus, tabs, progress bars, sliders, lists, and tree views styled to the Win98 aesthetic.[^2]

From a design‑system perspective, 98.css is essentially a preset theme plus a small set of layout and structural utilities rather than a true component library: it ships no behavior, no design tokens other than the baked‑in retro palette, and limited extensibility beyond overriding CSS.[^1]
It can still be a useful reference for how to get strong visual identity out of pure CSS and semantic markup, but is less relevant if the goal is modern, theme‑switchable primitives.


## shadcn/ui

shadcn/ui is a React‑targeted collection built on top of Radix primitives and Tailwind, distributed as copy‑paste source files rather than a compiled package; the ecosystem around it (e.g. Shadcnblocks) enumerates components such as Accordion, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Drawer, Dropdown Menu, Hover Card, Input, Input OTP, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip and more.[^3]
The design encourages forking and customizing components in‑repo, which effectively makes them part of the application codebase rather than an external dependency.[^3]

This model is highly instructive for a Svelte library that wants to be “non‑magical” and fully user‑customizable: shipping source components that are easy to edit, with Tailwind (or utility‑class) styling and clear composition over headless primitives, encourages deep customization at the cost of some ergonomics and bundle sharing.[^3]
The downside is that versioning and upgrades are manual and theming is largely Tailwind‑config driven rather than exposed as explicit design tokens.


## MUI Base UI (Base for Material UI / Joy UI)

Base UI (formerly the unstyled layer of MUI) provides low‑level, mostly unstyled React primitives such as Autocomplete, Badge, Button, Click‑Away Listener, Focus Trap, Form Control, Input, Menu, Modal, Popper, Portal, Select, Slider, Snackbar, Switch, Tabs, Textarea Autosize and others, presented as an alphabetized list in the documentation.[^4]
These components focus on accessibility, keyboard interactions, and ARIA wiring, leaving layout and theming to higher‑level packages like Material UI and Joy UI.[^5][^4]

For a Svelte design system, Base UI is a clear example of how to separate “logic components” from styling: components expose state, events, and minimal structure while letting design‑system layers decide on visual language.[^4]
It is also a reminder that once the primitives are in place (Modal, Popper, FocusTrap, Slot, etc.), building multiple branded UI kits (Material, Joy, custom) on top becomes practical.


## daisyUI

daisyUI is a Tailwind‑based component library that exposes a broad catalog of components including alert, avatar, badge, breadcrumbs, button, calendar, card, carousel, chat, checkbox, collapse, countdown, diff, divider, dock, drawer, dropdown, fieldset, file input, filter, footer, hero, indicator, input, kbd, label, link, list, loading, mask, menu, mockup, modal, navbar, progress, radial progress, radio, range, rating, select, skeleton, stack, stat, status, steps, swap, tab, table, textarea, timeline, toast, toggle, tooltip, validator and more.[^6]
Documentation describes it as a Tailwind CSS–based open‑source UI component library with strong support for responsive layouts, theme switching, and accessibility.[^7]

Architecturally, daisyUI demonstrates an opinionated “class‑based” theming model: themes are expressed as Tailwind plugin configuration and CSS custom properties, and components are configured by adding semantic classes in markup.[^7]
The upside is extremely fast prototyping and theme switching with minimal markup changes; the downside is that behavior is minimal (it is mostly CSS) and the class soup can be hard to wrap into reusable Svelte components without leaking many implementation details.


## Radix UI (Primitives and Themes)

Radix Primitives is a collection of unstyled, accessible React components covering common interactive patterns (Avatar, Popover, Select, Switch, Tooltip and more, with over 25 primitives at the time of writing).[^8]
Radix Themes layers a design system on top of these primitives, adding layout primitives (Grid, Flex, Box), typography (Text, Heading), and surface components like Card, while supporting theming via a Theme component and design tokens.[^9]

Radix is arguably the canonical reference for headless, unstyled primitives: it provides out‑of‑the‑box accessibility and robust interactions while leaving styling to any CSS solution (Tailwind, vanilla CSS, CSS‑in‑JS).[^8]
Its separation between Primitives and Themes is a strong model for a Svelte5 library: build Radix‑like builders for behavior and Svelte components for visuals, possibly backed by a token system similar to Radix Themes.


## HeroUI (formerly NextUI)

HeroUI is a fully featured React UI library with components for Buttons (Button, ButtonGroup, CloseButton, ToggleButton, ToggleButtonGroup), Collections (Dropdown, Listbox, TagGroup), color pickers (ColorArea, ColorField, ColorPicker, ColorSlider, ColorSwatch, ColorSwatchPicker), controls (Slider, Switch), data display (Badge, Chip, Table), date and time (Calendar, DateField, DatePicker, DateRangePicker, RangeCalendar, TimeField), feedback (Alert, Meter, ProgressBar, ProgressCircle, Skeleton, Spinner), forms (Checkbox, CheckboxGroup, Field, Form, Input, InputGroup, InputOTP, Label, NumberField, RadioGroup, SearchField, TextField, TextArea), layout (Card, Separator, Surface, Toolbar), media (Avatar), navigation (Accordion, Breadcrumbs, Disclosure, DisclosureGroup, Link, Pagination, Tabs), overlays (AlertDialog, Drawer, Modal, Popover, Toast, Tooltip), pickers (Autocomplete, ComboBox, Select), typography (Kbd) and utilities like ScrollShadow.[^10]
Marketing emphasizes “beautiful by default” design, Tailwind integration via a `heroui` Tailwind plugin, and first‑class React Server Component support.[^11]

For inspiration, HeroUI is an example of a batteries‑included, styled library that still exposes theming hooks through Tailwind configuration and component variants.[^11]
Its breadth of advanced components (e.g., color pickers, date ranges) shows what it looks like when a design system goes beyond basics, but the React‑specific implementation and Tailwind dependencies are less transferable to Svelte than headless or token‑first approaches.


## Chakra UI

Chakra UI positions itself as an accessible, modern, easy‑to‑style React component library and lists a wide range of components in categories like Accordion, Action Bar, Alert, Aspect Ratio, Avatar, Badge, Bleed, Blockquote, Box, Breadcrumb, Button, Card, Center, Checkbox, Checkbox Card, Clipboard, Close Button, Code, Collapsible, Color Picker, Color Swatch, Combobox, Container, DataList, Dialog, Drawer, Editable and more.[^12]
The docs treat Box as the fundamental primitive upon which other components are built, and the library is explicitly designed for theming and responsive design.[^12]

Chakra is a strong reference for a prop‑driven theming API: components consume theme tokens and offer responsive style props, while a centralized theme object controls colors, spacing, and radii across the system.[^12]
For a Svelte5 library, reproducing Chakra’s ergonomics would mean exposing both low‑level primitives (Box‑like) and higher‑level composites while ensuring that design tokens are the single source of truth for styling.


## Headless UI

Headless UI is a set of completely unstyled, fully accessible UI components for React (and Vue) designed to integrate tightly with Tailwind CSS.[^13]
It implements behavior and ARIA semantics for components like Menu, Listbox, Dialog, Popover, Tabs and others while leaving all markup class names and styling to the consumer.

Conceptually, Headless UI is an important proof that headless components can gain mainstream adoption if they are accessible, well‑tested, and pair nicely with a styling system like Tailwind.[^13]
For a Svelte library, this suggests providing both Svelte “headless builders” (stores + actions) and optional pre‑styled components, while keeping visual concerns fully customizable.


## Mantine

Mantine is an MIT‑licensed React component and hooks library focused on usability, accessibility and developer experience, distributed as `@mantine/core` and related packages.[^14]
Overviews highlight rich sets of components for forms and inputs, navigation, notifications, modals, typography, cards, tables, lists, and more, with built‑in support for theming and dark mode.[^15]

Mantine’s strength is the tight integration between layout primitives, complex inputs, and a robust theme system, which allows both design‑system building and rapid application development.[^15]
The cost is React lock‑in and an opinionated styling approach, but the catalog is a good reference for what a “complete” design system should include (from basic inputs to advanced navigation and overlays).


## Quasar

Quasar is a Vue‑first framework that ships a large suite of Material‑inspired components (buttons, inputs, dialogs, drawers, lists, trees, steppers, tabs, etc.) as part of a full SPA/PWA/Electron stack.[^16]
Component documentation shows patterns like QAjaxBar, QBtnToggle, QDialog, QDrawer, QInput, QList, QOptionGroup, QRating, QSplitter, QTree and others.[^16]

Quasar’s architecture as a “full stack” front‑end framework makes it somewhat different from standalone UI kits, but it is useful as a reference for application‑level patterns like layout shells, navigation drawers, and integrated routing.[^16]
For a Svelte library, the main takeaway is how Quasar packages together theming, iconography, and application scaffolding around its components.


## Tailwind Plus (Tailwind UI)

Tailwind Plus (Tailwind UI) is not a headless component library but a commercial catalog of over 500 professionally designed component examples and templates built with Tailwind CSS.[^17][^18]
The offering includes hero sections, call‑to‑action sections, dashboards, navigation, forms, and other example UIs that can be copied and customized.

As inspiration, Tailwind Plus is valuable for layout, visual design, and composition ideas rather than for reusable primitives.[^17]
It shows how a small set of utility classes and design tokens (colors, radii, shadows) can be combined into many high‑level patterns, which can inform higher‑level Svelte components built on your own primitives.


## Flowbite Svelte

Flowbite Svelte is the official Flowbite component library for Svelte, providing Tailwind‑based Svelte components for alerts, badges, breadcrumbs and other UI elements with interactivity handled entirely in Svelte.[^19]
The documentation (linked from the npm page) enumerates a broad set of components similar to the React and plain‑HTML Flowbite offerings (navigation, forms, modals, dropdowns, etc.).[^19]

The main appeal of Flowbite Svelte is fast integration for Tailwind‑centric Svelte projects, with pre‑built markup and Tailwind classes encapsulated in Svelte components.[^19]
For a custom design system, it illustrates how to wrap Tailwind utility compositions into Svelte components, though it is less focused on headless primitives or theme‑agnostic theming.


## Svelte Material UI (SMUI)

Svelte Material UI (SMUI) provides Material Design components adapted for Svelte, integrating Google’s Material Design Components for Web via an “advanced approach” where the MDC foundation handles logic and the Svelte component manages DOM updates and binding.[^20]
It is styled via Sass and supports all the mixins provided by MDC‑Web, plus additional ones, making it possible to customize the look with a small set of Sass variables.[^20]

SMUI is a clear example of wrapping an existing design system (Material) in Svelte‑friendly components with full type support.[^20]
The reliance on Sass and MDC foundations means the styling model is less CSS‑variable centric than newer systems, but it shows how to bridge imperative foundations with Svelte’s declarative bindings.


## Skeleton UI (skeleton.dev, Svelte‑focused)

Skeleton UI (not to be confused with individual “skeleton loading” components in other frameworks) is a Svelte‑focused UI toolkit that combines Tailwind configuration, layout primitives, and headless builders; however, public snippets from general search do not enumerate its full component list.
Its documentation (not fully captured in the sources here) emphasizes application‑ready layouts, navigation, forms, and themable components modeled around design tokens and Tailwind presets.

For a Svelte 5 design system, Skeleton is worth inspecting directly in its docs and source code, particularly for its use of Tailwind configuration, CSS variables, and Svelte stores to implement theme switching.
Given that the available web snippets are incomplete, verifying its exact component catalog and theming hooks in the live docs would be necessary before mirroring its patterns.


## Bits UI (Svelte)

Bits UI describes itself as “headless components for Svelte – flexible, unstyled, and accessible primitives that provide the foundation for building your own high‑quality components and design systems.”[^21]
Documentation follows a builder pattern where each component (e.g., Command) is decomposed into subcomponents like Root, Input, List, Viewport and others, with ARIA and behavior handled internally while styling is completely up to the consumer.[^21]

Bits UI is an excellent direct reference for your use case: it already offers Svelte 5‑friendly headless primitives that you can either adopt or study as a pattern for building your own.[^21]
If you want to own the visual layer but reuse behavior, you can layer your themed Svelte components on top of Bits primitives; if you prefer complete control, you can still borrow its architectural ideas (context‑based composition, accessible state machines).


## Melt UI (Svelte)

Melt UI markets itself as an open‑source Svelte component library for building high‑quality, accessible design systems and web apps.[^22]
The docs expose a “builders” API similar in spirit to Headless UI or Radix primitives, with a table of contents listing primitives that map closely to common interactive components (dialogs, drawers, menus, etc.).[^22]

For Svelte 5, Melt provides a second strong approach to headless primitives, potentially overlapping with Bits UI but offering different ergonomics.[^22]
Comparing how Melt and Bits model state, events, and composability (and how they expose theming hooks) can help you choose a direction for your own primitives.


## Origin UI Svelte

Origin UI Svelte is a Svelte‑specific implementation of Origin UI components; while the search results here do not provide a clean component index, the project replicates branded marketing‑site and dashboard components using Tailwind CSS and Svelte.
It is more a set of prebuilt sections and layouts than a low‑level headless primitive library.

As inspiration, Origin UI Svelte is valuable for structure and visual composition, especially if you like the underlying design language.[^4]
For a custom Svelte design system, it is less useful as a source of primitive component architecture than headless libraries like Bits or Melt.


## Magic UI

Magic UI is a Tailwind‑based component/template collection focused on modern, animated marketing layouts, hero sections, and UI flourishes, but public snippets in this research do not expose a detailed component index.
It is closer to Tailwind Plus in spirit—precomposed page sections and patterns—than to a headless primitives library.

For a Svelte component library, Magic UI can be a source of inspiration for micro‑interactions, visual motifs, and composition of primitives into high‑impact sections.
However, its focus on React/Tailwind snippets rather than framework‑agnostic primitives means you would primarily borrow ideas rather than code.


## Ant Design (AntD)

Ant Design is an enterprise‑oriented design system and component library created by Ant Group, supporting React, Vue and Angular.[^23]
The component catalog is extensive and categorized into General (buttons, icons, typography), Data Entry (AutoComplete, Cascader, Checkbox, DatePicker, Form, Input, Mentions, Radio, Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload), Data Display (Avatar, Badge, Calendar, Card, Carousel, Collapse, Comment, Descriptions, Empty, Image, List, Popover, Segmented, Statistic, Table, Tabs, Tag, Timeline, Tooltip, Tree), Feedback (Alert, Drawer, Message, Modal, Notification, Popconfirm, Progress, Result, Skeleton, Spin) and other utilities like Anchor, BackTop and ConfigProvider.[^23]

Ant Design is notable for its rigorous design language and comprehensive patterns, making it a gold standard for consistency in large enterprise apps.[^23]
For your Svelte library, AntD is less about theming mechanics and more about pattern coverage: how many states and edge cases each component supports, and how complex combinations (e.g., forms, tables, filters) are handled.


## AgnosticUI

AgnosticUI positions itself as a framework‑agnostic UI solution where components live in your project rather than in `node_modules`, with a CLI that installs framework‑specific component source files (Vue, TSX, etc.) under `src/components/ag/`.[^24]
Internally, it uses Lit‑based Web Components and a design‑token layer, but the intended usage is that each project has its own copy of components that can be customized and read by AI tools.[^25][^24]

AgnosticUI is particularly interesting from a “components as local source” perspective: it minimizes black‑box dependencies and makes design systems more transparent.[^25]
For a Svelte 5 library, you could borrow this philosophy by providing a generator/CLI that scaffolds Svelte components and tokens into the consumer repo, rather than shipping a closed bundle.


## Open Props and Open Props UI

Open Props is a collection of CSS custom properties (variables) for colors, typography, spacing, radii, shadows and more, designed to be consumed via PostCSS or direct stylesheet imports.[^26]
Guides show how to integrate Open Props into a SvelteKit project through PostCSS JIT Props so that only used variables are included.[^26]

Open Props itself is not a component library but a token source that can underpin a theming system for any framework.[^26]
Open Props UI builds on top of these tokens to offer prebuilt UI primitives, but the research snippets here do not provide a detailed inventory; in any case, its key value for a Svelte library is demonstrating how a pure‑CSS token set can be layered under arbitrary components.


## Ark UI (multi‑framework headless library)

Ark UI is a headless UI library exposing over 45 accessible, unstyled components that work across React, Solid, Vue and Svelte.[^27]
The docs highlight a composable architecture with an `asChild` prop that lets any Ark component render as a custom element and an `ark` factory for creating custom elements that share Ark’s behavior model.[^28]

Ark UI is highly relevant because it already targets Svelte alongside other frameworks while remaining unstyled and token‑agnostic.[^27]
Its composition patterns (e.g., `asChild`, id‑sharing between Tooltip and Avatar) are excellent references for building Svelte builders and for making primitives that integrate cleanly with user‑defined elements.[^28]


## PrimeReact (and Prime* family)

PrimeReact is part of the Prime* family of design‑agnostic, flexible, accessible UI components, offering a large suite of components for forms, data display (DataTable, Tree, TreeTable), overlays, menus, charts and more.[^29]
Documentation and core bundles mention shared utilities and overlay services (ripple, portal, tooltip, virtual scroller, terminal service, overlay service) used across components like Dialog, Dropdown, Paginator and Tree.[^29]

PrimeReact is notable for its breadth and for treating behaviors like overlays and z‑index management as centralized concerns, which your own Svelte library will also need to address once you introduce dropdowns, modals and popovers.[^29]
However, its theming story is more traditional (theme CSS packages and PrimeFlex) and less aligned with modern CSS variable–driven design tokens.


## React Aria / React Aria Components

React Aria is a library from Adobe that provides low‑level hooks and components implementing ARIA patterns and behaviors; React Aria Components builds on this to provide more declarative component APIs such as Select, Button, Label, ListBox, Popover and SelectValue.[^30]
Example code shows how a Select is composed from these primitives and then wrapped into a styled Select component that still exposes full accessibility behavior.[^30]

For a Svelte design system, React Aria is a rich reference for how to separate ARIA logic from visuals and for how to expose composition points (e.g., letting users supply their own Popover implementation while still wiring ARIA correctly).[^30]
It is also a reminder that complex widgets (like Select) are better built as combinations of primitives (Button, Listbox, Popover) rather than monoliths.


## Evergreen (Segment)

Evergreen is a React UI framework focusing on enterprise‑grade applications, with polished components built on top of a UI primitive system and a design language tailored for dashboards and internal tools.[^31]
The repository emphasizes that components “work out of the box” but remain flexible and composable thanks to shared primitives.[^31]

Evergreen is instructive for thinking about how to design primitives that can serve both simple and complex use cases (e.g., tables, sidebars, panes) without over‑specialization.[^31]
Its visual style is opinionated but relatively neutral, which may be a good target for your own default theme.


## BlueprintJS Core

BlueprintJS is a React UI toolkit for the web, with `@blueprintjs/core` containing the core set of UI components and styles (buttons, dialogs, menus, tables, etc.).[^32]
The library is heavily used in data‑heavy, desktop‑like web apps and emphasizes keyboard navigation and dense information layouts.[^32]

Blueprint is a useful reference for “desktop‑like” component behaviors (multi‑pane layouts, resizable panels, complex menus) and for handling high‑information‑density environments.[^32]
However, its Sass‑driven theming model and React focus make it less directly portable to a Svelte 5 token‑based design system.


## Synthesis and Takeaways for a Svelte 5 Library

Across these libraries, several patterns stand out for building a modern, Svelte‑native design system with strong theming:

- Headless primitives (Radix Primitives, Headless UI, Ark UI, Bits UI, Melt UI, React Aria) demonstrate that behavior and accessibility should be separated from visuals, ideally exposed as composable, framework‑idiomatic constructs.[^8][^13][^28][^27][^21][^22][^30]
- Styled systems (HeroUI, Chakra UI, Mantine, Ant Design, PrimeReact, Blueprint, Evergreen) show how to cover a broad component surface area and provide sensible defaults while still exposing theming APIs.[^15][^11][^12][^23][^29][^31][^32]
- Utility‑first/Tailwind‑driven systems (shadcn/ui, daisyUI, Flowbite Svelte, Tailwind Plus, Magic UI) highlight how far a consistent token set and utility classes can go in composing real application UIs quickly.[^6][^17][^3][^19]
- Token‑centric CSS libraries (Open Props) illustrate how design tokens can be shipped independently of components and then consumed by any framework.[^26]
- CLI‑driven, “components as local source” approaches (shadcn/ui, AgnosticUI) suggest a viable delivery model for your Svelte library: generate editable Svelte components and token files directly into the consuming project.[^24][^25][^3]

Taken together, these references suggest a Svelte 5 design system architecture with: headless behavior builders inspired by Radix/Melt/Bits; a token and CSS‑variable layer inspired by Open Props and Chakra; one or more default visual themes; and an optional CLI that generates themed Svelte components into user projects, similar in spirit to shadcn/ui and AgnosticUI.

---

## References

1. [jdan/98.css: A design system for building faithful recreations of old UIs](https://github.com/jdan/98.css/) - 98.css is a CSS file that takes semantic HTML and makes it look pretty. It does not ship with any Ja...

2. [98.css - A design system for building faithful recreations of old UIs](https://jdan.github.io/98.css/) - The following components illustrate how to build complete windows using 98.css. Title Bar. At the to...

3. [Shadcnblocks shadcn/ui blocks & components](https://www.shadcnblocks.com) - Discover hundreds of extra shadcn/ui blocks and Shadcn UI components. Shadcnblocks is a premium comp...

4. [Base UI components - Base UI](https://docs.brickmmo.com/base-ui/all-components/) - Every Base UI component available so far, sorted alphabetically.

5. [Components - MUI](https://mui.com/components/) - MUI provides a simple, customizable, and accessible library of React components. Follow your own des...

6. [daisyui CDN files](https://cdn.jsdelivr.net/npm/daisyui@5.0.50/components/) - daisyui CDN by jsDelivr - A free, fast, and reliable Open Source CDN for npm and GitHub

7. [组件库 | saadeghi/daisyui](https://opendeep.wiki/saadeghi/daisyui/components) - 组件库 目录 1. 简介简介 2. 项目结构项目结构 3. 核心组件核心组件 4. 架构概览架构概览 5. 详细组件分析详细组件分析 6. 依赖关系分析依赖关系分析 7. 性能考虑性能考虑 8. 常见...

8. [Radix UI adoption guide: Overview, examples, and alternatives](https://blog.logrocket.com/radix-ui-adoption-guide/) - Radix UI is quickly rising in popularity and has become an excellent go-to solution for building mod...

9. [Building components with Radix UI | Refine](https://refine.dev/blog/radix-ui/) - This post explains with examples how the keyof operator is used to define advanced types in TypeScri...

10. [All Components | HeroUI v3 (Previously NextUI)](https://heroui.com/docs/react/components) - Explore the full list of components available in the library. More are on the way.

11. [HeroUI v3 (Previously NextUI) - Beautiful by default, customizable by ...](https://www.heroui.com) - HeroUI is the modern UI library for web and mobile, built to help you move fast, stay consistent, an...

12. [组件 - Chakra UI 组件库](https://chakra-ui.com.cn/docs/components/concepts/overview)

13. [@headlessui/react](https://www.npmjs.com/package/@headlessui/react) - A set of completely unstyled, fully accessible UI components for React, designed to integrate beauti...

14. [@mantine/core](https://www.npmjs.com/package/@mantine/core/v/3.1.3) - React components library focused on usability, accessibility and developer experience. Latest versio...

15. [Introduction to Mantine UI | Refine](https://refine.dev/blog/mantine-ui-react/) - Let's explore Mantine UI React Component Library.

16. [Quasar components - JustPy](https://justpy.io/quasar_tutorial/quasar_components/) - An object-oriented, component based, high-level Python Web Framework that requires no front-end prog...

17. [Official Tailwind UI Components & Templates - Tailwind Plus](https://tailwindcss.com/plus) - Beautiful UI components and templates by the creators of Tailwind CSS.

18. [Tailwind Plus - Official Tailwind UI Components & Templates](https://tailwindui.com) - Beautiful UI components and templates by the creators of Tailwind CSS.

19. [flowbite-svelte](https://www.npmjs.com/package/flowbite-svelte) - Flowbite components for Svelte. Latest version: 1.13.8, last published: 9 days ago. Start using flow...

20. [Svelte Material UIsveltematerialui.com](https://sveltematerialui.com) - Material UI Components for Svelte, ready to use in your app.

21. [Command - Bits UI](https://bits-ui.com/docs/components/command) - Headless components for Svelte - flexible, unstyled, and accessible primitives that provide the foun...

22. [Table Of Contents - Melt UI](https://melt-ui.com/docs/builders/table-of-contents) - An open-source Svelte component library for building high-quality, accessible design systems and web...

23. [Ant Design 101 – Introduction to a Design System for ...](https://www.uxpin.com/studio/blog/ant-design-introduction/) - What is Ant Design? Why is it great for enterprises? Discover its benefits, and check if you should ...

24. [AgnosticUI](https://www.agnosticui.com) - Local Components. The entire UI library lives in your project—no MCP setup, node_modules, or npm. Ev...

25. [Understanding AgnosticUI](https://www.agnosticui.com/docs/understand) - Components are black boxes you can't easily modify; Customization requires complex theming APIs or w...

26. [How to add Open Props to a SvelteKit application](https://www.sveltekitchen.dev/recipes/open-props) - Instructions: · Set up your SvelteKit project: · Install Open Props: · Install PostCss JIT Props: · ...

27. [Ark UI: Home](https://ark-ui.com) - A headless library with 45+ accessible components. Bring your own styles and build a design system t...

28. [Composition | Ark UI](https://ark-ui.com/react/docs/guides/composition) - In Ark UI, the asChild prop lets you integrate custom components, ensuring consistent styling and be...

29. [Getting Started - PrimeReact - PrimeFaces](https://www.primefaces.org/primereact-v8/setup/) - The ultimate collection of design-agnostic, flexible and accessible React UI Components.

30. [Getting started](https://react-aria.adobe.com/getting-started) - Install and build your first component

31. [segmentio/evergreen: Evergreen React UI Framework by Segment](https://github.com/segmentio/evergreen) - Evergreen is a React UI Framework for. Works out of the box. Evergreen contains a set of polished Re...

32. [@blueprintjs/core](https://www.npmjs.com/package/@blueprintjs/core?activeTab=dependents) - Core styles & components. Latest version: 5.19.0, last published: 19 days ago. Start using @blueprin...

