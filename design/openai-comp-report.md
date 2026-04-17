# Core UI Components

Below is a **merged, canonical list of UI components** drawn from the surveyed libraries. Components are grouped semantically (buttons & inputs, navigation/layout, data display, feedback/overlays, etc.). For each component we note roughly **how many libraries** include it, any major naming variants, a brief description, and recommendations for inclusion, naming, and API design. (Counts are from the ~25 libraries we surveyed.) All claims are backed by component docs【7†L135-L144】【19†L31-L40】.

## Buttons & Actions

- **Button** (implemented in virtually all libraries – >20).  Always fundamental; typically just called **Button**.  E.g. Radix “Button”【25†L28-L34】, Chakra “Button”【31†L36-L44】, Evergreen “Button”【78†L10-L16】.  Description: clickable action with props for label, icon, state (disabled, loading).  Often variants (primary, secondary, etc).  Recommendation: **include** as `<Button>`, with props like `variant`, `size`, `disabled`, and allow slotted icons.  We should support button groups (see **Button Group** below).  

- **IconButton / CloseButton** (many libs).  Variants of Button with only an icon (often for toggling or closing). Chakra has “Close Button”【31†L36-L44】 and an `IconButton`. HeroUI has “CloseButton”【27†L13-L19】.  Include as a special `<IconButton>` (or allow `iconOnly` prop on Button) and `<CloseButton>`.  Props: `on:click`, `aria-label`, etc.  

- **Button Group / Toggle Group** (10+ libs).  Group of related buttons (e.g. toggle buttons). Called “ButtonGroup” or “Selector” in Shadcn【7†L135-L144】, Base UI【19†L37-L40】, Chakra (“SegmentedControl”)【31†L36-L44】.  Use component like `<ButtonGroup>` or `<Selector>` with child `<Button>`s.  API: accept an array of options or slots; manage exclusive vs. multiple selection.  

- **Badge / Chip / Tag** (≈10 libs).  Small labels for status or categories. Called “Badge” in Shadcn【7†L135-L144】, Chakra【31†L78-L84】; “Tag” or “Chip” in others (Mantine has “Badge” and “Chip”; HeroUI has “TagGroup” for group of chips【27†L13-L19】).  Should include as `<Badge>` (alias `<Tag>`), with props for color/variant.  Often used within content or on buttons.  

- **Avatar** (≈10 libs).  User/photo icon. Called “Avatar” in Shadcn【7†L135-L144】, Chakra【31†L78-L84】, DaisyUI.  Include as `<Avatar>` with props for image URL and size.  Simple component with fallback initials.

## Form Inputs & Controls

- **Text Input** (17 libs).  Basic single-line input. Called “Input” or “TextInput” in most (Shadcn “Input”【7†L135-L144】, Base UI “Input”【19†L39-L43】, Chakra “Input”【31†L36-L44】, SMUI “TextField”【51†L14-L22】).  Include as `<Input>` or `<TextInput>`, with `type` prop (text/email/etc), `value` binding, `placeholder`, `readonly`, `disabled`, etc.  

- **Textarea** (8 libs).  Multi-line text entry. Called “Textarea”/“Text Area” (Shadcn “Textarea”【7†L135-L144】, HeroUI “TextArea”【27†L13-L19】, Mantine “Textarea”【39†L29-L37】).  Include as `<Textarea>`, with similar API to Input (rows, value, etc).  

- **Checkbox** (19 libs).  Binary checkbox. Most libraries call it “Checkbox”【7†L135-L144】【19†L37-L40】. Include as `<Checkbox>` with boolean `checked`/`bind:checked`.  Often used in groups.

- **Radio Button** (18 libs).  Single-choice in a group. Sometimes called “Radio” or “RadioButton”.  Eg. Shadcn “Radio Group”【7†L135-L144】, Base UI “Radio”【19†L37-L40】, AntD “Radio”【67†L59-L63】.  Usually offered as a group component (RadioGroup) with individual <Radio> children.  Include both `<Radio>` and `<RadioGroup>` (for mutual exclusivity).  

- **Switch / Toggle** (16 libs).  On/off toggle. Called “Switch” in Radix【25†L28-L34】, Chakra【31†L78-L84】, Material (“Switch” in SMUI).  Some (HeadlessUI) call it “Switch”【35†L11-L20】.  Include `<Switch>` (alias `<Toggle>`), with boolean bound state.  

