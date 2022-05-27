This property describes whether the device being used by a user has an
available gamepad.

```lua
local userInputService = game:GetService("UserInputService")

if userInputService.GamepadEnabled then
	print("Gamepad enabled")
else
	print("Gamepad not enabled")
end
```

If gamepads are available, you can use
`UserInputService/GetConnectedGamepads` to retrieve a list of connected
gamepads and `UserInputService/GetNavigationGamepads` to retrieve a list
of connected gamepads that also controlnavigation GUIs.

As `UserInputService` is client-side only, this property can only be used
in a `LocalScript`.

See [this][1] page for articles on cross-platform development.

See also:

- `UserInputService/GamepadConnected`
- `UserInputService/GamepadDisconnected`
- `UserInputService/GetConnectedGamepads`
- `UserInputService/GetNavigationGamepads`
- `UserInputService/SetNavigationGamepad`
- `UserInputService/IsNavigationGamepad`
- `UserInputService/IsGamepadButtonDown`
- `UserInputService/GetSupportedGamepadKeyCodes`
- `UserInputService/GetGamepadState`
- `UserInputService/GetGamepadConnected`
- `UserInputService/GamepadSupports`

[1]: /learn-roblox/cross-platform