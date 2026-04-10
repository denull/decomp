# Svelte 5 Personal Component Library: Component Architecture Report

## Design Philosophy Summary

This library follows these principles:
- **Merge similar components** into single components with variant props
- **CSS class-based theming** — no Tailwind, components add semantic classes (`button`, `input`, `table`), themes provide styles
- **ARIA roles via props** — one component can serve multiple accessibility patterns via variant configuration
- **Minimize component count** — fewer imports, fewer things to style per theme, graceful fallbacks to defaults

---

## Component Inventory

### Form Controls

#### 1. Button

**Merges:** Button, IconButton, CloseButton, FAB, ToggleButton, CopyButton

**Implementation across libraries:** 28/28 (universal)

**What it does:** A clickable action trigger with multiple behavioral modes — standard click, toggle (pressed/unpressed state), copy-to-clipboard, and positioning variants (floating action button, close button).

**Naming in other libraries:**
- Button (universal)
- IconButton (Radix Themes, Chakra, Blueprint)
- ActionIcon (Mantine)
- CloseButton (HeroUI, Chakra)
- FAB/FloatButton (SMUI, Quasar, Ant Design)
- Toggle (Radix, Bits UI) — note: this is ToggleButton, not Switch
- CopyButton (Mantine, Shoelace)

**Merging patterns observed:** Most libraries keep IconButton separate (for enforced `aria-label`). FAB is usually just a styled/positioned Button. ToggleButton is sometimes separate due to `aria-pressed` state. CopyButton is almost always separate due to clipboard logic and success feedback.

**Recommended API:**

```svelte
<Button
  variant="primary|secondary|ghost|outline|destructive|link"
  size="sm|md|lg"
  icon={IconComponent}        // If only icon, becomes icon-only button
  iconPosition="left|right"
  toggle={false}              // Enables pressed/unpressed state
  pressed={false}             // Controlled toggle state (bindable)
  copy="text to copy"         // Enables copy-to-clipboard mode
  floating={false}            // FAB positioning
  loading={false}
  disabled={false}
  type="button|submit|reset"
>
  Label
</Button>

<!-- Icon-only (auto-detects from missing children) -->
<Button icon={XIcon} aria-label="Close" />

<!-- Toggle mode -->
<Button toggle bind:pressed={isBold} icon={BoldIcon} aria-label="Bold" />

<!-- Copy mode -->
<Button copy={codeSnippet} icon={CopyIcon}>Copy code</Button>
```

**CSS classes emitted:** `button`, `button--primary`, `button--icon-only`, `button--toggle`, `button--pressed`, `button--floating`, `button--loading`

**Implementation notes:**
- When `toggle={true}`, manage `aria-pressed` attribute
- When `copy` is provided, use Clipboard API and emit `oncopy` event; consider brief visual feedback state
- When only `icon` is provided with no children, enforce `aria-label` requirement (warn in dev mode)
- FAB is purely CSS positioning — the `floating` prop adds a class, theme handles fixed positioning

---

#### 2. SegmentedControl

**Merges:** ToggleGroup, SegmentedControl, ButtonToggle

**Implementation across libraries:** 12/28

**What it does:** A group of mutually exclusive (or multi-select) options presented as connected buttons. Used for view switchers, filter modes, format toggles.

**Naming in other libraries:**
- ToggleGroup (Radix, Bits UI, shadcn, base-ui, Skeleton)
- SegmentedControl (Radix Themes, Mantine, Chakra, Blueprint, SMUI)
- ButtonToggle (Quasar)
- Tabs (when used for non-panel-switching selection)

**Merging patterns observed:** Some libraries treat this as ToggleGroup (multiple selection allowed) vs SegmentedControl (single selection). The distinction is a prop, not separate components.

**Recommended API:**

```svelte
<SegmentedControl
  type="single|multiple"
  value={selectedValue}        // string for single, string[] for multiple
  onchange={(value) => {}}
  size="sm|md|lg"
  disabled={false}
>
  <SegmentedControl.Item value="grid" icon={GridIcon}>Grid</SegmentedControl.Item>
  <SegmentedControl.Item value="list" icon={ListIcon}>List</SegmentedControl.Item>
  <SegmentedControl.Item value="table">Table</SegmentedControl.Item>
</SegmentedControl>
```

**CSS classes emitted:** `segmented-control`, `segmented-control__item`, `segmented-control__item--selected`

**Implementation notes:**
- For `type="single"`, use `role="radiogroup"` with `role="radio"` on items
- For `type="multiple"`, use `role="group"` with `aria-pressed` on items
- Support keyboard navigation (arrow keys to move, Enter/Space to select)

---

#### 3. Input

**Merges:** TextField, Textarea, NumberInput, PasswordInput, SearchInput, Select, Combobox, Autocomplete, MultiSelect, and potentially DatePicker, TimePicker, ColorField, RichTextEditor

**Implementation across libraries:** 27/28 for text inputs; 20/28 for Combobox; 14/28 for DatePicker

**What it does:** A unified input component that handles all text-entry and selection-based inputs. The `type` prop determines behavior, internal logic, and popup type.

**Naming in other libraries:**
- Input/TextField (universal)
- Textarea (universal)
- NumberInput/NumberField (Mantine, HeroUI, React Aria, Blueprint)
- Select/Dropdown/Listbox (universal)
- Combobox/Autocomplete (HeroUI, Mantine, HeadlessUI, Chakra)
- DatePicker/DateField (most libraries)
- ColorInput/ColorField (Mantine, HeroUI, React Aria)

**This is your most ambitious merge.** I recommend thinking of it as sub-families:

| Sub-family | Types | Popup behavior |
|------------|-------|----------------|
| **Plain text** | text, email, url, tel, textarea, password, search | None (or clear button) |
| **Numeric** | number, currency | None (steppers as accessories) |
| **Selection** | select, combobox, multiselect | Dropdown list |
| **Date/Time** | date, daterange, time, timerange, datetime | Calendar/time picker popup |
| **Color** | color | Color picker popup |
| **Rich** | richtext | Toolbar + contenteditable |

**Recommended API:**

