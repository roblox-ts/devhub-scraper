The GamepadConnected event fires when a gamepad is connected to the
client.

Since a Roblox game supports multiple controllers, this event is useful
when paired with the [`UserInputService.GamepadDisconnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadDisconnected) event to
track which controllers/gamepads are active. You can also use
[`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads) and
[`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads) to find the correct
gamepad to use.

The following example demonstrates a usage example of a tracking when a
gamepad is connected to the client.
```lua
local userInputService = game:GetService("UserInputService")

local function GamepadConnected(gamepad)
	print("Player has plugged controller: " .. tostring(gamepad))
end)

userInputService.GamepadConnected:Connect(GamepadConnected)
```

If you want to see which devices are connected, you can use the
[`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads) function.

As this event fires locally, it can only be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.GamepadDisconnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadDisconnected)
- [`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads)
- [`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads)
- [`UserInputService:SetNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#SetNavigationGamepad)
- [`UserInputService:IsNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsNavigationGamepad)
- [`UserInputService:IsGamepadButtonDown()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsGamepadButtonDown)
- [`UserInputService:GetSupportedGamepadKeyCodes()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetSupportedGamepadKeyCodes)
- [`UserInputService:GetGamepadState()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadState)
- [`UserInputService:GetGamepadConnected()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadConnected)
- [`UserInputService:GamepadSupports()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadSupports)
- [`UserInputService.GamepadEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadEnabled)