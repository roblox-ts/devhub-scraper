The MouseButton2Up event fires when the user releases their right [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) up off of the GUI object.

This event is similar to [GuiButton.MouseButton1Up](https://developer.roblox.com/en-us/api-reference/event/GuiButton/MouseButton1Up), which behaves identically except that it is connected to the user's left mouse button.

If you are looking for an event requiring the user to press and release their right mouse on a GUI in order for the event to fire, consider using [GuiButton.MouseButton2Click](https://developer.roblox.com/en-us/api-reference/event/GuiButton/MouseButton2Click).

Note that this event will only fire for GUI buttons, including [TextButtons](https://developer.roblox.com/en-us/api-reference/class/TextButton) and [ImageButton](https://developer.roblox.com/en-us/api-reference/class/ImageButton). It will not fire for other [GuiObjects](https://developer.roblox.com/en-us/api-reference/class/GuiObject).