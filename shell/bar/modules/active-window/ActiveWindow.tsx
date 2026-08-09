import Hyprland from "gi://AstalHyprland"
import { createBinding, createComputed } from "ags"

const hyprland = Hyprland.get_default()

const focusedClient = createBinding(
    hyprland,
    "focused-client",
)

function applicationName(client: any): string {
    if (!client)
        return "Desktop"

    const app = client.class || ""

    if (app === "kitty")
        return "Kitty"

    if (app === "firefox")
        return "Firefox"

    return app
        .split(".")
        .pop()
        ?.replace(/^\w/, (c: string) => c.toUpperCase())
        || "Desktop"
}

function detailName(client: any): string {
    if (!client)
        return ""

    const app = (client.class || "").toLowerCase()
    const raw = client.title || ""

    if (app === "kitty") {
        const match = raw.match(/([^/\\]+)\s*$/)
        return match?.[1] || raw
    }

    if (app === "firefox") {
        const match = raw.match(/^(.+?)\s*[-–—]\s*Mozilla Firefox$/)
        return match?.[1] || raw
    }

    return raw
}

const application = createComputed(
    () => applicationName(focusedClient()),
)

const detail = createComputed(
    () => detailName(focusedClient()),
)

export default function ActiveWindow() {

    return (
        <box
            class="active-window"
            orientation={1}
            spacing={2}
        >

            <label
                class="active-window-title"
                label={application}
                xalign={0}
            />

            <label
                class="active-window-detail"
                label={detail}
                xalign={0}
            />

        </box>
    )
}