```svelte
<Input
  type="text|email|url|tel|textarea|password|search|number|currency|select|combobox|multiselect|date|daterange|time|timerange|datetime|color|richtext"
  value={...}                  // string, number, Date, array depending on type
  
  <!-- Text options -->
  multiline={false}            // Alternative to type="textarea"
  rows={3}                     // For multiline
  autoResize={false}           // Grow with content
  
  <!-- Password options -->
  showPassword={false}         // Reveal toggle (bindable)
  
  <!-- Number options -->
  min={0}
  max={100}
  step={1}
  stepper="none|buttons|arrows|drag"
  
  <!-- Currency options -->
  currency="USD"
  locale="en-US"
  
  <!-- Select/Combobox options -->
  options={[{value, label, disabled?, group?}]}
  searchable={false}           // Enables combobox behavior
  creatable={false}            // Allow creating new options
  multiple={false}             // MultiSelect mode
  
  <!-- Date/Time options -->
  minDate={Date}
  maxDate={Date}
  disabledDates={[Date]}
  
  <!-- Accessories -->
  prefix="$"                   // Text prefix inside input
  suffix="kg"                  // Text suffix inside input
  leadingIcon={SearchIcon}
  trailingIcon={CalendarIcon}
  trailingButton={{icon, onclick, label}}  // For clear, reveal password, etc.
  
  <!-- State -->
  placeholder=""
  disabled={false}
  readonly={false}
  required={false}
  invalid={false}
  
  <!-- Events -->
  onchange
  oninput
  onfocus
  onblur
/>
```

**For form structure, consider a Field wrapper:**

```svelte
<Field label="Email" description="We'll never share your email" error={errors.email}>
  <Input type="email" bind:value={email} />
</Field>
```

**CSS classes emitted:** `input`, `input--textarea`, `input--select`, `input--combobox`, `input--number`, `input--date`, `input--invalid`, `input--disabled`, `input--focused`, `input__prefix`, `input__suffix`, `input__accessory`

**Implementation notes:**
- This is a facade component — internally it may delegate to specialized sub-components
- Selection types need Popover integration for dropdowns
- Date types need Calendar integration
- Consider lazy-loading complex sub-types (richtext, date pickers) to reduce bundle size
- Keyboard navigation varies by type — implement WAI-ARIA patterns for each

**Alternative approach:** If this becomes unwieldy, split into 3 components:
- `Input` — plain text types (text, email, number, password, search, textarea)
- `Select` — selection types (select, combobox, multiselect)
- `DateInput` — temporal types (date, time, datetime, ranges)

---

#### 4. PinInput (non-core)

**Implementation across libraries:** 8/28

**What it does:** Fixed-length segmented input for verification codes (OTP, 2FA). Each digit/character gets its own box.

**Naming in other libraries:** PinInput (Mantine, Chakra), InputOTP (HeroUI, shadcn, PrimeReact), PIN Input (Bits UI)

**Recommended API:**

```svelte
<PinInput
  length={6}
  value=""
  type="numeric|alphanumeric"
  mask={false}                 // Show dots instead of characters
  otp={true}                   // Enables autocomplete="one-time-code"
  oncomplete={(value) => {}}
  disabled={false}
/>
```

**Implementation notes:**
- Auto-advance cursor on input
- Handle paste of full code
- Backspace moves to previous field

---

#### 5. Checkbox

**Merges:** Checkbox, Radio

**Implementation across libraries:** 27/28

**What it does:** A toggleable selection control. As checkbox: independent on/off. As radio: single selection within a group.

**Naming in other libraries:** Checkbox (universal), Radio/RadioGroup (universal), OptionButton (98.css)

**Recommended API:**

```svelte
<!-- Checkbox mode -->
<Checkbox
  checked={false}
  indeterminate={false}
  disabled={false}
  value="terms"                // For form submission
>
  I agree to the terms
</Checkbox>

<!-- Radio mode (must be within Group) -->
<Group name="plan" bind:value={selectedPlan}>
  <Checkbox type="radio" value="free">Free</Checkbox>
  <Checkbox type="radio" value="pro">Pro</Checkbox>
  <Checkbox type="radio" value="enterprise">Enterprise</Checkbox>
</Group>
```

**CSS classes emitted:** `checkbox`, `checkbox--radio`, `checkbox--checked`, `checkbox--indeterminate`, `checkbox--disabled`

**Implementation notes:**
- `type="checkbox"` (default): `role="checkbox"`, `aria-checked`
- `type="radio"`: `role="radio"`, must be child of Group with `role="radiogroup"`
- Visual styling (checkmark vs dot) is handled by CSS based on `checkbox--radio` class

---

#### 6. Switch

**Implementation across libraries:** 26/28

**What it does:** A binary toggle with a sliding thumb. Semantically equivalent to checkbox but visually distinct — implies immediate effect rather than form submission.

**My recommendation:** Keep separate from Checkbox. The interaction paradigm is different (sliding motion), and users have strong expectations about when to use each. The logic is simple enough that a separate component isn't burdensome.

**Naming in other libraries:** Switch (most), Toggle (daisyUI, Quasar, Flowbite, Carbon)

**Recommended API:**

```svelte
<Switch
  checked={false}
  disabled={false}
  size="sm|md|lg"
>
  Enable notifications
</Switch>
```

**CSS classes emitted:** `switch`, `switch--checked`, `switch--disabled`, `switch__track`, `switch__thumb`

---

#### 7. Group

**Implementation across libraries:** 10/28 (as RadioGroup); broader as generic Group

**What it does:** Wraps multiple related form controls (primarily radios) to manage shared state and accessibility.

**Recommended API:**

```svelte
<Group
  name="subscription"          // Form field name
  value={selectedValue}        // Bindable
  orientation="vertical|horizontal"
  disabled={false}
>
  <Checkbox type="radio" value="monthly">Monthly</Checkbox>
  <Checkbox type="radio" value="yearly">Yearly</Checkbox>
</Group>
```

**CSS classes emitted:** `group`, `group--horizontal`, `group--vertical`

**Implementation notes:**
- Provides `role="radiogroup"` or `role="group"` depending on content
- Manages `name` attribute for form submission
- Provides context for child Checkbox components

---

#### 8. Transfer (non-core)

**Implementation across libraries:** 1/28 (Ant Design)

**What it does:** Dual-listbox pattern for moving items between two lists. Common in permission/role assignment interfaces.

**Recommended API:**

```svelte
<Transfer
  sourceItems={[{value, label}]}
  targetItems={[]}
  onchange={({source, target}) => {}}
  searchable={false}
  titles={["Available", "Selected"]}
/>
```

---

#### 9. Slider

**Merges:** Slider, RangeSlider, Knob, AngleSlider, ColorSlider, ColorWheel

