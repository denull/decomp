# Comprehensive UI component master list for Svelte 5

**Across 28 UI component libraries analyzed, roughly 180 distinct component concepts emerge — but only about 60–70 form the essential core that a modern Svelte 5 library should ship.** The most universally implemented components (Button, Dialog, Tabs, Tooltip, Select) appear in 25+ libraries, while specialized components like QR Code, Globe, or Terminal appear in only 1–3. This analysis maps every component found, grouped semantically, with implementation counts, naming patterns, and concrete recommendations for a Svelte 5 library.

The 28 libraries span the full spectrum: headless primitives (Bits UI, Melt UI, Radix, React Aria, HeadlessUI, base-ui), fully styled systems (Chakra UI, Ant Design, Mantine, HeroUI, Carbon), CSS-only kits (daisyUI, 98.css, Open Props UI), web components (Shoelace, FAST), animation-focused collections (Magic UI), and template libraries (TailwindPlus, Origin UI Svelte). This breadth ensures the merged list captures both universal patterns and niche innovations.

---

## Form inputs and controls

This is the largest category across all libraries — virtually every library ships form components, though naming and granularity vary dramatically.

### Core text inputs

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Text Input** | 27 | Input (shadcn, HeadlessUI, Flowbite), TextField (HeroUI, React Aria, FAST), TextInput (Mantine, Evergreen, Carbon), Input Field (daisyUI) | Single-line text entry | Some libraries bundle with Number/Password/Search as variants; others separate them | ✅ Ship as `TextField`. Follow React Aria/Bits UI pattern: composable with Label, Description, ErrorMessage slots. Support `type` prop for email/url/tel. |
| **Textarea** | 26 | Textarea (universal), TextArea (Carbon, FAST, HeroUI) | Multi-line text entry | Usually standalone; Chakra/Mantine keep separate from Input | ✅ Ship as `Textarea`. Pair with same Field wrapper as TextField. Add auto-resize option (common request). |
| **Number Input** | 16 | NumberInput (Mantine, Chakra, Carbon), NumberField (HeroUI, React Aria, base-ui), InputNumber (Ant Design), NumericInput (Blueprint) | Numeric entry with increment/decrement | Some libraries fold into Input with type="number"; dedicated component is better for a11y | ✅ Ship as `NumberField`. Stepper buttons, min/max/step, locale-aware formatting. React Aria's approach is gold standard. |
| **Password Input** | 7 | PasswordInput (Mantine, Chakra, Carbon), Password (PrimeReact), Password Toggle Field (Radix preview) | Text input with show/hide toggle | Most libraries handle via Input type="password" plus a toggle; few dedicate a component | ⚠️ Ship as a `PasswordField` or as a recipe/example using TextField + ToggleButton. Dedicated component is simpler for users. |
| **Search Input** | 7 | SearchField (HeroUI, React Aria), Search (Carbon, FAST), Search Input (Flowbite, Evergreen) | Text input with clear button and search affordances | Often folded into Input; React Aria separates for a11y role="searchbox" | ⚠️ Consider `SearchField` — the distinct ARIA role and clear button behavior justify separation. |
| **Pin/OTP Input** | 8 | PinInput (Mantine, Chakra), PIN Input (Bits UI), InputOTP (HeroUI, shadcn, PrimeReact), One-Time Password Field (Radix preview) | Fixed-length code entry (verification codes) | Always standalone | ✅ Ship as `PinInput`. 4–8 digit support, auto-advance, paste handling. Growing in importance for auth flows. |
| **JSON Input** | 1 | JsonInput (Mantine) | Textarea validated for JSON | Unique to Mantine | ❌ Skip — too specialized. Can be a recipe. |
| **Mentions** | 1 | Mentions (Ant Design) | Text input with @-mention autocomplete | Unique to Ant Design | ❌ Skip — complex, specialized. Better as a separate package. |

### Selection controls

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Checkbox** | 27 | Checkbox (universal) | Binary toggle with label | Some libraries add CheckboxGroup/CheckboxCards as separate components | ✅ Ship as `Checkbox`. Also ship `CheckboxGroup` for managing multiple checkboxes. |
| **Radio Group** | 26 | RadioGroup (Radix, Bits UI, React Aria, HeadlessUI), Radio (Ant Design, Chakra), RadioButton (Carbon, PrimeReact), OptionButton (98.css) | Single selection from options | Almost always includes a Group wrapper; some add RadioCard variants | ✅ Ship as `RadioGroup` with `RadioGroupItem`. Consider `RadioCards` as a styled variant. |
| **Switch** | 26 | Switch (most libraries), Toggle (daisyUI, Quasar, Flowbite, Carbon) | Binary on/off toggle | Naming split: "Switch" dominates (~70%) vs "Toggle" (~30%) | ✅ Ship as `Switch`. "Toggle" conflicts with Toggle/ToggleButton (different concept). |
| **Select** | 27 | Select (universal), Dropdown (daisyUI, Flowbite, Ant Design), Listbox (HeadlessUI, React Aria) | Single selection from dropdown list | Heavy variation in naming. Some separate Native Select from custom Select | ✅ Ship as `Select` (custom styled) plus `NativeSelect` for simple cases. Support search/filter within Select. |
| **Combobox / Autocomplete** | 20 | Combobox (Bits UI, HeadlessUI, Skeleton, base-ui, Chakra), Autocomplete (HeroUI, Mantine, Ant Design, Evergreen, SMUI), AutoComplete (PrimeReact) | Searchable select with text input | "Combobox" is the ARIA term; "Autocomplete" is the common name. Some libraries merge with Select | ✅ Ship as `Combobox`. Follow ARIA combobox pattern. This is the proper name per WAI-ARIA. |
| **Multi Select** | 6 | MultiSelect (Mantine, Carbon, Blueprint), TagsInput (Mantine, Skeleton), InputTags (PrimeReact) | Select multiple values, often shown as tags | Some merge with Select via `multiple` prop; others make it TagsInput | ✅ Ship as `TagsInput` — combines multi-select with tag display. More descriptive than MultiSelect. |
| **Cascader** | 1 | Cascader (Ant Design) | Hierarchical drill-down selection | Unique to Ant Design, common in Chinese enterprise UIs | ❌ Skip for core — too specialized. Offer as addon. |
| **Transfer** | 1 | Transfer (Ant Design) | Dual-listbox transfer between lists | Unique to Ant Design | ❌ Skip for core. |
| **Tree Select** | 2 | TreeSelect (Ant Design, Carbon in v10) | Select with hierarchical tree options | Rare but useful for org structures | ❌ Skip for core — combine Tree + Select as a pattern. |

