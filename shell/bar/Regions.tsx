import { Gtk } from "ags/gtk4"
import ActiveWindow from "./modules/active-window/ActiveWindow"
import Clock from "./modules/clock/Clock"
import Workspaces from "./modules/workspaces/Workspaces"
import Dock from "./Dock"
import BarControl from "./modules/bar-control/BarControl"

export default function Regions() {
    return (
        <centerbox
            class="bar"
            hexpand
            halign={Gtk.Align.FILL}
            valign={Gtk.Align.CENTER}
        >

            <box
                $type="start"
                class="bar-left"
                orientation={Gtk.Orientation.VERTICAL}
                spacing={1}
                valign={Gtk.Align.CENTER}
            >
                <ActiveWindow />
            </box>

            <box
                $type="center"
                class="bar-centre"
                spacing={12}
                valign={Gtk.Align.CENTER}
                halign={Gtk.Align.CENTER}
            >
                <Workspaces />
                <Clock />
            </box>

            <box
                $type="end"
                class="bar-right"
                valign={Gtk.Align.CENTER}
                halign={Gtk.Align.END}
            >
                <Dock />
                <BarControl />
            </box>

        </centerbox>
    )
}
