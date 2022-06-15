The GetTouchpadMode function returns the [VRTouchpadMode](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpadMode) indicating the mode of a specified [VRTouchpad](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpad).

The returned mode indicates how the user interacts with their touchpad to play the game. For more information about the different types of modes, see the [VRTouchpadMode](https://developer.roblox.com/en-us/api-reference/enum/VRTouchpadMode) page.

This can also be used alongside the several `/UserInputService` VR functions and events.

Since `/VRService` only runs client-side, this function will only work when used in a `/LocalScript`.