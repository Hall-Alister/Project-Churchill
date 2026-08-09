export type BarModuleDefinition = {
    id: string
    name: string
    description: string
    defaultEnabled: boolean
}

export const BAR_MODULES: BarModuleDefinition[] = [
    {
        id: "activeWindow",
        name: "Active Window",
        description: "Shows the currently focused application and window detail.",
        defaultEnabled: true,
    },

    {
        id: "workspaces",
        name: "Workspaces",
        description: "Shows and switches Hyprland workspaces.",
        defaultEnabled: true,
    },

    {
        id: "wifiBluetooth",
        name: "Wi-Fi & Bluetooth",
        description: "Network and Bluetooth controls.",
        defaultEnabled: true,
    },

    {
        id: "systemMonitor",
        name: "System Monitor",
        description: "Fastfetch and htop system information.",
        defaultEnabled: true,
    },

    {
        id: "processes",
        name: "Processes",
        description: "Compact process monitor.",
        defaultEnabled: true,
    },

    {
        id: "barControls",
        name: "Bar Controls",
        description: "Controls Churchill's bar configuration.",
        defaultEnabled: true,
    },
]
