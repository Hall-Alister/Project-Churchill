// Churchill Bar
//
// This file defines the structural layout of the Churchill bar.
//
// Layout:
//
//   LEFT                         CENTER                         RIGHT
//   ┌──────────────────────────────┬──────────────────────────────┐
//   │ Active Window                │ Workspaces + Clock           │ Menu
//   └──────────────────────────────┴──────────────────────────────┘
//
// The centre group is deliberately separated from the left and
// right regions. It should remain centred regardless of the
// amount of content placed on either side.
//
// Visual styling belongs in bar.scss.
// Live system behaviour belongs in modules and services.

import { Astal } from "ags/gtk4"

export default function Bar() {
    // Anchor the window to the complete width of the monitor
    // while keeping it attached to the top edge.
    const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

    // ------------------------------------------------------------
    // ACTIVE WINDOW
    // ------------------------------------------------------------
    //
    // Two lines are deliberately placed inside a vertical box.
    //
    // The title is the primary piece of information.
    // The detail is secondary information displayed underneath it.
    //
    // Example:
    //
    //   Kitty
    //   hyprland.conf
    //
    const activeWindow = (
        <box
            orientation="vertical"
            valign="center"
            halign="start"
            spacing={6}
        >
            <label
                class="active-window-title"
                label="Project Churchill"
            />

            <label
                class="active-window-detail"
                label="First bar prototype"
            />
        </box>
    )

    // ------------------------------------------------------------
    // WORKSPACES
    // ------------------------------------------------------------
    //
    // These are temporary static placeholders.
    //
    // Workspaces.tsx will eventually replace these with live
    // Hyprland workspace information.
    //
    const workspaces = (
        <box
            class="workspaces"
            orientation="horizontal"
            valign="center"
            halign="center"
        >
            <label
                class="workspace active"
                label="1"
            />

            <label
                class="workspace"
                label="2"
            />

            <label
                class="workspace"
                label="3"
            />

            <label
                class="workspace"
                label="4"
            />
        </box>
    )

    // ------------------------------------------------------------
    // CLOCK
    // ------------------------------------------------------------
    //
    // Temporary static clock.
    //
    // Clock.tsx will eventually provide:
    //
    //   - live 24-hour time
    //   - Australian date format
    //   - hover/click interaction
    //
    const clock = (
        <label
            class="clock"
            label="20:48"
            valign="center"
        />
    )

    // ------------------------------------------------------------
    // MENU
    // ------------------------------------------------------------
    //
    // Temporary menu button.
    //
    // This will eventually open the configurable Churchill
    // bar settings.
    //
    const menu = (
        <label
            class="placeholder-module"
            label="☰"
            valign="center"
        />
    )

    return (
        <window
            visible
            namespace="churchill-bar"
            class="churchill-bar"
            anchor={TOP | LEFT | RIGHT}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
        >
            {/*
             * The bar is divided into three equal conceptual
             * regions:
             *
             *   left | centre | right
             *
             * Each region is allowed to expand independently.
             * This prevents the contents of the left or right
             * side from determining where the centre appears.
             */}
            <box
                class="bar-content"
                orientation="horizontal"
                valign="center"
            >
                {/*
                 * LEFT REGION
                 *
                 * Takes half of the available space.
                 * Content is aligned to the beginning.
                 */}
                <box
                    class="bar-region bar-left"
                    hexpand
                    valign="center"
                    halign="fill"
                >
                    <box
                        valign="center"
                        halign="start"
                    >
                        {activeWindow}
                    </box>
                </box>

                {/*
                 * CENTRE REGION
                 *
                 * This is the important part.
                 *
                 * The region itself expands to occupy its share
                 * of the bar, and the workspace/clock group is
                 * centred INSIDE that region.
                 *
                 * The contents therefore cannot be pushed around
                 * by the active-window title or menu.
                 */}
                <box
                    class="bar-region bar-centre"
                    hexpand
                    valign="center"
                    halign="fill"
                >
                    <box
                        valign="center"
                        halign="center"
                    >
                        {workspaces}

                        {clock}
                    </box>
                </box>

                {/*
                 * RIGHT REGION
                 *
                 * Takes the remaining horizontal space.
                 * The menu is explicitly aligned to the end.
                 */}
                <box
                    class="bar-region bar-right"
                    hexpand
                    valign="center"
                    halign="fill"
                >
                    <box
                        valign="center"
                        halign="end"
                    >
                        {menu}
                    </box>
                </box>
            </box>
        </window>
    )
}
