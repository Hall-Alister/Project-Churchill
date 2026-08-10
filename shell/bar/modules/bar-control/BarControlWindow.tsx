import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"

const { TOP, RIGHT, BOTTOM } = Astal.WindowAnchor

function closePanel() {
    const window = app.get_window("churchill-bar-control")

    if (window) {
        window.visible = false
    }
}

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
                spacing={14}
                valign={Gtk.Align.CENTER}
            >

                <box
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={4}
                >
                    <label
                        class="bar-control-heading"
                        label="Churchill"
                        halign={Gtk.Align.START}
                    />

                    <label
                        class="bar-control-subheading"
                        label="Bar Controls"
                        halign={Gtk.Align.START}
                    />
                </box>

                <box
                    class="bar-control-section"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={10}
                >
                    <label
                        class="bar-control-section-title"
                        label="Appearance"
                        halign={Gtk.Align.START}
                    />

                    <box
                        class="bar-control-row"
                        spacing={12}
                    >
                        <label
                            label="Thickness"
                            hexpand
                            halign={Gtk.Align.START}
                        />

                        <entry
                            class="bar-control-entry"
                            text="48"
                            widthChars={4}
                        />
                    </box>

                    <box
                        class="bar-control-row"
                        spacing={12}
                    >
                        <label
                            label="Font size"
                            hexpand
                            halign={Gtk.Align.START}
                        />

                        <entry
                            class="bar-control-entry"
                            text="14"
                            widthChars={4}
                        />
                    </box>

                    <box
                        class="bar-control-row"
                        spacing={12}
                    >
                        <label
                            label="Scale"
                            hexpand
                            halign={Gtk.Align.START}
                        />

                        <entry
                            class="bar-control-entry"
                            text="1.0"
                            widthChars={4}
                        />
                    </box>

                    <box
                        class="bar-control-row"
                        spacing={12}
                    >
                        <label
                            label="Opacity"
                            hexpand
                            halign={Gtk.Align.START}
                        />

                        <entry
                            class="bar-control-entry"
                            text="0.85"
                            widthChars={5}
                        />
                    </box>

                    <box
                        class="bar-control-row"
                        spacing={12}
                    >
                        <label
                            label="Spacing"
                            hexpand
                            halign={Gtk.Align.START}
                        />

                        <entry
                            class="bar-control-entry"
                            text="8"
                            widthChars={4}
                        />
                    </box>

                    <box
                        class="bar-control-row"
                        spacing={12}
                    >
                        <label
                            label="Corner radius"
                            hexpand
                            halign={Gtk.Align.START}
                        />

                        <entry
                            class="bar-control-entry"
                            text="16"
                            widthChars={4}
                        />
                    </box>
                </box>

                <box
                    class="bar-control-section"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={8}
                >
                    <label
                        class="bar-control-section-title"
                        label="Modules"
                        halign={Gtk.Align.START}
                    />

                    <checkbutton
                        label="Wifi and Bluetooth Menu"
                    />

                    <checkbutton
                        label="Fastfetch / htop"
                    />

                    <checkbutton
                        label="Processes Table"
                    />

                    <checkbutton
                        label="Active Window"
                    />

                    <checkbutton
                        label="Workspaces"
                    />
                </box>

                <box
                    class="bar-control-actions"
                    spacing={8}
                    homogeneous
                >
                    <button
                        class="bar-control-reset"
                        onClicked={() => {
                            print("Reset to default — function coming next")
                        }}
                    >
                        <label label="Reset to Default" />
                    </button>

                    <button
                        class="bar-control-close"
                        onClicked={closePanel}
                    >
                        <label label="Close" />
                    </button>
                </box>

            </box>
        </window>
    )
}
