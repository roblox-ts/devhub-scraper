This function returns an array of [KeyCodes](https://developer.roblox.com/en-us/api-reference/enum/KeyCode) that the gamepad associated with the given [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) supports.

This function can be used to determine which KeyCodes are supported and not supported by a connected gamepad. To determine if a specific KeyCode is supported, use [UserInputService:GamepadSupports](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GamepadSupports).

If called on a non existent, or non connected, gamepad, this function will return an empty array.

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

Check out this [article](https://developer.roblox.com/articles/Gamepad-Haptic-Feedback) to learn more about adding support for gamepad input into your game and [this](https://developer.roblox.com/learn-roblox/cross-platform) page for articles on cross-platform development.

See also
--------

*   [UserInputService.GamepadConnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadConnected)
*   [UserInputService.GamepadDisconnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadDisconnected)
*   [UserInputService:GetConnectedGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetConnectedGamepads)
*   [UserInputService:GetNavigationGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetNavigationGamepads)
*   [UserInputService:SetNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/SetNavigationGamepad)
*   [UserInputService:IsNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsNavigationGamepad)
*   [UserInputService:IsGamepadButtonDown](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsGamepadButtonDown)
*   [UserInputService:GetGamepadState](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadState)
*   [UserInputService:GetGamepadConnected](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadConnected)
*   [UserInputService:GamepadSupports](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GamepadSupports)
*   [UserInputService.GamepadEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/GamepadEnabled)