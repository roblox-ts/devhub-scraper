This function returns `true` if the specified [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) gamepad
is allowed to control Navigation and Selection [`GUIs`](https://create.roblox.com/docs/reference/engine/classes/GuiObject).

If you want to set a navigation gamepad, you can use
[`UserInputService:SetNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#SetNavigationGamepad). You can also use
[`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads) to get a list of all
navigation gamepads.

For example, the code below checks if the gamepad1 is as a navigation
gamepad:
```lua
local userInputService = game:GetService("UserInputService")

if (userInputService:IsNavigationGamepad(UserInputType.Gamepad1) then
	print("Gamepad is a navigation gamepad!")
else
	print("Gamepad is not a navigation gamepad!")
end
```

A list of all connected gamepads, regardless of navigation can be
retrieved using`UserInput/GetConnectedGamepads.

Since [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only
be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.GamepadConnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadConnected)
- [`UserInputService.GamepadDisconnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadDisconnected)
- [`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads)
- [`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads)
- [`UserInputService:SetNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#SetNavigationGamepad)
- [`UserInputService:IsGamepadButtonDown()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsGamepadButtonDown)
- [`UserInputService:GetSupportedGamepadKeyCodes()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetSupportedGamepadKeyCodes)
- [`UserInputService:GetGamepadState()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadState)
- [`UserInputService:GetGamepadConnected()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadConnected)
- [`UserInputService:GamepadSupports()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadSupports)
- [`UserInputService.GamepadEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadEnabled)