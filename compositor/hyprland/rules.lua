-- Churchill Hyprland Rules
-- Window and layer behaviour only.
--
-- Keep this file independent from:
--   appearance.lua -> visual/compositor styling
--   bindings.lua   -> keyboard/mouse behaviour

-- Churchill itself is a Wayland layer.
-- The namespace is defined by the AGS application.
hl.layer_rule({
    name = "churchill-bar",
    match = {
        namespace = "churchill",
    },

    blur = true,
    blur_popups = true,
    ignore_alpha = 0.15,

    animation = "fade",
    order = 10,
})

-- Normal application windows remain fully opaque.
-- Churchill's transparency is handled by the layer itself.
hl.window_rule({
    name = "churchill-normal-windows",
    match = {
        float = false,
    },

    opacity = 1.0,
})
