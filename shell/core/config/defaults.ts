export const DEFAULT_CONFIG = {
    bar: {
        enabled: true,

        position: "top",

        thickness: 48,

        scale: 1,

        opacity: 0.72,

        spacing: 8,

        margin: 8,

        radius: 16,

        blur: true,

        blur_strength: 6,

        frost: true,

        shadow: true,
    },

    modules: {
        active_window: true,
        workspaces: true,

        wifi_bluetooth: true,
        fastfetch_htop: true,
        processes: true,
    },

    behaviour: {
        autohide: false,

        reveal_on_edge: true,

        animation_speed: 1,

        show_tooltips: true,
    },
} as const
