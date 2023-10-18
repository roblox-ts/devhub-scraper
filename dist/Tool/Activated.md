Activated isn't called if the Ctrl key is pressed during a click.

The Activated event fires when the player clicks while a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) is
equipped.

This function is used to perform an action when the player uses the tool.
For instance, when the player clicks while a *Rocket Launcher* tool is
equipped, the activated event executes the code to create and launch a
rocket.

The below code, when placed in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), would create a tool
in the [`LocalPlayer's`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack). It will
print "Tool activated" when the player clicks while the created tool is
equipped.
```lua
local tool = Instance.new("Tool")
tool.RequiresHandle = false
tool.Parent = game.Players.LocalPlayer.Backpack

function onActivation()
    print("Tool activated")
end

tool.Activated:Connect(onActivation)
```