**Implementation across libraries:** 25/28 for basic Slider

**What it does:** Select a value (or range) by dragging along a track. Variants change the geometry (linear, circular, color-channel).

**Naming in other libraries:** Slider/Range (most), Knob (Quasar, PrimeReact), AngleSlider (Mantine), ColorSlider/ColorWheel (React Aria)

**Recommended API:**

```svelte
<Slider
  variant="linear|knob|angle|color"
  
  <!-- Value handling -->
  value={50}                   // number or [min, max] for range
  range={false}                // Enables two thumbs
  min={0}
  max={100}
  step={1}
  
  <!-- Linear variant -->
  orientation="horizontal|vertical"
  
  <!-- Knob/Angle variant -->
  angleMin={0}                 // For angle: starting angle
  angleMax={360}               // For angle: ending angle
  
  <!-- Color variant -->
  channel="hue|saturation|lightness|alpha|red|green|blue"
  colorValue={{h, s, l, a}}    // Current color context
  
  <!-- Appearance -->
  showValue={false}            // Display current value
  showTicks={false}
  tickInterval={10}
  marks={[{value, label}]}     // Named positions
  
  disabled={false}
/>
```

**CSS classes emitted:** `slider`, `slider--linear`, `slider--knob`, `slider--angle`, `slider--color`, `slider--range`, `slider--vertical`, `slider__track`, `slider__thumb`, `slider__mark`

**Implementation notes:**
- Linear: standard `<input type="range">` enhanced with custom styling
- Knob/Angle: circular track, rotational dragging
- Color: gradient track based on channel, updates in real-time as color changes
- Range: two thumbs, ensure min thumb can't exceed max thumb

---

#### 10. ColorPicker

**Merges:** ColorPicker, ColorArea, ColorSwatchPicker

**Implementation across libraries:** 9/28

**What it does:** Full color selection interface with 2D gradient area, channel sliders, swatches, and text input.

**Recommended API:**

```svelte
<ColorPicker
  value="#ff5500"              // Accepts hex, rgb(), hsl()
  format="hex|rgb|hsl"         // Output format
  alpha={true}                 // Include alpha channel
  swatches={["#ff0000", "#00ff00", "#0000ff"]}
  showInput={true}             // Show text input for manual entry
/>

<!-- Or as composed parts for custom layouts -->
<ColorPicker.Area {value} onchange={...} />
<ColorPicker.Slider channel="hue" {value} onchange={...} />
<ColorPicker.Slider channel="alpha" {value} onchange={...} />
<ColorPicker.Swatches {swatches} onselect={...} />
<ColorPicker.Input {value} {format} onchange={...} />
```

**CSS classes emitted:** `color-picker`, `color-picker__area`, `color-picker__slider`, `color-picker__swatch`, `color-picker__input`

---

#### 11. Calendar

**Implementation across libraries:** 12/28

**What it does:** Standalone month grid for date selection. Used within DatePicker but also useful standalone for scheduling interfaces.

**Recommended API:**

```svelte
<Calendar
  value={selectedDate}         // Date or [startDate, endDate] for range
  range={false}
  min={Date}
  max={Date}
  disabledDates={[Date]}
  disabledDaysOfWeek={[0, 6]}  // Disable weekends
  firstDayOfWeek={1}           // 0=Sunday, 1=Monday
  locale="en-US"
  onchange
/>
```

**CSS classes emitted:** `calendar`, `calendar__header`, `calendar__grid`, `calendar__day`, `calendar__day--selected`, `calendar__day--today`, `calendar__day--disabled`, `calendar__day--range-start`, `calendar__day--range-end`, `calendar__day--in-range`

---

#### 12. FileUpload

**Implementation across libraries:** 11/28

**What it does:** File selection via click or drag-and-drop, with preview and upload progress.

**Naming in other libraries:** FileUpload (PrimeReact, Carbon), FileInput (daisyUI, Mantine), DropZone (React Aria, Mantine)

**Recommended API:**

```svelte
<FileUpload
  accept="image/*,.pdf"
  multiple={false}
  maxSize={5 * 1024 * 1024}    // 5MB
  maxFiles={10}
  files={[]}                   // Bindable - array of File objects
  
  <!-- Drag and drop -->
  dropzone={true}
  
  <!-- Preview -->
  showPreview={true}
  
  <!-- Upload handling -->
  upload={async (file) => {    // Optional: auto-upload function
    const url = await uploadToServer(file);
    return url;
  }}
  
  onchange
  onerror
  onprogress
/>
```

**CSS classes emitted:** `file-upload`, `file-upload--dragging`, `file-upload__dropzone`, `file-upload__preview`, `file-upload__progress`

---

### Navigation

#### 13. Tabs

**Implementation across libraries:** 28/28 (universal)

**What it does:** Switch between content panels. Each tab is associated with a panel.

**My recommendation on Dock/BottomNav merge:** Keep separate. Tabs switch content panels in-place (aria-tablist pattern). Dock/BottomNav typically navigates to different routes (navigation pattern with links). The ARIA semantics differ significantly.

**Recommended API:**

```svelte
<Tabs
  value={activeTab}
  orientation="horizontal|vertical"
  variant="default|pills|underline"
  onchange
>
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
    <Tabs.Trigger value="settings" disabled>Settings</Tabs.Trigger>
  </Tabs.List>
  
  <Tabs.Content value="overview">...</Tabs.Content>
  <Tabs.Content value="analytics">...</Tabs.Content>
  <Tabs.Content value="settings">...</Tabs.Content>
</Tabs>
```

**CSS classes emitted:** `tabs`, `tabs--vertical`, `tabs--pills`, `tabs__list`, `tabs__trigger`, `tabs__trigger--active`, `tabs__content`

**Implementation notes:**
- Arrow key navigation between tabs
- `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Lazy-load panel content option for performance

---

#### 14. Breadcrumbs

**Implementation across libraries:** 20/28

**What it does:** Hierarchical navigation trail showing current location in site structure.

**Recommended API:**

```svelte
<Breadcrumbs separator="/">
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
  <Breadcrumbs.Item current>Widget Pro</Breadcrumbs.Item>
</Breadcrumbs>

