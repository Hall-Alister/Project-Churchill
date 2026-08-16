import app from "ags/gtk4/app"

export default function BarControl() {
    function togglePanel() {
        const panel = app.get_window("churchill-bar-control")

        if (!panel) {
            print("Churchill: bar control window not found")
            return
        }

        panel.visible = !panel.visible
    }

    return (
        <button
            class="bar-control-button"
            onClicked={togglePanel}
            tooltipText="Churchill Bar Controls"
        >
            <label label="☰" />
        </button>
    )
}
