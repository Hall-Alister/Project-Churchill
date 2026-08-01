import Slot from "./Slot"
import { DOCK } from "../config/Bar"


/*
============================================================
Churchill Right Dock

The right side of the bar is a fixed grid of widget slots.

The dock itself has no knowledge of individual widgets.

It only provides locations.

Future:

Settings App
      |
      v
Dock Configuration
      |
      v
Widget placement

============================================================
*/


interface DockProps {

    /*
    Array of widgets to insert.

    The position in the array determines the slot.

    Example:

    [
        undefined,
        undefined,
        <PowerButton/>
    ]

    places PowerButton in slot 3.

    */
    widgets?: (JSX.Element | undefined)[]

}



/*
============================================================
Right Dock Component
============================================================
*/

export default function Dock({
    widgets = [],
}: DockProps) {


    /*
    Create exactly the configured number of slots.

    Empty slots remain available.

    This means users can customise layouts without
    changing the bar structure.
    */

    const slots = Array.from(
        {
            length: DOCK.slots,
        },
        (_, index) => widgets[index]
    )


    return (

        <box

            class="churchill-dock"


            /*
            Space between widgets.
            Controlled globally.
            */
            spacing={DOCK.spacing}


            /*
            Dock belongs on the far right.

            The parent layout decides where the dock lives.
            */
            hexpand={false}

        >

            {
                slots.map((widget, index) => (

                    <Slot
                        key={index}
                        child={widget}
                    />

                ))
            }

        </box>

    )

}
