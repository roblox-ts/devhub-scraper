This function returns a [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) representing the current screen location of the player's [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) in pixels relative to the top left corner. This does not account for the [GUI](https://developer.roblox.com/en-us/api-reference/class/GuiObject) inset.

If the location of the mouse pointer is offscreen or the players device does not have a mouse, the value returned will be undetermined instead of Vector2.

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).