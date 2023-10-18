This function makes the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) equip the given [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool).

The below example would cause a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) to equip a tool in
[`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) named *'Tool'*.
```lua
local Players = game:GetService("Players")

local player = Players:FindFirstChildOfClass("Player")
if player and player.Character then
	local humanoid = player.Character:FindFirstChildOfClass("Humanoid")
	if humanoid then
		local tool = workspace:FindFirstChild("Tool")
		if tool then
			humanoid:EquipTool(tool)
		end
	end
end
```

When this function is called, the humanoid will automatically unequip any
[`Tools`](https://create.roblox.com/docs/reference/engine/classes/Tool) that it currently has equipped

Although they will be equipped, [`Tools`](https://create.roblox.com/docs/reference/engine/classes/Tool) for which
[`Tool.RequiresHandle`](https://create.roblox.com/docs/reference/engine/classes/Tool#RequiresHandle) is *true* will not function if they have no
handle, regardless if this function is used to equip them or not

See also:

- To unequip tools, use [`Humanoid:UnequipTools()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#UnequipTools)