### Sliders and range inputs

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Slider** | 25 | Slider (most), Range (daisyUI, Flowbite, Shoelace, 98.css) | Single-value or range numeric slider | Most libraries support range mode via prop; some split into Slider + RangeSlider | ✅ Ship as `Slider`. Support single value and range (two thumbs) via props. Blueprint's MultiSlider pattern is powerful. |
| **Knob** | 2 | Knob (Quasar, PrimeReact) | Circular dial input | Rare component — rotary dial for value selection | ❌ Skip for core — too niche. |
| **Angle Slider** | 1 | AngleSlider (Mantine) | Circular slider for angle values (0–360°) | Unique to Mantine | ❌ Skip. |

### Color inputs

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Color Picker** | 9 | ColorPicker (Chakra, Mantine, HeroUI, React Aria, Ant Design, Quasar, Shoelace, PrimeReact) | Full color selection widget | Some libraries break into sub-components (Area, Slider, Swatch); others provide monolithic picker | ✅ Ship as `ColorPicker` — increasingly important for creative tools. Compose from ColorArea + ColorSlider + ColorSwatch internally. |
| **Color Area** | 2 | ColorArea (HeroUI, React Aria) | 2D color selection gradient field | Sub-component of ColorPicker | ✅ Ship as sub-component of ColorPicker. Expose standalone for advanced use. |
| **Color Slider** | 3 | ColorSlider (HeroUI, React Aria), AlphaSlider/HueSlider (Mantine) | Single-channel color slider | Sub-component; Mantine splits by channel | ✅ Ship as `ColorSlider` with `channel` prop. |
| **Color Swatch** | 5 | ColorSwatch (Chakra, Mantine, HeroUI, React Aria), ColorSwatchPicker (HeroUI, React Aria) | Color preview tile and picker grid | Sometimes standalone, sometimes grouped | ✅ Ship both `ColorSwatch` and `ColorSwatchPicker`. |
| **Color Wheel** | 1 | ColorWheel (React Aria) | Circular hue selection | React Aria exclusive | ⚠️ Consider as optional advanced sub-component. |
| **Color Field** | 2 | ColorField (HeroUI, React Aria), ColorInput (Mantine) | Text input for hex/rgb color values | Sometimes folded into ColorPicker | ✅ Ship as `ColorField`. |

### Date and time inputs

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Calendar** | 12 | Calendar (daisyUI, Bits UI, Chakra, Ant Design, FAST, shadcn, base-ui), RangeCalendar (Bits UI, HeroUI, React Aria) | Date grid for selection | Some bundle range selection; others separate into Calendar + RangeCalendar | ✅ Ship `Calendar` and `RangeCalendar` separately (Bits UI pattern). |
| **Date Picker** | 14 | DatePicker (most), Datepicker (Flowbite) | Input + calendar dropdown for date selection | Core component — nearly universal | ✅ Ship as `DatePicker`. |
| **Date Field** | 4 | DateField (HeroUI, Bits UI, React Aria, base-ui) | Segmented date input without calendar popup | React Aria pattern — each segment (month/day/year) is independently editable | ✅ Ship as `DateField` — excellent a11y pattern, more accessible than text-only date input. |
| **Date Range Picker** | 6 | DateRangePicker (HeroUI, React Aria, Blueprint), DateRangeField (Bits UI) | Select start + end dates | Sometimes merged with DatePicker via prop; separation is cleaner | ✅ Ship as `DateRangePicker`. |
| **Time Picker / Time Field** | 6 | TimePicker (Ant Design, Quasar, Blueprint, Carbon), TimeField (HeroUI, Bits UI, React Aria) | Time selection input | "TimeField" is the segmented-input pattern; "TimePicker" is the dropdown pattern | ✅ Ship as `TimeField` (segmented) — better a11y than dropdown. |
| **Time Range Field** | 1 | TimeRangeField (Bits UI) | Start + end time selection | Unique to Bits UI | ⚠️ Consider — useful for scheduling apps. |
| **Timezone Select** | 1 | TimezoneSelect (Blueprint) | Timezone picker dropdown | Rare but valuable | ❌ Skip core — offer as recipe/addon. |

