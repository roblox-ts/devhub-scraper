**Activated** fires when the user performs the primary action of the button. Its primary purpose is a cross-platform, general input event for buttons.

*   For pointer-based platforms with a mouse, this fires after the mouse button is pressed then released while hovering over the UI element.
*   For gamepad input, the event fires when the [GuiService.SelectedObject](https://developer.roblox.com/en-us/api-reference/property/GuiService/SelectedObject) is equal to the UI element and the primary gamepad button is pressed then released.
*   For touch input, the event fires when the user touches and releases the UI element.

Although direct input events like `GuiObject/MouseButton1Down` or [GuiObject.InputEnded](https://developer.roblox.com/en-us/api-reference/event/GuiObject/InputEnded) aren't deprecated and may still function as you might expect, it is better practice to use this event for general button input instead.