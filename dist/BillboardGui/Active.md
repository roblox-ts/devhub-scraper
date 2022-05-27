Controls whether the descendants will receive input events. If the UI
contains a [GuiButton](https://create.roblox.com/docs/reference/engine/classes/GuiButton) then that button will become clickable only if
Active is set to true on both the BillboardGui and the button.

BillboardGuis will only receive user input if they are parented to the
PlayerGui. The [BillboardGui.Adornee](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#Adornee) property can be used to target a
Part in the workspace while the UI itself is in the [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui).