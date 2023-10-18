This function checks if a particular button is pressed on a particular
gamepad. It returns `true` if the [`gamepad`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) has the
specified [`button`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) pressed down, otherwise it returns false.
#### Valid UserInputTypes

The specified gamepad should be one of the following UserInputType enum
values:
| Name |
| - |
| Enum.UserInputType.Gamepad1-8 |

#### Valid KeyCodes

The specified button should be one of the following KeyCodes enum values:
| Name |
| - |
| Enum.KeyCode.ButtonX |
| Enum.KeyCode.ButtonY |
| Enum.KeyCode.ButtonA |
| Enum.KeyCode.ButtonB |
| Enum.KeyCode.ButtonR1 |
| Enum.KeyCode.ButtonL1 |
| Enum.KeyCode.ButtonR2 |
| Enum.KeyCode.ButtonL2 |
| Enum.KeyCode.ButtonR3 |
| Enum.KeyCode.ButtonL3 |
| Enum.KeyCode.ButtonStart |
| Enum.KeyCode.ButtonSelect |
| Enum.KeyCode.DPadLeft |
| Enum.KeyCode.DPadRight |
| Enum.KeyCode.DPadUp |
| Enum.KeyCode.DPadDown |

This can be used to check whether a specific button, such as A, is being
held down. For example:
```lua
local UserInputService = game:GetService("UserInputService")

local button = Enum.KeyCode.ButtonA
local gamepad = Enum.UserInputType.Gamepad1

local isButtonHeld = UserInputService:IsGamepadButtonDown(gamepad, button)
```

Since [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only
be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.GamepadConnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadConnected)
- [`UserInputService.GamepadDisconnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadDisconnected)
- [`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads)
- [`UserInputService:GetNavigationGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetNavigationGamepads)
- [`UserInputService:SetNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#SetNavigationGamepad)
- [`UserInputService:IsNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsNavigationGamepad)
- [`UserInputService:GetSupportedGamepadKeyCodes()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetSupportedGamepadKeyCodes)
- [`UserInputService:GetGamepadState()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadState)
- [`UserInputService:GetGamepadConnected()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetGamepadConnected)
- [`UserInputService:GamepadSupports()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadSupports)
- [`UserInputService.GamepadEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadEnabled)
- [`UserInputService:IsKeyDown()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsKeyDown) - A similar method with a different
use: To check if a given [`key`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) on a
[`keyboard`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) is pressed.