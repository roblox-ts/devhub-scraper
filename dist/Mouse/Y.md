When detecting changes in the mouse's position on-screen, it is
recommended that you use [ContextActionService:BindAction](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) with
`Enum.UserInputType.MouseMovement` or [UserInputService.InputChanged](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputChanged),
which both describe the position of the mouse using the
[Position](https://create.roblox.com/docs/reference/engine/classes/InputObject#Position) (a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3)) of an
[InputObject](https://create.roblox.com/docs/reference/engine/classes/InputObject), instead of using this and related properties.

The Y property describes the vertical component of the mouse's position on
the screen. The position is measured in pixels relative to the top left
corner, under the topbar. This property can be used in conjunction with
[Mouse.X](https://create.roblox.com/docs/reference/engine/classes/Mouse#X) to produce a [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) representing the mouse's
position:

```lua
local position = Vector2.new(mouse.X, mouse.Y)
```

This property does not fire `Instance/Changed|Changed` or the signal
returned from
`Instance/GetPropertyChangedSignal|GetPropertyChangedSignal`. Use the
`Mouse/Move` event instead.