This function returns a [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) representing the current screen
location of the player's [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) in pixels relative to the top left
corner. This does not account for the [`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) inset.

If the location of the mouse pointer is offscreen or the players device
does not have a mouse, the value returned will be undetermined instead of
Vector2.

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).