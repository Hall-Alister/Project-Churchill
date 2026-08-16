-- Churchill Workspace System
--
-- Workspace behaviour only.
-- UI representation lives in Churchill.

local workspace_count = 9

-- Workspace cycling.
hl.bind(
    "SUPER + CTRL + RIGHT",
    hl.dsp.focus({
        workspace = "e+1",
    }),
    {
        description = "Next workspace",
    }
)

hl.bind(
    "SUPER + CTRL + LEFT",
    hl.dsp.focus({
        workspace = "e-1",
    }),
    {
        description = "Previous workspace",
    }
)
