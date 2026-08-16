import app from "ags/gtk4/app"
import { resetConfig } from "../../../core/config/store"

export function closeBarControl() {
    const window = app.get_window("churchill-bar-control")

    if (window) {
        window.visible = false
    }
}

export function resetChurchill() {
    resetConfig()
}
