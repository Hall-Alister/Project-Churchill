import { createPoll } from "ags/time"


/*
============================================================
Churchill Clock Module

Displays current system time.

The module only handles:
- getting time
- formatting time
- displaying time

============================================================
*/


/*
============================================================
Clock state

Updates every second.

Returns a ready-to-display string.

============================================================
*/

const time = createPoll(

    "",

    1000,

    () => {

        return new Date().toLocaleTimeString(
            "en-AU",
            {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }
        )

    }

)



/*
============================================================
Clock Component

============================================================
*/

export default function Clock() {

    return (

        <label

            class="clock"

            label={time}

        />

    )

}