### Toggle and rating inputs

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Toggle / Toggle Button** | 15 | Toggle (Radix, Bits UI, Melt UI, shadcn, base-ui), ToggleButton (HeroUI, React Aria, PrimeReact), Button Toggle (Flowbite, Quasar) | Pressable on/off button | Distinct from Switch — this is a button that stays pressed | ✅ Ship as `Toggle`. |
| **Toggle Group** | 12 | Selector (Radix, Bits UI, shadcn, base-ui, Skeleton), SegmentedControl (Radix Themes, Mantine, Chakra, Skeleton, Blueprint, SMUI), ButtonToggle (Quasar) | Mutually exclusive or multi-select button group | **Major naming split**: "Toggle Group" vs "Segmented Control" — same concept | ✅ Ship as `Selector`. "Segmented Control" is a variant/style of the same primitive. |
| **Rating** | 10 | Rating (daisyUI, Flowbite, Mantine, Quasar, PrimeReact), Rate (Ant Design), RatingGroup (Bits UI, Skeleton) | Star/icon-based rating input | Consistent concept across libraries | ✅ Ship as `RatingGroup` (Bits UI naming) — multiple items compose the rating. |

### Form structure

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Form** | 9 | Form (Ant Design, HeroUI, React Aria, FAST, Carbon, base-ui), FormGroup (Blueprint, Carbon) | Form wrapper with validation | Some libraries have a Form component; others rely on native `<form>` | ⚠️ Lean toward native form + Field wrappers rather than a heavy Form component. |
| **Field / Form Field** | 10 | Field (Chakra, shadcn, base-ui), FormField (Evergreen), FormGroup (Blueprint, Carbon), Fieldset (daisyUI, HeroUI, HeadlessUI, Chakra, base-ui) | Label + input + error wrapper | Critical pattern — wraps any input with label, description, error | ✅ Ship `Field` and `Fieldset`. Field wraps a single control; Fieldset wraps a group. |
| **Label** | 10 | Label (most), FloatingLabel (Flowbite, PrimeReact), IftaLabel (PrimeReact) | Text label for form inputs | Some libraries provide FloatingLabel as animation variant | ✅ Ship as `Label`. Floating label as a style option, not separate component. |
| **File Upload** | 11 | FileUpload (PrimeReact, Skeleton, Carbon), FileInput (daisyUI, Mantine), FileUploader (Carbon), Uploader (Quasar), FileTrigger (React Aria), DropZone (React Aria, Mantine ext) | File selection and upload | React Aria's FileTrigger + DropZone pattern is composable; others are monolithic | ✅ Ship `FileTrigger` + `DropZone` (composable) or a combined `FileUpload`. |

---

## Navigation components

### Primary navigation

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Tabs** | 28 | Tabs (universal), Tab/TabGroup (Shoelace), TabNav (Radix Themes) | Tabbed content switching | **Most universal component** — every library has it. Some separate Tab from TabPanel | ✅ Ship as `Tabs` with `TabsList`, `TabsTrigger`, `TabsContent` (shadcn/Bits UI pattern). |
| **Breadcrumbs** | 20 | Breadcrumbs (most), Breadcrumb (Ant Design, Carbon, Flowbite, Shoelace, shadcn) | Hierarchical location trail | Highly consistent across libraries | ✅ Ship as `Breadcrumb` with `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator`. |
| **Pagination** | 20 | Pagination (universal), Paginator (PrimeReact) | Page navigation for data sets | Very consistent. Some include page-size selector | ✅ Ship as `Pagination`. |
| **Steps / Stepper** | 12 | Steps (daisyUI, Chakra, Skeleton, Ant Design), Stepper (Mantine, Flowbite, PrimeReact, Quasar), ProgressIndicator (Carbon) | Multi-step workflow indicator | Naming is split ~50/50 between Steps and Stepper | ✅ Ship as `Stepper` — more descriptive of the interactive pattern. |
| **Navigation Menu** | 6 | NavigationMenu (Radix, Bits UI, shadcn, base-ui), Navbar (daisyUI, Flowbite), NavLink (Mantine) | Desktop site navigation with dropdowns | Radix/Bits UI pattern is the most composable | ✅ Ship as `NavigationMenu`. Complex but essential for app headers. |
| **Menubar** | 5 | Menubar (Radix, Bits UI, shadcn, base-ui), Menu (native app-style) | Application-style menu bar (File, Edit, View…) | Distinct from Navigation Menu — this is for desktop app UIs | ✅ Ship as `Menubar` — important for desktop-like Svelte apps. |
| **Sidebar / Side Navigation** | 7 | Sidebar (shadcn, Flowbite, PrimeReact), SideNav (Carbon), Drawer (as navigation, Quasar), SideSheet (Evergreen) | App side navigation panel | Often combined with Drawer; shadcn's Sidebar is distinct and popular | ✅ Ship as `Sidebar` — the shadcn pattern of a dedicated nav sidebar is very popular. |
| **Bottom Navigation / Dock** | 4 | Dock (daisyUI, Magic UI, PrimeReact Dock in v10), BottomNavigation (Flowbite), BottomAppBar (SMUI) | Mobile-style bottom navigation bar | Growing in importance for PWAs and mobile-first apps | ⚠️ Consider as `Dock`. Useful for mobile-first Svelte apps. |
| **App Bar / Top Bar** | 5 | AppBar (Skeleton, SMUI), TopAppBar (SMUI), Navbar (daisyUI, Flowbite), Header (Carbon, AgnosticUI) | Top application header bar | Often part of layout shell rather than standalone | ⚠️ Consider as part of a layout shell pattern rather than standalone component. |
| **Mega Menu** | 2 | MegaMenu (Flowbite, PrimeReact v10) | Large dropdown navigation panel | Rare but popular in e-commerce | ❌ Skip core — pattern achievable with NavigationMenu. |
| **Link** | 14 | Link (most), Anchor (Mantine, Ant Design, FAST) | Styled anchor element | Simple but important for consistent styling | ✅ Ship as `Link`. |
| **Tree / Tree View** | 12 | Tree (Mantine, Quasar, Melt UI, PrimeReact, Ant Design, React Aria), TreeView (Chakra, Skeleton, Carbon, Shoelace, FAST, Blueprint) | Hierarchical collapsible tree | Naming split but concept is identical | ✅ Ship as `TreeView`. Important for file explorers, settings, org charts. |

