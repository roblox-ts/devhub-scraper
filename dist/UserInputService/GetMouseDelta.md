This function returns the change, in pixels, of the position of the
player's [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) in the last rendered frame as a [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2).
This function only works if the mouse has been locked using the
[`UserInputService.MouseBehavior`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseBehavior) property. If the mouse has not been
locked, the returned [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) values will be zero.

The sensitivity of the mouse, determined in the client's settings and
[`UserInputService.MouseDeltaSensitivity`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseDeltaSensitivity), will influence the result.

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).