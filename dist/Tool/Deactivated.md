The Deactivated event fires when the left mouse button is released while a
[`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) is equipped.

This function is used to perform an action when the player stops using a
tool. For instance, a tool may make a player fly until they release their
left mouse button.

The below code, when placed in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), would create a tool
in the [`LocalPlayer's`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack). It will
print "Tool deactivated" when the player releases the left mouse button,
while the tool is equipped.
```lua
local tool = Instance.new("Tool")
tool.RequiresHandle = false
tool.Parent = game.Players.LocalPlayer.Backpack

function toolDeactivated()
    print("Tool deactivated")
end

tool.Deactivated:Connect(toolDeactivated)
```"
```