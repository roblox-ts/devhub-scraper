This function returns whether the user is holding down the key associated with the given [KeyCode](https://developer.roblox.com/en-us/api-reference/enum/KeyCode). It returns _true_ if the specified key is pressed or _false_ if it is not pressed.

This can be used to check if a specific key, such as the space bar, is being pressed. For example:

```Lua
local UserInputService = game:GetService("UserInputService")

local spaceHeld = UserInputService:IsKeyDown(Enum.KeyCode.Space)
``` 

To retrieve a list of all keys pressed by the user, use the [UserInputService:GetKeysPressed](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetKeysPressed) function.

Since [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See also
--------

*   `UserInputType/IsGamepadButtonDown` - A similar event with a different use: To check if a given [button](https://developer.roblox.com/en-us/api-reference/enum/KeyCode) on a [gamepad](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) is pressed.