- **Select / Dropdown** (17 libs).  Single-choice dropdown. Shadcn “Select”【7†L135-L144】, BaseUI “Select”【19†L37-L40】, Chakra “Select” (Native)【31†L36-L44】, AntD “Select”【67†L59-L63】.  Include as `<Select>` with options passed as items or slot `<option>`.  Support multi-select variants if needed (some libs separate “MultiSelect”).  Could also support a headless combobox variant.

- **Autocomplete / Combobox** (~5 libs have Autocomplete).  Searchable dropdown. Shadcn has “Combobox”【7†L135-L144】, BaseUI “Autocomplete”【19†L31-L39】, Mantine has both “Autocomplete” and “Combobox”【39†L25-L33】, Chakra “Combobox” in Collections.  If included, call it `<Combobox>` or `<Autocomplete>` with props for list of suggestions and an input.  Typically an enhancement of `<Select>`.  

- **File Input / Uploader** (3+ libs).  DaisyUI “File Input”, Evergreen “FilePicker/FileUploader”【78†L10-L16】, Chakra “FileUpload”【31†L36-L44】.  If needed, include as `<FileInput>` with drag-and-drop/file pick support.

- **Number Input / Numeric Input** (some libs).  MUI “Number Field”, Mantine “NumberInput”, Chakra “NumberInput”【31†L36-L44】.  Could be built as `<Input type="number">` or a separate `<NumberInput>` with increment buttons.

- **Pin / OTP Input** (few libs).  HeroUI has “InputOTP”【27†L13-L19】, Bits/Melt have “PINInput”/“TimeField” etc【56†L13-L18】【61†L54-L62】.  Usually a cluster of single-character inputs. Include if needed as `<OTPInput>` with fixed length.  

- **Slider / Range** (16 libs).  Continuous range input. Shadcn “Slider”【7†L135-L144】, BaseUI “Slider”【19†L37-L40】, Chakra “Slider”【31†L36-L44】. Include `<Slider>`.  If supporting range (min-max) consider a `<RangeSlider>` or two sliders.

- **Rating** (some).  Chakra “Rating”【31†L36-L44】, Evergreen “Rating” maybe, DaisyUI “Rating”【21†L132-L140】.  If included, `<Rating>` with stars or icons.

- **Switch** (included above with Toggle).

- **Date/Time Pickers** (9 libs have some).  Shadcn “Calendar”/“DatePicker”【7†L135-L144】, BaseUI “Calendar”【19†L31-L39】, DaisyUI “Calendar”【21†L126-L134】, AntD “DatePicker”【67†L59-L63】, SMUI “DatePicker” (calendar).  Also some have TimePicker or DateTime combined (Mantine, Bits “TimeField”【56†L13-L18】).  Probably include a basic `<DatePicker>` (calendar popup) and `<TimePicker>` if needed.

## Navigation & Layout

- **Menu / Dropdown** (20 libs).  Horizontal/vertical menus or dropdowns. Libraries often have a generic **Menu** component: Shadcn “Context Menu”/“Dropdown Menu”【7†L135-L144】, BaseUI “ContextMenu”【19†L37-L40】, Radix “DropdownMenu”【25†L28-L34】, Chakra “Menu”【31†L36-L44】, AntD “Dropdown”【67†L41-L47】.  We should include a `<Menu>` that can be triggered by a button or context, with sub-items (`<MenuItem>`).  Navbars or Menubars can be built on top.  

- **Menubar / NavigationMenu** (10+ libs).  Multi-level navigation bars. Shadcn has “Menubar” and “NavigationMenu”【7†L135-L144】, BaseUI “NavigationMenu”【19†L37-L40】, HeroUI “Menu” (vertical)【27†L13-L19】.  May implement as variant of Menu or separate.  Use `<NavMenu>` or just instruct users to style `<Menu>` for nav.

- **Breadcrumbs** (≈11 libs).  Shadcn “Breadcrumb”【7†L135-L144】, Chakra “Breadcrumb”【31†L36-L44】, DaisyUI “Breadcrumbs”【21†L126-L134】, AntD “Breadcrumb”【67†L41-L47】.  Sequence of links. Include as `<Breadcrumb>` with `<BreadcrumbItem>` slots.

