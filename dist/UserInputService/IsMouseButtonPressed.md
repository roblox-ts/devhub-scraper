This function takes a mouse button [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) and returns a bool
that indicates whether it is currently pressed.

The mouse button checked depends on the [`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) value passed
to the function as an argument. For example:
```lua
local UserInputService = game:GetService("UserInputService")

local pressed = UserInputService:IsMouseButtonPressed(Enum.UserInputType.MouseButton1)
```

Since [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only
be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)."