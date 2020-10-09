**Activated** is not called if the Ctrl key is pressed during a click.

The Activated event fires when the player clicks while a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) is equipped.

This function is used to perform an action when the player uses the tool. For instance, when the player clicks while a _Rocket Launcher_ tool is equipped, the activated event executes the code to create and launch a rocket.

The below code, when placed in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), would create a tool in the `Players/LocalPlayer|LocalPlayer's` [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack). It will print “Tool activated” when the player clicks while the created tool is equipped.

```lua
local tool = Instance.new("Tool")
tool.RequiresHandle = false
tool.Parent = game.Players.LocalPlayer.Backpack
 
function onActivation()
    print("Tool activated")
end
 
tool.Activated:Connect(onActivation)
```