Fired when the mouse is moved.

Note, this event is fired when the mouse's position is updated, therefore
it will fire repeatedly while being moved.

For information on how to obtain the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) object, please see the
[`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) page.

Developers can find out the position of the mouse in world-space, and if
it is pointing at any [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) using the [`Mouse.Hit`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit) and
[`Mouse.Target`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Target) properties.
```lua
mouse.Move:Connect(function()
	local position = mouse.Hit.p
	local target = mouse.Target
	print(target, position)
end)
```

Note, developers are recommended to use [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) instead
of the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) object in new work.