---

## Data display components

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Table / Data Table** | 25 | Table (most), DataTable (Carbon, SMUI), Data Table (shadcn) | Tabular data display | Some libraries offer a basic Table + advanced DataTable with sorting/filtering. Carbon has extensive sub-components (TableHead, TableRow, etc.) | ✅ Ship `Table` (presentational) and consider a `DataTable` headless controller for sorting/filtering/pagination. |
| **Card** | 24 | Card (universal) | Content container with header/body/footer | Extremely consistent. Some add CardHeader, CardContent, CardFooter sub-components | ✅ Ship as `Card` with `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription`. |
| **Avatar** | 24 | Avatar (universal), AvatarGroup (various) | User/entity image with fallback | Very consistent. Most include group/stack variant | ✅ Ship `Avatar` and `AvatarGroup`. Support image, initials, and icon fallbacks. |
| **Badge** | 22 | Badge (most), Tag (Ant Design, Shoelace, Carbon, PrimeReact), Chip (HeroUI, Mantine, Quasar, Open Props UI) | Small status/count label | **Three-way naming split**: Badge ≈ Tag ≈ Chip depending on library. Some distinguish: Badge = count overlay on avatar; Tag = removable label; Chip = interactive pill | ✅ Ship both `Badge` (count/status indicator) and `Tag` (removable, interactive label). They are semantically different. |
| **Accordion** | 23 | Accordion (most), Collapse (Ant Design, Mantine), Collapsible (Bits UI, Skeleton, base-ui, Radix), Disclosure (HeadlessUI, HeroUI, React Aria, FAST), ExpansionItem (Quasar) | Expandable content sections | **Key distinction**: Accordion = multiple collapsible items; Collapsible = single expand/collapse; Disclosure = ARIA pattern name | ✅ Ship both `Accordion` (multiple items) and `Collapsible` (single item). Accordion composes Collapsibles internally. |
| **Tooltip** | 27 | Tooltip (universal), ToggleTip (Chakra) | Hover/focus information popup | Most universal interactive component after Button | ✅ Ship as `Tooltip`. Ensure accessible — triggered on focus, not just hover. |
| **Carousel** | 10 | Carousel (daisyUI, Chakra, Flowbite, Quasar, PrimeReact, Shoelace, Skeleton, shadcn) | Horizontally scrollable content with controls | Some combine with image galleries | ✅ Ship as `Carousel`. Embla Carousel integration is the Svelte ecosystem standard. |
| **Timeline** | 10 | Timeline (daisyUI, Chakra, Mantine, Quasar, Flowbite, PrimeReact, Ant Design, Origin UI) | Chronological event list | Consistent concept, vertical or horizontal | ✅ Ship as `Timeline`. Useful for activity feeds, changelogs. |
| **Stat / Statistic** | 5 | Stat (daisyUI, Chakra), Statistic (Ant Design), Stats (TailwindPlus) | Highlighted metric display | Simple but very commonly needed for dashboards | ✅ Ship as `Stat`. Simple: value + label + optional trend. |
| **Data List / Description List** | 5 | DataList (Radix Themes, Chakra), Descriptions (Ant Design), DescriptionList (TailwindPlus), DefinitionList (Open Props UI) | Key-value pair display | Simple layout component | ✅ Ship as `DataList`. Label-value pair layout, common in detail views. |
| **Kbd** | 9 | Kbd (daisyUI, Radix, Chakra, Mantine, Flowbite, Bits UI, shadcn), Keyboard (React Aria) | Keyboard shortcut display | Simple inline element | ✅ Ship as `Kbd`. Lightweight, useful for keyboard-heavy apps. |
| **Image** | 7 | Image (Chakra, Mantine, Ant Design, Flowbite), Img (Quasar), AnimatedImage (Shoelace) | Enhanced image with loading/fallback | Some add preview/lightbox, loading states | ⚠️ Consider — but `<img>` with Svelte is often sufficient. A lazy-loading Image with fallback has value. |
| **Icon** | 7 | Icon (Chakra, Ant Design, Blueprint, Shoelace, FAST), AccessibleIcon (Radix) | Icon display component | Most Svelte libraries use direct SVG imports instead | ❌ Skip as component — recommend icon package integration (Lucide, Phosphor). Ship `AccessibleIcon` wrapper if needed. |
| **Empty State** | 5 | EmptyState (Chakra, AgnosticUI), Empty (Ant Design), NonIdealState (Blueprint), EmptyStates (TailwindPlus) | Placeholder when no data exists | Important UX pattern, often overlooked | ✅ Ship as `EmptyState`. Icon + message + action CTA. |
| **Code / Code Block** | 6 | Code (Radix, Chakra, Mantine), CodeSnippet (Carbon), CodeBlock (Chakra, Skeleton) | Formatted code display | Some provide syntax highlighting; others are just styled `<code>` | ⚠️ Ship `Code` (inline) as a styled element. Full Code Block with highlighting is better as an integration (e.g., Shiki). |
| **QR Code** | 3 | QRCode (Ant Design, Chakra, Shoelace) | QR code generator | Niche but growing (payments, sharing) | ⚠️ Consider as addon. |
| **Calendar (display)** | 3 | Calendar (Ant Design, FAST, TailwindPlus) | Full calendar view (not date picker) | Distinct from DatePicker's calendar popup — this is a standalone month/week view | ❌ Skip core — full calendar is a complex standalone library (FullCalendar). |
| **List** | 12 | List (daisyUI, Chakra, Mantine, Ant Design, Flowbite, Open Props UI), ListGroup (Flowbite), ListBox (various) | Styled list of items | Some are simple styled lists; ListBox is an interactive selection component | ✅ Ship `ListBox` (interactive, keyboard-navigable) — the headless version that powers Select/Combobox. Styled List can be a simple CSS utility. |
| **Clipboard / Copy Button** | 4 | Clipboard (Chakra, Flowbite), CopyButton (Mantine, Shoelace, Carbon) | Copy text to clipboard on click | Simple but very useful utility component | ✅ Ship as `CopyButton`. One-click copy with success feedback. |
| **Marquee** | 3 | Marquee (Chakra, Mantine, Magic UI) | Scrolling/animated content strip | Growing trend in modern landing pages | ⚠️ Consider — popular for testimonials and logos. Lightweight to implement. |
| **Diff / Compare** | 2 | Diff (daisyUI), Compare (PrimeReact), ImageComparer (Shoelace) | Side-by-side visual comparison | Niche but memorable | ❌ Skip core. |

