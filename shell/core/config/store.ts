import GLib from "gi://GLib"

import { DEFAULT_CONFIG } from "./defaults"

const CONFIG_DIR = GLib.build_filenamev([
    GLib.get_user_config_dir(),
    "churchill",
])

const CONFIG_FILE = GLib.build_filenamev([
    CONFIG_DIR,
    "config.json",
])

export type ChurchillConfig = {
    bar: {
        enabled: boolean
        position: "top" | "bottom"
        thickness: number
        scale: number
        opacity: number
        spacing: number
        margin: number
        radius: number
        blur: boolean
        blur_strength: number
        frost: boolean
        shadow: boolean
    }

    modules: {
        active_window: boolean
        workspaces: boolean
        wifi_bluetooth: boolean
        fastfetch_htop: boolean
        processes: boolean
    }

    behaviour: {
        autohide: boolean
        reveal_on_edge: boolean
        animation_speed: number
        show_tooltips: boolean
    }
}

function cloneDefaults(): ChurchillConfig {
    return JSON.parse(
        JSON.stringify(DEFAULT_CONFIG),
    ) as ChurchillConfig
}

function ensureConfigDirectory(): void {
    const result = GLib.mkdir_with_parents(
        CONFIG_DIR,
        0o755,
    )

    if (result !== 0 && !GLib.file_test(CONFIG_DIR, GLib.FileTest.IS_DIR)) {
        throw new Error(
            `Could not create Churchill config directory: ${CONFIG_DIR}`,
        )
    }
}

function saveConfig(): void {
    ensureConfigDirectory()

    const text = JSON.stringify(
        config,
        null,
        4,
    )

    const success = GLib.file_set_contents(
        CONFIG_FILE,
        text,
    )

    if (!success) {
        throw new Error(
            `Could not write Churchill config: ${CONFIG_FILE}`,
        )
    }
}

function loadConfig(): ChurchillConfig {
    try {
        const [success, contents] =
            GLib.file_get_contents(CONFIG_FILE)

        if (!success) {
            return cloneDefaults()
        }

        const text = new TextDecoder().decode(contents)

        const saved = JSON.parse(text)

        return {
            ...cloneDefaults(),
            ...saved,
        }
    } catch {
        return cloneDefaults()
    }
}

ensureConfigDirectory()

let config: ChurchillConfig = loadConfig()

if (!GLib.file_test(CONFIG_FILE, GLib.FileTest.EXISTS)) {
    saveConfig()
}

export function getConfig(): ChurchillConfig {
    return config
}

export function saveCurrentConfig(): void {
    saveConfig()
}

export function updateConfig(
    changes: Partial<ChurchillConfig>,
): ChurchillConfig {
    config = {
        ...config,
        ...changes,
    }

    saveConfig()

    return config
}

export function resetConfig(): ChurchillConfig {
    config = cloneDefaults()

    saveConfig()

    return config
}
