import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"

import { getConfig } from "../core/config/store"

import ActiveWindow from "./modules/active-window/ActiveWindow"
import Clock from "./modules/clock/Clock"
import Workspaces from "./modules/workspaces/Workspaces"
import Dock from "./Dock"
import BarControl from "./modules/bar-control/BarControl"

const config = createPoll(
    getConfig(),
    250,
    () => getConfig(),
)

export default function Regions() {
    return (
        <centerbox
            class="bar-regions"
            valign={Gtk.Align.CENTER}
            hexpand
        >
            <box
                $type="start"
                class="bar-left"
                orientation={Gtk.Orientation.HORIZONTAL}
                spacing={8}
                valign={Gtk.Align.CENTER}
            >
                {config.get().modules.active_window && (
                    <ActiveWindow />
                )}
            </box>

            <box
                $type="center"
                class="bar-centre"
                orientation={Gtk.Orientation.HORIZONTAL}
                spacing={12}
                valign={Gtk.Align.CENTER}
                halign={Gtk.Align.CENTER}
            >
                {config.get().modules.workspaces && (
                    <Workspaces />
                )}

                <Clock />
            </box>

            <box
                $type="end"
                class="bar-right"
                orientation={Gtk.Orientation.HORIZONTAL}
                spacing={8}
                valign={Gtk.Align.CENTER}
                halign={Gtk.Align.END}
            >
                <Dock />
                <BarControl />
            </box>
        </centerbox>
    )
}
