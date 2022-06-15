This functions allows a developer to quickly check if a particular button is pressed on a particular gamepad. It returns true if the [gamepad](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) has the specified [button](https://developer.roblox.com/en-us/api-reference/enum/KeyCode) pressed down, otherwise it returns false.

Valid UserInputTypes
--------------------

The specified gamepad should be one of the following UserInputType enum values:

Name

Enum.UserInputType.Gamepad1-8

Valid KeyCodes
--------------

The specified button should be one of the following KeyCodes enum values:

Name

Enum.KeyCode.ButtonX

Enum.KeyCode.ButtonY

Enum.KeyCode.ButtonA

Enum.KeyCode.ButtonB

Enum.KeyCode.ButtonR1

Enum.KeyCode.ButtonL1

Enum.KeyCode.ButtonR3

Enum.KeyCode.ButtonL3

Enum.KeyCode.ButtonStart

Enum.KeyCode.ButtonSelect

Enum.KeyCode.DPadLeft

Enum.KeyCode.DPadRight

Enum.KeyCode.DPadUp

Enum.KeyCode.DPadDown

This can be used to check whether a specific button, such as A, is being held down. For example:

local UserInputService = game:GetService("UserInputService")

local button = Enum.KeyCode.ButtonA
local gamepad = Enum.UserInputType.Gamepad1

local isButtonHeld = UserInputService:IsGamepadButtonDown(gamepad, button)

Since [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See [this](https://developer.roblox.com/learn-roblox/cross-platform) page for articles on cross-platform development.

See also
--------

*   [UserInputService.GamepadConnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadConnected)
*   [UserInputService.GamepadDisconnected](https://developer.roblox.com/en-us/api-reference/event/UserInputService/GamepadDisconnected)
*   [UserInputService:GetConnectedGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetConnectedGamepads)
*   [UserInputService:GetNavigationGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetNavigationGamepads)
*   [UserInputService:SetNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/SetNavigationGamepad)
*   [UserInputService:IsNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsNavigationGamepad)
*   [UserInputService:GetSupportedGamepadKeyCodes](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetSupportedGamepadKeyCodes)
*   [UserInputService:GetGamepadState](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadState)
*   [UserInputService:GetGamepadConnected](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetGamepadConnected)
*   [UserInputService:GamepadSupports](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GamepadSupports)
*   [UserInputService.GamepadEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/GamepadEnabled)
*   `UserInputType/IsKeyDown` - A similar event with a different use: To check if a given [key](https://developer.roblox.com/en-us/api-reference/enum/KeyCode) on a [keyboard](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) is pressed.