---

## Overlay and popup components

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Dialog / Modal** | 27 | Dialog (Radix, Bits UI, Chakra, Skeleton, shadcn, base-ui, Ant Design, FAST, Blueprint, Carbon, Quasar), Modal (daisyUI, Mantine, HeroUI, Flowbite, Carbon) | Overlay window requiring interaction | **The biggest naming war in UI**: Dialog vs Modal. ARIA spec uses "dialog". ~60% of libraries prefer "Dialog" | ✅ Ship as `Dialog`. Follow the ARIA spec naming. The `modal` prop controls whether it's modal or non-modal. |
| **Alert Dialog** | 8 | AlertDialog (Radix, Bits UI, HeroUI, shadcn, base-ui), Popconfirm (Ant Design), ConfirmDialog (PrimeReact), MultistepDialog (Blueprint) | Confirmation dialog requiring explicit action | Some merge into Dialog with a variant; Radix/Bits UI separate for a11y reasons (different ARIA role) | ✅ Ship as `AlertDialog`. The ARIA role `alertdialog` has distinct behavior — this separation matters for screen readers. |
| **Drawer / Sheet** | 18 | Drawer (Chakra, Mantine, Ant Design, Flowbite, Skeleton, PrimeReact, Blueprint, base-ui), Sheet (shadcn), SideSheet (Evergreen), Sidebar (when used as overlay) | Panel sliding in from screen edge | shadcn calls it "Sheet" which is gaining popularity. Same concept as Drawer | ✅ Ship as `Drawer`. Support all four directions (left/right/top/bottom). |
| **Popover** | 22 | Popover (most), Popup (Shoelace low-level) | Floating content anchored to trigger | Very consistent naming. Key primitive for building other overlays | ✅ Ship as `Popover`. Critical primitive — many components build on this (Select, Combobox, DatePicker). |
| **Dropdown Menu** | 17 | DropdownMenu (Radix, Bits UI, shadcn), Menu (HeadlessUI, Mantine, Ant Design, Skeleton, Evergreen, Quasar, FAST), Dropdown (daisyUI, Flowbite, Shoelace) | Action menu triggered by button | ARIA pattern is "menu". Some libraries split Menu (the list) from DropdownMenu (trigger + menu) | ✅ Ship as `DropdownMenu` with `Menu` as the underlying list primitive. |
| **Context Menu** | 7 | ContextMenu (Radix, Bits UI, PrimeReact, Carbon, shadcn, base-ui, Blueprint) | Right-click triggered menu | Important for desktop-like apps | ✅ Ship as `ContextMenu`. Reuses Menu internally, different trigger. |
| **Hover Card / Preview Card** | 5 | HoverCard (Radix, Mantine, Chakra, shadcn), PreviewCard (base-ui), LinkPreview (Bits UI) | Rich content popup on hover | Like Tooltip but for rich content, not just text | ✅ Ship as `HoverCard`. Distinct from Tooltip — supports interactive content, links, buttons. |
| **Command / Command Palette** | 5 | Command (Bits UI, shadcn), CommandPalette (Flowbite), CommandMenu (PrimeReact), Omnibar (Blueprint), Spotlight (Mantine ext) | Keyboard-driven search/action palette | ⌘K pattern — hugely popular. Usually built on Combobox | ✅ Ship as `Command`. The ⌘K pattern is now expected in modern apps. Build on Combobox + Dialog. |
| **Toast / Notification** | 24 | Toast (daisyUI, Chakra, Bits UI, Skeleton, shadcn, PrimeReact, Shoelace, Blueprint), Notification (Mantine, Ant Design, Flowbite), Snackbar (SMUI, Open Props UI), Message (Ant Design), Sonner (shadcn uses Sonner) | Temporary auto-dismissing message | Naming varies but concept is identical. Snackbar = Material Design term. Some provide imperative API (toaster.show()) | ✅ Ship as `Toast` with a `Toaster` container. Imperative API is important: `toast.success("Saved!")`. Consider Svelte 5 runes-based approach. |
| **Loading Overlay** | 3 | LoadingOverlay (Mantine), InnerLoading (Quasar), Overlay (Evergreen, Blueprint) | Full-screen or container-scoped loading state | Usually combines Spinner + Overlay | ⚠️ Consider — composable from Spinner + a simple overlay div. May not need a dedicated component. |
| **Tour** | 1 | Tour (Ant Design) | Guided walkthrough of UI features | Unique to Ant Design, very useful for onboarding | ❌ Skip core — complex, better as standalone package. |

