The GetTouchpadMode function returns the [`Enum.VRTouchpadMode`](https://create.roblox.com/docs/reference/engine/enums/VRTouchpadMode) indicating
the mode of a specified [`Enum.VRTouchpad`](https://create.roblox.com/docs/reference/engine/enums/VRTouchpad).

The returned mode indicates how the user interacts with their touchpad to
play the game. For more information about the different types of modes,
see the [`Enum.VRTouchpadMode`](https://create.roblox.com/docs/reference/engine/enums/VRTouchpadMode) page.

This can also be used alongside the several [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) VR
functions and events.

Since [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) only runs client-side, this function will only
work when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).