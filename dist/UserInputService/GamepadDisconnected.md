The GamepadDisconnected event fires when a gamepad is disconnected.

Since a Roblox game supports multiple controllers, this event is useful
when paired with the [`UserInputService.GamepadConnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadConnected) event to
track which controllers/gamepads are active. You can also use
[`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads) and
[`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads) to find the correct
gamepad to use.

The following example demonstrates a usage example of a tracking when a
gamepad is disconnected from the client.
```lua
local userInputService = game:GetService("UserInputService")

local function GamepadDisconnected(gamepad)
	print("Player has unplugged controller: " .. tostring(gamepad))
end)

userInputService.GamepadDisconnected:Connect(GamepadDisconnected)
```

As this event fires locally, it can only be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.GamepadConnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadConnected)
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