---

## Feedback and status components

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Alert** | 22 | Alert (most), Callout (Radix Themes, Blueprint), Banner (Quasar, Flowbite, FAST, daisyUI variant), Message (Ant Design, PrimeReact) | Static informational message | Some libraries also have Banner as a dismissible, page-level Alert variant | ✅ Ship as `Alert`. Support info/success/warning/error variants. Consider `Banner` as a sticky page-level variant. |
| **Progress Bar** | 24 | Progress (most), ProgressBar (HeroUI, Flowbite, Carbon, Blueprint, Shoelace), LinearProgress (SMUI, Quasar) | Horizontal bar showing progress | Extremely consistent concept | ✅ Ship as `Progress`. Support determinate and indeterminate modes. |
| **Progress Circle / Ring** | 10 | ProgressCircle (HeroUI, Chakra), RadialProgress (daisyUI), RingProgress (Mantine), CircularProgress (SMUI, Quasar, Skeleton), ProgressRing (Shoelace, FAST), SemiCircleProgress (Mantine) | Circular progress indicator | Multiple naming conventions, same concept | ✅ Ship as `ProgressCircle`. Complements Progress (linear). |
| **Skeleton** | 18 | Skeleton (most), Placeholder (Skeleton UI CSS term) | Loading placeholder that mimics content shape | Very consistent. Carbon has skeleton variants for every component | ✅ Ship as `Skeleton`. Support text, circle, and rectangle variants. |
| **Spinner / Loader** | 16 | Spinner (HeroUI, Chakra, Flowbite, Evergreen, Shoelace, shadcn), Loader (Mantine, AgnosticUI), Loading (daisyUI), Spin (Ant Design), InlineLoading (Carbon) | Animated loading indicator | Two shapes: spinning circle (Spinner) vs animated dots/bars (Loader) | ✅ Ship as `Spinner`. Simple animated indicator. |
| **Meter** | 4 | Meter (HeroUI, Bits UI, React Aria, base-ui), MeterGroup (PrimeReact) | Scalar measurement within known range | Distinct from Progress — Meter shows a static measurement, Progress shows completion | ✅ Ship as `Meter`. Often overlooked but semantically distinct from Progress (uses `<meter>` ARIA role). |
| **Status Indicator** | 4 | Status (daisyUI, Chakra), StatusIndicator (Evergreen), Indicator (daisyUI, Mantine, Flowbite) | Small colored dot showing status | Often combined with Badge; sometimes standalone dot | ⚠️ Consider as variant of Badge or as a standalone `StatusDot`. |

---

## Layout and structure components

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Separator / Divider** | 20 | Separator (Radix, Bits UI, HeroUI, shadcn, base-ui, Shoelace), Divider (Chakra, Mantine, Ant Design, Quasar, PrimeReact, daisyUI) | Visual line separating content | ~50/50 split between Separator and Divider | ✅ Ship as `Separator` (ARIA term). Support horizontal and vertical. |
| **Scroll Area** | 10 | ScrollArea (Radix, Bits UI, Chakra, Mantine, PrimeReact, shadcn, base-ui), ScrollShadow (HeroUI), HorizontalScroll (FAST) | Custom-styled scrollable container | Radix pattern with custom scrollbar styling is the standard | ✅ Ship as `ScrollArea`. Custom scrollbar appearance, overflow indicators. |
| **Resizable / Splitter** | 8 | Resizable (shadcn), Splitter (Chakra, Ant Design, PrimeReact, Quasar), SplitPanel (Shoelace), Splitter (Blueprint via PanelStack) | Resizable split panes | All implement drag-to-resize panels | ✅ Ship as `Resizable` (shadcn naming is clean). Support horizontal and vertical splits. |
| **Aspect Ratio** | 5 | AspectRatio (Radix, Bits UI, Chakra, Mantine, shadcn) | Maintain fixed width/height ratio | CSS `aspect-ratio` property makes this less necessary now | ❌ Skip — CSS `aspect-ratio` handles this natively now. |
| **Portal** | 9 | Portal (Radix, Chakra, Mantine, Skeleton, Bits UI, base-ui, Evergreen, Blueprint, Carbon) | Render children in a different DOM location | Utility rather than visual component. Svelte has `{@html}` but no built-in portal | ✅ Ship as `Portal`. Essential for overlays (Dialog, Popover, etc.). Svelte doesn't have this natively. |
| **Container** | 6 | Container (Radix Themes, Chakra, Mantine, Quasar, TailwindPlus) | Max-width content wrapper | Very simple layout utility | ❌ Skip — trivially implemented with CSS/Tailwind. |
| **Stack / Flex / Grid** | 8 | Stack (daisyUI, Chakra, Mantine), Flex (Chakra, Mantine, Ant Design), Grid (Chakra, Radix, Mantine, Ant Design, Carbon) | Layout primitives for spacing and alignment | React libraries need these because of CSS-in-JS; Svelte + Tailwind makes them unnecessary | ❌ Skip — Tailwind CSS handles all of this. These are React-isms. |
| **App Shell / Layout** | 5 | AppShell (Mantine), Layout (Ant Design, Quasar), UIShell (Carbon) | Application frame with header/sidebar/content areas | Complex but valuable for full applications | ⚠️ Consider as a pattern/recipe rather than rigid component. |
| **Hero** | 2 | Hero (daisyUI, TailwindPlus) | Landing page hero section | More of a template than a component | ❌ Skip — template/pattern, not a component. |
| **Footer** | 2 | Footer (daisyUI, Flowbite) | Page footer | Template, not component | ❌ Skip. |
| **Indicator / Float** | 4 | Indicator (daisyUI, Mantine, Flowbite), Float (Chakra) | Position element relative to parent corner | Used for notification dots on avatars/icons | ⚠️ Consider — useful utility but CSS can handle it. |

