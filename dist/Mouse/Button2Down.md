The Button2Down even fires when the player presses their right mouse
button.

This can also be accessed from a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool). For example, when placed in
a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), the code below prints Button2Down whenever the
right mouse button is pressed:
```lua
local Tool = script.Parent --make sure this is a Tool object

Tool.Equipped:Connect(function(Mouse)
	Mouse.Button2Down:Connect(function()
		print("Button2Down")
	end)
end).
```

Developers can find out the position of the mouse in world-space, and if
it is pointing at any [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), using the [`Mouse.Hit`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit) and
[`Mouse.Target`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Target) properties.

For information on how to obtain the mouse object, please see the
[`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) page.

Note, developers are recommended to use [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) instead
of the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) object in new work.