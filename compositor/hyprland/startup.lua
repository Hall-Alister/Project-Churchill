-- Churchill startup
--
-- Programs which should exist once per Hyprland session.

local function start(command)
    hl.exec_cmd(command)
end

hl.on("hyprland.start", function()

    start("mako")

end)
