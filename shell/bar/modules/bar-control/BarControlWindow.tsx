import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"

import {
    getConfig,
    resetConfig,
    updateConfig,
} from "../../../core/config/store"

const { TOP, RIGHT, BOTTOM } = Astal.WindowAnchor

function closePanel() {
    const window = app.get_window("churchill-bar-control")

    if (window) {
        window.visible = false
    }
}

export default function BarControlWindow() {
    const config = getConfig()

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
            >
                <box
                    orientation={Gtk.Orientation.HORIZONTAL}
                    spacing={8}
                >
                    <box
                        orientation={Gtk.Orientation.VERTICAL}
                        hexpand
                    >
                        <label
                            class="bar-control-heading"
                            halign={Gtk.Align.START}
                            label="Churchill"
                        />

                        <label
                            class="bar-control-subheading"
                            halign={Gtk.Align.START}
                            label="Bar Controls"
                        />
                    </box>

                    <button
                        class="bar-control-close"
                        valign={Gtk.Align.START}
                        onClicked={closePanel}
                    >
                        <label label="×" />
                    </button>
                </box>

                <box
                    class="bar-control-section"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={8}
                >
                    <label
                        class="bar-control-section-title"
                        halign={Gtk.Align.START}
                        label="Bar"
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Enabled: ${config.bar.enabled}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Position: ${config.bar.position}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Thickness: ${config.bar.thickness}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Scale: ${config.bar.scale}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Opacity: ${config.bar.opacity}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Spacing: ${config.bar.spacing}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Margin: ${config.bar.margin}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Radius: ${config.bar.radius}`}
                    />
                </box>

                <box
                    class="bar-control-section"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={8}
                >
                    <label
                        class="bar-control-section-title"
                        halign={Gtk.Align.START}
                        label="Effects"
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Blur: ${config.bar.blur}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Frost: ${config.bar.frost}`}
                    />

                    <label
                        halign={Gtk.Align.START}
                        label={`Shadow: ${config.bar.shadow}`}
                    />
                </box>

                <box
                    class="bar-control-actions"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={8}
                    valign={Gtk.Align.END}
                    vexpand
                >
                    <button
                        class="bar-control-action"
                        onClicked={() => {
                            resetConfig()
                            closePanel()
                        }}
                    >
                        <label label="Reset to Defaults" />
                    </button>

                    <button
                        class="bar-control-action"
                        onClicked={() => {
                            updateConfig({
                                bar: {
                                    ...getConfig().bar,
                                    opacity: 0.85,
                                },
                            })

                            closePanel()
                        }}
                    >
                        <label label="Test Save" />
                    </button>
                </box>
            </box>
        </window>
    )
}
