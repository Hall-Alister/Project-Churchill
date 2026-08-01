import { createPoll } from "ags/time"
import { exec } from "ags/process"


/*
============================================================
Churchill Workspace Module

Responsibilities:

- Display workspace buttons
- Track current workspace
- Provide styling hooks

Does NOT:

- Control bar layout
- Handle themes
- Handle animations

============================================================
*/


/*
============================================================
Current Workspace

Hyprland exposes this through hyprctl.

Example:

workspace ID 3

============================================================
*/

const activeWorkspace = createPoll(
    "1",
    1000,
    () => {

        try {

            const output = exec(
                "hyprctl activeworkspace -j"
            )

            const data = JSON.parse(output)

            return String(data.id)

        }

        catch {

            return "1"

        }

    }
)



/*
============================================================
Workspace Component

============================================================
*/

export default function Workspaces() {


    const spaces = [
        "1",
        "2",
        "3",
        "4",
        "5",
    ]


    return (

        <box
            class="workspaces"
            spacing={8}
        >

            {
                spaces.map((space) => (

                    <label

                        class={
                            activeWorkspace(
                                (current) =>
                                    current === space
                                    ? "workspace active"
                                    : "workspace"
                            )
                        }

                        label={space}

                    />

                ))

            }

        </box>

    )

}
