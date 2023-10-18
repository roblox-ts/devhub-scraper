The InputBegan event fires when a user begins interacting via a
Human-Computer Interface device (mouse button down, touch begin, keyboard
button down, etc.).

It can be used to track the beginning of user interaction, such as when a
user first interacts with a GUI element, a gamepad, etc. It does not
capture mouse wheel movements.

This event can be used along with [`UserInputService.InputChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputChanged)
and [`UserInputService.InputEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputEnded) to track when user input begins,
changes, and ends.

This event only fires when the Roblox client window is in focus. For
example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).