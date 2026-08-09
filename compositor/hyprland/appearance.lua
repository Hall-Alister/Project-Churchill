-- Churchill Hyprland Appearance
-- Visual foundation only.
-- Keep compositor-level effects here.
-- Bar appearance belongs to Churchill itself.

hl.config({
    general = {
        gaps_in = 6,
        gaps_out = 12,
        gaps_workspaces = 8,

        border_size = 1,

        col = {
            active_border = "rgba(B4CDEAee)",
            inactive_border = "rgba(59616B55)",
        },

        resize_on_border = false,
        allow_tearing = false,
        layout = "dwindle",
    },

    decoration = {
        rounding = 12,
        rounding_power = 2,

        active_opacity = 1.0,
        inactive_opacity = 1.0,
        fullscreen_opacity = 1.0,

        shadow = {
            enabled = true,
            range = 8,
            render_power = 3,
            color = "rgba(28303833)",
        },

        blur = {
            enabled = true,
            size = 4,
            passes = 2,
            new_optimizations = true,
            vibrancy = 0.12,
        },
    },

    animations = {
        enabled = true,
    },
})

-- Smooth but restrained animation curves.
hl.curve("churchillEase", {
    type = "bezier",
    points = {
        {0.22, 1.0},
        {0.36, 1.0},
    },
})

hl.curve("churchillSoft", {
    type = "bezier",
    points = {
        {0.25, 0.1},
        {0.25, 1.0},
    },
})

hl.animation({
    leaf = "global",
    enabled = true,
    speed = 8,
    bezier = "churchillEase",
})

hl.animation({
    leaf = "windows",
    enabled = true,
    speed = 6,
    bezier = "churchillEase",
})

hl.animation({
    leaf = "windowsIn",
    enabled = true,
    speed = 5,
    bezier = "churchillEase",
    style = "popin 92%",
})

hl.animation({
    leaf = "windowsOut",
    enabled = true,
    speed = 4,
    bezier = "churchillSoft",
    style = "popin 92%",
})

hl.animation({
    leaf = "fade",
    enabled = true,
    speed = 5,
    bezier = "churchillSoft",
})

hl.animation({
    leaf = "layers",
    enabled = true,
    speed = 6,
    bezier = "churchillEase",
})

hl.animation({
    leaf = "workspaces",
    enabled = true,
    speed = 6,
    bezier = "churchillEase",
    style = "slidefade 20%",
})
