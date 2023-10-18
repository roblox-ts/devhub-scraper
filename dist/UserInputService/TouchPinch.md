Fired when a user places and moves two fingers on the screen of a
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) device.

For instance, the snippet below prints how much the camera zoom scale has
changed since the beginning of the touch pinch,
```lua
local UserInputService = game:GetService("UserInputService")

UserInputService.TouchPinch:Connect(function(touchPositions, scale, velocity, state, gameProcessedEvent)
	print("Scale difference since beginning of pinch: "..tostring(scale))
end)
```

To check if a user's device is TouchEnabled, and that touch events will
fire, see [`UserInputService.TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled).

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

[`Core scripts`](https://create.roblox.com/docs/reference/engine/classes/CoreScript) use similar logic to zoom the user's
camera when a user pinches their fingers on a mobile device. Best practice
for this event is to use it when creating a mobile camera system to
override the default core script.

See also:

- [`UserInputService.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTap)
- [`UserInputService.TouchTapInWorld`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTapInWorld)
- [`UserInputService.TouchMoved`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchMoved)
- [`UserInputService.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchLongPress)
- [`UserInputService.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPan)
- [`UserInputService.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchRotate)
- [`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe)
- [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)