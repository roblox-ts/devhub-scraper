The TouchStarted event fires when a user places their finger on a
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) device, beginning touch
input with the device.

This event can be used to determine when a user starts touching the screen
of their device. It can be paired with [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)
to determine when a user starts and stops touching the screen.

The touch input object is the same input object throughout the lifetime of
the touch. So comparing [`InputObjects`](https://create.roblox.com/docs/reference/engine/classes/InputObject) when they are
touch objects is valid to determine if it is the same finger.

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
- [`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)