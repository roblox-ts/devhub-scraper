The TouchPan event fires when a user drags at least one finger on a
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) device.

This event can be used to determine when a user pans their finger along
screen of a TouchEnabled device - such as to rotate the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) in
a custom camera script.

The snippet below prints "Speed of touch drag" followed by the velocity of
the user's touch when the user drags their finger on the screen.
```lua
local userInputService = game:GetService("UserInputService")

userInputService.TouchPan:Connect(function(touchPositions, totalTranslation, velocity, state, gameProcessedEvent)
	print("Speed of touch drag: "..tostring(velocity))
end)
```

Take a look at another useful [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) function here
[`UserInputService.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchRotate).

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTap)
- [`UserInputService.TouchTapInWorld`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTapInWorld)
- [`UserInputService.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchLongPress)
- [`UserInputService.TouchMoved`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchMoved)
- [`UserInputService.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPinch)
- [`UserInputService.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchRotate)
- [`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe)
- [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)