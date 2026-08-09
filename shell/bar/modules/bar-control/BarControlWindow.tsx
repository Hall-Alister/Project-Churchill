import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"

const { TOP, RIGHT, BOTTOM } = Astal.WindowAnchor

export default function BarControlWindow() {
    return (
        <window
            name="churchill-bar-control"
            application={app}
            anchor={TOP | RIGHT | BOTTOM}
            exclusivity={Astal.Exclusivity.IGNORE}
            visible={false}
            keymode={Astal.Keymode.ON_DEMAND}
            class="bar-control-window"
        >
            <box
                class="bar-control-panel"
                orientation={Gtk.Orientation.VERTICAL}
                spacing={12}
                valign={Gtk.Align.FILL}
                halign={Gtk.Align.END}
            >
                <label
                    class="bar-control-heading"
                    label="Churchill"
                />

                <label
                    class="bar-control-subheading"
                    label="Bar Controls"
                />

                <box
                    class="bar-control-placeholder"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={8}
                >
                    <label label="Settings coming next" />
                </box>

                <button
                    class="bar-control-close"
                    onClicked={() => {
                        const window = app.get_window(
                            "churchill-bar-control",
                        )

                        if (window) {
                            window.visible = false
                        }
                    }}
                >
                    <label label="Close" />
                </button>
            </box>
        </window>
    )
}
