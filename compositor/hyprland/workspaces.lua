-- Churchill Workspace System
--
-- Workspace behaviour only.
-- UI representation lives in Churchill.

local workspace_count = 9

for i = 1, workspace_count do
    hl.bind(
        "SUPER + " .. i,
        hl.dsp.workspace(i),
        {
            description = "Switch to workspace " .. i,
        }
    )

    hl.bind(
        "SUPER + SHIFT + " .. i,
        hl.dsp.window.move({
            workspace = i,
        }),
        {
            description = "Move window to workspace " .. i,
        }
    )
end

-- Cycle through workspaces.
hl.bind(
    "SUPER + CTRL + RIGHT",
    hl.dsp.focus({
        workspace = "e+1",
    })
)

hl.bind(
    "SUPER + CTRL + LEFT",
    hl.dsp.focus({
        workspace = "e-1",
    })
)