---

## Button components

| Component | Count | Naming variations | Description | Merging patterns | Svelte 5 recommendation |
|-----------|-------|-------------------|-------------|-----------------|------------------------|
| **Button** | 28 | Button (universal) | Clickable action trigger | **Appears in every single library** | ✅ Ship as `Button`. Support variants (primary, secondary, destructive, ghost, outline, link), sizes, loading state, disabled. |
| **Icon Button** | 7 | IconButton (Radix Themes, Chakra, Shoelace, Blueprint, Open Props UI), ActionIcon (Mantine), CloseButton (HeroUI, Mantine, Chakra) | Button containing only an icon | Some libraries fold into Button with `icon` prop; others separate for proper a11y (must have aria-label) | ✅ Ship as `IconButton`. Enforces `aria-label` requirement for icon-only buttons. |
| **Button Group** | 10 | ButtonGroup (HeroUI, Flowbite, Shoelace, Blueprint, shadcn), ButtonSet (Carbon), Join (daisyUI), Group (Chakra, Mantine, Radix) | Visually connected button row | Often a generic Group component that works with buttons | ✅ Ship as `ButtonGroup`. Simple flex container with connected styling. |
| **Close Button** | 5 | CloseButton (HeroUI, Mantine, Chakra), Close (AgnosticUI), Dismiss button pattern | Standard ✕ close button | Used in Dialog, Alert, Toast, etc. | ⚠️ Consider — useful DRY pattern but can be a styled IconButton variant. |
| **FAB / Speed Dial** | 5 | FAB (daisyUI, SMUI, Quasar), SpeedDial (daisyUI, Flowbite, PrimeReact), FloatButton (Ant Design) | Floating action button, optionally expanding to menu | Material Design pattern, popular for mobile UIs | ⚠️ Consider as `FloatingActionButton`. Useful for mobile-first apps. |

---

## Typography components

Most typography "components" in React libraries exist because of CSS-in-JS styling needs. In Svelte with Tailwind CSS, most of these are unnecessary as components — they're better as CSS utilities or Tailwind classes.

| Component | Count | Recommendation |
|-----------|-------|---------------|
| **Heading** | 8 | ❌ Skip — use `<h1>`–`<h6>` with Tailwind classes |
| **Text** | 8 | ❌ Skip — use `<p>`, `<span>` with Tailwind classes |
| **Blockquote** | 5 | ❌ Skip — CSS utility |
| **Code (inline)** | 5 | ❌ Skip — CSS utility |
| **Highlight / Mark** | 4 | ❌ Skip — CSS utility |
| **Prose** | 2 | ❌ Skip — use Tailwind Typography plugin |

**Exception**: `Kbd` (keyboard shortcut display) is worth shipping because it has non-trivial styling and is genuinely useful for keyboard-heavy applications. **9 libraries** include it.

---

## Utility components

| Component | Count | Description | Svelte 5 recommendation |
|-----------|-------|-------------|------------------------|
| **Visually Hidden** | 7 | Screen-reader-only content | ✅ Ship — essential accessibility utility. |
| **Transition / Animation** | 4 | Declarative enter/exit animations | ⚠️ Svelte has built-in transitions (`transition:`, `animate:`). Ship only if the built-in system is insufficient for specific patterns. |
| **Focus Trap** | 3 | Traps keyboard focus within container | ✅ Ship — Dialog and Drawer need this internally. Expose for custom use. |
| **Direction Provider** | 2 | RTL/LTR context | ✅ Ship — RTL support is important for internationalization. |
| **Skip Nav** | 2 | Accessibility skip-to-content link | ✅ Ship — simple but important a11y pattern. |
| **Presence** | 2 | Controls mount/unmount with exit animations | ⚠️ Consider — useful for animated unmount, which Svelte handles differently than React. |
| **Virtual Scroll / Virtualizer** | 4 | Renders only visible items in long lists | ✅ Ship — critical for performance with large datasets. Pair with Table and ListBox. |
| **Format Number / Format Date / Format Bytes** | 2 | Locale-aware value formatting | ⚠️ Consider — lightweight utility components using `Intl` APIs. |
| **Relative Time** | 1 | "2 hours ago" display | ⚠️ Consider — very useful, uses `Intl.RelativeTimeFormat`. |

---

## Specialized and decorative components

