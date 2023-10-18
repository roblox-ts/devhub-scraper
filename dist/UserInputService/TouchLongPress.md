Fired when a user holds at least one finger for a short amount of time on
the same screen position of a TouchEnabled device.

This event can be used to determine when a user holds their finger down on
an in-game [`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) or element.

The example below prints the [`state`](https://create.roblox.com/docs/reference/engine/enums/UserInputState) of the long press
when the user user holds at least one finger for a short amount of time on
the same screen position. Possible states include: *Begin*, *Change*,
*End*, *Cancel*, and *None*.
```lua
local userInputService = game:GetService("UserInputService")

function TouchLongPress(TouchPositions, state, gameProcessedEvent)
	print("Long press event fired. State of press: "..tostring(state))
end

userInputService.TouchLongPress:Connect(TouchLongPress)
```

To check if a user's device is TouchEnabled, and that touch events will
fire, see[`UserInputService.TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled).

It can be paired with [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted) and
[`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded) to determine when a user starts and
stops touching the screen.

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTap)
- [`UserInputService.TouchTapInWorld`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTapInWorld)
- [`UserInputService.TouchMoved`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchMoved)
- [`UserInputService.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPan)
- [`UserInputService.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPinch)
- [`UserInputService.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchRotate)
- [`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe)
- [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)