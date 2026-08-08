# Churchill Design System

## 1. Purpose

The Churchill Design System defines the visual language used throughout Project Churchill.

It separates visual decisions from implementation so that:

* components do not contain arbitrary colours or dimensions;
* themes can be changed without rewriting components;
* the bar, widgets, services, and future desktop-environment components share one visual language;
* design decisions remain understandable to humans as the project grows.

The implementation follows this principle:

> **Regions determine layout. Modules determine behaviour. Themes determine appearance.**

Churchill is intended to grow from a desktop shell into a broader desktop environment. The design system therefore needs to remain useful beyond the current top bar.

---

# 2. Design Architecture

Churchill uses three conceptual layers.

```text
Primitive values
       ↓
Semantic tokens
       ↓
Component styling
```

### Primitive values

Primitive values are the underlying palette, dimensions, typography scales, and effects.

Examples:

```text
blue-500
gray-900
space-md
radius-md
font-size-sm
```

These values describe the available design vocabulary.

### Semantic tokens

Semantic tokens describe what a value means.

Examples:

```text
background
surface
text
text-muted
accent
border
```

A semantic token should describe its purpose rather than its current colour.

For example:

```text
accent
```

is preferable to:

```text
blue
```

because the accent may become green, orange, or another colour in a future theme.

### Component tokens

Component tokens describe how semantic values are applied to a particular component.

Examples:

```text
bar-padding
module-radius
workspace-active-background
menu-button-size
```

Component tokens should only be created when a component-specific decision is genuinely required.

---

# 3. Theme Source of Truth

The machine-readable theme is stored in:

```text
theme/theme.json
```

The theme compiler converts this data into:

```text
shell/generated/theme.css
```

The generated CSS must not be edited manually.

The intended pipeline is:

```text
theme/theme.json
        ↓
tools/build-theme.ts
        ↓
shell/generated/theme.css
        ↓
GTK / SCSS
```

`DESIGN.md` documents the system for humans.

`theme.json` provides the values to the compiler.

The generated CSS provides those values to the shell.

---

# 4. Colour System

Colours are divided into functional roles rather than being assigned directly to individual widgets.

## 4.1 Background

The primary background is the visual foundation of Churchill.

Token:

```text
background
```

Used for:

* the main bar;
* desktop surfaces;
* large background areas;
* areas that should visually recede.

Current value:

```text
#16181d
```

---

## 4.2 Surface

The surface colour is used to distinguish an interactive or contained area from the main background.

Token:

```text
surface
```

Current value:

```text
#20242c
```

Potential uses:

* modules;
* panels;
* menus;
* widgets;
* desktop components.

---

## 4.3 Surface Hover

The hover surface provides a subtle visual response when an interactive element is approached.

Token:

```text
surface_hover
```

Current value:

```text
#2a303b
```

Hover states should remain subtle.

Churchill should avoid excessive visual movement or dramatic colour changes merely because a pointer moved over something.

---

## 4.4 Primary Text

Token:

```text
text
```

Current value:

```text
#ffffff
```

Primary text should be used for information that is immediately important.

---

## 4.5 Muted Text

Token:

```text
text_muted
```

Current value:

```text
#9ca3af
```

Muted text should communicate secondary information without disappearing completely.

Examples:

* secondary active-window information;
* supporting labels;
* metadata;
* inactive workspace labels.

---

## 4.6 Accent

Token:

```text
accent
```

Current value:

```text
#4d8dff
```

The accent represents Churchill's primary interactive or highlighted state.

Potential uses:

* active workspace;
* selected menu item;
* focused control;
* important state indicators.

The accent should not be sprayed across the interface merely because the colour exists.

---

## 4.7 Borders

Token:

```text
effects.border
```

Current value:

```text
rgba(255,255,255,0.08)
```

Borders should generally be subtle.

A border should communicate structure, not draw attention to itself.

---

## 4.8 Future Colour States

The colour system should eventually support semantic states such as:

```text
success
warning
error
info
disabled
focus
```

These should not be added until a real component requires them.

---

# 5. Typography

Current font family:

```text
Inter
```

Current scale:

```text
size_sm = 11px
size_md = 14px
size_lg = 18px
```

Current weights:

```text
weight_normal = 400
weight_bold = 700
```

Typography should establish hierarchy rather than simply making important things larger.

The eventual system should distinguish:

```text
display
heading
body
label
caption
metadata
```

but additional typography tokens should only be introduced when required.

---

# 6. Spacing

Churchill uses a small spacing scale rather than arbitrary values.

Current scale:

```text
space_xs = 4px
space_sm = 8px
space_md = 12px
space_lg = 18px
```

The goal is consistency.

Components should prefer an existing spacing token rather than introducing values such as:

```text
7px
11px
13px
17px
```

without a deliberate reason.

GTK widget spacing belongs in the GTK widget properties in TypeScript rather than GTK CSS.

For example:

```tsx
<box spacing={8}>
```

is a layout property.

It should not be written as:

```scss
spacing: 8px;
```

because `spacing` is not a GTK CSS property.

---

# 7. Radius

Current radius scale:

```text
radius_sm = 4px
radius_md = 8px
radius_lg = 12px
```

Radius should communicate hierarchy.

Small controls may use small radii.

Modules and panels may use medium radii.

Large floating surfaces may use large radii.

Churchill should avoid rounding every object simply because rounded corners are available.

---

# 8. Effects

Current effects include:

```text
shadow
opacity_muted
border
```

Current values:

```text
shadow = rgba(0,0,0,0.35)
opacity_muted = 0.65
```

Effects should remain restrained.

The interface should feel deliberate rather than covered in shadows, outlines, gradients, and glowing objects.

---

# 9. Components

Current component tokens include:

```text
bar_padding = 10px
module_padding = 8px
module_radius = 10px
```

These values define component-level decisions while allowing the underlying theme to change.

The component layer should eventually contain tokens for things such as:

```text
bar
workspace
menu
clock
active-window
panel
notification
launcher
```

Only components that actually exist should receive component tokens.

---

# 10. Bar Design

The Churchill bar is a structural shell rather than three independent visual boxes.

The logical regions are:

```text
LEFT | CENTRE | RIGHT
```

These regions determine placement.

They do not inherently determine appearance.

The intended visual model is:

```text
┌─────────────────────────────────────────────────────────────┐
│  Active Window          Workspaces   Clock              Menu │
└─────────────────────────────────────────────────────────────┘
```

rather than:

```text
┌─────────────────────────────────────────────────────────────┐
│ ┌────────────┐ ┌────────────┐ ┌───────────────────────────┐ │
│ │ LEFT       │ │ CENTRE     │ │ RIGHT                     │ │
│ └────────────┘ └────────────┘ └───────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

Regions are layout primitives.

Modules provide the actual content.

---

# 11. Module Philosophy

A module should have:

1. a clearly defined responsibility;
2. a predictable location;
3. minimal knowledge of unrelated modules;
4. styling supplied by the theme system;
5. configuration supplied by Churchill's configuration architecture where appropriate.

Current modules include:

```text
active-window
clock
workspaces
menu
```

Future modules may include:

```text
system status
network
audio
battery
notifications
launcher
session controls
```

Modules should remain independently replaceable.

---

# 12. Themes

Churchill is intended to support multiple themes.

The component architecture must therefore avoid assumptions such as:

```text
the background is always dark;
the accent is always blue;
text is always white.
```

Instead, components should request semantic roles:

```text
background
surface
text
text-muted
accent
border
```

A future theme may therefore change the values without changing the components.

Potential future themes might include:

```text
Churchill Dark
Churchill Light
High Contrast
Monochrome
```

These are design possibilities, not current implementations.

---

# 13. Accessibility

Themes should eventually be evaluated for:

* text contrast;
* active/inactive state distinction;
* focus visibility;
* colour-blind accessibility;
* readable typography;
* usable spacing;
* reduced-motion preferences.

Colour alone should not be the only indicator of important state.

---

# 14. Design Rules

### Rule 1

Prefer semantic names over colour names.

Use:

```text
accent
```

instead of:

```text
blue
```

### Rule 2

Prefer existing tokens over arbitrary values.

### Rule 3

Do not create a token unless it represents a meaningful repeated decision.

### Rule 4

Layout belongs to the widget hierarchy.

Appearance belongs to the theme system.

### Rule 5

Components should not contain theme-specific colours directly.

### Rule 6

Generated files should never be manually edited.

### Rule 7

Themes should be interchangeable without rewriting component logic.

### Rule 8

Churchill should favour clarity over decoration.

### Rule 9

The design system should remain understandable by humans.

### Rule 10

Do not optimise the architecture for hypothetical complexity before the actual requirement exists.

---

# 15. Current Design Status

The current values are provisional.

The architecture is established, but the visual identity is not final.

The next design phase should determine:

* Churchill's actual colour palette;
* background/surface hierarchy;
* typography;
* bar geometry;
* workspace appearance;
* menu appearance;
* active-window presentation;
* iconography;
* interaction states;
* eventual light/dark theme relationship.

Until those decisions are made, the current values should be treated as the initial design vocabulary rather than the final Churchill aesthetic.
