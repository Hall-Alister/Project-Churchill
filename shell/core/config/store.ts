import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs"
import { dirname } from "node:path"

import { DEFAULT_BAR_CONFIG } from "./defaults"

const CONFIG_PATH = `${process.env.HOME}/.config/churchill/config.json`

function ensureConfigDirectory() {
    mkdirSync(dirname(CONFIG_PATH), { recursive: true })
}

export function loadBarConfig() {
    ensureConfigDirectory()

    if (!existsSync(CONFIG_PATH)) {
        saveBarConfig(DEFAULT_BAR_CONFIG)
        return structuredClone(DEFAULT_BAR_CONFIG)
    }

    try {
        const raw = readFileSync(CONFIG_PATH, "utf8")
        return {
            ...structuredClone(DEFAULT_BAR_CONFIG),
            ...JSON.parse(raw),
        }
    } catch {
        return structuredClone(DEFAULT_BAR_CONFIG)
    }
}

export function saveBarConfig(config: typeof DEFAULT_BAR_CONFIG) {
    ensureConfigDirectory()

    writeFileSync(
        CONFIG_PATH,
        JSON.stringify(config, null, 4),
    )
}

export function resetBarConfig() {
    const config = structuredClone(DEFAULT_BAR_CONFIG)

    saveBarConfig(config)

    return config
}
