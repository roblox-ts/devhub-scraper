This function returns whether the given [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) gamepad supports a button corresponding with the given `Enum//KeyCode`. This function is used to determine valid gamepad inputs.

To determine which [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) gamepads are connected, use [UserInputService:GetConnectedGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetConnectedGamepads).

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

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
*   [UserInputService:GetGamepadState](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadState)
*   [UserInputService:GetGamepadConnected](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadConnected)
*   [UserInputService.GamepadEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/GamepadEnabled)