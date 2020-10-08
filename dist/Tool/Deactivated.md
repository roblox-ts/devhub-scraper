The Deactivated event fires when the left mouse button is released while a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) is equipped.

This function is used to perform an action when the player stops using a tool. For instance, a tool may make a player fly until they release their left mouse button.

The below code, when placed in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), would create a tool in the `Players/LocalPlayer|LocalPlayer's` [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack). It will print “Tool deactivated” when the player releases the left mouse button, while the tool is equipped.

```Lua
local tool = Instance.new("Tool")
tool.RequiresHandle = false
tool.Parent = game.Players.LocalPlayer.Backpack
 
function toolDeactivated()
    print("Tool deactivated")
end
 
tool.Deactivated:Connect(toolDeactivated)
```