<!-- Or with custom separator -->
<Breadcrumbs separator={ChevronIcon}>...</Breadcrumbs>
```

**CSS classes emitted:** `breadcrumbs`, `breadcrumbs__item`, `breadcrumbs__item--current`, `breadcrumbs__separator`

---

#### 15. Pagination

**Implementation across libraries:** 20/28

**What it does:** Navigate through pages of data with page numbers, prev/next buttons, and optional page size selector.

**Recommended API:**

```svelte
<Pagination
  page={1}
  totalPages={10}
  <!-- Or calculate from items -->
  totalItems={247}
  pageSize={25}
  pageSizes={[10, 25, 50, 100]}
  
  siblings={1}                 // Pages shown on each side of current
  boundaries={1}               // Pages shown at start/end
  
  showFirst={true}
  showLast={true}
  showPageSize={false}
  
  onchange
/>
```

**CSS classes emitted:** `pagination`, `pagination__item`, `pagination__item--active`, `pagination__item--disabled`, `pagination__ellipsis`, `pagination__page-size`

---

#### 16. Menu

**Merges:** NavigationMenu, Menubar, MegaMenu

**Implementation across libraries:** 6/28 for NavigationMenu, 5/28 for Menubar

**What it does:** Site/application navigation with dropdown submenus. Menubar style for desktop apps (File, Edit, View), NavigationMenu style for website headers.

**Recommended API:**

```svelte
<Menu variant="navigation|menubar">
  <Menu.Item>
    <Menu.Trigger>Products</Menu.Trigger>
    <Menu.Content>
      <Menu.Item href="/products/widgets">Widgets</Menu.Item>
      <Menu.Item href="/products/gadgets">Gadgets</Menu.Item>
      <Menu.Separator />
      <Menu.Item href="/products/all">View All</Menu.Item>
    </Menu.Content>
  </Menu.Item>
  
  <Menu.Item href="/pricing">Pricing</Menu.Item>
  
  <Menu.Item>
    <Menu.Trigger>Resources</Menu.Trigger>
    <Menu.Content mega>  <!-- Mega menu variant -->
      <Menu.Group label="Learn">
        <Menu.Item href="/docs">Documentation</Menu.Item>
        <Menu.Item href="/tutorials">Tutorials</Menu.Item>
      </Menu.Group>
      <Menu.Group label="Community">
        <Menu.Item href="/blog">Blog</Menu.Item>
        <Menu.Item href="/forum">Forum</Menu.Item>
      </Menu.Group>
    </Menu.Content>
  </Menu.Item>
</Menu>
```

**CSS classes emitted:** `menu`, `menu--menubar`, `menu--navigation`, `menu__item`, `menu__trigger`, `menu__content`, `menu__content--mega`, `menu__group`, `menu__separator`

**Implementation notes:**
- Menubar uses `role="menubar"` with `role="menuitem"` and keyboard navigation (arrows, escape)
- NavigationMenu is more link-focused, may use simpler accessibility pattern
- Mega menu is a styling variant of Menu.Content with multi-column layout

---

#### 17. Tree

**Implementation across libraries:** 12/28

**What it does:** Hierarchical collapsible tree structure for file explorers, settings, org charts.

**Naming in other libraries:** Tree (Mantine, Ant Design, Quasar), TreeView (Chakra, Skeleton, Carbon, Blueprint)

**Recommended API:**

```svelte
<Tree
  items={[
    {
      id: "1",
      label: "Documents",
      icon: FolderIcon,
      children: [
        { id: "1.1", label: "Resume.pdf", icon: FileIcon },
        { id: "1.2", label: "Cover Letter.docx", icon: FileIcon }
      ]
    }
  ]}
  selected={selectedIds}       // Bindable, string[]
  expanded={expandedIds}       // Bindable, string[]
  selectionMode="none|single|multiple"
  onselect
  onexpand
/>

<!-- Or render-prop style for custom items -->
<Tree {items} let:item let:level let:expanded>
  <Tree.Item>
    {#if item.children}
      <Tree.Branch>
        <svelte:component this={item.icon} />
        {item.label}
      </Tree.Branch>
    {:else}
      <Tree.Leaf>
        <svelte:component this={item.icon} />
        {item.label}
      </Tree.Leaf>
    {/if}
  </Tree.Item>
</Tree>
```

**CSS classes emitted:** `tree`, `tree__item`, `tree__branch`, `tree__leaf`, `tree__item--selected`, `tree__item--expanded`, `tree__indent`

---

#### 18. Stepper (suggested addition)

**Implementation across libraries:** 12/28

**What it does:** Multi-step workflow indicator showing progress through a sequence (checkout, onboarding, forms).

**Naming in other libraries:** Steps (daisyUI, Chakra, Ant Design), Stepper (Mantine, Flowbite, PrimeReact), ProgressIndicator (Carbon)

**Recommended API:**

```svelte
<Stepper
  currentStep={2}
  orientation="horizontal|vertical"
  variant="default|dots|progress"
>
  <Stepper.Step title="Cart" description="Review items" />
  <Stepper.Step title="Shipping" description="Enter address" />
  <Stepper.Step title="Payment" description="Add payment method" />
  <Stepper.Step title="Confirm" description="Place order" />
</Stepper>
```

**CSS classes emitted:** `stepper`, `stepper--vertical`, `stepper__step`, `stepper__step--completed`, `stepper__step--current`, `stepper__step--upcoming`, `stepper__connector`

---

### Layout

#### 19. AppShell

**Implementation across libraries:** 5/28

**What it does:** Application frame with designated areas for header, sidebar, main content, and footer.

**Naming in other libraries:** AppShell (Mantine), Layout (Ant Design, Quasar), UIShell (Carbon)

**Recommended API:**

```svelte
<AppShell
  sidebarCollapsed={false}
  sidebarPosition="left|right"
  sidebarWidth="250px"
  headerHeight="60px"
>
  <AppShell.Header>
    <Logo />
    <Menu />
  </AppShell.Header>
  
  <AppShell.Sidebar>
    <Navigation />
  </AppShell.Sidebar>
  
  <AppShell.Main>
    <slot />
  </AppShell.Main>
  
  <AppShell.Footer>
    © 2024
  </AppShell.Footer>
</AppShell>
```

**CSS classes emitted:** `app-shell`, `app-shell__header`, `app-shell__sidebar`, `app-shell__sidebar--collapsed`, `app-shell__main`, `app-shell__footer`

---

### Data Display

#### 20. Table

**Implementation across libraries:** 25/28

**What it does:** Tabular data display with optional sorting, filtering, pagination, and row selection.

**Recommended API:**

```svelte
<!-- Simple declarative -->
<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head sortable sortDirection="asc">Name</Table.Head>
      <Table.Head sortable>Email</Table.Head>
      <Table.Head>Role</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each users as user}
      <Table.Row>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.role}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table>

