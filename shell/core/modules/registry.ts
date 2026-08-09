export type ChurchillModule = {
    id: string
    name: string
    description: string
    default_enabled: boolean
    removable: boolean
}


export const MODULE_REGISTRY: ChurchillModule[] = [

    {
        id: "active_window",
        name: "Active Window",
        description: "Shows the focused application and current document.",
        default_enabled: true,
        removable: true,
    },

    {
        id: "workspaces",
        name: "Workspaces",
        description: "Shows Hyprland workspaces and the active workspace.",
        default_enabled: true,
        removable: true,
    },

    {
        id: "wifi_bluetooth",
        name: "Wi-Fi & Bluetooth",
        description: "Network and Bluetooth controls.",
        default_enabled: true,
        removable: true,
    },

    {
        id: "fastfetch_htop",
        name: "Fastfetch & htop",
        description: "System information and performance tools.",
        default_enabled: true,
        removable: true,
    },

    {
        id: "processes",
        name: "Processes",
        description: "Compact process monitor.",
        default_enabled: true,
        removable: true,
    },

]