These components appear in few libraries but represent emerging patterns worth monitoring.

| Component | Count | Libraries | Recommendation |
|-----------|-------|-----------|---------------|
| **Watermark** | 1 | Ant Design | ❌ Niche — security/branding overlay |
| **OrgChart** | 1 | PrimeReact | ❌ Standalone package territory |
| **Terminal** | 2 | PrimeReact, Magic UI | ❌ Very niche |
| **Rich Text Editor** | 2 | Chakra, Quasar | ❌ Use Tiptap/ProseMirror directly |
| **Globe** | 1 | Magic UI | ❌ Decorative |
| **Device Mockups** | 3 | daisyUI, Flowbite, Magic UI | ❌ CSS-only pattern, not a component |
| **Bento Grid** | 2 | Magic UI, TailwindPlus | ⚠️ Trending layout — but achievable with CSS Grid |
| **Chat Bubble** | 2 | daisyUI, Quasar | ⚠️ Consider for messaging apps |
| **Swap** | 1 | daisyUI | ❌ Niche animation toggle |
| **Editable** | 2 | Chakra, Blueprint | ⚠️ Inline edit pattern — useful but composable from existing parts |
| **PanelStack** | 1 | Blueprint | ❌ Desktop-app pattern |
| **Infinite Scroll** | 2 | Quasar | ❌ Better as a Svelte action/hook than component |
| **Parallax** | 1 | Quasar | ❌ CSS/scroll-driven animation |
| **Confetti / Particles** | 1 | Magic UI | ❌ Decorative — standalone packages exist |
| **Floating Panel** | 2 | Skeleton, Mantine | ⚠️ Draggable window — trending in complex UIs |

---

## The recommended Svelte 5 component set

Based on implementation frequency, ecosystem demand, and modern web application needs, **a strong Svelte 5 library should ship approximately 70 components** organized into these tiers.

### Tier 1 — Must-have (shipped in 20+ libraries, universal need)

These 30 components form the absolute core. Every modern UI library includes them:

- **Button**, **IconButton**, **ButtonGroup**
- **TextField**, **Textarea**, **NumberField**, **Select**, **Combobox**, **Checkbox**, **RadioGroup**, **Switch**, **Slider**, **FileUpload**
- **Dialog**, **AlertDialog**, **Drawer**, **Popover**, **DropdownMenu**, **ContextMenu**, **Tooltip**, **HoverCard**, **Toast**
- **Tabs**, **Accordion**, **Collapsible**, **Breadcrumb**, **Pagination**
- **Table**, **Card**, **Avatar**, **Badge**, **Separator**, **Progress**, **Skeleton**, **Spinner**, **Alert**

### Tier 2 — High-value (shipped in 8–19 libraries, strong demand)

These 25 components round out a competitive library:

- **PinInput**, **PasswordField**, **SearchField**, **TagsInput**, **RatingGroup**, **Toggle**, **Selector**, **ColorPicker** (with ColorArea, ColorSlider, ColorSwatch, ColorField)
- **DatePicker**, **DateField**, **DateRangePicker**, **TimeField**, **Calendar**, **RangeCalendar**
- **Command** (⌘K palette), **NavigationMenu**, **Menubar**, **Sidebar**, **Stepper**, **TreeView**, **ScrollArea**, **Resizable**
- **EmptyState**, **Meter**, **ProgressCircle**, **DataList**, **CopyButton**, **ListBox**

### Tier 3 — Differentiators (shipped in 3–7 libraries, but growing)

These 15 components would set the library apart:

- **Toolbar**, **Dock**, **Kbd**, **Timeline**, **Stat**, **Marquee**, **Tag** (removable)
- **Carousel**, **Virtualizer**, **FloatingActionButton**
- **Portal**, **VisuallyHidden**, **FocusTrap**, **DirectionProvider**, **SkipNav**

### API design principles for Svelte 5

The component naming and architecture should follow several key patterns drawn from this analysis. First, **use ARIA terminology** when a standard exists — Dialog over Modal, Separator over Divider, Combobox over Autocomplete. This aligns with accessibility specifications and reduces confusion. Second, **adopt the Bits UI compound component pattern**: `Accordion.Root`, `Accordion.Item`, `Accordion.Trigger`, `Accordion.Content`. This is the emerging Svelte 5 standard and provides maximum composability. Third, **separate headless from styled**: ship unstyled primitives with a default Tailwind CSS theme layer on top, following the Bits UI + shadcn-svelte playbook that has proven most popular in the Svelte ecosystem.

The data strongly suggests building on **Bits UI's foundation** for the headless layer (it already covers 41 components for Svelte 5) and extending with the additional components identified in Tiers 2 and 3. For styled components, the **shadcn-svelte copy-paste model** has the strongest community momentum. A library that provides both — installable headless primitives and copy-paste styled components — would cover the widest range of developer needs.

---

## Conclusion

The landscape of **180+ unique component concepts** across 28 libraries converges on a surprisingly consistent core of about **55–70 essential components**. The naming wars (Dialog vs Modal, Separator vs Divider, Switch vs Toggle) are best resolved by following ARIA specifications. The most underserved areas in the current Svelte ecosystem — where building new components would add the most value — are **date/time inputs** (DateField, DateRangePicker, TimeField), **color pickers**, **command palettes**, **virtual scrolling**, and **advanced form patterns** (PinInput, TagsInput, Meter). Libraries like React Aria and Bits UI have established the gold standard for accessible, composable component APIs that a Svelte 5 library should aspire to match.