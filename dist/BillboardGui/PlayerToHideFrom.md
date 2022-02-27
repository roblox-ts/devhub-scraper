Used by scripts to hide the BillboardGui from a specific player.

To hide the UI from more than one player, place the BillboardGui into  
[StarterGui](https://developer.roblox.com/en-us/api-reference/class/StarterGui) and use a script to set the `BillboardGui/Enabled` property  
according to whether the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) should be able to see it.  
The [BillboardGui.Adornee](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/Adornee) property can be used to attach the BillboardGui  
to a [Part](https://developer.roblox.com/en-us/api-reference/class/Part) or [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) in the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace), instead of parenting it.