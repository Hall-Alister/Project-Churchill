import GLib from "gi://GLib"
import { createState } from "ags"

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
    GLib.mkdir_with_parents(CONFIG_DIR, 0o755)
}

function loadConfig(): ChurchillConfig {
    try {
        const [success, contents] =
            GLib.file_get_contents(CONFIG_FILE)

        if (!success) {
            return cloneDefaults()
        }

        const text = new TextDecoder().decode(contents)
        const loaded = JSON.parse(text)

        return {
            ...cloneDefaults(),
            ...loaded,

            bar: {
                ...cloneDefaults().bar,
                ...(loaded.bar ?? {}),
            },

            modules: {
                ...cloneDefaults().modules,
                ...(loaded.modules ?? {}),
            },

            behaviour: {
                ...cloneDefaults().behaviour,
                ...(loaded.behaviour ?? {}),
            },
        }
    } catch {
        return cloneDefaults()
    }
}

let config: ChurchillConfig = loadConfig()

ensureConfigDirectory()

export const [configState, setConfigState] =
    createState(config)

export function getConfig(): ChurchillConfig {
    return config
}

export function saveConfig(): void {
    ensureConfigDirectory()

    const text = JSON.stringify(
        config,
        null,
        4,
    )

    GLib.file_set_contents(
        CONFIG_FILE,
        text,
    )

    setConfigState(config)
}

export function updateConfig(
    changes: Partial<ChurchillConfig>,
): ChurchillConfig {
    config = {
        ...config,
        ...changes,

        bar: {
            ...config.bar,
            ...(changes.bar ?? {}),
        },

        modules: {
            ...config.modules,
            ...(changes.modules ?? {}),
        },

        behaviour: {
            ...config.behaviour,
            ...(changes.behaviour ?? {}),
        },
    }

    saveConfig()

    return config
}

export function resetConfig(): ChurchillConfig {
    config = cloneDefaults()

    saveConfig()

    return config
}
