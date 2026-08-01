import { Gtk } from "ags/gtk4"


/*
============================================================
Churchill Active Window Module

Displays:

TITLE
DETAIL

Example:

Kitty
hyprland.conf

Responsibilities:

- Display active application
- Display active window details

Future:
- Hyprland IPC listener
- Dynamic updates
- Window icons

============================================================
*/


export default function ActiveWindow() {

    return (

        <box

            class="active-window"

            orientation={Gtk.Orientation.VERTICAL}

            spacing={2}

        >

            <label

                class="active-window-title"

                label="Project Churchill"

                xalign={0}

            />


            <label

                class="active-window-detail"

                label="First bar prototype"

                xalign={0}

            />

        </box>

    )

}
