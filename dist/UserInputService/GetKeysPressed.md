This function returns an array of [`InputObjects`](https://create.roblox.com/docs/reference/engine/classes/InputObject)
associated with the keys currently being pressed down.

This array can be iterated through to determine which keys are currently
being pressed, using the [`InputObject.KeyCode`](https://create.roblox.com/docs/reference/engine/classes/InputObject#KeyCode) values.

To check if a specific key is being pressed, use
[`UserInputService:IsKeyDown()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsKeyDown).

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).