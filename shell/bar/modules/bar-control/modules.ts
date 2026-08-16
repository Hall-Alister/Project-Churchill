import {
    getConfig,
    updateConfig,
} from "../../../core/config/store"

export type ChurchillModule =
    | "active_window"
    | "workspaces"
    | "wifi_bluetooth"
    | "fastfetch_htop"
    | "processes"

export function isModuleEnabled(
    module: ChurchillModule,
): boolean {
    return getConfig().modules[module]
}

export function toggleModule(
    module: ChurchillModule,
): void {
    const config = getConfig()

    updateConfig({
        modules: {
            ...config.modules,
            [module]: !config.modules[module],
        },
    })

    print(
        `Churchill: ${module} = ${getConfig().modules[module]}`,
    )
}
