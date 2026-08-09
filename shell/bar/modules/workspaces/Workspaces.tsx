import Hyprland from "gi://AstalHyprland"

const hyprland = Hyprland.get_default()

const WORKSPACES = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function isActive(id: number) {
    return hyprland.get_focused_workspace()?.id === id
}

function switchWorkspace(id: number) {
    hyprland.dispatch("workspace", String(id))
}

export default function Workspaces() {

    return (
        <box
            class="workspaces"
            spacing={3}
        >

            {WORKSPACES.map((id) => (

                <button
                    class={isActive(id)
                        ? "workspace active"
                        : "workspace"
                    }

                    onClicked={() => switchWorkspace(id)}
                >

                    <label label={String(id)} />

                </button>

            ))}

        </box>
    )
}
