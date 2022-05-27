This property determines an object to be ignored by the mouse when
calculating [Mouse.Hit](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit) and [Mouse.Target](https://create.roblox.com/docs/reference/engine/classes/Mouse#Target). The descendants of the object
are also ignored, so it is possible to ignore multiple objects so long as
they are a descendant of the object to which this property is set. This
property is useful when filtering models containing special effects or
decorations that should not affect [Mouse.Hit](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit) or [Mouse.Target](https://create.roblox.com/docs/reference/engine/classes/Mouse#Target).

This property can be set to any [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance) or nil, for example:

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = player:GetMouse()
mouse.TargetFilter = workspace.Model

-- Now, when the player hovers the cursor over the model, mouse.Target will be some object
-- behind workspace.Model, if there is one.
```

This property is essentially a single-object blacklist for mouse
raycasting. For more in-depth control on raycasting, see the following
functions of `Workspace`: `Workspace/FindPartOnRay|FindPartOnRay`,
`Workspace/FindPartOnRayWithWhitelist|FindPartOnRayWithWhitelist` and
`Workspace/FindPartOnRayWithIgnoreList|FindPartOnRayWithIgnoreList`.

The `Player/Character|Character` of the `Players/LocalPlayer` is ignored
by the mouse automatically."