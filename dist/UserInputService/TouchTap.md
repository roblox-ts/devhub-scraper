The TouchTap event fires when the user touches/taps their finger on the screen on a [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled) device.

This event will fire regardless of whether the user touches/taps the game world or a [GUI](https://developer.roblox.com/en-us/api-reference/class/GuiObject) element. If you are looking for an event that only fires when the user touches/taps the game world, use [UserInputService.TouchTapInWorld](https://developer.roblox.com/en-us/api-reference/event/UserInputService/TouchTapInWorld).

To check if a user's device is TouchEnabled, and that touch events will fire, see [UserInputService.TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).