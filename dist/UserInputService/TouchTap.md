The TouchTap event fires when the user touches/taps their finger on the
screen on a [`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) device.

This event will fire regardless of whether the user touches/taps the game
world or a [`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) element. If you are looking for an event
that only fires when the user touches/taps the game world, use
[`UserInputService.TouchTapInWorld`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTapInWorld).

To check if a user's device is TouchEnabled, and that touch events will
fire, see [`UserInputService.TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled).

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).