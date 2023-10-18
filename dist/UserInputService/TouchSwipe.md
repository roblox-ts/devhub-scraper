The TouchSwipe event fires when a user swipes their fingers on a
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) device.

This event can be used to determine when a user swipes their fingers on
the screen of their device and the direction that the user swiped.

For more precise tracking of touch input movement, use using
[`UserInputService.TouchMoved`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchMoved)

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
- [`UserInputService.TouchMoved`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchMoved)
- [`UserInputService.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPan)
- [`UserInputService.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPinch)
- [`UserInputService.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchRotate)
- [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)