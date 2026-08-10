import app from "ags/gtk4/app"

export default function BarControl() {
    function togglePanel() {
        const panel = app.get_window("churchill-bar-control")

        if (panel) {
            panel.visible = !panel.visible
        }
    }

    return (
        <button
            class="bar-control-button"
            onClicked={togglePanel}
        >
            <label label="☰" />
        </button>
    )
}