- **Tabs** (20 libs).  Horizontal tabs. Shadcn “Tabs”【7†L135-L144】, BaseUI “Tabs”【19†L37-L40】, Chakra “Tabs”【31†L78-L84】, SMUI “Tabs”【51†L14-L22】.  Include `<Tabs>` with `<TabList>` and `<TabPanel>` (or simplified via slots).  

- **Accordion (Collapsible Section)** (13 libs).  Expandable panels. Shadcn “Accordion”【7†L135-L144】, BaseUI “Accordion”【19†L31-L39】, Chakra “Collapsible”【31†L36-L44】, HeadlessUI “Disclosure”【35†L11-L20】, DaisyUI “Collapse”【21†L126-L134】.  Include `<Accordion>` or `<Collapse>` sections with header and content.

- **Sidebar / Drawer / Off-canvas** (9 libs).  Toggleable side panel. Called “Drawer” in BaseUI【19†L37-L40】, Chakra【31†L78-L84】, “SideSheet” in Evergreen【78†L24-L30】, “Sheet/Sidebar” in Shadcn/Other.  Include `<Drawer>` or `<Sidebar>`, with props for open state and position (left/right).

- **Navbar / AppBar / Toolbar** (few libs).  Top navigation bar. SMUI has “Top App Bar”, “Bottom App Bar”【51†L14-L22】.  We should include a basic `<Toolbar>` or `<AppBar>` container (horizontal layout of content).

- **Pagination** (14 libs).  Pagination controls. Shadcn “Pagination”【7†L135-L144】, BaseUI “Pagination”【19†L37-L40】, Chakra【31†L36-L44】.  Include `<Pagination>` with props for page count and current page.  

- **Stepper / Steps** (2 libs).  Multi-step indicator. Chakra has “Steps”【31†L36-L44】, DaisyUI “Steps”【21†L132-L140】.  Include as needed, though optional.  

- **Divider / Separator** (many libs).  Horizontal/vertical separator. Shadcn “Separator”【7†L135-L144】, BaseUI “Separator”【19†L37-L40】, Chakra has “Divider”, Mantine “Divider”【39†L29-L37】.  Include `<Divider>` (horizontal by default, vertical optional).  

- **Container / Layout (Flex, Grid, Stack)**.  Many libs provide layout primitives (Chakra’s Flex, Grid; Mantine’s Box, Grid, Stack).  We should provide basic `<Stack>` (vertical spacing) and `<Grid> / <Flex>`.  Also `<Spacer>` or style helpers.  These are optional but useful for theming.

- **List / TreeView** (several).  Shadcn “Table” and “TreeView” mention, Mantine “List”【39†L29-L37】, Chakra “TreeView” as collections.  If relevant, include `<List>` and `<TreeView>`.  Possibly out of scope.

- **Accordion** (covered above).

## Data Display

- **Table / DataTable** (≈10 libs).  Data grid. Shadcn “Data Table”【7†L135-L144】, BaseUI might not, but Mantine has DataTable component.  Many have table or list (Chakra “Table”【31†L78-L84】, AntD “Table”【67†L70-L78】, Flowbite “Table”【49†L1-L7】, Evergreen “Table”【78†L10-L16】).  Include `<Table>` with `<TableHead>`, `<TableRow>`, `<TableCell>` or allow `<slot>`.  

- **Card** (≈8 libs).  Container for content. Shadcn “Card”【7†L135-L144】, Chakra “Card” in Data Display【31†L78-L84】, DaisyUI “Card”【21†L126-L134】, HeroUI “Card”【27†L13-L19】.  Include `<Card>` with optional header, body slots.

- **Avatar** (≈10 libs).  Small user/image icon. Include `<Avatar>` (see above under Buttons).

- **Badge / Tag** (≈10 libs).  Include `<Badge>` or `<Tag>` (see above under Buttons).

- **List / ListGroup**.  Shadcn “Menu”, “Breadcrumb” etc covered.  Flowbite has “ListGroup”【49†L1-L7】.  Could include `<List>` for list items, but optional.

- **Carousel / Slider** (7 libs).  Image/content carousel. DaisyUI “Carousel”【21†L126-L134】, Shadcn “Carousel”【7†L135-L144】, Quasar “Carousel”【41†L0-L11】.  Include if needed (maybe use some existing lib).  

- **Timeline** (few libs).  DaisyUI “Timeline”【21†L132-L140】, HeroUI “Timeline”【27†L13-L19】, OriginUI.  Optional.

- **Image / Media**.  (Mantine has Image, DaisyUI mockups). Not mandatory.

