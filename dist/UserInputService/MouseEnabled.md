This property describes whether the user's device has a mouse available.
This property is `true` when the user's device has an available mouse, and
`false` when it does not.
```lua
local UserInputService = game:GetService("UserInputService")

if (UserInputService.MouseEnabled) then
    print("The user's device has an available mouse!")
else
    print("The user's device does not have an available mouse!")
end
```

It is important to check this before using [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) mouse
functions such as [`UserInputService:GetMouseLocation()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetMouseLocation).

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this property can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.MouseBehavior`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseBehavior)
- [`UserInputService.MouseDeltaSensitivity`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseDeltaSensitivity)
- [`UserInputService.MouseIconEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseIconEnabled)
- [`UserInputService:GetMouseLocation()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetMouseLocation)
- [`UserInputService:GetMouseDelta()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetMouseDelta)
- [`UserInputService:GetMouseButtonsPressed()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetMouseButtonsPressed)