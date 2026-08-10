# Project Churchill — Handover / Development Log

## Project
Churchill is a custom desktop shell for Arch Linux + Hyprland, built with AGS/GTK4 and TypeScript/TSX for the shell, with Hyprland configuration migrated to Lua.

The project is being developed incrementally. Stability is important: do not casually revert working architecture or CSS.

---

# CURRENT STATE

## Bar

The top AGS bar is currently working at a normal height.

The bar has three regions:

- LEFT: Active Window
- CENTRE: Workspaces + Clock
- RIGHT: right-side modules/functions, currently including Bar Control

The bar's existing CSS is considered valuable and should NOT be unnecessarily rewritten.

The bar currently has a dark/translucent aesthetic with rounded lower corners, subtle borders and shadows.

Current working bar height is approximately 48px.

IMPORTANT:
The bar previously became a huge ~168px tall layer when BarControl was implemented incorrectly.

This was diagnosed as a GTK widget/layout issue, NOT fundamentally a bar CSS issue.

---

# IMPORTANT ARCHITECTURAL LESSON

## BarControl MUST NOT contain the large panel as a child of the bar

The original implementation put the settings panel/revealer inside the bar hierarchy.

This caused the bar itself to expand vertically to the panel's height.

The intended architecture is:

BAR
  └── hamburger button

Hamburger button triggers/open a SEPARATE panel/window.

The settings panel should therefore be its own GTK/AGS window, independent of the top bar's geometry.

This solved the huge-bar problem.

DO NOT regress to putting the tall settings panel inside the bar.

The desired settings panel:

- opens from the RIGHT edge of the screen
- is approximately 1/6 screen width
- is a tall rectangular pill/panel
- smoothly slides out
- is visually separate from the top bar
- is controlled by the hamburger button

---

# Bar Control Vision

Hamburger symbol:

☰

Location:
RIGHTMOST area of the top bar.

Clicking it opens a separate Bar Control panel.

The panel will eventually contain:

## Bar appearance

- Enable/disable bar
- Position: top/bottom
- Thickness
- Font size
- Scale
- Opacity
- Spacing
- Margin
- Corner radius
- Blur
- Blur strength
- Frost/translucency
- Shadow
- Reset to defaults

## Module visibility

Checkbox/toggle system allowing users to enable/disable:

- Active Window
- Workspaces
- WiFi + Bluetooth
- Fastfetch / htop
- Processes Table

Potential future modules should be able to register themselves.

## Custom modules

There should be:

[ + ] Add Custom

This opens the relevant configuration/source file in a new terminal/editor so users can customise it.

---

# Existing configuration architecture

Files:

shell/core/config/defaults.ts
shell/core/config/store.ts
shell/core/modules/registry.ts

Runtime config is stored at:

~/.config/churchill/config.json

The config directory is created automatically.

The config file was initially confusing because it did not appear until the store was actually imported/executed.

We confirmed that importing the store works and prints:

Churchill configuration loaded

The current configuration includes:

bar:
- enabled: true
- position: top
- thickness: 48
- scale: 1
- opacity: 0.72
- spacing: 8
- margin: 8
- radius: 16
- blur: true
- blur_strength: 6
- frost: true
- shadow: true

modules:
- active_window: true
- workspaces: true
- wifi_bluetooth: true
- fastfetch_htop: true
- processes: true

behaviour:
- autohide: false
- reveal_on_edge: true
- animation_speed: 1
- show_tooltips: true

---

# Current shell architecture

shell/app.tsx
shell/bar/Bar.tsx
shell/bar/Regions.tsx
shell/bar/bar.scss

Modules:

shell/bar/modules/active-window/
shell/bar/modules/workspaces/
shell/bar/modules/clock/
shell/bar/modules/bar-control/

BarControl files:

shell/bar/modules/bar-control/BarControl.tsx
shell/bar/modules/bar-control/bar-control.scss

The active window module was fixed to show simplified information.

Desired active-window behaviour:

Firefox:
  ChatGPT

Kitty:
  app.tsx

Rather than displaying enormous window titles such as:

Branch - Branch - Linux Tech and CosmicOS -- Mozilla Firefox

The current simplified active-window approach is acceptable.

---

# Clock

Clock exists as:

shell/bar/modules/clock/Clock.tsx

It should display current time in 24-hour format.

At one point it displayed "clock test"; this still needs checking/fixing if it has not already been corrected.

---

# Workspaces

Workspaces module:

shell/bar/modules/workspaces/Workspaces.tsx

Uses Astal Hyprland.

Workspaces 1–9 are displayed.

Clicking a workspace dispatches:

workspace <id>

There were temporary periods where workspaces disappeared because of bar/widget/layout problems.

Do not assume the workspace module itself is broken before checking the bar hierarchy/CSS.

---

# AGS

The shell is launched during development with:

ags run --gtk 4 ./shell/app.tsx

Known harmless/low-priority warning:

Vulkan initialization warnings from GTK/GDK.

Known warning:

Sass @import rules are deprecated.

Current bar.scss imports:

@import "./modules/bar-control/bar-control";

This can eventually be migrated to modern Sass @use/@forward, but it is NOT the current priority.

---

# CSS LESSONS

GTK4 CSS is not normal web CSS.

In particular:

- CSS "width" caused errors.
- GTK does not accept arbitrary web CSS properties.
- Do not use browser-style width/height casually.
- min-width/min-height and GTK widget properties are safer.
- Avoid changing working bar CSS unless necessary.

A previous error:

CSS Error: No property named "width"

was caused by attempting to use CSS properties unsupported by GTK.

---

# CRITICAL BAR GEOMETRY LESSON

Hyprland layer output previously showed:

namespace: churchill
xywh: 0 0 1366 168

This meant the GTK window itself had become 168px tall.

The panel's height was accidentally participating in the bar's layout.

The fix was architectural separation:

Top bar window remains small.

Bar control panel becomes its own window.

---

# Current visual direction

The user wants Churchill to feel modern, polished and intentional rather than like a 2012 Linux desktop.

General aesthetic:

- dark monochromatic palette
- translucent/frosted surfaces
- subtle borders
- restrained shadows
- rounded pills/panels
- smooth animations
- minimal text
- compact controls
- clean typography

Do not sacrifice functionality/stability just to make a CSS change.

---

# Planned Churchill modules

After Bar Control:

1. WiFi + Bluetooth Menu
2. Fastfetch / htop Menu
3. Processes Table
4. Power Menu
5. Signal Menu
6. Further system controls/utilities

Fastfetch/htop will eventually be heavily customised.

Processes table should eventually include a simplified built-in htop-like process view.

---

# Larger project vision

Churchill is intended to become a complete custom desktop shell rather than merely a themed status bar.

Major ideas include:

- configurable top bar
- module management
- WiFi/Bluetooth controls
- system monitoring
- process management
- power controls
- signal/system status
- Arch-focused fastfetch
- heavily customised htop
- polished monochromatic visual system
- configurable modules
- custom module support

---

# DEVELOPMENT RULES

1. Do NOT blindly revert large portions of the project.
2. Preserve working architecture.
3. Before changing a file, inspect it.
4. Prefer small architectural changes over huge CSS rewrites.
5. When replacing an entire file, give a single `cat > file <<'EOF' ... EOF` command.
6. The user prefers commands that can be pasted directly into the terminal.
7. After changes, test with:
   ags run --gtk 4 ./shell/app.tsx
8. Hyprland config changes can be checked with:
   hyprctl reload
   hyprctl configerrors
9. Git should be used frequently because large changes have previously caused regressions.
10. Do not remove previous hard work merely to solve a local bug.
11. If a layout bug appears, inspect the widget/window hierarchy before changing CSS.
12. Keep the bar and tall panels as separate windows.

---

# GIT

The repository is on:

main

Remote:

origin/main

A previous architectural migration to Lua was committed/staged.

Relevant Lua files:

compositor/hyprland/appearance.lua
compositor/hyprland/bindings.lua
compositor/hyprland/init.lua
compositor/hyprland/rules.lua
compositor/hyprland/startup.lua
compositor/hyprland/workspaces.lua

There are historical backup files that were removed during cleanup.

Use:

git status
git diff
git diff --cached

before committing.

Prefer meaningful commits after a stable milestone.

---

# IMMEDIATE NEXT STEP

The bar-control architecture is now working.

Do NOT redesign the entire bar.

Next:

1. Verify the current bar remains normal height.
2. Verify hamburger opens the separate panel.
3. Verify panel slides from the RIGHT edge.
4. Then implement actual Bar Control functionality.
5. Connect controls to Churchill config/store.
6. Make changes persist to ~/.config/churchill/config.json.
7. Add Reset to Defaults.
8. Add module enable/disable controls.
9. Only then polish/finalise the Bar Control CSS.

The bar itself should remain stable while this happens.

---

# USER PREFERENCE

The user wants to move quickly and dislikes unnecessary setbacks.

When giving file replacements, use:

cat > path/to/file <<'EOF'
...
EOF

rather than telling the user to open nano and manually delete everything. 

The user is learning while building Churchill, so explain the important architectural reason briefly, but avoid burying them in unecessary detail.

# HANDOVER END

This file should be updated whenever a significant architectural decision, working fix, regression, or completed module occurs.
