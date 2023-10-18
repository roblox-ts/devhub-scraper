This function returns whether the user is holding down the key associated
with the given [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode). It returns `true` if the specified key is
pressed or `false` if it is not pressed.

This can be used to check if a specific key, such as the space bar, is
being pressed. For example:
```lua
local UserInputService = game:GetService("UserInputService")

local spaceHeld = UserInputService:IsKeyDown(Enum.KeyCode.Space)
```

To retrieve a list of all keys pressed by the user, use the
[`UserInputService:GetKeysPressed()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetKeysPressed) function.

Since [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only
be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) - A similar event with a
different use: To check if a given [`button`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) on a
[`gamepad`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) is pressed.