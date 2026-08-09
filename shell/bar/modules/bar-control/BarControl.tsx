import { Gtk } from "ags/gtk4"
import { createState } from "ags"

export default function BarControl() {
    const [open, setOpen] = createState(false)

    return (
        <box
            class="bar-control-root"
            orientation={Gtk.Orientation.HORIZONTAL}
        >
            <button
                class="bar-control-button"
                onClicked={() => setOpen(!open.get())}
            >
                <label label="☰" />
            </button>

            <revealer
                revealChild={open}
                transitionType={Gtk.RevealerTransitionType.SLIDE_RIGHT}
                transitionDuration={260}
            >
                <box
                    class="bar-control-panel"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={12}
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
                        onClicked={() => setOpen(false)}
                    >
                        <label label="Close" />
                    </button>
                </box>
            </revealer>
        </box>
    )
}