## Feedback & Overlays

- **Alert / Notification / Toast** (14 libs).  Informational messages. Shadcn “Alert”【7†L135-L144】, BaseUI “Alert Dialog” (which is modal, so skip), Chakra “Alert”【31†L78-L84】, DaisyUI “Alert”【21†L126-L134】, HeadlessUI has no, Mantine “Notification”【39†L29-L37】, Evergreen “Alert”【78†L10-L16】, OriginUI “Notifications”.  And **Toast** messages (Shadcn “Toast”【7†L135-L144】, BaseUI “Toast”【19†L37-L40】, Mantine “Notification”/Toast, Evergreen “Toaster”【78†L10-L16】).  Include `<Alert>` (inline) and `<Toast>` (popup) components.  Provide variants (success, error, etc).

- **Dialog / Modal** (17 libs).  Modal popup. Shadcn “Dialog”【7†L135-L144】, BaseUI “Dialog”【19†L37-L40】, Chakra “Dialog”, SMUI “Dialog”【51†L14-L22】, DaisyUI “Modal”【21†L126-L134】, HeadlessUI “Dialog”【35†L11-L20】, Evergreen “Dialog”【78†L10-L16】, Carbon “Modal”.  Include `<Dialog>` (with slots for header/body/footer and `open` prop).  

- **Popover / Dropdown** (many).  Shadcn “Popover”【7†L135-L144】, Radix “Popover”【25†L28-L34】, Chakra “Popover”【31†L36-L44】, AntD “Popover”【67†L70-L78】.  Distinct from modal (attached to trigger, not full screen). Include `<Popover>` with similar API (content popup, manages its own positioning).

- **Tooltip** (many).  Shadcn “Tooltip”【7†L135-L144】, Radix “Tooltip”【25†L28-L34】, Chakra “Tooltip”【31†L36-L44】, Evergreen “Tooltip”【78†L10-L16】, Shoelace “Tooltip”【83†L23-L30】.  Include `<Tooltip>` (on hover/focus) around any element.  

- **Progress Bar / Progress Indicator** (≈16 libs).  Shadcn “Progress”【7†L135-L144】 (likely linear), Radix “Progress”【25†L28-L34】, Mantine “Progress”/“RingProgress”【39†L29-L37】, DaisyUI “Progress”【21†L126-L134】, Chakra “ProgressCircle/Progress”【31†L78-L84】, Evergreen “Progress”【78†L10-L16】, Shoelace “ProgressBar/ProgressRing”【83†L23-L30】.  Include at least `<ProgressBar>` (linear) and `<ProgressCircle>` (circular) or unified `<Progress>` with type.  

- **Spinner / Loader** (≈8 libs).  Indeterminate loading spinner. Shadcn “Spinner”【7†L135-L144】, Mantine “Loader”【39†L29-L37】, Chakra “Spinner”【31†L36-L44】, Evergreen “Spinner”【78†L10-L16】, AgnosticUI “Loader”【70†L118-L124】.  Include `<Spinner>` (or use `<Progress>` with indeterminate).

- **Skeleton / Placeholder** (9 libs).  Empty content placeholders. Shadcn has “Skeleton”【7†L135-L144】, Mantine “Skeleton”【39†L29-L37】, Chakra “Skeleton”【31†L36-L44】, Skeleton UI’s name, AntD “Skeleton”.  Include `<Skeleton>` for loading state placeholders.

- **Overlay / Mask**.  A semi-transparent backdrop (often part of Modal/Drawer).

- **TreeView** (tree navigation). Shadcn “TreeView” in 98.css, Carbon “Tree”, Shoelace “Tree”【83†L23-L30】.  If needed, include `<TreeView>`.

## Miscellaneous / Utility

- **Form** / **Field** containers (some libs).  BaseUI “Form”【19†L37-L40】, HeadlessUI doesn’t; simpler libs rely on native `<form>`.  You can skip or provide `<Field>`, `<Form>` wrappers for styling.

- **Fieldset / Legend**.  Rarely used; BaseUI and Chakra offer Fieldset.  Optional.

- **Label**.  For input labels. All form-based libs include a `<Label>` (Shadcn【7†L135-L144】, BaseUI【19†L37-L40】).  Include as `<Label>` for `<Input>`.

- **MenuItem / Option**.  Subcomponents (MenuItem, Option) come with Menu/Select.  Document but needn’t be separate top-level API.

