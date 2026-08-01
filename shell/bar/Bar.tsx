import { Astal } from "ags/gtk4"

import Regions from "./Regions"


/*
============================================================
Churchill Top Bar

This is the main bar window.

Responsibilities:
- Create the GTK window
- Position it at the top of the screen
- Load the Churchill region layout

The actual contents of the bar are handled elsewhere:

Regions
    |
    ├── Left
    ├── Centre
    └── Right

============================================================
*/


const { TOP, LEFT, RIGHT } = Astal.WindowAnchor



/*
============================================================
Bar Window

The bar reserves the top screen area.

Hyprland handles the rest.

============================================================
*/

export default function Bar() {


    return (

        <window

            /*
            Unique window identifier.

            Used later for:
            - toggling visibility
            - debugging
            - Settings app control
            */
            name="churchill-bar"


            /*
            Namespace prevents conflicts with
            other Astal applications.
            */
            namespace="churchill"


            /*
            Stretch across the top edge.
            */
            anchor={TOP | LEFT | RIGHT}


            /*
            Tell the compositor this is a panel.

            Other windows should avoid occupying
            this space.
            */
            exclusivity={Astal.Exclusivity.EXCLUSIVE}


            visible

        >

            <Regions/>

        </window>

    )

}
