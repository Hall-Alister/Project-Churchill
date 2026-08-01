import { Gtk } from "ags/gtk4"

import { MODULES } from "../config/Bar"


/*
============================================================
Churchill Regions

Defines the three permanent areas of the bar.

LEFT:
    Information about the current window.

CENTRE:
    Navigation and time.

RIGHT:
    User-configurable widget dock.

This file controls layout only.

Individual modules should not know where they live.

============================================================
*/


/*
============================================================
Left Region

Contains information about the active window.

Future:
- application icon
- workspace indicator
- window title
- window details

============================================================
*/

function LeftRegion() {

    return (

        <box
            class="bar-left"

            orientation={Gtk.Orientation.VERTICAL}

            spacing={2}

            hexpand
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

}



/*
============================================================
Centre Region

This area should remain visually centred.

Future:
- dynamic workspace count
- clock popup
- calendar
- notifications

============================================================
*/

function CentreRegion() {

    return (

        <box
            class="bar-centre"

            spacing={10}

            halign={Gtk.Align.CENTER}

        >

        <label
            class="workspace"
            label="1 2 3 4"
        />

        <label
            class="clock"
            label="15:34"
        />


        </box>

    )

}



/*
============================================================
Right Region

The dock lives here.

The region itself does not know which widgets exist.

============================================================
*/

function RightRegion() {

    return (

        <box
            class="bar-right"

            halign={Gtk.Align.END}

            hexpand={false}

        >

            <label
                class="placeholder-module"
                label="☰"
            />

        </box>

    )

}



/*
============================================================
Public Region Container

This is imported by Bar.tsx.

============================================================
*/

export default function Regions() {


    return (

        <centerbox class="churchill-regions">


            <LeftRegion
                $type="start"
            />


            <CentreRegion
                $type="center"
            />


            <RightRegion
                $type="end"
            />


        </centerbox>

    )

}
