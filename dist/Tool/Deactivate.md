The Deactivate function simulates the deactivation of a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool). The
Tool must be equipped for this function to work.

Tools will normally trigger the [`Tool.Deactivated`](https://create.roblox.com/docs/reference/engine/classes/Tool#Deactivated) event when the
player releases the left mouse button, while the tool is equipped.

The below code, when placed in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), would create a tool
in the [`LocalPlayer's`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack). It will
simulate the tool being deactivated and print "Tool deactivated" when the
player equips the tool.
```lua
local tool = Instance.new("Tool")
tool.RequiresHandle = false
tool.Parent = game.Players.LocalPlayer.Backpack

tool.Equipped:Connect(function()
	tool:Deactivate()
end)

function toolDeactivated()
    print("Tool deactivated")
end

tool.Deactivated:Connect(toolDeactivated)
```