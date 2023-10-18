The TouchRotate event fires when a user rotates two fingers on a
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) device.

For example, the following code prints how much the camera has rotated
since the beginning of the touch rotation.
```lua
local UserInputService = game:GetService("UserInputService")

UserInputService.TouchRotate:Connect(function(touchPositions, rotation, velocity, state, gameProcessedEvent)
	print("Camera has rotated "..tostring(rotation).." degrees!")
end)
```

To check if a user's device is TouchEnabled, and that touch events will
fire, see [`UserInputService.TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled).

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

The core scripts that control the user's camera on a mobile device use
code that functions similarly to this event. Best practice for this event
is to use it when creating a mobile camera system to override the default
core scripts.

See also:

- [`UserInputService.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTap)
- [`UserInputService.TouchTapInWorld`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTapInWorld)
- [`UserInputService.TouchMoved`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchMoved)
- [`UserInputService.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchLongPress)
- [`UserInputService.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPan)
- [`UserInputService.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPinch)
- [`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe)
- [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)