The [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) WindowFocused event fires when the window of
the Roblox client gains focus - typically when the Roblox client is
maximized/actively open on the user's screen.

For example, the code below prints *"Window focused"* whenever the Roblox
client gains focus.
```lua
local UserInputService = game:GetService("UserInputService")

UserInputService.WindowFocused:Connect(function()
	print("Window focused")
end)
```

This event can be used alongside
[`UserInputService.WindowFocusReleased`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#WindowFocusReleased) to track whether the Roblox
client is actively focused on a user's screen.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).