This function returns whether the given [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) gamepad
supports a button corresponding with the given [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode). This
function is used to determine valid gamepad inputs.

To determine which [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) gamepads are connected, use
[`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads).

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.GamepadConnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadConnected)
- [`UserInputService.GamepadDisconnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadDisconnected)
- [`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads)
- [`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads)
- [`UserInputService:SetNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#SetNavigationGamepad)
- [`UserInputService:IsNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsNavigationGamepad)
- [`UserInputService:IsGamepadButtonDown()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsGamepadButtonDown)
- [`UserInputService:GetSupportedGamepadKeyCodes()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetSupportedGamepadKeyCodes)
- [`UserInputService:GetGamepadState()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadState)
- [`UserInputService:GetGamepadConnected()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadConnected)
- [`UserInputService.GamepadEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadEnabled)