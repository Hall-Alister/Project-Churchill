import { Gtk } from "ags/gtk4"

import { DOCK } from "../config/Bar"


/*
============================================================
Churchill Widget Slot

A slot is an empty container that can hold one module.

The bar does not care what is inside.

Examples:

Slot
 ├── Clock
 ├── Power Button
 ├── Network Menu
 └── Community Widget

The slot controls placement.
The widget controls behaviour.

============================================================
*/


interface SlotProps {

    /*
    The widget placed inside this slot.

    Empty slots are allowed.
    They reserve space for future customisation.
    */
    child?: JSX.Element


    /*
    Optional CSS class additions.

    Used later by themes.
    */
    className?: string

}



/*
============================================================
Slot Component

Creates one fixed-size widget location.

============================================================
*/

export default function Slot({
    child,
    className = "",
}: SlotProps) {


    return (

        <box

            /*
            Base slot styling.

            Theme controls appearance.
            */
            class={`churchill-slot ${className}`}


            /*
            Fixed square dimensions.

            This keeps every module predictable.
            */
            widthRequest={DOCK.slotSize}
            heightRequest={DOCK.slotSize}


            /*
            Prevent GTK from stretching slots.

            Widgets should fit inside their space,
            not resize the entire bar.
            */
            hexpand={false}
            vexpand={false}


            /*
            Centre widget inside slot.
            */
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}

        >

            {child}

        </box>

    )

}
