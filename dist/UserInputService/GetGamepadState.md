This function returns an array of [InputObjects](https://developer.roblox.com/en-us/api-reference/class/InputObject) for all available inputs on the given [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) gamepad, representing each input's last input state.

To find the [UserInputTypes](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) of connected gamepads, use [UserInputService:GetConnectedGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetConnectedGamepads).

As this function only fires locally, it can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See [this](https://developer.roblox.com/learn-roblox/cross-platform) page for articles on cross-platform development.

See also
--------

*   [UserInputService.GamepadConnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadConnected)
*   [UserInputService.GamepadDisconnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadDisconnected)
*   [UserInputService:GetConnectedGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetConnectedGamepads)
*   [UserInputService:GetNavigationGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetNavigationGamepads)
*   [UserInputService:SetNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/SetNavigationGamepad)
*   [UserInputService:IsNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsNavigationGamepad)
*   [UserInputService:IsGamepadButtonDown](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsGamepadButtonDown)
*   [UserInputService:GetSupportedGamepadKeyCodes](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetSupportedGamepadKeyCodes)
*   [UserInputService:GetGamepadConnected](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadConnected)
*   [UserInputService:GamepadSupports](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GamepadSupports)
*   [UserInputService.GamepadEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/GamepadEnabled)