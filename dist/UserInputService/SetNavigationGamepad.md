The SetNavigationGamepad function sets whether the specified
[`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) gamepad can move the GUI navigator. A gamepad that is
allowed to move the GUI navigator is considered a *navigation gamepad*.

If the *enabled* argument is passed as `true`, the Gamepad can move the
GUI navigator. If the argument is `false`, the Gamepad can not move the
GUI navigator.

If you want to check if a specified Gamepad is a set to be a navigation
gamepad, you can use the [`UserInputService:IsNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsNavigationGamepad)
function. You can also use the
[`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads) to retrieve a list of all
navigation gamepads.

Since [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only
be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.GamepadConnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadConnected)
- [`UserInputService.GamepadDisconnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadDisconnected)
- [`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads)
- [`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads)
- [`UserInputService:IsNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsNavigationGamepad)
- [`UserInputService:IsGamepadButtonDown()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsGamepadButtonDown)
- [`UserInputService:GetSupportedGamepadKeyCodes()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetSupportedGamepadKeyCodes)
- [`UserInputService:GetGamepadState()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadState)
- [`UserInputService:GetGamepadConnected()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadConnected)
- [`UserInputService:GamepadSupports()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadSupports)
- [`UserInputService.GamepadEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadEnabled)