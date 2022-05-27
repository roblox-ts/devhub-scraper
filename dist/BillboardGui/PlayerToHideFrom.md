Used by scripts to hide the BillboardGui from a specific player.

To hide the UI from more than one player, place the BillboardGui into
[StarterGui](https://create.roblox.com/docs/reference/engine/classes/StarterGui) and use a script to set the [BillboardGui.Enabled](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#Enabled) property
according to whether the [Players.LocalPlayer](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) should be able to see it.
The [BillboardGui.Adornee](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#Adornee) property can be used to attach the BillboardGui
to a [Part](https://create.roblox.com/docs/reference/engine/classes/Part) or [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) in the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace), instead of parenting it.