<!-- Data-driven with column definitions -->
<Table
  data={users}
  columns={[
    { key: "name", header: "Name", sortable: true },
    { key: "email", header: "Email", sortable: true },
    { key: "role", header: "Role" }
  ]}
  sortable
  selectable
  pagination={{ page: 1, pageSize: 10, total: 100 }}
  onrowclick
  onsort
  onselect
/>
```

**CSS classes emitted:** `table`, `table__header`, `table__body`, `table__row`, `table__row--selected`, `table__head`, `table__head--sortable`, `table__head--sorted-asc`, `table__head--sorted-desc`, `table__cell`

---

#### 21. Card

**Merges:** Card, Stat

**Implementation across libraries:** 24/28 for Card, 5/28 for Stat

**What it does:** Content container with optional header, body, footer. Stat variant highlights a metric.

**Recommended API:**

```svelte
<!-- Standard card -->
<Card>
  <Card.Header>
    <Card.Title>Monthly Revenue</Card.Title>
    <Card.Description>January 2024</Card.Description>
  </Card.Header>
  <Card.Content>
    Chart or content here
  </Card.Content>
  <Card.Footer>
    <Button>View Details</Button>
  </Card.Footer>
</Card>

<!-- Stat variant -->
<Card variant="stat">
  <Card.StatValue>$45,231</Card.StatValue>
  <Card.StatLabel>Total Revenue</Card.StatLabel>
  <Card.StatTrend direction="up" value="12%">vs last month</Card.StatTrend>
</Card>
```

**CSS classes emitted:** `card`, `card--stat`, `card__header`, `card__title`, `card__description`, `card__content`, `card__footer`, `card__stat-value`, `card__stat-label`, `card__stat-trend`, `card__stat-trend--up`, `card__stat-trend--down`

---

#### 22. Image

**Merges:** Image, Avatar

**Implementation across libraries:** 7/28 for Image, 24/28 for Avatar

**What it does:** Enhanced image display with lazy loading, fallbacks. Avatar mode adds initials fallback and group stacking.

**My revised recommendation:** This merge is reasonable. Avatar is essentially Image with a specific fallback cascade (image → initials → default icon) and circular styling.

**Recommended API:**

```svelte
<!-- Standard image -->
<Image
  src="/photo.jpg"
  alt="Description"
  width={400}
  height={300}
  loading="lazy|eager"
  fallback="/placeholder.jpg"
  objectFit="cover|contain|fill"
/>

<!-- Avatar mode -->
<Image
  variant="avatar"
  src={user.avatarUrl}
  alt={user.name}
  initials={getInitials(user.name)}   // Fallback if image fails
  size="xs|sm|md|lg|xl"
  status="online|offline|away|busy"   // Optional status indicator
/>

