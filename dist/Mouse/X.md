When detecting changes in the mouse's position on-screen, it is
recommended that you use [`ContextActionService:BindAction()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) with
[`Enum.UserInputType`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) or
[`UserInputService.InputChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputChanged), which both describe the position of
the mouse using the [`Position`](https://create.roblox.com/docs/reference/engine/classes/InputObject#Position) (a
[`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3)) of an [`InputObject`](https://create.roblox.com/docs/reference/engine/classes/InputObject), instead of using this and
related properties.

The X property describes the horizontal component of the mouse's position
on the screen. The position is measured in pixels relative to the top left
corner, under the topbar. This property can be used in conjunction with
[`Mouse.Y`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Y) to produce a [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) representing the mouse's
position:
```lua
local position = Vector2.new(mouse.X, mouse.Y)
```

This property does not fire [`Changed`](https://create.roblox.com/docs/reference/engine/classes/Instance#Changed) or the signal
returned from
[`GetPropertyChangedSignal`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal). Use
the [`Mouse.Move`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Move) event instead.