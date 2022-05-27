The origin [Mouse](https://create.roblox.com/docs/reference/engine/classes/Mouse) property is a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) indicating where the
mouse originated from. It is positioned at the [Workspace.CurrentCamera](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera)
and oriented toward the [Mouse](https://create.roblox.com/docs/reference/engine/classes/Mouse)'s 3D position.

[Mouse.UnitRay](https://create.roblox.com/docs/reference/engine/classes/Mouse#UnitRay) starts at the same position as Origin, and extends for a
stud in the same direction.

```lua
local unitRay = mouse.UnitRay
local origin = mouse.Origin
-- unitRay.Direction = origin.p
-- unitRay.Direction ≈ origin.lookVector
```

For the position of the `Mouse` in 3D space, see `Mouse/Hit`.