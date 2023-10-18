The TouchMoved event fires when a user moves their finger on a
TouchEnabled device.

This event can be used to determine when a user moves their finger while
touching the screen of a TouchEnabled device. It can be useful to track
whether a user is moving their finger on the screen, as well as where the
user is moving their finger.

The code below prints "Touch moved from" the previous Vector2 position "to
" the new Vector2 position of the user's touch on a TouchEnabled device.
```lua
local UserInputService = game:GetService("UserInputService")

function onTouchMoved(touch, gameProcessedEvent)
	local oldPosition = touch.Position - touch.Delta
	print("Touch moved from " .. tostring(oldPosition) .. "to " .. tostring(touch.Position))
end

UserInputService.TouchMoved:Connect(onTouchMoved)
```

It can be paired with [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted) and
[`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded) to determine when a user starts
touching the screen, how their finger moves while touching it, and when
the they stop touching the screen.

To check if a user's device is TouchEnabled, and that touch events will
fire, see [`UserInputService.TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled).

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTap)
- [`UserInputService.TouchTapInWorld`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTapInWorld)
- [`UserInputService.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchLongPress)
- [`UserInputService.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPan)
- [`UserInputService.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPinch)
- [`UserInputService.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchRotate)
- [`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe)
- [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)