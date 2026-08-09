-- Churchill Hyprland Bindings
-- Keyboard behaviour only.

local mod = "SUPER"

-- Applications

hl.bind(
    mod .. " + RETURN",
    hl.dsp.exec_cmd("kitty"),
    { description = "Open terminal" }
)

-- Window management

hl.bind(
    mod .. " + Q",
    hl.dsp.window.kill(),
    { description = "Close active window" }
)

hl.bind(
    mod .. " + F",
    hl.dsp.window.fullscreen(),
    { description = "Toggle fullscreen" }
)

hl.bind(
    mod .. " + V",
    hl.dsp.window.float(),
    { description = "Toggle floating" }
)

-- Focus

hl.bind(mod .. " + LEFT",  hl.dsp.window.focus("l"))
hl.bind(mod .. " + RIGHT", hl.dsp.window.focus("r"))
hl.bind(mod .. " + UP",    hl.dsp.window.focus("u"))
hl.bind(mod .. " + DOWN",  hl.dsp.window.focus("d"))

-- Workspaces

for i = 1, 9 do
    hl.bind(
        mod .. " + " .. i,
        hl.dsp.workspace(i),
        { description = "Switch to workspace " .. i }
    )

    hl.bind(
        mod .. " + SHIFT + " .. i,
        hl.dsp.window.move({
            workspace = i,
        }),
        { description = "Move window to workspace " .. i }
    )
end

-- Workspace cycling

hl.bind(
    mod .. " + CTRL + RIGHT",
    hl.dsp.workspace("e+1")
)

hl.bind(
    mod .. " + CTRL + LEFT",
    hl.dsp.workspace("e-1")
)

-- Exit Hyprland

hl.bind(
    mod .. " + SHIFT + M",
    hl.dsp.exit(),
    { description = "Exit Hyprland" }
)