<!-- Avatar group -->
<Image.Group max={3} size="md">
  {#each users as user}
    <Image variant="avatar" src={user.avatar} alt={user.name} />
  {/each}
</Image.Group>
```

**CSS classes emitted:** `image`, `image--avatar`, `image--loading`, `image__fallback`, `image__initials`, `image__status`, `image-group`, `image-group__overflow`

**Note on Icons:** I recommend icons remain a separate system (SVG imports or icon font) rather than a component. An `AccessibleIcon` wrapper component could be useful for adding `aria-label` to decorative icons.

---

#### 23. Chip

**Merges:** Badge, Tag, Chip, StatusIndicator

**Implementation across libraries:** 22/28 combined

**What it does:** Small labeled element for status, categories, tags. Can be static (badge/status) or interactive (removable tag).

**Recommended API:**

```svelte
<!-- Static badge/status -->
<Chip variant="badge" color="success">Active</Chip>
<Chip variant="status" color="warning" />  <!-- Dot only -->

<!-- Interactive tag -->
<Chip
  variant="tag"
  removable
  onremove={() => removeTag(tag)}
>
  JavaScript
</Chip>

<!-- With icon -->
<Chip icon={StarIcon} color="primary">Featured</Chip>
```

**CSS classes emitted:** `chip`, `chip--badge`, `chip--tag`, `chip--status`, `chip--removable`, `chip--primary`, `chip--success`, `chip--warning`, `chip--error`, `chip__icon`, `chip__remove`

---

#### 24. Accordion

**Includes:** Accordion, Collapsible (single-item accordion)

**Implementation across libraries:** 23/28

**What it does:** Expandable content sections. Accordion manages multiple collapsible items (optionally allowing multiple open). Collapsible is a single expand/collapse item.

**Recommended API:**

```svelte
<!-- Multi-item accordion -->
<Accordion
  type="single|multiple"       // single = only one open at a time
  value={openItems}            // string (single) or string[] (multiple)
  collapsible={true}           // Allow closing all items (single mode)
>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>

<!-- Single collapsible (no Accordion wrapper) -->
<Accordion.Item open={isOpen}>
  <Accordion.Trigger>Details</Accordion.Trigger>
  <Accordion.Content>Expandable content</Accordion.Content>
</Accordion.Item>
```

**CSS classes emitted:** `accordion`, `accordion__item`, `accordion__item--open`, `accordion__trigger`, `accordion__content`

---

#### 25. Tooltip

**Merges:** Tooltip, HoverCard

**Implementation across libraries:** 27/28 for Tooltip, 5/28 for HoverCard

**What it does:** Floating element that appears on hover/focus. Tooltip for short text descriptions; HoverCard mode for rich interactive content.

**Recommended API:**

```svelte
<!-- Simple tooltip -->
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

<!-- Rich content (HoverCard mode) -->
<Tooltip interactive>
  <Tooltip.Trigger>
    <Avatar src={user.avatar} />
  </Tooltip.Trigger>
  <Tooltip.Content>
    <UserCard {user} />
    <Button href={`/users/${user.id}`}>View Profile</Button>
  </Tooltip.Content>
</Tooltip>
```

**CSS classes emitted:** `tooltip`, `tooltip--interactive`, `tooltip__trigger`, `tooltip__content`, `tooltip__arrow`

**Implementation notes:**
- Default tooltip: non-interactive, `role="tooltip"`, closes on mouse leave
- Interactive mode: can contain focusable elements, stays open while interacting with content
- Use Popover positioning internally

---

#### 26. Carousel

**Implementation across libraries:** 10/28

**What it does:** Horizontally scrollable content with navigation controls, auto-play, and indicators.

**Recommended API:**

```svelte
<Carousel
  autoplay={false}
  interval={5000}
  loop={true}
  showArrows={true}
  showDots={true}
  slidesPerView={1}
  gap={16}
>
  <Carousel.Slide>
    <img src="/slide1.jpg" alt="Slide 1" />
  </Carousel.Slide>
  <Carousel.Slide>
    <img src="/slide2.jpg" alt="Slide 2" />
  </Carousel.Slide>
</Carousel>
```

**CSS classes emitted:** `carousel`, `carousel__viewport`, `carousel__slide`, `carousel__arrow`, `carousel__arrow--prev`, `carousel__arrow--next`, `carousel__dots`, `carousel__dot`, `carousel__dot--active`

---

#### 27. Timeline

**Implementation across libraries:** 10/28

**What it does:** Chronological sequence of events, typically vertical with connecting line.

**Recommended API:**

```svelte
<Timeline>
  <Timeline.Item status="completed" date="Jan 15, 2024">
    <Timeline.Title>Order placed</Timeline.Title>
    <Timeline.Description>Your order #12345 was confirmed</Timeline.Description>
  </Timeline.Item>
  <Timeline.Item status="current" date="Jan 16, 2024">
    <Timeline.Title>Shipped</Timeline.Title>
    <Timeline.Description>Package is in transit</Timeline.Description>
  </Timeline.Item>
  <Timeline.Item status="upcoming" date="Jan 18, 2024">
    <Timeline.Title>Delivery</Timeline.Title>
  </Timeline.Item>
</Timeline>
```

**CSS classes emitted:** `timeline`, `timeline__item`, `timeline__item--completed`, `timeline__item--current`, `timeline__item--upcoming`, `timeline__marker`, `timeline__connector`, `timeline__content`, `timeline__date`

---

#### 28. QRCode (non-core)

**Implementation across libraries:** 3/28

**What it does:** Generate QR code from text/URL.

**Recommended API:**

```svelte
<QRCode
  value="https://example.com"
  size={200}
  errorCorrection="L|M|Q|H"
  color="#000000"
  backgroundColor="#ffffff"
/>
```

---

#### 29. List

**Includes:** List, ListSection, ListItem, with virtual scrolling

**Implementation across libraries:** 12/28 for basic List, 4/28 for Virtualizer

**What it does:** Styled list of items with optional sections, keyboard navigation, and virtualization for large datasets.

**Recommended API:**

```svelte
<List
  virtualized={false}          // Enable virtual scrolling
  itemHeight={48}              // Required for virtualization
  overscan={5}                 // Extra items to render above/below viewport
>
  <List.Section title="Favorites">
    <List.Item icon={StarIcon}>Important Project</List.Item>
    <List.Item icon={StarIcon}>Work Documents</List.Item>
  </List.Section>
  <List.Section title="Recent">
    <List.Item>Meeting Notes</List.Item>
    <List.Item>Design Review</List.Item>
  </List.Section>
</List>

<!-- Virtualized list with data -->
<List virtualized itemHeight={48} items={largeDataset} let:item>
  <List.Item>{item.name}</List.Item>
</List>
```

**CSS classes emitted:** `list`, `list--virtualized`, `list__section`, `list__section-title`, `list__item`, `list__item--selected`, `list__item--disabled`

---

#### 30. Diff (non-core)

**Implementation across libraries:** 2/28

**What it does:** Side-by-side or overlay comparison of two items (typically images).

**Recommended API:**

```svelte
<Diff variant="slider|side-by-side|overlay">
  <Diff.Before>
    <img src="/before.jpg" alt="Before" />
  </Diff.Before>
  <Diff.After>
    <img src="/after.jpg" alt="After" />
  </Diff.After>
</Diff>
```

---

### Overlays

#### 31. Dialog

**Merges:** Dialog, AlertDialog, includes draggable mode

**Implementation across libraries:** 27/28

**What it does:** Modal overlay requiring user interaction. AlertDialog variant requires explicit action (cannot be dismissed by clicking outside).

**Recommended API:**

```svelte
<Dialog open={isOpen} onclose={() => isOpen = false}>
  <Dialog.Header>
    <Dialog.Title>Edit Profile</Dialog.Title>
    <Dialog.Description>Make changes to your profile</Dialog.Description>
  </Dialog.Header>
  <Dialog.Content>
    <form>...</form>
  </Dialog.Content>
  <Dialog.Footer>
    <Button variant="ghost" onclick={() => isOpen = false}>Cancel</Button>
    <Button>Save</Button>
  </Dialog.Footer>
</Dialog>

<!-- Alert variant (requires explicit action) -->
<Dialog variant="alert" open={showConfirm}>
  <Dialog.Header>
    <Dialog.Title>Delete item?</Dialog.Title>
    <Dialog.Description>This action cannot be undone.</Dialog.Description>
  </Dialog.Header>
  <Dialog.Footer>
    <Button variant="ghost" onclick={cancel}>Cancel</Button>
    <Button variant="destructive" onclick={confirmDelete}>Delete</Button>
  </Dialog.Footer>
</Dialog>

<!-- Draggable dialog -->
<Dialog draggable open={isOpen}>
  ...
</Dialog>
```

**CSS classes emitted:** `dialog`, `dialog--alert`, `dialog--draggable`, `dialog__overlay`, `dialog__panel`, `dialog__header`, `dialog__title`, `dialog__description`, `dialog__content`, `dialog__footer`

**Implementation notes:**
- Standard dialog: `role="dialog"`, can close on overlay click or Escape
- Alert dialog: `role="alertdialog"`, cannot close on overlay click, focus trapped until explicit action
- Draggable: add drag handle in header, constrain to viewport

---

#### 32. Drawer

**Merges:** Drawer, Sidebar (when used as overlay), Sheet

**Implementation across libraries:** 18/28

**What it does:** Panel sliding in from screen edge.

**Recommended API:**

```svelte
<Drawer
  open={isOpen}
  side="left|right|top|bottom"
  size="sm|md|lg|full"
  overlay={true}               // Show backdrop
  closeOnOverlayClick={true}
  closeOnEscape={true}
  onclose
>
  <Drawer.Header>
    <Drawer.Title>Navigation</Drawer.Title>
  </Drawer.Header>
  <Drawer.Content>
    ...
  </Drawer.Content>
</Drawer>
```

**CSS classes emitted:** `drawer`, `drawer--left`, `drawer--right`, `drawer--top`, `drawer--bottom`, `drawer--open`, `drawer__overlay`, `drawer__panel`, `drawer__header`, `drawer__content`

---

#### 33. Popover

**Implementation across libraries:** 22/28

**What it does:** Floating content panel anchored to a trigger element. Foundational primitive for dropdowns, tooltips, date pickers.

**My recommendation on DropdownMenu merge:** Keep Popover separate as the positioning primitive. DropdownMenu can be a composed component using Popover + Menu, but the distinction is valuable. Popover is a generic floating container; DropdownMenu is specifically a menu with keyboard navigation and menu item semantics.

**Recommended API:**

```svelte
<Popover open={isOpen} onclose={() => isOpen = false}>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>
  <Popover.Content
    side="bottom|top|left|right"
    align="start|center|end"
    sideOffset={8}
    collision="flip|shift|none"
  >
    Any content here
  </Popover.Content>
</Popover>
```

**CSS classes emitted:** `popover`, `popover__trigger`, `popover__content`, `popover__arrow`

---

#### 34. DropdownMenu

**Implementation across libraries:** 17/28

**What it does:** Button-triggered menu of actions with keyboard navigation.

**Recommended API:**

```svelte
<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button>Actions</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onclick={edit}>Edit</DropdownMenu.Item>
    <DropdownMenu.Item onclick={duplicate}>Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item onclick={remove} variant="destructive">Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
```

**CSS classes emitted:** `dropdown-menu`, `dropdown-menu__trigger`, `dropdown-menu__content`, `dropdown-menu__item`, `dropdown-menu__item--destructive`, `dropdown-menu__separator`

---

#### 35. ContextMenu

**Implementation across libraries:** 7/28

**What it does:** Right-click triggered menu.

**Recommended API:**

```svelte
<ContextMenu>
  <ContextMenu.Trigger>
    <div class="canvas">Right-click here</div>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item onclick={copy}>Copy</ContextMenu.Item>
    <ContextMenu.Item onclick={paste}>Paste</ContextMenu.Item>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.Item>Email</ContextMenu.Item>
        <ContextMenu.Item>Link</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu>
```

**CSS classes emitted:** `context-menu`, `context-menu__content`, `context-menu__item`, `context-menu__separator`, `context-menu__sub-trigger`

---

#### 36. Toast

**Implementation across libraries:** 24/28

**What it does:** Temporary notification message that auto-dismisses. Typically managed via an imperative API.

**Recommended API:**

```svelte
<!-- Place once in your app layout -->
<Toaster position="bottom-right" />

<!-- Imperative usage anywhere -->
<script>
  import { toast } from '$lib/components/Toast';
  
  function handleSave() {
    toast.success('Changes saved!');
    toast.error('Failed to save', { description: 'Please try again' });
    toast.promise(saveData(), {
      loading: 'Saving...',
      success: 'Saved!',
      error: 'Failed'
    });
  }
</script>
```

**CSS classes emitted:** `toaster`, `toast`, `toast--success`, `toast--error`, `toast--warning`, `toast--info`, `toast__title`, `toast__description`, `toast__close`

**Implementation notes:**
- Toaster is the container positioned on screen
- toast() function creates notifications imperatively (using Svelte stores internally)
- Support action buttons within toasts
- Handle stacking/queuing of multiple toasts

---

### Feedback & Status

#### 37. Spinner

**Implementation across libraries:** 16/28

**What it does:** Animated loading indicator.

**Recommended API:**

```svelte
<Spinner size="sm|md|lg" />
```

**CSS classes emitted:** `spinner`, `spinner--sm`, `spinner--md`, `spinner--lg`

---

#### 38. Progress

**Merges:** ProgressBar, ProgressCircle, Meter

**Implementation across libraries:** 24/28 for linear, 10/28 for circular

**What it does:** Visual representation of progress or measurement. Linear (bar), circular (ring), or meter (static measurement).

**Recommended API:**

```svelte
<!-- Linear progress bar -->
<Progress value={65} max={100} />

<!-- Indeterminate -->
<Progress indeterminate />

<!-- Circular -->
<Progress variant="circle" value={65} size={80} strokeWidth={8} />

<!-- Meter (static measurement, different semantic) -->
<Progress
  variant="meter"
  value={3.5}
  min={0}
  max={5}
  low={2}
  high={4}
  optimum={4.5}
/>
```

**CSS classes emitted:** `progress`, `progress--linear`, `progress--circle`, `progress--meter`, `progress--indeterminate`, `progress__track`, `progress__fill`, `progress__label`

**Implementation notes:**
- Linear: `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Meter: `role="meter"` with low/high/optimum thresholds for color coding
- Circle: SVG-based with stroke-dasharray animation

---

#### 39. Skeleton

**Implementation across libraries:** 18/28

**What it does:** Placeholder that mimics content shape during loading.

**Recommended API:**

```svelte
<Skeleton width="100%" height={20} />
<Skeleton variant="circle" size={48} />
<Skeleton variant="text" lines={3} />

<!-- Or use as wrapper -->
{#if loading}
  <Skeleton>
    <Card>...</Card>  <!-- Skeleton takes shape of children -->
  </Skeleton>
{:else}
  <Card>...</Card>
{/if}
```

**CSS classes emitted:** `skeleton`, `skeleton--circle`, `skeleton--text`, `skeleton--animated`

---

#### 40. EmptyState (suggested addition)

**Implementation across libraries:** 5/28

**What it does:** Placeholder for empty data states with icon, message, and action.

**Recommended API:**

```svelte
<EmptyState
  icon={InboxIcon}
  title="No messages"
  description="You don't have any messages yet"
>
  <Button>Compose</Button>
</EmptyState>
```

**CSS classes emitted:** `empty-state`, `empty-state__icon`, `empty-state__title`, `empty-state__description`, `empty-state__actions`

---

#### 41. Alert (suggested addition)

**Implementation across libraries:** 22/28

**What it does:** Static informational message with status coloring. Unlike Toast, Alert is inline in content and doesn't auto-dismiss.

**Recommended API:**

```svelte
<Alert variant="info|success|warning|error" dismissible>
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description>This is an important message.</Alert.Description>
</Alert>
```

**CSS classes emitted:** `alert`, `alert--info`, `alert--success`, `alert--warning`, `alert--error`, `alert__title`, `alert__description`, `alert__dismiss`

---

### Utilities

#### 42. Separator

**Implementation across libraries:** 20/28

**What it does:** Visual divider between content sections.

**Recommended API:**

```svelte
<Separator orientation="horizontal|vertical" />
```

**CSS classes emitted:** `separator`, `separator--horizontal`, `separator--vertical`

---

#### 43. ScrollArea

**Implementation across libraries:** 10/28

**What it does:** Custom-styled scrollable container with themed scrollbar.

**Recommended API:**

```svelte
<ScrollArea height={400}>
  <div>Long content...</div>
</ScrollArea>
```

**CSS classes emitted:** `scroll-area`, `scroll-area__viewport`, `scroll-area__scrollbar`, `scroll-area__thumb`

---

#### 44. Resizable

**Implementation across libraries:** 8/28

**What it does:** Resizable split panes.

**Recommended API:**

```svelte
<Resizable direction="horizontal|vertical">
  <Resizable.Panel defaultSize={30} minSize={20}>
    Sidebar
  </Resizable.Panel>
  <Resizable.Handle />
  <Resizable.Panel>
    Main content
  </Resizable.Panel>
</Resizable>
```

**CSS classes emitted:** `resizable`, `resizable--horizontal`, `resizable--vertical`, `resizable__panel`, `resizable__handle`

---

#### 45. Portal

**Implementation across libraries:** 9/28

**What it does:** Render children in a different DOM location (typically document.body). Essential for overlays to escape stacking context issues.

**Recommended API:**

```svelte
<Portal target={document.body}>
  <Dialog>...</Dialog>
</Portal>

<!-- Or declaratively -->
<Portal to="#modal-root">
  ...
</Portal>
```

**Implementation notes:** Svelte doesn't have built-in portals like React, so this is a valuable utility. Use `{@html}` or manual DOM manipulation internally.

---

#### 46. Chart (non-core)

**Implementation across libraries:** 2/28 (plus shadcn which wraps Recharts)

**What it does:** Data visualization wrapper. This is typically a thin wrapper around a charting library (Chart.js, D3, Recharts, ECharts).

**Recommended API:**

```svelte
<Chart
  type="line|bar|pie|area|donut"
  data={[
    { label: 'Jan', value: 100 },
    { label: 'Feb', value: 200 }
  ]}
  xKey="label"
  yKey="value"
/>
```

**Implementation notes:** Consider wrapping a specific charting library rather than building from scratch. Chart.js or Lightweight Charts are good options for a personal library.

---

#### 47. Command (suggested non-core addition)

**Implementation across libraries:** 5/28

**What it does:** The ⌘K command palette pattern — keyboard-driven search and action execution.

**Recommended API:**

```svelte
<Command open={isOpen} onclose={() => isOpen = false}>
  <Command.Input placeholder="Search..." />
  <Command.List>
    <Command.Group heading="Actions">
      <Command.Item onselect={createNew}>Create new...</Command.Item>
      <Command.Item onselect={openSettings}>Settings</Command.Item>
    </Command.Group>
    <Command.Group heading="Navigation">
      <Command.Item onselect={() => goto('/dashboard')}>Dashboard</Command.Item>
    </Command.Group>
  </Command.List>
</Command>
```

---

#### 48. Field (suggested addition)

**Implementation across libraries:** 10/28

**What it does:** Wrapper for form inputs providing consistent label, description, and error message layout.

**Recommended API:**

```svelte
<Field
  label="Email"
  description="We'll never share your email"
  error={errors.email}
  required
>
  <Input type="email" bind:value={email} />
</Field>
```

**CSS classes emitted:** `field`, `field--invalid`, `field__label`, `field__description`, `field__error`

---

## Component Priority Summary

### Core (Phase 1) — Essential foundation
1. Button
2. Input (start with text types)
3. Checkbox
4. Switch
5. Group
6. Tabs
7. Dialog
8. Popover
9. DropdownMenu
10. Toast (with Toaster)
11. Spinner
12. Progress (linear only)
13. Separator
14. Portal
15. Field

### Core (Phase 2) — Complete basic library
16. SegmentedControl
17. Slider (linear only)
18. Select/Combobox (extend Input)
19. Accordion
20. Tooltip
21. Drawer
22. Card
23. Chip
24. Alert
25. Skeleton
26. List
27. Table (basic)
28. Breadcrumbs

### Extended (Phase 3) — Full-featured
29. Calendar
30. DatePicker (extend Input)
31. ColorPicker
32. ColorSlider (extend Slider)
33. FileUpload
34. Pagination
35. Menu
36. Tree
37. ContextMenu
38. AppShell
39. Image/Avatar
40. Timeline
41. Carousel
42. ScrollArea
43. Resizable
44. Stepper
45. EmptyState

### Non-Core (Phase 4+) — As needed
46. PinInput
47. Transfer
48. QRCode
49. Diff
50. Chart
51. Command
52. Knob/AngleSlider (extend Slider)
53. RichText (extend Input)
54. Virtualizer (extend List)

---

## Theme Architecture Suggestion

Since you're using CSS classes with theme files, consider this structure:

```
/lib
  /components
    Button.svelte           # Adds class="button button--{variant}"
    Input.svelte            # Adds class="input input--{type}"
    ...
  /themes
    /default
      base.css              # CSS variables, typography, reset
      button.css            # .button styles
      input.css             # .input styles
      ...
      index.css             # Imports all
    /dark
      overrides.css         # Override CSS variables for dark mode
    /minimal
      ... (different theme)
```

Each theme file only needs to style the classes it wants to customize — unstated classes fall back to default.

---

## Final Notes

Your merged component strategy is well-suited for a personal library. The key architectural decisions to make early:

1. **Compound components pattern** (`<Dialog.Header>`) vs **prop-based** (`<Dialog header="...">`) — compound is more flexible for custom layouts
2. **Popover as primitive** — ensure Dialog, Drawer, DropdownMenu, Tooltip all use a shared positioning system
3. **Form state management** — decide if Field will manage its own error state or rely on external form libraries
4. **Animation approach** — Svelte's built-in transitions vs CSS animations vs a library like Motion One

This report should give you a solid foundation for building out your Svelte 5 component library incrementally while maintaining a coherent vision for the complete set.
