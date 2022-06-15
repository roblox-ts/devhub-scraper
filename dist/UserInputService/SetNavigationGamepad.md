The SetNavigationGamepad function sets whether the specified [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) gamepad can move the GUI navigator. A gamepad that is allowed to move the GUI navigator is considered a _navigation gamepad_.

If the _enabled_ argument is passed as _true_, the Gamepad can move the GUI navigator. If the argument is _false_, the Gamepad can not move the GUI navigator.

If you want to check if a specified Gamepad is a set to be a navigation gamepad, you can use the [UserInputService:IsNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsNavigationGamepad) function. You can also use the [UserInputService:GetNavigationGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetNavigationGamepads) to retrieve a list of all navigation gamepads.

Since [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See [this](https://developer.roblox.com/learn-roblox/cross-platform) page for articles on cross-platform development.

See also
--------

*   [UserInputService.GamepadConnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadConnected)
*   [UserInputService.GamepadDisconnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadDisconnected)
*   [UserInputService:GetConnectedGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetConnectedGamepads)
*   [UserInputService:GetNavigationGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetNavigationGamepads)
*   [UserInputService:IsNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsNavigationGamepad)
*   [UserInputService:IsGamepadButtonDown](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsGamepadButtonDown)
*   [UserInputService:GetSupportedGamepadKeyCodes](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetSupportedGamepadKeyCodes)
*   [UserInputService:GetGamepadState](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadState)
*   [UserInputService:GetGamepadConnected](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadConnected)
*   [UserInputService:GamepadSupports](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GamepadSupports)
*   [UserInputService.GamepadEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/GamepadEnabled)