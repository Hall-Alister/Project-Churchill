import GLib from "gi://GLib"
import Hyprland from "gi://AstalHyprland"
import { createPoll } from "ags/time"

const hyprland = Hyprland.get_default()

const WORKSPACES = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const activeWorkspace = createPoll(
    1,
    100,
    () => hyprland.get_focused_workspace()?.id ?? 1,
)

function switchWorkspace(id: number) {
    try {
        GLib.spawn_command_line_async(
            `hyprctl eval 'hl.dispatch(hl.dsp.focus({ workspace = ${id} }))'`,
        )
    } catch (error) {
        print(`Churchill: workspace switch failed: ${error}`)
    }
}

export default function Workspaces() {
    return (
        <box
            class="workspaces"
            spacing={3}
        >
            {WORKSPACES.map((id) => (
                <button
                    class="workspace"
                    css={activeWorkspace.as(
                        active =>
                            active === id
                                ? "background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.12); color: rgba(245,247,250,1);"
                                : "background: transparent; border: 1px solid transparent; color: rgba(190,198,208,0.72);"
                    )}
                    onClicked={() => switchWorkspace(id)}
                >
                    <label label={String(id)} />
                </button>
            ))}
        </box>
    )
}
