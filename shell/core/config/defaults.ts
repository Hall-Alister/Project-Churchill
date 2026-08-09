export const DEFAULT_BAR_CONFIG = {
    height: 73,
    scale: 1,
    fontSize: 14,
    opacity: 0.94,
    spacing: 8,

    position: "top" as const,

    modules: {
        activeWindow: true,
        workspaces: true,
        wifiBluetooth: true,
        systemMonitor: true,
        processes: true,
        barControls: true,
    },
}
