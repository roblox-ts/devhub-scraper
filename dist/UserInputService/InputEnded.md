The InputEnded event fires when a user stops interacting via a
Human-Computer Interface device (Mouse button down, touch begin, keyboard
button down, etc). This is useful when tracking when a user releases a
keyboard key, mouse button, touchscreen input, etc.

This event can be used along with [`UserInputService.InputBegan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputBegan) and
[`UserInputService.InputChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputChanged) to track when user input begins,
changes, and ends.

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).