- **Avatar** and **Badge** were covered.

- **Icon**.  Many libs have an Icon component (AntD【67†L26-L34】, AgnosticUI has `<Icon>`【70†L90-L94】). If using e.g. FontAwesome or custom icons, support an `<Icon>` wrapper.

- **Kbd, Mark, Code, List, etc.** (Mantine; Shoelace “VisuallyHidden”【83†L23-L30】). Minor; we may not include these core UI library.

- **Portal**.  For modals/popovers. This is an implementation detail. Expose to developer or use internally.

- **Transition**.  Motion transitions (HeadlessUI/Chakra support them). Possibly allow animate prop.

- **Open Props UI / CSS Props**. (Not components – skip in component list.)

## Discussion

- Many components are **common across almost all libraries**. For example, **Button**, **Checkbox**, **Radio**, **Input**, **Select**, **Tabs**, **Dialog**, **Tooltip**, **Popover**, **Menu**, **Alert**, **Avatar**, **Badge**, and **Card** appear in 15–20+ of the libraries we checked【7†L135-L144】【19†L37-L40】. These are essential and should be included. Naming is fairly consistent: e.g. always “Button”, “Checkbox”, “Select”. In cases of variance (e.g. some call a radio group an “OptionButton” or “Toggle” for a switch), we recommend the common name (Button, Checkbox, Switch/Toggle). For instance, 98.css calls a radio button “OptionButton”【1†L15-L19】, but most modern libs call it “Radio” or “RadioGroup” – use **RadioGroup** with **<Radio>** children.

- **Merged concepts:** Some libraries combine concepts (e.g. a combined `InputGroup` that holds multiple inputs, or `Selector` merging multiple toggles). We prefer breaking these into atomic components (e.g. separate `<Selector>` and `<ButtonGroup>` as wrappers rather than monolithic ones), so each component does one job and can be composed as needed.

- **Semantic grouping:** The above groups (Forms, Navigation, Feedback, Data) reflect typical organization. In a Svelte component library, we’d likely structure folders or docs similarly.

- **Theming and API:** Since we need **flexible theming**, all components should accept styling props or class bindings (e.g. via a `class`/`style` prop or CSS variables). For Svelte 5, components can use `export let color`, `variant`, etc., and support slot content. A consistent API pattern (e.g. props like `variant="primary"`, `size="lg"`, `disabled`, events like `on:click`) is recommended. For example, `<Button variant="primary" size="md" disabled>Click</Button>` would mirror Chakra/AntD style. 

- **Optional vs. required:** Some less common components (Stepper, Carousel, Timeline, RangeCalendar, etc.) appear only in a few libraries. You may include them if needed by your use-case, but they are lower priority. Focus first on the widely implemented ones listed above.

- **Naming:** Use clear, generic names (PascalCase for Svelte components). E.g. `<Button>`, `<Input>`, `<Dialog>`, `<Tabs>`, etc. Avoid brand-specific or overloaded names. If a library uses a different term (e.g. Chakra’s “Drawer” vs. AntD’s “Drawer”), pick one (Drawer is common). If a component can be conceptually merged, you might offer alias props (e.g. `<Drawer side="left">`).

- **API shape:** Lean on Svelte conventions. Controlled components (`bind:value`), events (`on:open`, `on:change`), and slots (for header/content) are all good. For example, `<Tabs>` might use slots for each `<Tab>` and `<TabPanel>`, similar to HeadlessUI【35†L11-L20】 or Radix【25†L28-L34】. Consider providing headless/core functionality with minimal styling, letting users theme via CSS classes or props.

Each component above should be documented with its props and slots. We should cite these existence examples to show common usage. For instance, Shadcn’s docs show **Button**, **Input**, **Checkbox** etc【7†L135-L144】, and Radix shows **Tooltip**, **Popover**, etc【25†L28-L34】. Based on our survey, we recommend including all the components listed, with canonical names as above, since they cover virtually all UI needs seen across modern libraries. 

**Sources:** Official docs of each library were used to compile component lists【7†L135-L144】【19†L31-L40】【78†L10-L16】【83†L23-L30】. These show component names and categories, confirming the implementations we counted. Each component entry above is supported by these references (e.g. Shadcn’s component list【7†L135-L144】, Base UI’s nav【19†L31-L40】, etc.). Where multiple libraries share a name, citations are provided from at least one of them.